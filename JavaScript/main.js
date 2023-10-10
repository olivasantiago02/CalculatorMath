// Variables globales
let displayValue = '';
let currentNumber = '';
let currentOperation = '';
let resultShown = false;

// Función para agregar un número al área de visualización
function appendToDisplay(value) {
    if (resultShown) {
        displayValue = '';
        resultShown = false;
    }
    displayValue += value;
    document.getElementById('result').innerText = displayValue;
}

// Función para agregar un operador y mostrar la operación actual
function appendOperation(operator) {
    if (resultShown) {
        resultShown = false;
        currentOperation = '';
    }
    if (currentNumber !== '') {
        calculate();
    }
    currentOperation = operator;
    currentNumber = displayValue;
    displayValue = '';
    document.getElementById('operation').innerText = currentNumber + ' ' + currentOperation;
}

// Función para borrar la pantalla
function clearDisplay() {
    displayValue = '';
    currentNumber = '';
    currentOperation = '';
    resultShown = false;
    document.getElementById('result').innerText = '0';
    document.getElementById('operation').innerText = '';
}

// Función para cambiar el signo positivo/negativo
function toggleSign() {
    if (displayValue !== '') {
        displayValue = String(-parseFloat(displayValue));
        document.getElementById('result').innerText = displayValue;
    }
}

// Función para aplicar el porcentaje
function applyPercentage() {
    if (displayValue !== '') {
        displayValue = String(parseFloat(displayValue) / 100);
        document.getElementById('result').innerText = displayValue;
    }
}

// Función para calcular el resultado
function calculate() {
    if (currentNumber !== '' && currentOperation !== '') {
        try {
            switch (currentOperation) {
                case '+':
                    displayValue = String(parseFloat(currentNumber) + parseFloat(displayValue));
                    break;
                case '-':
                    displayValue = String(parseFloat(currentNumber) - parseFloat(displayValue));
                    break;
                case '*':
                    displayValue = String(parseFloat(currentNumber) * parseFloat(displayValue));
                    break;
                case '/':
                    if (parseFloat(displayValue) !== 0) {
                        displayValue = String(parseFloat(currentNumber) / parseFloat(displayValue));
                    } else {
                        throw new Error("División por cero");
                    }
                    break;
            }
            document.getElementById('result').innerText = displayValue;
            currentNumber = '';
            currentOperation = '';
            resultShown = true;
            document.getElementById('operation').innerText = '';
        } catch (error) {
            document.getElementById('result').innerText = 'Error';
            currentNumber = '';
            currentOperation = '';
            resultShown = true;
            document.getElementById('operation').innerText = '';
        }
    }
}

// Función para agregar el punto decimal
function appendDecimal() {
    if (resultShown) {
        displayValue = '0';
        resultShown = false;
    }
    if (displayValue.indexOf('.') === -1) {
        displayValue += '.';
        document.getElementById('result').innerText = displayValue;
    }
}


let isScientific = false;

function toggleScientific() {
    isScientific = !isScientific;
    updateCalculatorMode();
}

function updateCalculatorMode() {
    const calculatorContainer = document.getElementById('calculator-container');
    const scientificPanel = document.getElementById('scientific-panel');
    
    if (isScientific) {
        calculatorContainer.style.height = '400px'; // Altura de la calculadora científica
        scientificPanel.style.display = 'block'; // Muestra el panel científico
        // Puedes agregar botones y elementos adicionales aquí para funciones científicas
    } else {
        calculatorContainer.style.height = 'auto'; // Restaura la altura automática
        scientificPanel.style.display = 'none'; // Oculta el panel científico
    }
}

// Resto de tus funciones y variables existentes aquí...

// Función para calcular funciones matemáticas
function calculateFunction(func) {
    if (displayValue !== '') {
        switch (func) {
            case 'sin':
                displayValue = String(Math.sin(parseFloat(displayValue)));
                break;
            case 'cos':
                displayValue = String(Math.cos(parseFloat(displayValue)));
                break;
            case 'tan':
                displayValue = String(Math.tan(parseFloat(displayValue)));
                break;
            case 'ln':
                displayValue = String(Math.log(parseFloat(displayValue)));
                break;
            case 'log':
                displayValue = String(Math.log10(parseFloat(displayValue)));
                break;
            case 'sqrt':
                displayValue = String(Math.sqrt(parseFloat(displayValue)));
                break;
            case 'cbrt':
                displayValue = String(Math.cbrt(parseFloat(displayValue)));
                break;
            case 'power':
                displayValue = String(Math.pow(parseFloat(currentNumber), parseFloat(displayValue)));
                break;
            case 'factorial':
                displayValue = String(factorial(parseFloat(displayValue)));
                break;
            default:
                break;
        }
        document.getElementById('result').innerText = displayValue;
        currentNumber = '';
        currentOperation = '';
        resultShown = true;
        document.getElementById('operation').innerText = '';
    }
}

// Función para calcular el factorial de un número
function factorial(num) {
    if (num === 0) {
        return 1;
    }
    return num * factorial(num - 1);
}


