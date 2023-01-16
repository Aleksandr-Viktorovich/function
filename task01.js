'use strict';



const cash = prompt('Введите сумму', '');

function conversion (euro, dollar) {
    const dol = cash * euro;
    const rub = dol * dollar;
    console.log(rub)
}

conversion(1.2, 73);
