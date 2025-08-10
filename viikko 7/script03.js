/* Tehtävä 1
Luo konstruktori-funktio `User`, joka ottaa parametreina `username` ja `email`.
Sen tulee luoda olio, jolla on nämä ominaisuudet sekä metodi `showInfo`, joka tulostaa käyttäjän tiedot.
Luo uusi käyttäjä ja kutsu `showInfo()`.
*/

function User(username, email) {
    this.username = username;
    this.email = email;
    this.showInfo = function() {
        console.log(`User: ${this.username}, Email: ${this.email}`);
    };
}
const u1 = new User("alessio", "alessio@example.com");
u1.showInfo();

/* Tehtävä 2
Muokkaa tehtävää 1: Käytä ES6 `class`-syntaksia `User`-luokan määrittelyyn.
Lisää metodi `changeEmail(newEmail)`, joka päivittää käyttäjän sähköpostiosoitteen.
*/

class User2 {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    showInfo() {
        console.log(`User: ${this.username}, Email: ${this.email}`);
    
    }
    changeEmail(newEmail) {
        this.email = newEmail;
        console.log(`Updated Email: ${this.email}`);
    }
}
const u2 = new User2("uotila", "uotila@old.fi");
u2.showInfo();
u2.changeEmail("j.uotila@fi");
u2.showInfo();

/* Tehtävä 3
Luo olio `theme`, jolla on ominaisuudet `name` (light tai dark) ja `isActive`.
Lisää HTML:ään painike. Kun sitä klikataan, vaihdetaan teema light ↔ dark ja päivitetään `isActive`-arvo.
*/

const theme = { name: "light", isActive: true };

const themeButton = document.getElementById("themeBtn");
themeButton.addEventListener("click", () => {
    theme.name = theme.name === "light" ? "dark" : "light";
    theme.isActive = !theme.isActive;
    document.body.setAttribute("data-theme", theme.name);
    console.log(`Theme: ${theme.name}, isActive: ${theme.isActive}`);
});

/* Tehtävä 4
Luo olio `counter`, jolla on ominaisuus `value`.
Lisää HTML:ään kaksi painiketta: toinen kasvattaa `value`, toinen pienentää.
Näytä `value` HTML-elementissä ja päivitä se reaaliaikaisesti painikkeiden avulla.
*/

const counter = { value: 0 };
const elVal = document.getElementById("value");

document.getElementById("increase").addEventListener("click", () => {
    counter.value++;
    elVal.textContent = counter.value;
});

document.getElementById("decrease").addEventListener("click", () => {
    counter.value--;
    elVal.textContent = counter.value;
});

/* Tehtävä 5
Luo olio `product`, jolla on `name`, `price` ja `quantity`.
Lisää HTML:ään syöttökenttä, johon käyttäjä voi syöttää ostettavan määrän.
Päivitä `quantity` ja näytä kokonaishinta dynaamisesti.
*/

const product = { name: "Apple", price: 2, quantity: 10};
document.getElementById("itemName").textContent = product.name;
document.getElementById("itemPrice").textContent = product.price;

const input = document.getElementById("Quantity");
const totalPriceEl = document.getElementById("total");

function update() {
    product.quantity = input.value;
    totalPriceEl.textContent =  `total: ${product.price * product.quantity} €`;
}

input.addEventListener("input", update);
update();

/* Tehtävä 6
Määrittele konstruktori `Task`, joka ottaa `title`, `description` ja `completed`.
Lisää HTML:ään painike, jota painamalla lisätään uusi `Task`-olio `tasks`-taulukkoon ja näytetään se sivulla.
*/

function Task(title, description, completed = false) {
    this.title = title;
    this.description = description;
    this.completed = completed;
}

const tasks = [];

const button = document.getElementById("addTask");
button.addEventListener("click", () => {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const completed = document.getElementById("completed").checked;
    const task = new Task(title, description, completed);
    tasks.push(task);
    render();
});

function render() {
    const ul = document.getElementById("taskList");
    ul.innerHTML = "";
    tasks.forEach((task) => {
        const li = document.createElement("li");
        li.textContent = 
        `${task.title}: ${task.description} ` + `(Completed: ${task.completed})`;
        ul.appendChild(li);
    });
}


