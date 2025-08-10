/* Tehtävä 1
Luo olio `weather`, jossa on ominaisuudet `temperature`, `humidity` ja `condition` (esim. "Aurinkoinen", "Sateinen").
Kirjoita funktio, joka tulostaa `"Ota sateenvarjo!"` jos sää on sateinen.
*/

const weather = {
    temperature: 20,
    humidity: 80,
    condition: "Rainy",
};

function checkWeather(w) {
    if (w.condition === "Rainy") {
        console.log("Take an umbrella!");
    }
}
checkWeather(weather);

/* Tehtävä 2
Määrittele olio nimeltä `shoppingCart`, joka sisältää taulukon tuotteista.
Jokaisella tuotteella on `name`, `price` ja `quantity`.
Kirjoita funktio, joka laskee kaikkien ostoskorin tuotteiden kokonaishinnan.
*/

const shoppingCart = {
    products: [
        { name: "Apple", price: 1.5, quantity: 3 },
        { name: "Banana", price: 0.5, quantity: 5 },
        { name: "Orange", price: 2, quantity: 2 },
    ],
};
function calculateTotal(cart) {
    return cart.products.reduce((sum, p) => sum + p.price * p.quantity, 0);
}
console.log(calculateTotal(shoppingCart));

/* Tehtävä 3
Luo taulukko nimeltä `restaurants`, jossa jokainen ravintola on olio, jolla on ominaisuudet `name`, `cuisineType` ja `rating`.
Kirjoita funktio, joka palauttaa vain ne ravintolat, joiden arvio on 4 tai enemmän.
*/

const restaurants = [
    { name: "Italian Bistro", cuisineType: "Italian", rating: 4.5 },
    { name: "Sushi Place", cuisineType: "Japanese", rating: 3.8 },
    { name: "Burger Joint", cuisineType: "American", rating: 4.2 },
];
function topRated(restaurants) {
    return restaurants.filter((r) => r.rating >= 4);
}
console.log(topRated(restaurants));

/* Tehtävä 4
Määrittele olio nimeltä `bankAccount`, jossa on ominaisuudet `accountHolder`, `balance` ja `transactions` (numeroiden taulukko).
Kirjoita funktio, joka laskee kokonaissaldon kaikkien tapahtumien jälkeen.
*/

const bankAccount = {
    accountHolder: "John Doe",
    balance: 1000,
    transactions: [+200, -50, -100, +300],
};
function calculateBalance(account) {
    return account.balance + account.transactions.reduce((sum, t) => sum + t, 0);
}
console.log(calculateBalance(bankAccount));

/* Tehtävä 5
Luo taulukko `students`, jossa jokaisella opiskelijalla on `name`, `scores` (numeroiden taulukko) ja `averageScore` (aluksi null).
Kirjoita funktio, joka laskee ja päivittää kunkin opiskelijan `averageScore`-arvon.
*/

const students = [
    {name: "Anna", scores: [90, 85, 88], averageScore: null},
    {name: "Mika", scores: [78, 82, 80], averageScore: null},
];

function computeAverages(list) {
    list.forEach((s) => {
        const sum = s.scores.reduce((a, b) => a + b, 0);
        s.averageScore = sum / s.scores.length;
    });
}
computeAverages(students);
console.log(students);

/* Tehtävä 6
Määrittele taulukko nimeltä `courses`, jossa jokaisessa kurssissa on `courseName`, `instructor` ja `studentsEnrolled`.
Kirjoita funktio, joka tulostaa niiden kurssien nimet, joissa on yli 30 opiskelijaa.
*/

const courses = [
    { courseName: "Mathematics", instructor: "Smith", studentsEnrolled: 25 },
    { courseName: "Physics", instructor: "Lisa", studentsEnrolled: 35 },
    { courseName: "Chemistry", instructor: "Anna", studentsEnrolled: 40 },
];
function bigCourses(cs) {
    cs.forEach((c) => {
        if (c.studentsEnrolled > 30) {
            console.log(c.courseName);
        }
    });
}
bigCourses(courses);

/* Tehtävä 7
Luo olio `pet`, jossa on ominaisuudet `species`, `name` ja `isVaccinated`.
Kirjoita funktio, joka palauttaa `"Rokotusta tarvitaan"` jos lemmikkiä ei ole rokotettu.
*/

const pet = {
    species: "Dog",
    name: "Buddy",
    isVaccinated: false,
};
function checkVaccination(p) {
    if (!p.isVaccinated) {
        return "Vaccination needed";
    }
    return "Vaccination not needed";
}
console.log(checkVaccination(pet));


/* Tehtävä 8
Määrittele olio nimeltä `city`, jossa on ominaisuudet `name`, `population` ja `landmark`.
Kirjoita funktio, joka tulostaa `"Tämä on suuri kaupunki!"` jos väkiluku ylittää 1 000 000.
*/

