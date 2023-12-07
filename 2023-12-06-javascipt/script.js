// Kintamojo sukūrimas:
// 1. Iniciavimo žodelis (var, let, const)
// 2. Kintamojo pavadinimas
// 3. Lygybės ženklas
// 4. Kintamojo vertė

var vardas = 'John';
let pavarde = "Doe";
let miestas = `Kaunas`;
const asmensKodas = 3985564654112; // Number tipo kintamasis
let yraStudentas = false;

console.log(vardas);
console.log(pavarde);
console.log(miestas);
console.log(asmensKodas);

vardas = 'Steve';
pavarde = 'Doe';

console.log(vardas);
console.log(pavarde);

// MASYVAI
let balai = [5, 10, 9, 7];

console.log(balai);
console.log(balai[0]);
console.log(balai[1]);
console.log(balai[2]);
console.log(balai[3]);

for (let i = 0; i < balai.length; i++) {
  console.log(balai[i]);
}

// OBJEKTAI
let student = {
  name: 'Steve',
  surname: 'Doe',
  age: 25,
  city: 'Vilnius',
  'birth city': 'Kaunas',
  grades: [5, 7, 8, 9],
  address: {
    city: 'Vilnius',
    street: 'Vilniaus st.',
  }
}

console.log(student);

console.log(student.name);
console.log(student.surname);
console.log(student.age);
console.log(student.city);

console.log(student['name']);
console.log(student['surname']);
console.log(student['age']);
console.log(student['city']);

let propertyName = 'age';

console.log(student[propertyName]);
console.log(student['birth city']);

student.name = 'John';
console.log(student.name);

student.group = 'JAVAUA5';
console.log(student);

console.log(student.grades);
console.log(student.grades[0]);
console.log(student.grades[1]);

console.log(student.address);
console.log(student.address.street);
console.log(student.address.city);


console.log(vardas, typeof vardas);
console.log(asmensKodas, typeof asmensKodas);
console.log(yraStudentas, typeof yraStudentas);
console.log(student, typeof student);
console.log(balai, typeof balai);

console.log(vardas);
console.log(pavarde);

console.log('Asmens vardas yra: ' + vardas + ' ' + pavarde + '.');
console.log("Asmens vardas yra: " + vardas + " " + pavarde + ".");
console.log(`Asmens vardas yra: ${vardas} ${pavarde}.`);

// John said: "Good morning".
console.log('John said: "Good morning".');
console.log(`John said: "Good morning".`);

// John said: "That's my car".
console.log(`John said: "That's my car".`);

// John `said`: "That's my car".
console.log('John `said`: "That\'s my car".');
console.log("John `said`: \"That's my car\".");
console.log(`John \`said\`: "That's my car".`);

// John `said`: "That's \my\ car".
console.log('John `said`: "That\'s \\my\\ car".');

// John \`said\`: "That's my car".
console.log(`John \\\`said\\\`: "That's my car".`);

let str = 'Labas';
console.log(str);
console.log(str.length);
console.log(str[0]);
console.log(str.at(0));
console.log(str[1]);
console.log(str.at(1));

console.log(str[str.length - 1]);
console.log(str.at(-1));
console.log(str.at(-2));

console.log(str.endsWith('as'));
console.log(str.endsWith('ba'));

console.log(str.includes('laba'));
console.log(str.includes('sveikas'));

console.log(str.toUpperCase());
console.log(str.toLowerCase());

// Matematiniai operatoriai
let num1 = 22;
let num2 = 10;
let num3 = '10';

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

console.log(num1 + num2 * num2);
console.log((num1 + num2) * num2);

console.log(num1 + num3);
console.log(num1 - num3);
console.log(num1 * num3);
console.log(num1 / num3);
console.log(num1 % num3);

console.log(num1 + num3 * num3);
console.log((num1 + num3) * num3);

// SĄLYGOS
// Dviguba lygybė (loosely equal ==): tikrina TIK reikšmes ir nekreipia dėmesio į duomenų tipą.
console.log(10 == 10); // true
console.log('vienas' == 'vienas'); // true
console.log('10' == '10'); // true
console.log(10 == '10'); // true

