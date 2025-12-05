const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
const ntnBtn = document.getElementById('btn');
const departInput = document.getElementById('depart');
const returnInput = document.getElementById('return');
const adultsInput = document.getElementById('Adults');
const childrenInput = document.getElementById('Children');
const optInput = document.getElementById('option');
const resultDiv = document.getElementById('result');

ntnBtn.addEventListener('dblclick', () =>{
departInput.value = '';
returnInput.value = '';
adultsInput.value = 1;
childrenInput.value = 0;
});
ntnBtn.addEventListener('click', () => {
    if (departInput.value==0 || returnInput.value==0) {
        alert('Please select both departing and returning dates.');
        return;
        
    }
let total=Number(adultsInput.value) + Number(childrenInput.value)
    alert(`Booking Successful!\nFlyfrom:${optInput.value} \nDeparting: ${departInput.value}\nReturning: ${returnInput.value}\nAdults: ${adultsInput.value}\nChildren: ${childrenInput.value}\n totalFamily:${total}`);
});

function updateTotal() {
    let total = Number(adultsInput.value) + Number(childrenInput.value);
    totalDisplay.textContent = total;
}
adults.addEventListener("input", updateTotal);
children.addEventListener("input", updateTotal);