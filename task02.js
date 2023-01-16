'use strict';



const string = (str) => {
  const modStr = str[7].toLowerCase() + str.slice(8);
  const modStr2 = str[0].toUpperCase() + str.slice(1, 7);
  const modStr3 = modStr2 + modStr;

  return modStr3

}

console.log(string('привет Мир'));
