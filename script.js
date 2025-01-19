function moveClockHands() {
    const now = new Date();
    
    const secondHand = document.getElementById('second-hand');
    const minuteHand = document.getElementById('minute-hand');
    const hourHand = document.getElementById('hour-hand');
    
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    
    // Calculate the rotation degrees
    const secondDegrees = (seconds / 60) * 360;
    const minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6;
    const hourDegrees = (hours % 12 / 12) * 360 + (minutes / 60) * 30;
    
    // Apply the rotations
    secondHand.style.transform = `rotate(${secondDegrees}deg)  translate(0, -50%)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)  translate(0, -50%)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)  translate(0, -50%)`;

    
}

// Run the function every second
setInterval(moveClockHands, 1000);

// Run immediately to initialize the hands
moveClockHands();


let safy = "safy";

console.log(`hello ${safy} how old are you?`);