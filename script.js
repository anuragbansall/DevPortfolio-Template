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
