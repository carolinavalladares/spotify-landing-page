// dropdown menu
const profileBtn = document.querySelector("#profile-btn");
const arrow = document.querySelector("#arrow");
const dropdown = document.querySelector("#profile-dropdown");
let dropdownOpen = false;

profileBtn.addEventListener("click", (e) => {
  if (!dropdownOpen) {
    dropdown.style.display = "flex";
    arrow.style.transform = "rotate(360deg)";
    dropdownOpen = true;
  } else {
    dropdown.style.display = "none";
    arrow.style.transform = "rotate(180deg) translateY(50%)";
    dropdownOpen = false;
  }
});

// ==========================================

// responsive Nav bar
const navBar = document.querySelector("#header-links");
const hamburger = document.querySelector("#hamburger");
const lines = document.querySelectorAll(".line");
let openNavBar = false;

hamburger.addEventListener("click", () => {
  if (!openNavBar) {
    navBar.style.right = "0";
    lines[0].style.transform = "rotate(45deg)";
    lines[1].style.transform = "scale(0)";
    lines[2].style.transform = "rotate(-45deg)";
    openNavBar = true;
  } else {
    navBar.style.right = "-450px";
    lines[0].style.transform = "rotate(0)";
    lines[1].style.transform = "scale(1)";
    lines[2].style.transform = "rotate(0)";
    openNavBar = false;
  }
});