/* Tehtävä 7
Luo konstruktori-funktio `Car`, joka ottaa `brand`, `model` ja `year`.
Lisää konstruktoriin metodi `age()`, joka laskee auton iän.
Luo uusi `Car`-olio ja näytä sen ikä verkkosivulla.
*/
document.addEventListener("DOMContentLoaded", () => {
    function Car(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    Car.prototype.age = function() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    };

    const myCar = new Car("Toyota", "Corolla", 2015);
    document.getElementById("carInfo").textContent = 
        `Car: ${myCar.brand} ${myCar.model}, Age: ${myCar.age()} years`;
});

/* Tehtävä 8
Luo taulukko `users`, jossa jokaisella käyttäjällä on `name` ja `score`.
Lisää HTML:ään painike, joka lajittelee käyttäjät pistemäärän mukaan laskevasti ja päivittää näkyvän listan.
*/

document.addEventListener("DOMContentLoaded", () => {
    const users = [
        { name: "Alice", score: 50 },
        { name: "Bob", score: 75 },
        { name: "Charlie", score: 60 }
    ];

    function renderUsers() {
        const ul = document.getElementById("userList");
        ul.innerHTML = "";
        users.forEach((user) => {
            const li = document.createElement("li");
            li.textContent = `${user.name}: ${user.score}`;
            ul.appendChild(li);
        });
    }

    document.getElementById("sortUsers").addEventListener("click", () => {
        users.sort((a, b) => b.score - a.score);
        renderUsers();
    });

    renderUsers();
});

/* Tehtävä 9
Luo olio `shoppingList`, jolla on taulukko `items`.
Lisää syöttökenttä ja painike, joiden avulla käyttäjät voivat lisätä uusia tuotteita `items`-taulukkoon ja päivittää näkyvän listan.
*/

const shoppingList = { items: [] };

function renderList() {
    const ul = document.getElementById("shoppingList");
    ul.innerHTML = "";
    shoppingList.items.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
}
document.getElementById("addItem").addEventListener("click", () => {
    const input = document.getElementById("itemInput");
    const val = input.value.trim();
    if (!val) return;
    shoppingList.items.push(val);
    renderList();
    input.value = "";
    input.focus();
});

/* Tehtävä 10
Luo taulukko `posts`, jossa jokaisella postauksella on `title`, `content` ja `likes`.
Lisää jokaisen postauksen viereen "Tykkää"-painike, joka kasvattaa `likes`-määrää ja päivittää näkymän.
*/

const posts = [
    { title: "First post", content: "This is my first post!", likes: 0 },
    { title: "Second post", content: "This is my second post!", likes: 2 },
];

function renderPosts() {
    const ul = document.getElementById("posts");
    ul.innerHTML = "";
    posts.forEach((post, index) => {
        const li = document.createElement("li");
        li.innerHTML = 
            `<h3>${post.title}</h3><p>${post.content}</p>` +
            `<button data-id="${index}">Tykkää (${post.likes})</button>`;
        ul.appendChild(li);
    });

    ul.querySelectorAll("button").forEach((button) => {
        button.addEventListener("click", (e) => {
            const idx = parseInt(e.target.dataset.id, 10);
            posts[idx].likes++;
            renderPosts(); // render post doesn't react if it isn't here
        });
    });
}

renderPosts(); // This makes sure the posts are rendered when the page loads

/* Tehtävä 11
Luo konstruktori-funktio `Employee`, jolla on `name`, `position` ja `salary`.
Lisää metodi `increaseSalary(percent)`, joka kasvattaa palkkaa annetulla prosentilla.
Luo työntekijä ja nosta hänen palkkaansa dynaamisesti.
*/

function Employee(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
}

Employee.prototype.increaseSalary = function(percent) {
    this.salary += this.salary * (percent / 100);
};

const emp = new Employee("John Doe", "Developer", 50000);

function renderEmployee() {
    const employeeInfo = document.getElementById("employeeInfo");
    employeeInfo.textContent = 
        `Name: ${emp.name}, Position: ${emp.position}, Salary: €${emp.salary.toFixed(2)}`;
}

