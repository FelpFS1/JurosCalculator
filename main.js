let inicial = document.querySelector('#inicial');
let percentage = document.querySelector('#percentage')
let time = document.querySelector('#time-course')
let inputs = document.querySelector('.table')

inicial.addEventListener("change", function(){
    this.value = parseFloat(this.value).toFixed(2);
 });

 percentage.addEventListener("change", function(){
    this.value = parseFloat(this.value).toFixed(2);
 });

function calcular() {

    valueInicial = parseFloat(inicial.value)
    valuePercentage = parseFloat(percentage.value)
    valueTime = parseInt(time.value)
   
     if(inicial.value.length < 1 && percentage.value.length < 1 && time.value.length < 1 ){
        alert("Preencha todos os campos")
     }else{
    inputs.style.border="5px solid #abb0c1"
     }
    for (let i = 0; i < valueTime; i++) {
        let porcento = valueInicial * (valuePercentage / 100)
        valueInicial = valueInicial + porcento
        let y = document.createElement('h3')
        let x = document.createElement('input')
        x.readOnly = true
        inputs.appendChild(y).innerHTML = ` MES ${i + 1}`
        inputs.appendChild(x)
        x.value = valueInicial.toFixed(2)

    }

    
}


document.getElementById("btn-clear").addEventListener('click',()=>{
    inicial.value = ""
    percentage.value = ""
    time.value= ""
    document.getElementById('table').remove()
    location.reload()

    
})