// Triguba lygybė (strictly equal ===): pirmiausiai tikrina ar sutampa duomenų tipai, o tada tikrina reikšmes.
console.log(10 === 10); // true
console.log('vienas' === 'vienas'); // true
console.log('10' === '10'); // true
console.log(10 === '10'); // false

console.log({} == {}); // false

console.log(10 > 10);
console.log(10 < 10);
console.log(10 >= 10);
console.log(10 <= 10);

console.log(10 == 10);
console.log(10 != 10);

console.log(10 === 10);
console.log(10 !== 10);

console.log(true);
console.log(!true);
console.log(!!true);

// AND / OR operators
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// CONDITIONS (sąlygos)
let personAge = 17;

if (personAge >= 18) {
  console.log('Loterijos bilietą pirkti galima');
} else {
  console.log('Loterijos bilieto pirkti negalima');
}

if (personAge >= 18) {
  console.log('Loterijos bilietą pirkti galima');
} else if (personAge >= 16) {
  console.log('Loterijos bilietą pirkti galima su tėvų sutikimu');
} else {
  console.log('Loterijos bilieto pirkti negalima');
}

// FUNCTIONS
// Funkcijos sukūrimas:
// 1. Iniciavimo žodelis (function)
// 2. Pavadinimas
// 3. Paprasti skliaustai () - funkcijos argumentams.
// 4. Riestiniai skliaustai {} - funkcijos apibrėžimas

function getPerimeter(height, width) {
  let perimeter = (height + width) * 2;
  return perimeter;
}

// Funkcijos iškvietimas
// 1. Funkcijos pavadinimas
// 2. Paprasti skliaustai ()

console.log(getPerimeter(15, 10));

let perimeterResult = getPerimeter(20, 50);
console.log(perimeterResult);

// ARROW FUNCTIONS

// Įprasta funkcija
function func1() {
  return 2 + 2;
}
console.log(func1());

// Įprasta funkcija su parametrais
function func2(num1, num2) {
  return num1 + num2;
}
console.log(func2(5, 5));

// Sukuriams kintamasis ir jam, kaip reikšmė, priskiriama anoniminė funkcija
const func3 = function(num1, num2) {
  return num1 + num2;
}
console.log(func3(6, 6));

// ARROW FUNCTIOn
// 1. Sukurti kintamąjį
// 2. Priskirti reikšmę:
// 2.1. Paprasti skliaustai ()
// 2.2. Arrow function =>
// 2.3. Riestiniai skliaustai

const arrowFunc1 = () => {
  return 3 * 3;
};
console.log(arrowFunc1());

const arrowFunc2 = (num1, num2) => {
  return num1 * num2;
}
console.log(arrowFunc2(5, 5))

const arrowFunc3 = (num) => {
  return num * num;
}
console.log(arrowFunc3(6));

// Jeigu arrow funkcija turi vieną parametrą, tai galima nerašyti paprastų skliaustų. Jeigu neturi nei vieno parametro arba jų turi daugiau nei vieną, tai paprasti skliaustai yra būtini.
const arrowFunc4 = num => {
  return num * num;
}
console.log(arrowFunc4(6));

// Jeigu funkcijos veiksmas aprašomas vienoje eilutėje (arba funkciją grąžina reikšmę), tai galima nerašyti žodelio return ir riestinių skliaustų.
const arrowFunc5 = num => num * num;
console.log(arrowFunc5(6));

// MASYVŲ METODAI
const cities = ['Vilnius', 'Kaunas', 'Klaipėda', 'Šiaulia', 'Panevėžys'];

// pop, push, shift ir unshift metodai modifikuoja (mutuoja) originalų masyvą.
console.log(cities)

// pop() metodas - pašalina paskutinį masyvo narį.
// console.log(cities.pop());
const lastCity = cities.pop();
console.log(lastCity);

// shift() metodas - pašalina pirmą masyvo narį.
const firstCity = cities.shift();
console.log(firstCity);

// push() metodas - prideda naują narį (narius) į masyvo pabaigą.
const pushCitiesLength = cities.push('Tauragė');
console.log(pushCitiesLength);