document.getElementById("increaseSalaryBtn").addEventListener("click", () => {
    const percent = parseFloat(document.getElementById("salaryIncrease").value);
    if (!isNaN(percent) && percent > 0) {
        emp.increaseSalary(percent);
        renderEmployee();
    }
});

renderEmployee();

/* Tehtävä 12
Luo olio `timer`, jolla on `seconds` ja metodi `start()`, joka laskee sekunteja ylöspäin.
Näytä ajastin HTML-elementissä ja päivitä se sekunnin välein.
*/

const timer = {
    seconds: 0,
    intervalId: null, // To store the interval ID
  
    start() {
      if (this.intervalId) return; // Prevent multiple intervals
      this.intervalId = setInterval(() => {
        this.seconds++;
        document.getElementById("timer").textContent = `${this.seconds} seconds`;
      }, 1000);
    },
  
    stop() {
      clearInterval(this.intervalId);
      this.intervalId = null; // Reset the interval ID
    },
  
    reset() {
      this.stop();
      this.seconds = 0;
      document.getElementById("timer").textContent = `${this.seconds} seconds`;
    },
  };
  
  // Add event listeners for the timer buttons
  document.getElementById("start").addEventListener("click", () => {
    timer.start();
  });
  
  document.getElementById("stop").addEventListener("click", () => {
    timer.stop();
  });
  
  document.getElementById("reset").addEventListener("click", () => {
    timer.reset();
  });

/* Tehtävä 13
Luo konstruktori-funktio `Book`, joka ottaa parametreina `title`, `author` ja `pages`.
Luo yksinkertainen kirjastosovellus, jonka avulla käyttäjät voivat lisätä kirjoja HTML-lomakkeen kautta ja näyttää ne dynaamisesti.
*/

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

const library = [];

function renderBooks() {
    const bookList = document.getElementById("bookList");
    if (!bookList) {
        console.error("Element with id 'bookList' not found in the DOM.");
        return;
    }
    console.log("Rendering books:", library);
    bookList.innerHTML = "";
    library.forEach((book, index) => {
        const li = document.createElement("li");
        li.textContent = `${book.title} by ${book.author}, ${book.pages} pages`;
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => {
            library.splice(index, 1);
            renderBooks();
        });
        li.appendChild(removeButton);
        bookList.appendChild(li);
    });
}

document.getElementById("bookForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const form = e.target; // Get the form element that triggered the event
    const titleInput = form.querySelector("#title");
    const authorInput = form.querySelector("#author");
    const pagesInput = form.querySelector("#pages");

    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    const pages = pagesInput.value.trim();

    console.log("Title input:", title);
    console.log("Author input:", author);
    console.log("Pages input:", pages);

    const pagesNumber = parseInt(pages, 10);

    const newBook = new Book(title, author, pages);
    console.log("New book object:", newBook);
    library.push(newBook);
    console.log("Library array:", library);
    renderBooks();
    form.reset();
});

/* Tehtävä 14
Luo olio `foxTracker`, jolla on `foxes`-taulukko.
Lisää syöttökenttä ja painike, joiden avulla käyttäjät voivat lisätä uusia kettuja (nimi ja sijainti) taulukkoon.
Näytä kettujen lista dynaamisesti HTML-elementissä.
*/
const foxTracker = {
    foxes: []
};

const foxNameInput = document.getElementById("foxName");
const foxLocationInput = document.getElementById("foxLocation");
const addFoxButton = document.getElementById("addFox");
const foxListElement = document.getElementById("foxesList"); // <-- Changed ID here

function renderFoxes() {
    foxListElement.innerHTML = "";
    foxTracker.foxes.forEach(fox => {
        const li = document.createElement("li");
        li.textContent = `${fox.name} (Location: ${fox.location})`;
        foxListElement.appendChild(li);
    });
}

addFoxButton.addEventListener("click", () => {
    const name = foxNameInput.value.trim();
    const location = foxLocationInput.value.trim();

    const newFox = { name: name, location: location };
    foxTracker.foxes.push(newFox);
    renderFoxes();
    foxNameInput.value = "";
    foxLocationInput.value = "";
    foxNameInput.focus();
});

renderFoxes();