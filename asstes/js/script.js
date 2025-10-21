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






// sidebar js ---------------------------------------------------------
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeBtn');
const searchInput = document.getElementById('searchInput');
const menuList = document.getElementById('menuList');

menuBtn.addEventListener('click', () => {
  sidebar.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('open');
});

function toggleSubmenu(id) {
  const parentLi = document.querySelector(`#${id}`).closest('.has-submenu');
  parentLi.classList.toggle('open');
}


// 🔍 Search filter logic ------------------------------------------------
searchInput.addEventListener('input', function () {
  const filter = searchInput.value.toLowerCase();
  const items = menuList.getElementsByTagName('li');

  Array.from(items).forEach((item) => {
    const text = item.textContent.toLowerCase();
    if (text.includes(filter) || item.querySelector('.submenu')) {
      item.style.display = text.includes(filter) ? 'flex' : 'none';
    }
  });
});





// btn login----------------------
const authIcon = document.getElementById('authIcon');
const authDropdown = document.getElementById('authDropdown');

authIcon.addEventListener('click', () => {
  authDropdown.classList.toggle('show');
});

document.addEventListener('click', (e) => {
  if (!authIcon.contains(e.target) && !authDropdown.contains(e.target)) {
    authDropdown.classList.remove('show');
  }
});




// btn language -----------------------------------
const langBtn = document.getElementById("languageBtn");
const langPanel = document.getElementById("languagePanel");

langBtn.addEventListener("click", () => {
  langPanel.classList.toggle("active");
  langBtn.textContent = langPanel.classList.contains("active")
    ? "🌐 Close Languages ▲"
    : "🌐 Languages ▼";
});






// btn light mode fark mode ----------------------------------
const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-theme");
  toggleBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
} else {
  toggleBtn.innerHTML = `<i class="fa-regular fa-moon"></i>`;
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-theme");
  const isLight = body.classList.contains("light-theme");
  toggleBtn.innerHTML = isLight
    ? `<i class="fa-solid fa-sun"></i>`
    : `<i class="fa-regular fa-moon"></i>`;
  localStorage.setItem("theme", isLight ? "light" : "dark");
});
