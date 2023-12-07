// Paselektinti HTML elementą
const paragraph = document.querySelector('p');
paragraph.textContent = 'Labas vakaras';
paragraph.innerHTML = 'Labas <span style="color: red;">vakaras</span>';

// Sukurti HTML elementą
const spanElement = document.createElement('span');
spanElement.textContent = '!';

// Append - prideda su JS sukurtą HTML elementą (node) į kito elemento pabaigą
paragraph.append(spanElement);

// Prepend - prideda su JS sukurtą HTML elementą (node) į kito elemento pradžią
paragraph.prepend(spanElement);

// After - prideda su JS sukurtą HTML elemntą (node) po kitu elementu (šalia kito elemento)
paragraph.after(spanElement);

// Before - prideda su JS sukurtą HTML elementą (node) prieš kitą elementą (šalia kito elemento)
paragraph.before(spanElement);

// Remove - pašalina HTML elementą
spanElement.remove();

const newParagraph = document.createElement('p');
newParagraph.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eveniet ut. Nulla vero adipisci expedita, nemo blanditiis ut dolore alias et dolor ipsam nisi maxime commodi impedit numquam velit quisquam!';

paragraph.after(newParagraph);

// Būdas pakeisti HTML elemento klases
newParagraph.className = 'pirma-klase antra-klase';
// newParagraph.className = newParagraph.className + ' trecia-klase';
newParagraph.className += ' trecia-klase';

// Prideda klasę prie HTML elemento
newParagraph.classList.add('ketvirta-klase');
newParagraph.classList.add('penkta-klase', 'sesta-klase');
newParagraph.classList.add('ketvirta-klase');

// Pašalina klasę iš HTML elemento
newParagraph.classList.remove('pirma-klase');
newParagraph.classList.remove('antra-klase', 'trecia-klase');
newParagraph.classList.remove('pirma-klase');

// Pakeičia klasę HTML elemente
newParagraph.classList.replace('ketvirta-klase', 'pirma-klase');

// Prideda klasę prie HTML elemento, jeigu tokios klasės dar neturi ir pašalina jeigu tokią klasę jau turi
newParagraph.classList.toggle('toggle-klase'); // prideda
newParagraph.classList.toggle('toggle-klase'); // nuima
newParagraph.classList.toggle('toggle-klase'); // prideda

console.dir(newParagraph.className);

// Patikrina ar HTML elementas turi nurodytą klasę (grąžina true arba false)
console.log(newParagraph.classList.contains('pirma-klase'));
console.log(newParagraph.classList.contains('antra-klase'));

newParagraph.id = 'paragrafo-id';
console.dir(newParagraph.id);

const link = document.createElement('a');
link.textContent = 'nuoroda';
link.href = 'https://www.google.com';
link.target = '_blank';

newParagraph.after(link)

link.style.border = '2px solid black';
link.style.padding = '5px 10px';
link.style.display = 'inline-block';
link.style.fontSize = '25px';

link.style = `color: red; 
              border: 2px solid black; 
              padding: 5px 10px;
              display: inline-style;
              font-size: 25px;
              text-decoration: none;
              text-transform: uppercase;`;