class UI{
    showAlert(message){
        const errordiv = document.createElement('div');
        const card = document.querySelector('.card');
        const heading = document.querySelector('.heading');
        errordiv.className = "alert alert-danger";
        document.getElementById('alert').style.display = 'block';
        errordiv.appendChild(document.createTextNode(message));
        card.insertBefore(errordiv, heading);
        setTimeout(()=>{ 
            document.querySelector('.alert').remove();
        },2000);
    } 
    showAmount(billAmount , service, noPeople){
        const total = parseFloat(billAmount * service);
        const ans = parseFloat(total) / noPeople;
        document.querySelector('.results').style.display = 'block';
        document.querySelector('.calculate').value = ans.toFixed(2);
    }
}

    const btn = document.getElementById('submit');
    btn.addEventListener('click', (e) =>{
        const billAmount = document.getElementById('bill-amount').value ;
        const service = document.getElementById('service-quality').value ;
        const noPeople = document.getElementById('people').value ;
        const ui = new UI();
        if(billAmount === '' || noPeople === '' || service == 0){
            ui.showAlert('Please Enter the Valid values');
        }else{
            ui.showAmount(billAmount , service, noPeople);
        }
        e.preventDefault();
    });
