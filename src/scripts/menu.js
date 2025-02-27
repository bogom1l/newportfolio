// menu.js
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const menuContainer = document.getElementById("menuContainer");

// Toggle the sliding menu (open or close)
function toggleMenu() {
  menuContainer.classList.toggle("-translate-x-full");
}

// Open the menu when "Menu" button is clicked
menuBtn.addEventListener("click", toggleMenu);

// Close the menu when "X" button is clicked
closeBtn.addEventListener("click", toggleMenu);

// Close the menu if clicking outside the menu
document.addEventListener("click", (event) => {
  // Check if the clicked element is outside the menu or menu button
  if (!menuContainer.contains(event.target) && event.target !== menuBtn) {
    menuContainer.classList.add("-translate-x-full"); // Close the menu
  }
});
