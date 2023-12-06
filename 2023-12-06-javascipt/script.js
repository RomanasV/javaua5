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
pavarde = 5;

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