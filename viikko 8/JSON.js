/* Tehtävä 1
Luo JavaScript-olio nimeltä `student`, jolla on ominaisuudet:
- `name`
- `age`
- `grade`
Muunna olio JSON-merkkijonoksi ja tulosta se konsoliin.
*/

const student = {
    Name: "John Doe",
    age: 19,
    grade: 89,
};

const studenJSON = JSON.stringify(student);
console.log(studenJSON);

/* Tehtävä 2
Ota Tehtävä 1:ssä luotu JSON-merkkijono ja muunna se takaisin JavaScript-olioksi.
Tulosta muunnetun olion `name`-ominaisuus.
*/

const studentJSON = '{"Name":"John Doe", "age":19, "grade":89}';

const studenObject = JSON.parse(studenJSON);
console.log(studenObject.Name);

/* Tehtävä 3
Luo taulukko nimeltä `classroom`, jossa jokainen alkio on opiskelijaa kuvaava olio.
Jokaisella opiskelijaoliolla tulee olla ominaisuudet `name`, `age` ja `grade`.
Muunna taulukko JSON-merkkijonoksi ja tulosta se konsoliin.
*/

const classroom = [
    { name: "Alice Smith", age: 20, grade: 92 },
    { name: "Bob Johnson", age: 19, grade: 85 },
    { name: "Charlie Brown", age: 21, grade: 78 },
    { name: "Diana Miller", age: 20, grade: 95 },
  ];

  const classroomJSON = JSON.stringify(classroom);
  console.log(classroomJSON);

/* Tehtävä 4
Ota Tehtävä 3:ssa luotu JSON-merkkijono, muunna se takaisin JavaScript-taulukoksi
ja tulosta kaikkien opiskelijoiden nimet.
*/

const classroomArray = JSON.parse(classroomJSON);

classroomArray.forEach(student => {
  console.log(student.name);
});

/* Tehtävä 5
Luo olio nimeltä `weatherReport`, jossa on seuraavat ominaisuudet:
- `temperature`
- `humidity`
- `conditions` (esim. "Sunny", "Rainy")

Muunna olio JSON-merkkijonoksi ja tallenna se muuttujaan `weatherJSON`.
Sen jälkeen pura JSON takaisin olioksi ja tulosta `conditions`-ominaisuus.
*/

const weatherReport = {
    temperature: 28,
    humidity: 0.8,
    conditions: "Sunny with partial cloud cover",
};

const weatherJSON = JSON.stringify(weatherReport);
console.log("JSON string:", weatherJSON);

const weatherObject = JSON.parse(weatherJSON);
console.log("Conditions", weatherObject.conditions);

/* Tehtävä 6
Määrittele taulukko nimeltä `movies`, jossa jokaisella elokuvalla on:
- `title`
- `director`
- `rating`

Muunna tämä taulukko JSON-merkkijonoksi ja pura se takaisin JavaScript-olioksi.
Tulosta kaikki elokuvien nimet, joiden arvosana on yli 8.
*/

const movies = [
{title: "The Shawshank Redemption", director: "Frank Darabont", rating: 9.3},
{title: "The Godfather", director: "Francis Ford Coppola", rating: 9.2},
{title: "Pulp Fiction", director: "Quentin Tarantino", rating: 8.9},
{title: "The Dark Knight", director: "Christopher Nolan", rating: 9.0},
{title: "Inception", director: "Christopher Nolan", rating: 8.8},
{title: "Forrest Gump", director: "Robert Zemeckis", rating: 8.8},
{title: "Birdemic", director: "James Nguyen", rating: 1.7},
];

const moviesJSON = JSON.stringify(movies);
console.log("JSON movie string:", moviesJSON);

const moviesArray = JSON.parse(moviesJSON);

console.log("Movies with rating over 8:");
moviesArray.forEach(movie => {
    if (movie.rating > 8) {
        console.log(movie.title);
    }
});

/* Tehtävä 7
Kirjoita funktio `filterHighRatedMovies(jsonString)`, joka:
- Ottaa vastaan JSON-merkkijonon, joka edustaa elokuvataulukkoa.
- Muuntaa sen JavaScript-taulukoksi.
- Palauttaa uuden taulukon, joka sisältää vain elokuvat, joiden arvosana on yli 8.
*/

function filterHighRatedMovies(jsonString) {
    const moviesArray = JSON.parse(jsonString);
    const highRatedMovies = moviesArray.filter(movie => movie.rating > 8);
    return highRatedMovies;
  }
  
  // Esimerkkikäyttö (using the moviesJSON from Task 6):
  const topMovies = filterHighRatedMovies(moviesJSON);
  console.log("\nHigh-rated movies (from filterHighRatedMovies function):");
  console.log(topMovies);

/* Tehtävä 8
Määrittele olio nimeltä `shoppingCart`, jossa on:
- `items` (taulukko tuotteista, jokaisella on `name` ja `price`)
Muunna `shoppingCart` JSON-merkkijonoksi ja tulosta se konsoliin.
*/

const shoppingCart = {
    items: [
      { name: "Laptop", price: 1200 },
      { name: "Mouse", price: 25 },
      { name: "Keyboard", price: 75 },
      { name: "Monitor", price: 300 },
    ],
  };
  
  const shoppingCartJSON = JSON.stringify(shoppingCart);
  console.log(shoppingCartJSON);

/* Tehtävä 9
Kirjoita funktio `totalCartValue(jsonString)`, joka:
- Saa parametrina ostoskorin JSON-merkkijonon.
- Muuntaa sen JavaScript-olioksi.
- Palauttaa ostoskorin kaikkien tuotteiden yhteenlasketun hinnan.
*/

function totalCartValue(jsonString) {
    const shoppingCartObject = JSON.parse(jsonString);
    let total = 0;
    if (shoppingCartObject.items && Array.isArray(shoppingCartObject.items)) {
      shoppingCartObject.items.forEach(item => {
        total += item.price;
      });
    }
    return total;
  }
  const totalValue = totalCartValue(shoppingCartJSON);
  console.log("Total cart value:", totalValue);

/* Tehtävä 10
Luo olio nimeltä `gameProgress`, jossa on:
- `level`
- `score`
- `livesRemaining`

Muunna olio JSON-merkkijonoksi ja tulosta se.
Pura JSON takaisin olioksi ja päivitä `score`-ominaisuutta lisäämällä siihen 100 pistettä.
Tulosta päivitetty olio.
*/

const gameProgress = {
    level: 5,
    score: 2500,
    livesRemaining: 3,
  };
  
  const gameProgressJSON = JSON.stringify(gameProgress);
  console.log("Original game progress JSON:", gameProgressJSON);
  
  const gameProgressObject = JSON.parse(gameProgressJSON);
  gameProgressObject.score += 100;
  
  console.log("Updated game progress object:", gameProgressObject);