class UI{
    constructor(){
        this.title = document.querySelector('.title');
        this.amount = document.querySelector('.amount');
        this.budget = document.querySelector('.budget');
        this.totalbudget = document.querySelector('.total-budget');
        this.totalexpense = document.querySelector('.total-expenses');
        this.totalbalance = document.querySelector('.total-balance');
        this.alert = document.querySelector('.display-alert');
        this.display = document.querySelector('.display');
        this.list = document.querySelector('.expense-list');
        this.itemList = [];
        this.itemId = 0;
    }

    showExpense(){
        if(this.title.value === '' || this.amount.value === '' || this.amount.value <= 0){
            this.alert.style.display = 'block';
            const self = this;
            setTimeout(function(e){
                self.alert.style.display = 'none';
            },2000);
            this.title.value = '';
            this.amount.value = '';
        }else{            
            let ex = {
                id: this.itemId,
                title: this.title.value,
                amoun: this.amount.value
            };
            this.itemId++;
            this.itemList.push(ex);
            this.addExpense(ex);
            this.showBalance();
            this.title.value = '';
            this.amount.value = '';
        }
    }

    addExpense(ex){
        const tr = document.createElement('tr');
        tr.innerHTML = `
                        <th class="alert-secondary"><h5 class="text-center text-capitalize">${ex.title}</h5></th>
                        <th class="alert-secondary"><h5 class="text-center">${ex.amoun}</h5></th>
                        `;
        this.list.appendChild(tr);
    }

    showCalculation(){
        if(this.budget.value === '' || this.budget.value <= 0){
            this.alert.style.display = 'block';
            const self = this;
            setTimeout(function(e){
                self.alert.style.display = 'none';
            },2000);
            this.budget.value = '';
        }else{
            this.totalbudget.innerText =  this.budget.value;
            this.budget.value = '';
            this.showBalance();
        }
    }

    showBalance(){
        const expenditure = this.totalExpense();
        console.log(expenditure);
        const total = parseInt(this.totalbudget.textContent) - expenditure;
        this.totalbalance.textContent = total;
    }

    totalExpense(){
        let total = 0;
        if(this.itemList.length > 0){
            total = this.itemList.reduce(function(acc, curr){
                console.log(acc);
                console.log(curr.amoun);
                acc = parseInt(curr.amoun) + acc;
                return acc;
            },0);
        }
        this.totalexpense.textContent = total;
        return total;
    }
}


function eventListeners(){
    const calculate = document.querySelector('.calculate');
    const expense = document.querySelector('.expense');
    const ui = new UI();
    expense.addEventListener('click', function(e){
        ui.showExpense();
        e.preventDefault();
    });
    calculate.addEventListener('click', function(e){
        ui.showCalculation();
        e.preventDefault();
    });
}

document.addEventListener('DOMContentLoaded', eventListeners);
