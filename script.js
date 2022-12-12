const daysCount = document.querySelector('.days-count')
const hoursCount = document.querySelector('.hours-count')
const minutesCount = document.querySelector('.minutes-count')
const secondsCount = document.querySelector('.seconds-count')

const setTime = () => {
    const currentTime = new Date();
    const backHomeTime = new Date('01 05 2023 13:15:00')

    const result = backHomeTime - currentTime
    

    const seconds = Math.floor(result / 1000) % 60;
    const minutes = Math.floor(result / 1000 / 60) % 60;
    const hours = Math.floor(result / 1000 / 60 / 60) % 24;
    const days = Math.floor(result / 1000 / 60 / 60 / 24);

    daysCount.textContent = days;
    hoursCount.textContent = hours;
    minutesCount.textContent = minutes;
    secondsCount.textContent = seconds;

}
setTime()
setInterval(setTime, 1000)