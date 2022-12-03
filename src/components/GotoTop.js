import React from 'react'

const GoToTop = () => {
  const goTop = () => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' })
  }
  return (
    <button
      className="bg-[#cdd8e8] text-[#0037ff] text-4xl border-2 border-gray-800 px-6 py-3 rounded-full font-extrabold shadow-md  shadow-gray-700"
      onClick={() => {
        goTop()
      }}
    >
      &uarr;
    </button>
  )
}

export default GoToTop
