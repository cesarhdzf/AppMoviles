//Pone el valor escrito en la pantalla
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

//Limpia la pantalla de valores
function clearDisplay() {
    document.getElementById('display').value = "";
}

//Borra un digito del valor que este en la pantalla
function deleteLast(){
    let displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);
}

//Calcula las operaciones indicadas
function calculateResult(){
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        alert('Espresion invalida');
    }
}