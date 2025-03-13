let color = prompt("Traffic Light Color Coding:\nA. Red\nB. Orange\nC. Green").toUpperCase();

if (color == "A") {
    document.write('<div class="message red">Red color means STOP</div>');
} else if (color == "B") {
    document.write('<div class="message orange">Orange color means WAIT</div>');
} else if (color == "C") {
    document.write('<div class="message green">Green color means GO</div>');
} else {
    alert("Oops, try again!");
} 