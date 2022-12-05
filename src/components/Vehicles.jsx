import React from 'react'
import { useState, useEffect } from 'react'
import like from '../Images/like.png'
import instagram from '../Images/instagram2.png'
import Masonry from 'react-responsive-masonry'
const Vehicles = (props) => {
  const [photos, setPhotos] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  let pageSize = 10
  const getPhotos = async () => {
    setLoading(true)
    const res = await fetch(
      `https://api.unsplash.com/collections/193299/photos?page=${page}&client_id=xe9XHOwZZpeZ4zGNMg1Clm03MIaZ1s2x2Zpi1wLDD5c`,
    )
    const data = await res.json()
    setPhotos(data)
    console.log(data)
    setLoading(false)
  }
  useEffect(() => {
    getPhotos()
  }, [page])
  return (
    <>
      <div className="bg-slate-200 -z-10 p-3">
        {loading === true ? (
          <div className="flex items-center justify-center text-4xl h-screen">
            Loading...
          </div>
        ) : (
          <Masonry gutter="10px" columnsCount={props.column}>
            {photos.map((curElem, i) => {
              return (
                <>
                  <div
                    className="flex flex-col bg-[#94a3b863] p-2 rounded-md gap-2 shadow-gray-700 shadow-md"
                    key={i}
                  >
                    <span>
                      <img
                        className="rounded-md shadow-md shadow-gray-700 z-10 w-full"
                        src={curElem?.urls.regular}
                        alt="Error 404"
                      />
                    </span>
                    <span className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          className="z-10 rounded-full shadow-md shadow-gray-700 p-1 bg-[#ffffff96]"
                          src={curElem?.user.profile_image.medium}
                          alt="Error 404"
                        />
                        <span className="capitalize text-sm md:text-lg">
                          {curElem.user.first_name}
                        </span>
                      </div>
                      <div className="flex px-4">
                        <span className="flex items-center gap-2">
                          <a
                            href={`https://www.instagram.com/${curElem?.user.instagram_username}`}
                          >
                            <img className="" src={instagram} alt="" />
                          </a>
                          <img
                            className="w-[20px] h-[20px] hover:cursor-pointer "
                            src={like}
                          />
                          <span>{curElem.likes}</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </>
              )
            })}
          </Masonry>
        )}
        <div className="flex justify-around   items-center">
          <button
            disabled={page === 1}
            className={`${
              page === 1
                ? 'my-4 p-4 rounded-md bg-gray-300 shadow-lg shadow-gray-700 font-extrabold line-through'
                : 'my-4 p-4 rounded-md bg-[#86aeff] shadow-lg shadow-gray-700 font-extrabold scroll-smooth'
            }`}
            onClick={() => setPage(page - 1)}
          >
            Previous
          </button>
          <p className=" text-xl">{page}</p>
          <button
            disabled={photos.length < pageSize}
            className={`${
              photos.length < pageSize
                ? 'my-4 p-4 rounded-md bg-gray-300 shadow-lg shadow-gray-700 font-extrabold line-through'
                : 'my-4 p-4 rounded-md bg-[#86aeff] shadow-lg shadow-gray-700 font-extrabold scroll-smooth'
            }`}
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  )
}

export default Vehicles
