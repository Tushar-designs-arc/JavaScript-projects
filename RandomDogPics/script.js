const dogPic = document.getElementById("dogImage")
const picBtn = document.getElementById("fetchpicbtn")


function picChanger() {
    return new Promise((resolve,reject) => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => {
            console.log("Response received: ",response)
            if(!response.ok) {
                reject("Failed to fetch the dog image. Status: " + response.status)
            }
            return response.json()
        })
        .then((data) => (
            resolve(data)
        ))
        .catch((error) => {
            reject(error)
        })
    })
}


picBtn.addEventListener("click",() => {
    console.log("Fetching a random dog picture...")

    picChanger()
    .then((data) => {
        console.log("Data fetched from API: ",data)
        dogPic.src = data.message
    })
    .catch((error) => {
        console.log("Error: ",error)
    })
})
