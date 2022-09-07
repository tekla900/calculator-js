const calculator = document.querySelector('.calculator');
const display = document.querySelector('.display');
const keys = document.querySelector('.calculator__keys');
const sum = document.querySelector('.sum');


keys.addEventListener('click', e => { 
    if (e.target.matches('button')) {  //თუ ესენი არიან ღილაკები, მაშინ
        
    const key = e.target          //ქი არის ამ დაჭერილი (clicked) ღილაკის ტოლი
    const action = key.dataset.action   //action არის ქის ექშენის ტოლი
    const previousKeyType = calculator.dataset.previousKeyType  //წინა-ღილაკის-ტიპი არის კალკულატორის(!) დატასეტიდან წამოღებული წინა-ღილაკის-ტიპის ტოლი
    const keyContent = key.textContent  //ქონთენთი ტოლია ამ ქის კონტენტის
    const displayedNum = display.textContent;  //და დისპლეი ტოლია იმ კონტენტის, რაც დისპლეიზეა ამ წამს გამოჩენილი (დასაწყისში 0);

    if(calculator.dataset.firstValue) {
        display.textContent = calculator.dataset.firstValue ;
    }
    if (!action) {   //თუ დაჭერილი ღილაკი არის რიცხის შესაბამისი
        if (displayedNum === '0' || previousKeyType === 'operator') {  //თუ დისპლეიზე გამოტანილი რიცხვი არის ნულის ტოლი, ან წინა დაჭერილი ღილაკი იყო ოპერანდი
            display.textContent = keyContent;   //მაშინ დისპლეიზე გამოვიტანთ ახლა დაჭერილი ქის კონტენტს 
            calculator.dataset.previousKeyType ='number'; //და და დატასეტიდან წინა-ღილაკის-ტიპს გავუტოლებთ რიცხვს;
            sum.textContent += keyContent;
        } else {
            display.textContent =  displayedNum + keyContent; //სხვა შემთხვევაში (ანუ თუ ეკრანზე გამოტანილი რამე რიცხვია), დისპლეიზე გამოვიტანთ დისპლეის კონტენტს + ახლა დაჭერილი კის კონტენტი
            sum.textContent = displayedNum + keyContent;
        }
    }

    if(
        action === '+' ||
        action === '-' ||
        action === '*' ||
        action === '%'
    ) {
        if (previousKeyType !== 'operator') {
            calculator.dataset.previousKeyType = 'operator'; //დატასეტში წინა-ღილაკის-ტიპი ხდება ოპერანდი,
            display.textContent =  keyContent; //და დისპლეიზე გამოვიტანთ დისპლეის კონტენტს + ახლა დაჭერილი კის კონტენტი
            sum.textContent += action;
        }
    }

    if (action === 'equal') {  //თუ ექშენი ტოლია ტოლობის
        display.textContent = eval(sum.textContent);
        sum.textContent = '';
        calculator.dataset.firstValue = display.textContent;
    }

    if (action === 'clear') {
        calculator.dataset.firstValue = 0;
        calculator.dataset.previousKeyType ='number';
        calculator.dataset.operator = 0;
        display.textContent = '0';
    }

}
}
)