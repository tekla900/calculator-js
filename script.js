console.log('get started');

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

// console.log(operate(1, 2, '/'));

// ---------------------

// numbers.addEventListener('click' , console.log('ds'))


// let numsToOpperandOn = [];
// numbers.forEach(el => {
//     // const display = document.querySelector('.display');

//     el.addEventListener('click',() => { 
//         const keyContent = el.textContent
//         const displayedNum = display.textContent;

//         if (displayedNum == '0') {
//             display.textContent = keyContent
//         } else {
//             display.textContent = displayedNum + keyContent
//         }
//         // console.log(el.textContent)
//         // display.textContent = el.textContent;
//     });
// })

// let operandsArr = [];
// operands.forEach(el => {
//     el.addEventListener('click',() => { console.log(el.textContent)
//         operandsArr.push(el.textContent);
//         display.textContent = el.textContent;
//     });
// })

//შემოვიღო ცარიელი სტრინგი და როცა მომხმარებელი დააჭერს რიცხვს ხელს,
//დავუმატო ეს რიცხვ(ებ)ი სტრინგს იქამდე, სანამ მომხამრებელი დააჭერს რომელიმე 
//ოპერანდს.
//ამის შემდეგ ეს საბოლოოდ მიღებული სტრიგი გარდავქმნა ინტად 
//და დავუმატო რიცხვების ერეის.

//get first number





// let numArrSec = [];


// function getNum () {
//     let numArrFirst = [];
//     // console.log('shemovida 1');
//     numbers.forEach(each => {
//         // console.log('shemovida 2');
//         each.addEventListener('click', () => {
//             numArrFirst.push(each.textContent);
//             console.log(numArrFirst);
//             console.log('shemovida 3');
//         });
//         // console.log('shemovida 4');
//     });
//     // console.log('shemovida 5');
//     return numArrFirst.join('');
// }

// numbers.forEach(each => {
//     each.addEventListener('click', () => {
//         numArrSec.push(each.textContent);
//         console.log(numArrSec);
//     });
// });

// operands.forEach(each => {
//     each.addEventListener('click', () => {
//         let sign = each.textContent;
//         let firstNum = getNum();
//         let secNum = getNum();

//         console.log(firstNum + ' ' + sign + ' ' + secNum);
        
//         // console.log(numArrFirst);
//     })
// })


// getNum();
//როცა დაეჭირება ოპერანდ ბათონს, მეორე რიცხვი უნდა შევინახოთ 
//პირველის ანალოგური მეთოდით და მერე უნდა მოხდეს ოპერიაციის ფუნქციის გამოძახება 
//ამ ორ რიცხვზე და ერთ ნიშანზე. ამ ფუნქციის შედეგს textContentით დავწერთ დისპლეიზე

// equalBtn.addEventListener('click', () => {
//     let a = numsToOpperandOn.slice(-2)[0]; 
//     let b = numsToOpperandOn.slice(-2)[1]; 
//     let sign = operandsArr.slice(-1);

//     display.textContent = operate(a, b, sign);
// })



















const numbers = document.querySelectorAll('.numbers');
const display = document.querySelector('.display');
const operands = document.querySelectorAll('.operands');
const equalBtn = document.querySelector('.equal');

const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.calculator__keys');
const numberArr = [];
console.log(keys);
keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
    const previousKeyType = calculator.dataset.previousKeyType

        const keyContent = key.textContent
        const displayedNum = display.textContent;

        
        // console.log(el.textContent)
        // display.textContent = el.textContent;
        if(!action) {
            console.log('num');
            console.log(keyContent);
            if (displayedNum === '0') {
                display.textContent = keyContent
            } else if (displayedNum === '0' || previousKeyType === 'operator') {
                      display.textContent = keyContent;
                    } 
                    else {
                        console.log('displayed ' + displayedNum + ' key ' + keyContent);
                      display.textContent = displayedNum + keyContent;
                    }
        }

        // let numberArr = [];
        if (
              action === 'add' ||
              action === 'subtract' ||
              action === 'multiply' ||
              action === 'divide'
            ) {
                numberArr.push(display.textContent);
                // console.log();
                console.log(keyContent);
            //   key.classList.add('is-depressed')
              // Add custom attribute
              calculator.dataset.previousKeyType = 'operator';
              display.textContent = keyContent;

                // display.textContent = '0';

            }
            console.log(numberArr);
    }
   })


///წამოვიღოთ ყველა ბათონი, 
//const key = e.target
//const action = key.dataset.action

//შედმდეგ ვნახოთ, თუ ამ ბათონებს ექშენ აქვთ. თუ არ აქვს, ანუ რიცხვებია
//თუ აქვთ, ანუ ნიშნები

//შემდეგ რიცხვები მაქვს, 
//შემდეგ თუ if (
    //   action === 'add' ||
    //   action === 'subtract' ||
    //   action === 'multiply' ||
    //   action === 'divide'
    // ) {
    //   key.classList.add('is-depressed')
    //   // Add custom attribute
    //   calculator.dataset.previousKeyType = 'operator'
    // }

    //const previousKeyType = calculator.dataset.previousKeyType

// if (!action) {
//     if (displayedNum === '0' || previousKeyType === 'operator') {
//       display.textContent = keyContent
//     } else {
//       display.textContent = displayedNum + keyContent
//     }
//   }
  