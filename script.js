const buttons = document.querySelectorAll(".btn");
const previusVisor = document.querySelector(".previus-visor");
const currentVisor = document.querySelector(".current-visor");

let previus = "";
let current = "";

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;

        if (+value >= 0 || value === ".") {
            if(value === "." && currentVisor.textContent.includes(".")) {
                return;
            } 
            currentVisor.textContent += value;
        } else {
            operator(value);
        }
    })
})

function operator(op) {
    
    let result

    switch (op) {
        case "C":
            currentVisor.textContent = "";
            previusVisor.textContent = "";
            current = "";
            previus = "";
        break;

        case "<":
            let str = currentVisor.textContent;
            currentVisor.textContent = currentVisor.textContent.slice(0, str.length - 1);
        break;

        case "+":
            if (previusVisor.textContent === "" && currentVisor.textContent !== "") {
                previus = currentVisor.textContent;
                currentVisor.textContent = "";
                previusVisor.textContent = previus + op;
                return;
            }

            current = currentVisor.textContent;
            result = Number(previus) + Number(current);

            previusVisor.textContent = "";
            currentVisor.textContent = result;
        break;

        case "-":
            if (previusVisor.textContent === "" && currentVisor.textContent !== "") {
                previus = currentVisor.textContent;
                currentVisor.textContent = "";
                previusVisor.textContent = previus + op;
                return;
            }

            current = currentVisor.textContent;
            result = Number(previus) - Number(current);

            previusVisor.textContent = "";
            currentVisor.textContent = result;
        break;

        case "x":
            if (previusVisor.textContent === "" && currentVisor.textContent !== "") {
                previus = currentVisor.textContent;
                currentVisor.textContent = "";
                previusVisor.textContent = previus + op;
                return;
            }

            current = currentVisor.textContent;
            result = Number(previus) * Number(current);

            previusVisor.textContent = "";
            currentVisor.textContent = result;
        break;

        case "/":
            if (previusVisor.textContent === "" && currentVisor.textContent !== "") {
                previus = currentVisor.textContent;
                currentVisor.textContent = "";
                previusVisor.textContent = previus + op;
                return;
            }

            current = currentVisor.textContent;
            result = Number(previus) / Number(current);

            previusVisor.textContent = "";
            currentVisor.textContent = result;
        break;
    }
}