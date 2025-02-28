document.body.addEventListener("click", (event) => {
  const menuBtn = document.getElementById("menuBtn");
  const closeBtn = document.getElementById("closeBtn");
  const menuContainer = document.getElementById("menuContainer");

  // Toggle menu when the Menu button is clicked
  if (event.target === menuBtn) {
    menuContainer.classList.toggle("-translate-x-full");
  }

  // Close menu when the Close (X) button is clicked
  else if (event.target === closeBtn) {
    menuContainer.classList.add("-translate-x-full");
  }
  
  // Close menu if clicking outside the menu container and not on the Menu button
  else if (!menuContainer.contains(event.target) && event.target !== menuBtn) {
    menuContainer.classList.add("-translate-x-full");
  }
});
