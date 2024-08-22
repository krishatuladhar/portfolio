/*===== SIDEBAR TOGGLE ===============*/
const sidebar = document.getElementById("sidebar");
const toggleButton = document.getElementById("sidebar-toggle");

toggleButton.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

/*===== NAVBAR LINK HIGHLIGHTING ===============*/
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav__link");

// Function to remove 'active-link' class from all nav links
function removeActiveClasses() {
  navLinks.forEach((link) => {
    link.classList.remove("active-link");
  });
}

// Function to add 'active-link' class to the corresponding nav link
function addActiveClass(link) {
  removeActiveClasses();
  link.classList.add("active-link");
}

// Event listener for scrolling to highlight the nav link based on the current section
window.addEventListener("scroll", () => {
  let currentSection;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 60; // Offset to consider the navbar height
    if (scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    if (link.getAttribute("href").includes(currentSection)) {
      addActiveClass(link);
    }
  });
});

// Event listener for clicking on nav links to ensure the correct link is highlighted
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    addActiveClass(this);
  });
});
