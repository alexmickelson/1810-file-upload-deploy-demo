
const baseUrl = "https://1810-3pwhxn3v.b4a.run/"
// const baseUrl = "http://localhost:5139/"

export const getSomethingFromApi  = async () =>{
  const response =await fetch(baseUrl)
  const text = await response.text()
  return text
}


export const storeFileOnApi = async (fileAsString) => {
  const body = {
    "base64File": fileAsString,
  }
  await fetch(baseUrl + "fileUpload", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  })
}

export const getBase64FileFromApi = async () => {
  const url = baseUrl + "file"
  const response = await fetch(url)
  return await response.text()
}
