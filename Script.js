

const listElemnet = document.querySelector(".calc")
const listItem = document.createElement("h5")
listItem.innerHTML = "Calculater"
const inputdis = document.createElement("input")
inputdis.type = "text"
inputdis.placeholder = "0"
inputdis.id = "sout"
const button1 = document.createElement("button")
button1.innerHTML = "CL"
button1.onclick = function () { Clear() }
const button2 = document.createElement("button")
button2.innerHTML = "DEL"
button2.onclick = function () { del() }
const button3 = document.createElement("button")
button3.innerHTML = "%"
button3.onclick = function () { display("%") }
const button4 = document.createElement("button")
button4.innerHTML = "/"
button4.onclick = function () { display("/") }
const button5 = document.createElement("button")
button5.innerHTML = "7"
button5.onclick = function () { display("7") }
const button6 = document.createElement("button")
button6.innerHTML = "8"
button6.onclick = function () { display("8") }
const button7 = document.createElement("button")
button7.innerHTML = "9"
button7.onclick = function () { display("9") }
const button8 = document.createElement("button")
button8.innerHTML = "*"
button8.onclick = function () { display("*") }
const button9 = document.createElement("button")
button9.innerHTML = "4"
button9.onclick = function () { display("4") }
const button10 = document.createElement("button")
button10.innerHTML = "5"
button10.onclick = function () { display("5") }
const button11 = document.createElement("button")
button11.innerHTML = "6"
button11.onclick = function () { display("6") }
const button12 = document.createElement("button")
button12.innerHTML = "-"
button12.onclick = function () { display("-") }
const button13 = document.createElement("button")
button13.innerHTML = "1"
button13.onclick = function () { display("1") }
const button14 = document.createElement("button")
button14.innerHTML = "2"
button14.onclick = function () { display("2") }
const button15 = document.createElement("button")
button15.innerHTML = "3"
button15.onclick = function () { display("3") }
const button16 = document.createElement("button")
button16.innerHTML = "+"
button16.onclick = function () { display("+") }
const button17 = document.createElement("button")
button17.innerHTML = "."
button17.onclick = function () { display(".") }
const button18 = document.createElement("button")
button18.innerHTML = "0"
button18.onclick = function () { display("0") }
const button19 = document.createElement("button")
button19.innerHTML = "="
button19.onclick = function () { calcul() }
button19.className = "equal"

listElemnet.append(listItem, inputdis, button1, button2, button3, button4, button5, button6,
    button7, button8, button9, button10, button11, button12, button13, button14, button15, button16, button17, button18, button19)

//Functions

let screen = document.getElementById("sout");
function display(num) {
    screen.value += num;
}
function calcul() {
    try {
        screen.value = eval(screen.value);
    }
    catch (err) {
        alert("Invalid Input")
        screen.value = screen.value = ""
    }
}
function Clear() {
    screen.value = screen.value = "";
}
function del() {
    screen.value = screen.value.slice(0, -1)
}

