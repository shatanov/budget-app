"use strict"
const startBtn = document.querySelector('#start'),
    budgetValue = document.querySelector('.budget-value'),
    daybudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value'),
    inputExpensesItem = document.querySelectorAll('.expenses-item'),
    expensesItemBtn = document.querySelector('.expenses-item-btn'),
    optionalExpensesBtn = document.querySelector('.optionalexpenses-btn'),
    chooseIncome = document.querySelector('.choose-income'),
    savingsCheck = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    countBudgetBtn = document.querySelector('.count-budget-btn'),
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item');
let money, time;
startBtn.addEventListener('click', () => {
        money = +prompt("Ваш бюджет на месяц?","30000"),
        time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");
    while(isNaN(money) ||  money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?","30000")
    }
    appData.money = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});    
expensesItemBtn.addEventListener('click', () => {
    let sum = 0;
    for(let i = 0; i < inputExpensesItem.length; i++){
        let expensesAnswer = inputExpensesItem[i].value;
        let expensesMoneyAnswer = inputExpensesItem[++i].value;
            if(expensesAnswer != "" && expensesMoneyAnswer != "" && expensesAnswer != null && expensesMoneyAnswer != null) {
                appData.expenses[expensesAnswer] = expensesMoneyAnswer;
                sum += +expensesMoneyAnswer;
            }  else{
                i = i - 1;
            };
    }
    expensesValue.textContent = sum;
});
countBudgetBtn.addEventListener('click', () => {

    if(appData.money != undefined){
        appData.moneyPerDay = (appData.money/30).toFixed(1);
        daybudgetValue.textContent = appData.moneyPerDay;

        if(appData.money < 100) {
            levelValue.textContent = "мин";
        } else if(appData.money > 100 && appData.money < 2000){
            levelValue.textContent = "ср";
        } else if(appData.money > 2000){
            levelValue.textContent = "макс";
        } else {
                levelValue.textContent = "ошибка";
        }
    } else {
        daybudgetValue.textContent = 'ОШИБКА!!!!!'
    }
});
optionalExpensesBtn.addEventListener('click', () => {

    for(let i = 0; i < optionalExpensesItem.length; i++ ){
        let optionalExpensesAnswer = optionalExpensesItem[i].value;
            appData.optionalExpenses[i] = optionalExpensesAnswer;
            optionalExpensesValue.textContent += optionalExpensesAnswer + ' ';
     };
});
chooseIncome.addEventListener('input', () => {
    let items = chooseIncome.value
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});
savingsCheck.addEventListener('click', () => {
    if(appData.savings == true){
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});
chooseSum.addEventListener('input', () => {
    if(appData.savings == true){
        let sum = +chooseSum.value,
            percent = +choosePercent.value;
        appData.mouthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent; 
        monthSavingsValue.textContent = appData.mouthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});
choosePercent.addEventListener('input', () => {
    if(appData.savings == true){
        let sum = +chooseSum.value,
            percent = +choosePercent.value;
        appData.mouthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent; 
        monthSavingsValue.textContent = appData.mouthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});
let appData = {
    money: money,
    timeData: time,
    expenses: {
    },
    optionalExpenses: {
    },
    income: [],
    savings: false,
};
