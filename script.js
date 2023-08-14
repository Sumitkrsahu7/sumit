let date = document.getElementById('date')
let day = document.getElementById('day')
let month = document.getElementById('month')
let year = document.getElementById('year')

let today = new Date();



let weekDays = ["Soondey", "Moondey", "Toosdey", "Woodnesdey", "Thoorosdey", "Fridey", "Satuurrday"]

let monthNames = ["Janaury", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novermber", "December"]

date.innerHTML = (today.getDate()<10? "0": "") + today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = monthNames[today.getMonth()];
year.innerHTML = today.getFullYear();




let hour = document.getElementById('hour')
let minute = document.getElementById('minute')
let second = document.getElementById('second')

setInterval(()=>{
    let time = new Date()
    // console.log(time)

    hour.innerHTML = (time.getHours()<10? "0": "") + time.getHours();
    minute.innerHTML = (time.getMinutes()<10? "0": "") + time.getMinutes();
    second.innerHTML = (time.getSeconds()<10? "0": "") + time.getSeconds();

}, 1000)

setInterval(() => {
    
}, 1000);