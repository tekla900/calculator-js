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


const operate = function(a, b, sign) {
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
              action === 'add' ||
              action === 'subtract' ||
              action === 'multiply' ||
              action === 'divide'
            ) {
                numberArr.push(display.textContent);
                // console.log();
                console.log(keyContent);
                calculator.dataset.previousKeyType = 'operator';
                display.textContent = keyContent;
            }


            console.log(numberArr);
    }
   })


   //ახლა დისპლეიზე ზემოთ შემოვიღოთ ცალკე პარაგრაფი, 
   //სადაც სრული ისტორია ჩაეწერება, ანუ 45 + 45 მაგალითად
   //და ოპერანდებთან შემოვიღოთ იფ სტეიტმენტი, 
   //რომ თუ იმ ერეის სიგრძე იყო 2, უკვე მოხდეს მათემატიკური ოპერაცია,
   //შედეგი გამოისახოს დისპლეიზე, გასუფთავდეს ერეი 
   //და ჩაიწეროს შედეგი ნულოვან ინდექსზე.
   //