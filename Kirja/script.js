const students = [
    {name: "Lisa", age: 28, grade: 88},
    {name:"Matt", age: 27, grade: 98},
    {name:"Emma", age: 32, grade: 70},
    {name:"Antony", age: 42, grade: 95 }
]

let goodGrades = students.filter(student => student.grade > 90);

goodGrades.forEach(topStudent => {
console.log("The name of the top student is", topStudent.name, "and their grade is", topStudent.grade, "and they are", topStudent.age, "years of age");
} )


const car = {
    brand: "Ferrari",
    model: "Enzo",
    year: 2002,
    isElectric: false,
    engine: "6.0 L Tipo F140 B V12",
    horsepower: 660
}

const car2 = {
    brand: "Tesla",
    model: "Model S",
    year: 2022,
    isElectric: true,
    engine: "Electric",
}

console.log("The car is a", car.brand, car.model, "from the year", car.year);

if ( car.isElectric == true ){
    console.log("The car is eco-friendly");
 } else {
        console.log("the car runs on fossil fuel")
 }

 if ( car.engine == "6.0 L Tipo F140 B V12"){
    console.log("Hell yeah, it has a v12 engine");
 } else {
    console.log("Questa non è una Ferrari! Vaffanculo!");
 }

 console.log("The car is a", car2.brand, car2.model, "from the year", car2.year);

if ( car2.isElectric == true ){
    console.log("The car is eco-friendly");
 } else {
        console.log("the car runs on fossil fuel")
 }

 if ( car2.engine == "6.0 L Tipo F140 B V12"){
    console.log("Hell yeah, it has a v12 engine");
 } else {
    console.log("Questa non è una Ferrari! Vaffanculo!");
 }
