function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Clicked_time() {
    let money = document.getElementById('money').value;
    let output = document.querySelector('#output');
    let num = getRandomInt(-5, 5);
    if (money <= 0) {
        output.value = "Будь ласка введіть суму!";
    }
    else {
        if (num <= 0) {
            output.value = "Ви програли";
        }
        else {
            output.value = "Вітаю! Ви виграли " + money * num + " грн";
        }
    }
}

function Clicked(){
    document.querySelector('#output').value = "Зачекайте...";
    setTimeout(Clicked_time, 1000);
}
