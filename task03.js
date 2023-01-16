'use strict';

const calculated = (amount, goods, promo) => {
  if (goods > 10) {
    amount = amount - amount * 0.03;
  }
  if (amount > 30000) {
    amount = amount - (amount - 30000) * 0.15;
  }
  if (promo === 'methed') {
    amount = amount - amount * 0.1;
  } if (promo === 'g3h2z1' && amount > 2000) {
    amount = amount - 500;
  }
  return amount;
}


const res = calculated(40000, 11, 'methed');
console.log(res)
