"use strict"
const startBtn = document.querySelector("#start"),
    budgetValue = document.querySelector(".budget-value"),
    daybudgetValue = document.querySelector(".daybudget-value"),
    levelValue = document.querySelector(".level-value"),
    expensesValue = document.querySelector(".expenses-value"),
    optionalExpensesValue = document.querySelector(".optionalexpenses-value"),
    incomeValue = document.querySelector(".income-value"),
    monthSavingsValue = document.querySelector(".monthsavings-value"),
    yearSavingsValue = document.querySelector(".yearsavings-value"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value"),
    inputExpensesItem = document.querySelectorAll(".expenses-item"),
    expensesItemBtn = document.querySelector(".expenses-item-btn"),
    optionalExpensesBtn = document.querySelector(".optionalexpenses-btn"),
    chooseIncome = document.querySelector(".choose-income"),
    savingsCheck = document.querySelector(".savings"),
    chooseSum = document.querySelector(".choose-sum"),
    choosePercent = document.querySelector(".choose-percent");
let money, time;
startBtn.addEventListener('click', function() {
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


let appData = {
    money: money,
    timeData: time,
    expenses: {
    },
    optionalExpenses: {
    },
    income: [],
    savings: true,
    chooseExpenses: function(){
        for(let i = 0; i < 2; i++){
            let expensesAnswer = prompt("Введите обязательную статью расходов в этом месяце", "");
            let expensesMoneyAnswer = +prompt("Во сколько обойдется?", "");
        
                if(expensesAnswer != "" && expensesMoneyAnswer != "" && expensesAnswer != null && expensesMoneyAnswer != null) {
                appData.expenses[expensesAnswer] = expensesMoneyAnswer;
            }  else{
                i = i - 1;
            };
        };
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.money/30).toFixed(1);
        alert("Ваш бюджет на день: " + appData.moneyPerDay);
    },
    detectLevel: function(){
        if(appData.money < 100){
            console.log("мин");
        } else if(appData.money > 100 && appData.money < 2000){
            console.log("ср");
        } else if(appData.money > 2000){
            console.log("макс ");
        } else {
            console.log("ошибка");
        };
    },
    checkSavings: function(){
        if(appData.savings == true){
            let save = +prompt("Какова сумма накоплений?");
            let percent = +prompt("Какой процент накоплений?");
            appData.mouthIncome = save/100/12*percent;
            alert("Ваш доход по депозиту: " + appData.mouthIncome); 
    }
    },
    chooseOptExpenses: function(){
        for(let i = 1; i < 3; i++ ){
            let optionalExpensesAnswer = prompt("Статья необязательных расходов?");
            if(optionalExpensesAnswer != "" && optionalExpensesAnswer != null) {
                appData.optionalExpenses[i] = optionalExpensesAnswer;
            }  else{
                i = i - 1;
            };
         };
    },
    chooseIncome: function(){
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
        for(let i = 0; i < 1; i++){
            if (items != "" && items != null){
                appData.income = items.split(", ");
                appData.income.push(prompt("Может что-то еще?", ""));
                appData.income.sort();
            } else {
                i= i - 1;
            };
        };
            
        appData.income.forEach((item, index) =>{
            alert(`${index} : ${item}`)
        });
    }
};
