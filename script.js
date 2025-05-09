const carBrands = [
    "Toyota", "Honda", "Ford", "Chevrolet", "BMW", 
    "Mercedes-Benz", "Tesla", "Audi", "Nissan", "Porsche"
];

const canvas = document.getElementById("wheelCanvas");
const ctx = canvas.getContext("2d");
const radius = canvas.width / 2;
let angle = 0;
const segments = carBrands.length;

// Draw the wheel
function drawWheel() {
    for (let i = 0; i < segments; i++) {
        const startAngle = (i / segments) * 2 * Math.PI;
        const endAngle = ((i + 1) / segments) * 2 * Math.PI;

        // Draw segment
        ctx.beginPath();
        ctx.moveTo(radius, radius);
        ctx.arc(radius, radius, radius, startAngle, endAngle);
        ctx.fillStyle = `hsl(${i * (360 / segments)}, 100%, 70%)`;
        ctx.fill();
        ctx.closePath();

        // Add text
        ctx.fillStyle = "black";
        ctx.font = "16px Arial";
        ctx.fillText(
            carBrands[i], 
            radius + Math.cos(startAngle + Math.PI / segments) * radius * 0.6, 
            radius + Math.sin(startAngle + Math.PI / segments) * radius * 0.6
        );
    }
}

function spinWheel() {
    let rotation = Math.random() * 360 + 1800; // Large rotation for effect
    let spinInterval = setInterval(() => {
        angle += 10;
        canvas.style.transform = `rotate(${angle}deg)`;
    }, 50);

    setTimeout(() => {
        clearInterval(spinInterval);
        let selectedIndex = Math.floor((angle % 360) / (360 / segments));
        document.getElementById("result").innerText = `🚗 You got: ${carBrands[selectedIndex]}! 🚗`;
    }, 3000);
}

drawWheel();
