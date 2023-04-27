const connecting = [
    {
        "img": "/abc/google.jpeg",
        "landing_page": "https://www.google.com/",
        "basic_id": 1,
        "delay": "10",
        "objective_id": 1
    }
];

const startTime = parseInt(connecting[0].delay);
let time = startTime*1;

fetch(connecting)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))

window.onload = function() {
    var connectButton = document.getElementById("connect-button");
    connectButton.disabled = true;
}

window.setTimeout(function() {
    var connectButton = document.getElementById("connect-button");
    connectButton.disabled = false;
}, startTime*1200);

const ele = document.getElementById("cooldown")
const countdownInterval = setInterval(() => {
    ele.innerHTML = `00:${time}`;
    time--;
    if (time === 0) {
        clearInterval(countdownInterval);
    }
}, 1000);

const redirectButton = document.getElementById("connect-button");
redirectButton.addEventListener('click', () => {
    window.location.href = connecting[0].landing_page;
})