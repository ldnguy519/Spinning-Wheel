const carBrands = [
    "Toyota", "Honda", "Ford", "Chevrolet", "BMW", 
    "Mercedes-Benz", "Tesla", "Audi", "Nissan", "Porsche"
];

function spinWheel() {
    const wheel = document.getElementById("wheel");
    const degrees = Math.floor(Math.random() * 360) + 1800; // Multiple spins for effect
    wheel.style.transform = `rotate(${degrees}deg)`;

    setTimeout(() => {
        const selectedIndex = Math.floor((degrees % 360) / (360 / carBrands.length));
        document.getElementById("result").innerText = `🚗 You got: ${carBrands[selectedIndex]}! 🚗`;
    }, 3000); // Displays result after spinning
}
