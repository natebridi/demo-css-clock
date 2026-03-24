import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
    <ul class="clocks">
        <li class="clock-wrap" id="dark" data-name="Dark">
            <div class="clock">
                <div class="hour"></div>
                <div class="minute"></div>
                <div class="second"></div>
                <span class="digit" data-digit="1"></span>
                <span class="digit" data-digit="2"></span>
                <span class="digit" data-digit="3"></span>
                <span class="digit" data-digit="4"></span>
                <span class="digit" data-digit="5"></span>
                <span class="digit" data-digit="6"></span>
                <span class="digit" data-digit="7"></span>
                <span class="digit" data-digit="8"></span>
                <span class="digit" data-digit="9"></span>
                <span class="digit" data-digit="10"></span>
                <span class="digit" data-digit="11"></span>
                <span class="digit" data-digit="12"></span>
            </div>
        </li>
        <li class="clock-wrap" id="light" data-name="Light">
            <div class="clock style-2">
                <div class="hour"></div>
                <div class="minute"></div>
                <div class="second"></div>
                <span class="digit" data-digit="1"></span>
                <span class="digit" data-digit="2"></span>
                <span class="digit" data-digit="3"></span>
                <span class="digit" data-digit="4"></span>
                <span class="digit" data-digit="5"></span>
                <span class="digit" data-digit="6"></span>
                <span class="digit" data-digit="7"></span>
                <span class="digit" data-digit="8"></span>
                <span class="digit" data-digit="9"></span>
                <span class="digit" data-digit="10"></span>
                <span class="digit" data-digit="11"></span>
                <span class="digit" data-digit="12"></span>
            </div>
        </li>
        <li class="clock-wrap" id="vibrant" data-name="Vibrant">
            <div class="clock style-3">
                <div class="hour"></div>
                <div class="minute"></div>
                <div class="second"></div>
                <span class="digit" data-digit="3"></span>
                <span class="digit" data-digit="6"></span>
                <span class="digit" data-digit="9"></span>
                <span class="digit" data-digit="12"></span>
            </div>
        </li>
    </ul>
    <div class="markers">
        <a class="marker" href="#dark">Dark</a>
        <a class="marker" href="#light">Light</a>
        <a class="marker" href="#vibrant">Vibrant</a>
    </div>`
    ;

const hourEl = app.querySelectorAll<HTMLDivElement>('.hour')!
const minuteEl = app.querySelectorAll<HTMLDivElement>('.minute')!
const secondEl = app.querySelectorAll<HTMLDivElement>('.second')!

const now = new Date()
hourEl.forEach((elem) => {elem.dataset.progress = String(now.getHours() + now.getMinutes()/60)});
minuteEl.forEach((elem) => {elem.dataset.progress = String(now.getMinutes())});
secondEl.forEach((elem) => {elem.dataset.progress = String(now.getSeconds())});

