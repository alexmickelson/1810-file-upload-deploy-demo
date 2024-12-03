import {
  getBase64FileFromApi,
  getSomethingFromApi,
  storeFileOnApi,
} from "./service.js";

console.log("in ui");

const text = await getSomethingFromApi();
console.log(text);

function getBase64(file) {
  return new Promise(
    (resolve, reject) => {
      var reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = async function () {
        resolve(reader.result)
      };

      reader.onerror = function (error) {
        console.log("Error: ", error);
        reject(error)
      };
    }
  );
}

const setupForm = () => {
  const formElement = document.getElementById("fileUploadForm");

  formElement.addEventListener("submit", async (e) => {
    e.preventDefault();
    const fileUploadElement = document.getElementById("fileUpload");

    const file = fileUploadElement.files[0];
    console.log(file);

   
    const base64File = await getBase64(file);
    await storeFileOnApi(base64File)


    const stringFromApi = await getBase64FileFromApi();
    const imageContainer = document.getElementById("imageContainer");
    const imageElement = document.createElement("img");
    imageElement.src = stringFromApi;
    imageContainer.replaceChildren(imageElement);
  });
};

setupForm();
