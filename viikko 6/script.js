/* Tehtävä 1
Luo JavaScript-taulukko nimeltä `library`, joka edustaa kirjakokoelmaa.
Jokaisella kirjalla tulee olla ominaisuudet `title` (otsikko), `author` (kirjoittaja) ja `yearPublished` (julkaisuvuosi).
Lisää kokoelmaan vähintään kaksi kirjaoliota.
*/

const library = [
    {
        title : "The Lord of the Rings",
        author : "J.R.R Tolkien",
        yearPublished : 1954,
    },
    
    {
        title : "De vita Caesarvm",
        author : "Gaivs Svetonivs Tranqvillvs",
        yearPublished : 121,
    },

    {
        title : "Carmina (Odes)",
        author : "Qvintvs Horatvs Flaccvs",
        yearPublished : "23 BC",
    },
];

/* Tehtävä 2
Hae `library`-kokoelman ensimmäisen kirjan `title` ja tulosta se konsoliin.
Muokkaa toisen kirjan `yearPublished` uudeksi vuodeksi ja tulosta päivitetty kirja konsoliin.
*/

console.log("Title of the first book is:", library[0].title);
console.log("Author of the first book is:", library[0].author);
console.log("Publishing year of the first book is:", library[0].yearPublished);

console.log("Title of the second book is:", library[1].title);
console.log("Author of the second book is:", library[1].author);
/*console.log("Publishing year of the second book is:", library[1].yearPublished); - publishing date before update*/
library[1].yearPublished = 2025;
console.log("The updated publishing year of the second book is:", library[1].yearPublished);

console.log("Title of the third book is:", library[2].title);
console.log("Author of the third book is:", library[2].author);
console.log("Publishing year of the third book is:", library[2].yearPublished);

/* Tehtävä 3
Käytä piste-notaatiota lisätäksesi uuden ominaisuuden `genres` (merkkijonotaulukko) ensimmäiseen kirjaan `library`-taulukossa.
Käytä hakasulkunotaatiota lisätäksesi boolean-tyyppisen ominaisuuden `isAvailable`, joka kertoo onko kirja saatavilla.
*/

library[0].genres = ["fantasy", "adventure"];
console.log("Genres:", library[0].genres);

/* Tehtävä 4
Määrittele konstruktori-funktio nimeltä `Book`, joka luo uusia kirjoja, joilla on `title`, `author`, `yearPublished` ja `genres`.
Luo uusi kirjaolio `Book`-konstruktorilla ja lisää se `library`-kokoelmaan.
*/

class book {
    constructor(title, author, yearPublished, genres) {
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
        this.genres = genres;
    }
}
const book1 = new book("The Hobbit", "J.R.R. Tolkien", 1937, ["fantasy", "adventure"]);
library.push(book1);
console.log(library);

/*
Opettajan huomio: Hypätään tehtävän 5 yli, käyttäjän syötteen kysyminen on liian hankalaa tässä vaiheessa
*/

/* Opettajan huomio: Hypätään tehtävän 6 yli, koska JSON tulee vasta seuraavalla viikolla
 */

/* 
Tehtävä 7
Luo taulukko nimeltä `students`, jossa jokaisella oppilaalla on `name`, `age` ja `grade`.
Tulosta niiden oppilaiden nimet, joiden arvosana on yli 90.
*/

const students = [
    {name: "Alice", age: 20, grade: 95},
    {name: "Bob", age: 22, grade: 85},
    {name: "Charlie", age: 19, grade: 92},
    {name: "David", age: 21, grade: 88},
];
// filter good grades
const goodGrades = students.filter((student) => student.grade > 90);
// print the names of students with good grades
goodGrades.forEach((topStudent) => {
    console.log(topStudent.name);
});

/* Tehtävä 8
Määrittele olio nimeltä `car`, jossa on ominaisuudet `brand`, `model`, `year` ja `isElectric`.
Käytä funktiota tarkistamaan onko auto sähköinen. Jos on, tulosta `"This car is eco-friendly!"`, muussa tapauksessa `"This car runs on fuel."`
*/

const car = {
    brand: "Tesla",
    model: "Model S",
    year: 2022,
    isElectric: true,
};

if (car.isElectric) {
    console.log("This car is eco-friendly!");
} else {
    console.log("This car runs on fuel.");
}

/* Tehtävä 9
Luo `movies`-taulukko, jossa jokainen elokuva on olio, jolla on ominaisuudet `title`, `director` ja `rating`.
Kirjoita silmukka, joka tulostaa kaikkien niiden elokuvien otsikot, joiden arvio on yli 8.
*/

const movies = [
    {title: "Inception", director: "Christopher Nolan", rating: 8.8},
    {title: "The Godfather", director: "Francis Ford Coppola", rating: 9.2},
    {title: "The Room", director: "Tommy Wiseau", rating: 3.7},
    {title: "Pulp Fiction", director: "Quentin Tarantino", rating: 8.9},
];

