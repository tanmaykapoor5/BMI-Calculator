const H = document.querySelector('#height')
const W = document.querySelector('#weight')

const button = document.querySelector('#calculate')

const NewElement = document.createElement('div')

button.addEventListener("click", function () {
    const h = Number(H.value)
    const w = Number(W.value);
    
    const BMI = String((w * 10000) / (h * h));

    // const NewElement = document.createElement('div')

    NewElement.textContent = BMI

    const ans = document.querySelector('#results');

    ans.appendChild(NewElement)

})