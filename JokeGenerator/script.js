const jokeElement = document.getElementById('joke')
const button = document.getElementById("btn")


function getJoke() {
    const jokes = [
        "Why don't skeletons fight each other? Because they don't have the guts.",
        "I told my wife she was drawing her eyebrows too high.She looked surprised.",
        "Why don\’t oysters share their pearls?Because they\’re a little shellfish.",
        "Parallel lines have so much in common. but, It\’s a shame they\’ll never meet.",
        "I used to play piano by ear,but now I use my hands."
    ]
    
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * jokes.length)
            const randomJoke = jokes[randomIndex]
            
            if(randomJoke){
                resolve(randomJoke)
            }else{
                reject("Failed to fetch joke")
            }
        }, 2000);

    })
    
}

button.addEventListener("click", () => {
    jokeElement.textContent = "Fetching joke..."
    getJoke()
    .then((joke) => {
        jokeElement.textContent = joke
        localStorage.setItem("latestJoke",joke)
    })
    .catch((error) => {
        jokeElement.textContent = error
    })
})