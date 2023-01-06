export const FetchFromAPI = async (URL) => {
  const Base_URL = 'https://api.unsplash.com'
  const API_Key = 'client_id=xe9XHOwZZpeZ4zGNMg1Clm03MIaZ1s2x2Zpi1wLDD5c'
  const res = await fetch(`${Base_URL}/${URL}&${API_Key}`)
  const data = await res.json()
  return data
}
