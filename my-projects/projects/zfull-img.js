var image = document.querySelectorAll("#img")
var fullImage = document.querySelector("#full-img")
var fullImageImg = document.querySelector("#full-image-img")
var btn = document.querySelector("#full-image-btn")
var redBtn = document.querySelector("#redirect")

//Will display full image on screen
image.forEach(image => {
    image.addEventListener("click", () => {
        var src = image.getAttribute("src")
        fullImage.style.display = "flex"
        fullImageImg.src = src
    })
})
//Will close full image
btn.addEventListener("click", () => {
    fullImage.style.display = "none"
})
//Will redirect to website from project
redBtn.addEventListener("click", () =>{
    var link = redBtn.getAttribute("data-")
    document.location.href = "../" + link + "/" + link + ".html"
})
