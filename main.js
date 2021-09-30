const navBtn = document.querySelector(".nav-btn")
const logo = document.querySelector(".logo-container")
const navList = document.querySelector(".nav-list")
const closeBtn = document.querySelector(".close-btn")
const navLink = document.querySelectorAll(".nav-link")

navBtn.addEventListener("click", () => {
    navBtn.style.display = "none"
    closeBtn.style.display = "inline"
    closeBtn.style.zIndex = "5"
    navList.classList.add("show-list")
    closeBtn.addEventListener("click", () => {
        removeList()
    })
})

navLink.forEach((link) => {
    link.addEventListener("click", () => {
        removeList()
    })
})

window.addEventListener("scroll", () => {
    removeList()
})

function removeList() {
    closeBtn.style.display = "none"
        navBtn.style.display = "inline"
        navList.classList.remove("show-list")
}

let heroContent = ["./images/mobile-image-hero-1.jpg",
                        "./images/mobile-image-hero-2.jpg",
                        "./images/mobile-image-hero-3.jpg"]

const heroImg = document.querySelector("#hero-img")
const prevBtn = document.querySelector("#prev")
const nextBtn = document.querySelector("#next")
let imageIndex = 0

window.addEventListener("DOMContentLoaded", () => {
    heroImg.src = heroContent[0]
})


prevBtn.addEventListener("click", () => {
    imageIndex--
    if (imageIndex < 0) {
        imageIndex = heroContent.length - 1
    }
    heroImg.src = heroContent[imageIndex]
})

nextBtn.addEventListener("click", () => {
    imageIndex++
    if (imageIndex > heroContent.length - 1) {
        imageIndex = 0
    }
    heroImg.src = heroContent[imageIndex]
})

function myFunction(x) {
    if (x.matches) { // If media query matches
        // window.reload()
      heroContent = ["./images/desktop-image-hero-1.jpg",
                          "./images/desktop-image-hero-2.jpg",
                          "./images/desktop-image-hero-3.jpg"]
    window.addEventListener("scroll", () => {
        removeList()
        navBtn.style.display = "none"
        })
        
                      
    } else {
      heroContent = ["./images/mobile-image-hero-1.jpg",
                      "./images/mobile-image-hero-2.jpg",
                      "./images/mobile-image-hero-3.jpg"]
    }
    window.reload()
  }
  
  let x = window.matchMedia("(min-width: 950px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes