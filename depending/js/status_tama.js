let play = document.getElementById('play'),
    play_btn = document.getElementById('play_btn'),
    health = document.getElementById('health'),
    health_btn = document.getElementById('health_btn'),    
    eat = document.getElementById('eat'),
    eat_btn = document.getElementById('eat_btn'),
    sleep = document.getElementById('sleep'), 
    sleep_btn = document.getElementById('sleep_btn'),
    cancel_btn = document.getElementById('cancel'),   
    plus = 10;

let playFirstValue = play.style.width;
play_btn.addEventListener('click', () => {
    if (play.style.width != '100%') {
        play.style.width = parseInt(play.style.width) + plus + '%';
        console.log(play.style.width);
    }
})

let healthFirstValue = health.style.width;
health_btn.addEventListener('click', () => {
    if (health.style.width != '100%') {
        health.style.width = parseInt(health.style.width) + plus + '%';
        console.log(health.style.width);
    }
})

let eatFirstValue = eat.style.width;
eat_btn.addEventListener('click', () => {
    if (eat.style.width != '100%') {
        eat.style.width = parseInt(eat.style.width) + plus + '%';
        console.log(eat.style.width);
    }
})

let sleepFirstValue = sleep.style.width;
sleep_btn.addEventListener('click', () => {
    if (sleep.style.width != '100%') {
        sleep.style.width = parseInt(sleep.style.width) + plus + '%';
        console.log(sleep.style.width);
    }
})

cancel_btn.addEventListener('click', () => {
    play.style.width = playFirstValue;
    health.style.width = healthFirstValue;
    eat.style.width = eatFirstValue;
    sleep.style.width = sleepFirstValue;
})