cities.push('Palanga', 'Nida');

// unshift() metodas - prideda naują narį (narius) į masyvo pradžią.
cities.unshift('Vilnius');

console.log(cities);

let countries = ['Lithuania', 'Latvia', 'Poland', 'France', 'Germany', 'Italy'];
// Index              0          1         2          3         4         5
// Slice (+)    0           1         2         3         4          5        6
// Slice (-)   -6          -5        -4        -3        -2         -1        

// SLICE - nemutuoja (nemodifikuoja) originalaus masyvo
console.log('-----------SLICE-------------');
console.log(countries);
let slicedCountries1 = countries.slice();
console.log(slicedCountries1);
let slicedCountries2 = countries.slice(0);
console.log(slicedCountries2);
let slicedCountries3 = countries.slice(2);
console.log(slicedCountries3);
let slicedCountries4 = countries.slice(2, 4);
console.log(slicedCountries4);
let slicedCountries5 = countries.slice(0, 3);
console.log(slicedCountries5);
let slicedCountries6 = countries.slice(-4);
console.log(slicedCountries6);
let slicedCountries7 = countries.slice(-4, -2);
console.log(slicedCountries7);
let slicedCountries8 = countries.slice(-4, 2);
console.log(slicedCountries8);
let slicedCountries9 = countries.slice(-3, 2);
console.log(slicedCountries9);
let slicedCountries10 = countries.slice(2, -2);
console.log(slicedCountries10);
let slicedCountries11 = countries.slice(-2, -4);
console.log(slicedCountries11);
let slicedCountries12 = countries.slice(4, 2);
console.log(slicedCountries12);

// SPLICE - modifikuoja (mutuoja) originalų masyvą
let nums = [1, 2, 3, 4, 5, 6, 7, 10];

console.log(nums);

// let splicedNums = nums.splice(0);
// let splicedNums = nums.splice(2);
// let splicedNums = nums.splice(0, 1);
// let splicedNums = nums.splice(0, 3);
// let splicedNums = nums.splice(2, 3);
// let splicedNums = nums.splice(2, 1);
// let splicedNums = nums.splice(-1);
// let splicedNums = nums.splice(-3, 2);
// let splicedNums = nums.splice(-3, 2, 2);
// let splicedNums = nums.splice(2, 2, 2.5);
// let splicedNums = nums.splice(2, 0, 2.5);
// let splicedNums = nums.splice(2, 0, 2.5, 2.8, 2.9);
// let splicedNums = nums.splice(-1); // pop
// let splicedNums = nums.splice(0, 1); // shift
// let splicedNums = nums.splice(nums.length, 0, 20); // push
let splicedNums = nums.splice(0, 0, -5); // unshift

console.log(splicedNums);
console.log(nums);

const numsArr = [1, 2, 3, 4, 5, 6, 10, 15, 20, 30];
console.log(numsArr);

for (let i = 0; i < numsArr.length; i++) {
  console.log(i);
  console.log('for ciklas:',numsArr[i]);
}

numsArr.map(function(num, index, arr) {
  console.log(index);
  console.log('map ciklas:', num);
  console.log(arr);
});

numsArr.forEach(function(num, index, arr) {
  console.log(index);
  console.log('forEach ciklas:', num);
  console.log(arr);
});


numsArr.map((num, index, arr) => {
  console.log(index);
  console.log('map ciklas:', num);
  console.log(arr);
});

numsArr.forEach((num, index, arr) => {
  console.log(index);
  console.log('forEach ciklas:', num);
  console.log(arr);
});


// Map - grąžina reikšmę
// forEach - negrąžina reikšmės

// const mapArr = numsArr.map((num) => {
//   return num * num;
// })

const mapArr = numsArr.map(num => num * num).reverse();
console.log(mapArr);

const forEachArr = numsArr.forEach(num => num * num);
console.log(forEachArr);



// FILTER
// const filteredArr = numsArr.filter((num) => {
//   return num > 10;
// });

const filteredArr = numsArr.filter(num => num > 7 && num % 2 === 0);
console.log(filteredArr);