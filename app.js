let canvas = document.getElementById("jogoCanvas");
let context = canvas.getContext("2d");
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;

function desenharBola() {
    context.beginPath();
    context.arc(x, y, 10, 0, Math.PI * 2);
    context.fillStyle = "#0095DD";
    context.fill();
    context.closePath();
}

function atualizar() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    desenharBola();
    x += dx;
    y += dy;

    if (x + dx > canvas.width - 10 || x + dx < 10) {
        dx = -dx;
    }
    if (y + dy > canvas.height - 10 || y + dy < 10) {
        dy = -dy;
    }
}

setInterval(atualizar, 10);