for (const movie of movies) {
    if (movie.rating > 8) {
        console.log("Good movie:", movie.title);
    }
}

/* Tehtävä 10
Kirjoita funktio `findOldestCar`, joka ottaa vastaan taulukon auto-olioita ja palauttaa auton, jolla on varhaisin `year`.
*/

function findOldestCar(cars) {
    if (cars.length === 0) {
        return null;
    }

    let oldest = cars[0];

    for (let i = 1; i < cars.length; i++) {
        if (cars[i].year < oldest.year) {
            oldest = cars[i];
        }
    }
    return oldest;
}
function findOldestCar2(cars) {
    return cars.reduce((oldest, current) =>
    current.year < oldest.year ? current : oldest
);
}

const carList = [
    { brand: "Toyota", model: "Corolla", year: 2010 },
    { brand: "Ford", model: "Focus", year: 2005 },
    { brand: "Honda", model: "Civic", year: 2018 },
];

console.log("The oldest car is:", findOldestCar (carList));
console.log("The oldest car is:", findOldestCar2 (carList));


/* Tehtävä 11
Määrittele `userProfiles`-taulukko, joka sisältää käyttäjäolioita.
Jokaisella käyttäjällä tulee olla `username`, `email` ja `isAdmin` -ominaisuudet.
Kirjoita funktio, joka suodattaa ja palauttaa vain ne käyttäjät, jotka ovat ylläpitäjiä.
*/

const userProfiles = [
    { username: "Matt", email: "Matt@example.com", isAdmin: true },
    { username: "John", email: "John@example.com", isAdmin: false },
    { username: "Jane", email: "Jane@example.com", isAdmin: true },
];

function getAdmins(users) {
    return users.filter(user => user.isAdmin);
}

console.log("The admins are:", getAdmins(userProfiles));

/* Tehtävä 12
Määrittele taulukko nimeltä `orders`, jossa jokaisella tilauksella on `orderId`, `customerName`, `totalAmount` ja `status` ("pending" tai "completed").
Kirjoita funktio, joka palauttaa vain valmiit tilaukset.
*/

const orders = [
    {
        orderId: 101,
        customerName: "Alice",
        totalAmount: 150,
        status: "completed",
    },
    {
        orderId: 102,
        customerName: "Bob",
        totalAmount: 200,
        status: "pending",
    },
    {
        orderId: 103,
        customerName: "Charlie",
        totalAmount: 300,
        status: "completed",
    },
];
function getCompletedOrders(ordersArray) {
    return ordersArray.filter(order => order.status === "completed");
}

console.log("Completed orders:", getCompletedOrders(orders));

/* Tehtävä 13
Luo olio nimeltä `smartphone`, jolla on ominaisuudet `brand`, `model`, `batteryLife` ja `is5GEnabled`.
Kirjoita funktio, joka tulostaa `"This phone supports 5G!"` jos `is5GEnabled` on `true`, muussa tapauksessa tulostaa `"This phone does not support 5G."`
*/

const smartphone = {
    brand: "Samsung",
    model: "Galaxy S21",
    batteryLife: 24,
    is5GEnabled: true,
};

function check5G(phone) {
    if (phone.is5GEnabled) {
        console.log("This phone supports 5G!");
    } else {
        console.log("This phone does not support 5G.");
    }
}

check5G(smartphone);

/* Tehtävä 14
Määrittele olio nimeltä `fox`, jolla on ominaisuudet `name`, `age` ja `habitat`.
Kirjoita funktio, joka tulostaa `"This fox is young"` jos ikä on alle 3, ja `"This fox is an adult"` jos 3 tai enemmän.
*/

const fox = {
    name: "Foxy",
    age: 2,
    habitat: "forest",
};

function checkFoxAge(fox) {
    if (fox.age < 3) {
        console.log("This fox is young");
    } else {
        console.log("This fox is an adult");
    }
}

checkFoxAge(fox);

/* Tehtävä 15
Määrittele taulukko nimeltä `employees`, jossa jokaisella työntekijällä on `name`, `position` ja `salary`.
Kirjoita funktio, joka laskee kaikkien työntekijöiden yhteenlasketun palkan.
*/

const employees = [
    {name: "Alice", position: "Developer", salary: 3000},
    {name: "Bob", position: "Designer", salary: 2500},
    {name: "Charlie", position: "Manager", salary: 4000},
];
function getTotalSalary(people) {
    let total = 0;
    for (const person of people) {
        total += person.salary;
    }
    return total;
}
console.log("Total salary of all employees is:", getTotalSalary(employees));

function getTotalSalary2(employees) {
    return employees.reduce((sum, employee) => sum + employee.salary, 0);
}
console.log("Total salary of all employees is:", getTotalSalary2(employees));