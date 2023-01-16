'use strict';

const one = prompt('Введите первое число', '');
const two = prompt('Введите второе число', '');

const maxMin = () => {
  if (one > two) {
    console.log(two);
  } else {
    console.log(one);
  }
}

maxMin();


