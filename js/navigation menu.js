const menuIcon = document.getElementById("menuIcon");
const closeIcon = document.getElementById("closeIcon");
const navBar = document.getElementById("navBar");

menuIcon.addEventListener("click", () => {
navBar.classList.add("active");
menuIcon.style.display = "none";
closeIcon.style.display = "block";
});

closeIcon.addEventListener("click", () => {
navBar.classList.remove("active");
closeIcon.style.display = "none";
menuIcon.style.display = "block";
});

window.addEventListener("resize", () => {
if (window.innerWidth > 750) {
    navBar.classList.remove("active");
    closeIcon.style.display = "none";
    menuIcon.style.display = "none"; // Hide menu icon on larger screens
} else {
    menuIcon.style.display = "block"; // Show menu icon on smaller screens
}
});