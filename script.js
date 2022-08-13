const add = function(a, b) {
	return Number(a) + Number(b);
};

const subtract = function(a, b) {
	return a - b;
};


const multiply = function(a, b) {
  return a * b;
};

const divide = function(a, b) {
	return a / b;
};


const operate = function(a, sign, b) {
    if(sign == '+') return add(a,b);
    if(sign == '-') return subtract(a,b);
    if(sign == '*') return multiply(a,b);
    if(sign == '/') return divide(a,b);
}

// ------------






const numbers = document.querySelectorAll('.numbers');
const display = document.querySelector('.display');
const operands = document.querySelectorAll('.operands');
const equalBtn = document.querySelector('.equal');
const sum = document.querySelector('.sum');

const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.calculator__keys');
const numberArr = [];


keys.addEventListener('click', e => {

    if (e.target.matches('button')) {
        
        const key = e.target
        const action = key.dataset.action
        const previousKeyType = calculator.dataset.previousKeyType
        const keyContent = key.textContent
        const displayedNum = display.textContent;

        if (!action) {
            if (displayedNum === '0' || previousKeyType === 'operator') {
                display.textContent = keyContent;
                delete calculator.dataset.previousKeyType;

                console.log(calculator.dataset);
            } else {
                display.textContent = displayedNum + keyContent;
                delete calculator.dataset.operator;

            }
        }

        if (
              action === '+' ||
              action === '-' ||
              action === '*' ||
              action === '%'
            ) {
                numberArr.push(display.textContent);
                numberArr.push(action)
                console.log(keyContent);
                calculator.dataset.previousKeyType = 'operator';
                calculator.dataset.firstValue = displayedNum
                calculator.dataset.operator = action
                display.textContent = keyContent;
            }

        
        if (action === 'equal') {
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = displayedNum
          
            console.log(firstValue + ' ' + typeof firstValue);
            console.log(secondValue);
            console.log(operator);
            console.log(operate(firstValue, operator, secondValue));
            display.textContent = operate(firstValue, operator, secondValue)

        }
    }
   })

