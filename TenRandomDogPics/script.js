const container = document.getElementById("container")
const errMessage = document.getElementById("errmessage")
const btn = document.getElementById("btn")
const URL = "https://dog.ceo/api/breeds/image/random"


// function getDogPics(num) {
//     return new Promise((resolve,reject) => {
//         const response = fetch(`${URL}/${num}`)
//         response.then((response) => {
//             const data = response.json()
//             resolve(data)
//         })
//         if(!response){
//             reject("Failed to fetch the data.")
//         }
//     })
// }

// btn.addEventListener("click", () => {
//     getDogPics(10).then((data) => {
//         data.message.forEach((imgurl) => {
//             const newImage = document.createElement("img")
//             newImage.setAttribute("src",imgurl)
//             container.appendChild(newImage)
//         })
//     }).catch((error) => {
//         errMessage.textContent = error
//         console.log("Error: ",error)
//     })
// })






async function getDogPics(num) {
    try {
        const response = await fetch(`${URL}/${num}`)
        console.log(response)
        const data = response.json()
        return data
    } catch (error) {
        throw new Error ("Failed to fetch data.")
    }
}

btn.addEventListener("click", async () => {
    try {
        const data = getDogPics(10)
        data.message.forEach((imgurl) => {
            const newImage = document.createElement("img")
            newImage.setAttribute('src',imgurl)
            container.appendChild(newImage)
        })
    } catch (error) {
        errMessage.textContent = error
    }
}) 