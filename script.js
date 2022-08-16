const add = function(a, b) {
	return Number(a) + Number(b);
};

const subtract = function(a, b) {
	return Number(a) - Number(b);
};


const multiply = function(a, b) {
  return Number(a) * Number(b);
};

const divide = function(a, b) {
	return Number(a) / Number(b);
};


const operate = function(a, sign, b) {
    if(sign == '+') return add(a,b);
    if(sign == '-') return subtract(a,b);
    if(sign == '*') return multiply(a,b);
    if(sign == '%') return divide(a,b);
}

// ------------

const display = document.querySelector('.display');
const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.calculator__keys');
const sum = document.querySelector('.sum');

keys.addEventListener('click', e => {  // კალკულატორის ყველა კლავიში მოგვაქვს

    if (e.target.matches('button')) {  //თუ ესენი არიან ღილაკები, მაშინ
        
        const key = e.target          //ქი არის ამ დაჭერილი (clicked) ღილაკის ტოლი
        const action = key.dataset.action   //action არის ქის ექშენის ტოლი
        const previousKeyType = calculator.dataset.previousKeyType  //წინა-ღილაკის-ტიპი არის კალკულატორის(!) დატასეტიდან წამოღებული წინა-ღილაკის-ტიპის ტოლი
        const keyContent = key.textContent  //ქონთენთი ტოლია ამ ქის კონტენტის
        const displayedNum = display.textContent;  //და დისპლეი ტოლია იმ კონტენტის, რაც დისპლეიზეა ამ წამს გამოჩენილი (დასაწყისში 0);

        if (!action) {   //თუ დაჭერილ ქის არ გააჩნია დატასეტი ექშენი, ანუ ექშენ ცვლადი ანდიფაინდ არის, მაშინ ეს ღილაკი არის რიცხის შესაბამისი
            if (displayedNum === '0' || previousKeyType === 'operator') {  //თუ დისპლეიზე გამოტანილი რიცხვი არის ნულის ტოლი, ან წინა დაჭერილი ღილაკი იყო ოპერანდი
                display.textContent = keyContent;   //მაშინ დისპლეიზე გამოვიტანთ ახლა დაჭერილი ქის კონტენტს 
                calculator.dataset.previousKeyType ='number'; //და და დატასეტიდან წინა-ღილაკის-ტიპს გავუტოლებთ რიცხვს;
            } else {
                display.textContent = displayedNum + keyContent; //სხვა შემთხვევაში (ანუ თუ ეკრანზე გამოტანილი რამე რიცხვია), დისპლეიზე გამოვიტანთ დისპლეის კონტენტს + ახლა დაჭერილი კის კონტენტი
            }
        }
 
        if (  //თუ ექშენი უდრის რომელიმე ოპერანდს, 
              action === '+' ||
              action === '-' ||
              action === '*' ||
              action === '%'
            ) {

                if (previousKeyType !== 'operator') {
                    calculator.dataset.previousKeyType = 'operator'; //დატასეტში წინა-ღილაკის-ტიპი ხდება ოპერანდი,
                    calculator.dataset.firstValue = displayedNum;  // პირველი მნიშვნელობა ხდება ეკრანზე ახლა ასახული რიცხვი
                    calculator.dataset.operator = action;  //ოპერანდი ხდება ექშენი
                    display.textContent = displayedNum + keyContent; //და დისპლეიზე გამოვიტანთ დისპლეის კონტენტს + ახლა დაჭერილი კის კონტენტი
                    sum.textContent = calculator.dataset.firstValue +  calculator.dataset.operator;
                }
            }

        
        if (action === 'equal') {  //თუ ექშენი ტოლია ტოლობის
            const firstValue = parseInt(calculator.dataset.firstValue); //მაშინ პირველი მნიშვნელობა არის კალკულატორის დატასეტიდან წამოღებული პირველი მნიშვნელობა
            const operator = calculator.dataset.operator; //ოპერანდი არის კალკულატორის დატასეტიდან წამოღებული ოპერანდი
            const secondValue = parseInt(displayedNum); //მეორე მნიშვნელობა არის ამ წამს ეკრანზე გამოსახული მნიშვნელობა 
          
            if (firstValue && operator && previousKeyType !== 'operator') {  //თუ გვაქვს პირველი მნიშვნელობა, ოპერანდი და წინა-ღილაკის-ტიპი არ არის ოპერანდი,
                display.textContent = operate(firstValue, operator, secondValue); //მაშინ გამოვაჩენთ ამ რიცხვებზე შესრულებული მოქმედების ჯამს
              }
        }

        if (action === 'clear') {
            calculator.dataset.firstValue = 0;
            calculator.dataset.previousKeyType ='number';
            calculator.dataset.operator = 0;
            display.textContent = '0';
        }
    }
   })


   //დასამატებელი ფუნქციები:
   //ბევრჯერ არ შეიძლებოდეს ოპერანდებზე დაჭერა