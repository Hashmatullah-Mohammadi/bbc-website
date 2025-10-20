// Load header and initialize functionality
fetch("./components/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
    // Initialize hamburger menu after header is loaded
    initializeHamburgerMenu();
  })
  .catch((error) => {
    console.error('Error loading header:', error);
  });

// Load footer
fetch("./components/footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  })
  .catch((error) => {
    console.error('Error loading footer:', error);
  });
/////////////////////////////////////