const timeElement = document.querySelectorAll('.time');
const dateElement = document.querySelectorAll('.date');

setInterval(() => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const period = hours >= 12 ? 'PM' : 'AM';
    const date = now.getDate();
    const month = now.toLocaleString('default', { month: 'long' });
    const year = now.getFullYear();

    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, '0');

    const time = `${hours}:${minutes} ${period}`;
    const dateString = `${date} ${month} ${year}`;
    
    timeElement.forEach(element => {
        element.textContent = time;
    });

    dateElement.forEach(element => {
        element.textContent = dateString;
    });
 
}, 1000);


// Toggling the theme
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
  if (savedTheme === 'dark') {
    themeIcon.classList.add('fa-sun');
    themeIcon.classList.remove('fa-moon');
  } else {
    themeIcon.classList.add('fa-moon');
    themeIcon.classList.remove('fa-sun');
  }
}

themeToggle.addEventListener('click', () => {
  const isDark = body.classList.contains('dark');
  
  if (isDark) {
    body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    themeIcon.classList.add('fa-moon');
    themeIcon.classList.remove('fa-sun');
  } else {
    body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    themeIcon.classList.add('fa-sun');
    themeIcon.classList.remove('fa-moon');
  }
});