const city = {
    name: "Helsinki",
    population: 650000,
    landmark: "Sibelius Monument",
};
function checkCitySize(c) {
    if (c.population > 1000000) {
        console.log("This is a big city!");
    }
}
checkCitySize(city);

/* Tehtävä 9
Luo taulukko `transactions`, jossa jokainen tapahtuma on olio, jolla on `type` ("credit" tai "debit") ja `amount`.
Kirjoita funktio, joka laskee kokonaissaldon kaikkien tapahtumien jälkeen.
*/

const transactions = [
    { type: "credit", amount: 250 },
    { type: "debit", amount: 100 },
    { type: "credit", amount: 50 },
];

function calculateBalances(transactions) {
    console.log("transactions:", transactions); // Debugging log
    return transactions.reduce((balance, t) => {
        return t.type === "credit" ? balance + t.amount : balance - t.amount;
    }, 0);
}
console.log("Initial transactions:", transactions); // Debugging log
console.log(calculateBalances(transactions));

/* Tehtävä 10
Määrittele olio nimeltä `foxPack`, joka sisältää taulukon kettuolioita.
Jokaisella ketulla on `name`, `age` ja `furColor`.
Kirjoita funktio, joka suodattaa ja palauttaa vain ne ketut, jotka ovat alle 2-vuotiaita.
*/

const foxPack = {
    foxes: [
        { name: "Foxy", age: 1.5, furColor: "Red" },
        { name: "Swift", age: 3, furColor: "Brown" },
    ],
};
function filterYoungFoxes(pack) {
    return pack.foxes.filter((f) => f.age < 2);
}
console.log(filterYoungFoxes(foxPack));

/* Tehtävä 11
Luo olio nimeltä `gameCharacter`, jolla on ominaisuudet `name`, `level`, `health` ja `inventory` (taulukko).
Kirjoita funktio, joka tulostaa hahmon koko varustelistan.
*/

const gameCharacter = {
    name: "Warrior",
    level: 10,
    health: 100,
    inventory: ["Sword", "Shield", "Potion"],
};

function printInventory(character) {
    console.log(`${character.name}'s inventory:`);
    character.inventory.forEach((item) =>
        console.log(item));
    }

printInventory(gameCharacter);

/* Tehtävä 12
Määrittele taulukko nimeltä `employees`, jossa jokaisella työntekijällä on `name`, `role` ja `workingHours`.
Kirjoita funktio, joka etsii ja tulostaa ne työntekijät, jotka työskentelevät yli 40 tuntia viikossa.
*/

const employees = [
    {name: "Peter", Role: "Developer", workingHours: 45},
    {name: "Anna", Role: "QA", workingHours: 35},
];
function overtimeStaff(list) {
    list.forEach((e) => {
        if (e.workingHours > 40) {
            console.log(e.name);
        }
    });
}
overtimeStaff(employees);

/* Tehtävä 13
Luo taulukko `musicAlbums`, jossa jokaisella albumilla on `title`, `artist` ja `releaseYear`.
Kirjoita funktio, joka tulostaa ne albumit, jotka on julkaistu vuoden 2000 jälkeen.
*/

const musicAlbums = [
    { title: "Album1", artist: "Artist1", releaseYear: 1999 },
    { title: "Album2", artist: "Artist2", releaseYear: 2005 },
];
function recentAlbums(albums) {
    albums.forEach((a) => {
        if (a.releaseYear > 2000) {
            console.log(a.title);
        }
    });
}
recentAlbums(musicAlbums);

/* Tehtävä 14
Määrittele taulukko nimeltä `cars`, jossa jokaisella autolla on `brand`, `model` ja `horsepower`.
Kirjoita funktio, joka etsii ja palauttaa auton, jolla on suurin hevosvoimamäärä.
*/

const sportsCars = [
    { brand: "Ferrari", model: "488 GTB", horsepower: 660 },
    { brand: "Ford", model: "Mustang", horsepower: 450 },
];
function strongestEngine(list) {
    return list.reduce((strongest, car) => 
        car.horsepower > strongest.horsepower ? car : strongest
);
}
console.log(strongestEngine(sportsCars));

/* Tehtävä 15
Luo taulukko `airports`, jossa jokaisella lentokentällä on `name`, `country` ja `flightsPerDay`.
Kirjoita funktio, joka etsii lentokentän, jolla on eniten lentoja päivässä.
*/

const airports = [
    { name: "Helsinki-Vantaa Airport", country: "Finland", flightsPerDay: 300 },
    { name: "New York JFK", country: "USA", flightsPerDay: 800 },
];
function busiestAirport(list) {
    return list.reduce((max, ap) => 
        ap.flightsPerDay > max.flightsPerDay ? ap : max
);
}
console.log(busiestAirport(airports));