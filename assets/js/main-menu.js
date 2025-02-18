function toggleMenu() {
  const menuLinks = document.querySelector(".menu-links");
  const menuItems = document.querySelectorAll(".menu-links li");

  if (menuLinks.classList.contains("active")) {
    menuLinks.classList.remove("active");
    menuItems.forEach((item) => {
      item.classList.remove("show");
    });
  } else {
    menuLinks.classList.add("active");
    menuItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("show");
      }, index * 150);
    });
  }
}

document.querySelector(".menu-icon").addEventListener("click", toggleMenu);
