//
// project name: Random background color change
// author: Md Ibrahim Sarkar
// Date: 25/Sep/2023
// Requirement this this project 
//-- Change tha background color by the generating random RGB color by clicking a button

// step

//step 1 create onload handle
window.onload = function () {
    main();  
}

function main() {
    const root = document.getElementById("root");
    const clickBtn = document.getElementById("random-btn");

    clickBtn.addEventListener('click', function () {
        const bgColor = generateRandomRGB();
        root.style.background = bgColor;
    })
    

    
    
}

// step 2  generate random RGB color
function generateRandomRGB() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

// step 3 collect all necessary reference

