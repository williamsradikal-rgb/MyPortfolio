// Grab icons
const menuIcon = document.querySelector('.icons span:last-child'); // ☰
const searchIcon = document.querySelector('.icons span:first-child'); // 🔍

// Create nav links dynamically
const navContainer = document.createElement('div');
navContainer.classList.add('nav-container');
navContainer.style.display = 'none';
navContainer.innerHTML = `
  <a href="#home">Home</a>
  <a href="#about">About Me</a>
  <a href="#courses">Courses</a>
  <a href="#gallery">Gallery</a>
  <a href="#contact">Contact</a>
`;
document.querySelector('.navbar').appendChild(navContainer);

// Toggle menu
menuIcon.addEventListener('click', () => {
  navContainer.style.display = navContainer.style.display === 'flex' ? 'none' : 'flex';
  navContainer.style.flexDirection = 'column';
  navContainer.style.backgroundColor = '#ffffff';
  navContainer.style.padding = '15px';
  navContainer.style.borderRadius = '10px';
  navContainer.style.position = 'absolute'; 
  navContainer.style.top = '70px';
  navContainer.style.right = '20px';
  navContainer.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
});

// Smooth scroll
navContainer.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    navContainer.style.display = 'none';
  });
});

// Search function
searchIcon.addEventListener('click', () => {
  const query = prompt('Search for a word or sentence:');
  if (!query) return;

  const bodyText = document.body.innerText.toLowerCase();
  if (bodyText.includes(query.toLowerCase())) {
    alert(`✅ Matches found for "${query}"`);
  } else {
    alert(`❌ No matches found for "${query}"`);
  }
});