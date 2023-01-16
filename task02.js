'use strict';



const string = (str) => {
  str = str.replace('привет Мир', 'Привет мир');
    return str;
}

console.log(string('привет Мир'));
