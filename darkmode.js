const toggleSound = new Audio('media/toggle.mp3');

const darkModeToggle = document.querySelector('.dark-toggle-div input[type="checkbox"]')

if(localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark-mode");
  darkModeToggle.checked = true;
}


function toggleDarkMode() {
  toggleSound.play();
  if(document.body.classList.contains("dark-mode") === true) {
    document.body.classList.remove("dark-mode")
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
  } else {
  document.body.classList.add("dark-mode")
  localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
  }
}

darkModeToggle.addEventListener("change", toggleDarkMode);