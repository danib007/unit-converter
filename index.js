/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl =  document.getElementById("input-el")
const convertBtn = document.getElementById("convert-el")
const reset  = document.getElementById("reset")
let lengEl = document.getElementById("leng-txt")
let massEl = document.getElementById("mass-txt")
let volEl = document.getElementById("vol-txt")


convertBtn.addEventListener("click", function (){
    const num = Number(inputEl.value)

    const feet = num * 3.28084
    const meters = num * 0.3048
    const gallons = num * 0.264172
    const liters = num * 3.78541
    const pounds = num * 2.20462
    const kilos = num / 2.205

    lengEl.innerHTML = `<h3>Length (Meter/Feet)</h3> 
                    <p>${num} meters = ${feet.toFixed(2)} feet | ${num} feet = ${meters.toFixed(2)} meters</p>`
    volEl.innerHTML = `<h3>Volume (Liters/Gallons)</h3>
                    <p>${num} liters = ${gallons.toFixed(2)} gallons | ${num} gallons = ${liters.toFixed(2)} liters</p>`
    massEl.innerHTML = `<h3>Mass (Kilograms/Pounds)</h3>
                    <p>${num} kilos = ${pounds.toFixed(2)} pounds | ${num} pounds = ${kilos.toFixed(2)} kilos</p>`
})

reset.addEventListener("dblclick", function() {
    inputEl.value = ""

    lengEl.innerHTML = `<h3>Length (Meter/Feet)</h3> 
                    <p>0 meters = 0 feet | 0 feet = 0 meters</p>`
    volEl.innerHTML = `<h3>Volume (Liters/Gallons)</h3>
                    <p>0 liters = 0 gallons | 0 gallons = 0 liters</p>`
    massEl.innerHTML = `<h3>Mass (Kilograms/Pounds)</h3>
                    <p>0 kilos = 0 pounds | 0 pounds = 0 kilos</p>`
})