const timeElement = document.getElementById('time');

setInterval(() => {
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const period = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, '0');

    const time = `${hours}:${minutes} ${period}`;
    
    timeElement.textContent = time;
}, 1000);
