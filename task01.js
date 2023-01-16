'use strict';



const cash = prompt('Введите сумму', '');

function conversion (euro, dollar) {
    let dol = cash * euro;
    let rub = dol * dollar;
    console.log(rub)
}

conversion(1.2, 73);
