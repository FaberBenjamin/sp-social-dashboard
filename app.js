const toogler = document.getElementById("toogler")
const theme = document.getElementById("theme")
const slider = document.getElementById("slider")
const darkLabel = document.getElementById("darkLabel")

let isLight = false;


toogler.addEventListener("click", () => {

    isLight = !isLight
    console.log(isLight)

    if (isLight === true) {
        theme.classList.remove("dark_theme");
        theme.classList.add("light_theme");
        slider.style.backgroundImage = "none"
    } else if (isLight === false) {
        theme.classList.remove("light_theme");
        theme.classList.add("dark_theme")
        slider.style.backgroundImage = "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))"
    }
})