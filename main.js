//let, const (var is global, let and const have block-level scope) (let can reassign values)
let page = 30;
page = 31;
// if const it wil be error !
let score;
score = 40;
//even herer const will be error
console.log('page', page);
console.log('score',score);
//----

//datatypes means data directly assigned to memory(its not a resource)
//string. numbers, boolean, null, undefined, symbol

const name ='john';
const age = 30;
const rating = 4.5;
const isCool =true;
const x = null;
const y = undefined;
let z;

console.log('typeof age:', typeof age,'typofisCool:',typeof isCool);

//Concatenation
console.log('my name is '+name+' and i am' +age);
//Template String (ES6-2015)
const hello = (`My name is ${name} and I am ${age}`);
console.log(hello)


//

const s = 'Hello World!';
console.log(s.substring(0, 5)); //give us "Hello" 5 LETTERS

//
const D = 'Hello World!';
console.log(D.substring(0, 5).toUpperCase());

//

const A = 'Hello World!';
console.log(A.split(''));
// 

const B = 'technology, computers, it, code';
console.log(B.split(', '));

/* */ //its comment
//Arrays - variables that holds multiple values

const numbers = new Array(1,2,3,4,5);

console.log(numbers)

const fruits = ['apples', 'oranges', 'pears'];

console.log(fruits[1]);
//xxxx dont do this -> fruits=[] but can do this ->
fruits[3] = 'grapes';

console.log(fruits[3]);

//or

fruits.push('mango');
console.log(fruits);

//or add to beginning

fruits.unshift('strawberries');
console.log(fruits);

//delete last one

fruits.pop();
console.log(fruits);

//check whats Array?

console.log(Array.isArray(fruits)); //true

console.log(Array.isArray('hello')); //false

//indexof
console.log(fruits.indexOf('oranges'));

//object literals(similar to JSON)
const person = {
    firstName:'john',
    lastName:'Doe',
    age: 30,
    hobbies: ['music', 'movies','sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

//we can pull out 
const { firstName, lastName, address: {city}} = person;
console.log(firstName);
console.log(city);

//add properties

person.email = 'john@bkbs.saxu';
console.log(person.email);

//todos
const todos =[
    {
        id:1,
        text: 'Take out trash',
        isCompleted:true
    },
    {
        id:2,
        text: 'Meeting',
        isCompleted:false
    },
    {
        id:3,
        text: 'Dentist',
        isCompleted:true
    },
];

console.log(todos);
console.log(todos[1].text)
// DO JSON!!!

const todoJSON = JSON.stringify(todos);
console.log(todoJSON)

//FOR
for(let i=0; i<= 10; i++){
    console.log(`for Loop Number: ${i}`);
}

//whilel
let i = 0;
while(i <= 10){
    console.log(`while Loop Number: ${i}`);
    i++;
}
//best way to loop through an array(important:Dont use i<=todos.length)it gives error
for(let i=0; i< todos.length; i++){
    console.log('1', todos[i].text);
}
//other way
for(let todo of todos){
    console.log('2', todo.text);
}
//forEach
todos.forEach(function (todo){
    console.log('3', todo.text);
});
//MAP
const todoText = todos.map(function (todo){
    return todo.text;
});

console.log('4', todoText);

//filter
const todoCompleted = todos.filter(function (todo){
    return todo.isCompleted === true;
});

console.log('5', todoCompleted);
//filter vs map (POWERFULL)
const tobeCompleted = todos.filter(function (todo){
    return todo.isCompleted === true;
}).map(function (todo){
    return todo.text;
});

console.log('6', tobeCompleted);

//CONDITIONAL

const V = 11 ;
const color = V > 10 ? 'red' : 'blue';
//red=true , blue=false
console.log(color);

//switch 

const H = 9 ;
const COLOR = H > 10 ? 'red' : 'green';
//red=true , blue=false
console.log(COLOR);
switch (COLOR) {
    case 'red':
        console.log('color is red');
        break;
        case 'blue':
        console.log('color is blue');
        break;
        default:
        console.log('color is NOT red or blue');
        break;
}

//functions

function addNums(num1, num2) {
    console.log(num1 + num2);
}

addNums(7,8);

//CAN save defualt values

function addNumsS(num1 = 1, num2 = 1) {
    console.log(num1 + num2);
}

addNumsS();
//return 
function addNumsSs(num1 = 2, num2 = 2) {
    return num1 + num2;
}

console.log (addNumsSs(5,4));

//use =>
const addnums =(num1 = 3, num2 = 3)=>num1 + num2;

console.log(addnums(9,900));

//example//todos.forEach((todo) => console.log(todo));

//OOP


//Constructor function
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirtHyear =function(){
        return this.dob.getFullYear();
    }
    this.getFullname =function(){
        return`${this.firstName} ${this.lastName}`;
    }
}
//Instantiate object 
const Person1 = new Person('john', 'doe', '4-3-1980');
const Person2 = new Person('Mry', 'Smith', '3-6-1970');

console.log(Person1);
console.log(Person2.getBirtHyear());
console.log(Person2.getFullname());
console.log(Person2)


//if we want functions in prototypes


function Pperson(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    Pperson.prototypes.getBirtHyear =function(){
        return this.dob.getFullYear();
    }
    Pperson.prototypes.getFullname =function(){
        return`${this.firstName} ${this.lastName}`;
    }
}
//Instantiate object 
const Person3 = new Person('HOSS', 'ZADE', '05-19-1983');
console.log(Person3);
console.log(Person3.getBirtHyear());
console.log(Person3.getFullname());

//ES6 (classes were added to javascript)


// Class (SYNTAX SUGER)
class Ppperson{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthyear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return`${this.firstName} ${this.lastName}`;
    }
}

//Instantiate object 
const Person4 = new Ppperson('dash', 'val', '05-19-1980');
console.log(Person4);
console.log(Person4.getBirthyear());
console.log(Person4.getFullName());


//DOM
//window objects
//alert(1);
//window.alert(1);
console.log(window);
//single element
const form = document.getElementById('my-form');
console.log(form);

//Newer
console.log(document.querySelector('h1'))
;
//Multiple elements
console.log(document.querySelectorAll('.item')); //can use arrays methods


console.log(document.getElementsByClassName('item')); //cant use arrays method
//or 
console.log('last', document.getElementsByTagName('li')); //cant use arrays method

//loop
const items = document.querySelectorAll('.item');

items.forEach((item) => console.log('foreach loop', item));

//munapulating DOM or changing (user interface)

//const ul = document.querySelector('.items');


//ul.remove();
//ul.lastElementChild.remove();
//ul.firstElementChild.textContent = 'Hello';
//ul.children[1].innerText = 'Brad';
//ul.lastElementChild.innerHTML= '<h1>Hello</h1>';

//const btn = document.querySelector('.btn');
//btn.style.backgroundColor = 'red';


/* btn.addEventListener((//'click' or 'mouseover) 'mouseover', (e) => {
    e.preventDefault(); //Submit element is like flash
    console.log(e.target.id); 
    document.querySelector('#my-form').style.background = '#ccc' ;
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items')
    .lastElementChild.innerHTML = '<h1>Hello from dom</h1>'
});
*/
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit)

function onSubmit(e) {
    e.preventDefault();

    //console.log(nameInput.value);
    if(nameInput.value === '' || emailInput.value === '') {
        //alert('Please enter fields')
        msg.classList.add('error');
        msg.innerHTML= 'please enter your fields!';

        setTimeout(() => msg.remove(), 3000);
        
    } else {
        //console.log('success')
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`
        ${nameInput.value} : ${emailInput.value}`));
        //noting to do becuase need to append the li to ul

        userList.appendChild(li);

        //clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}

//JavaScript Higher Order Functions & Arrays



const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  
  
  // for(let i = 0; i < companies.length; i++) {
  //   console.log(companies[i]);
  // }
  
  // forEach
  
//   companies.forEach(function(company) {
//     console.log( company.name);
//   });
  
  // filter
  
  // Get 21 and older
  
//   let canDrink = [];
//   for(let i = 0; i < ages.length; i++) {
//     if(ages[i] >= 21) {
//       canDrink.push(ages[i]);
//     }
//   }
//   console.log(canDrink);

//   const canDrink = ages.filter(function(age) {
//     if(age >= 21) {
//       return true;
//     }
//   });
//   

//   const canDrink = ages.filter(age => age >= 21);
//   console.log(canDrink);
  
  // Filter retail companies
  
//   const retailCompanies = companies.filter(function(company) {
//     if(company.category === 'Retail') {
//       return true;
//     }
//   });
//   console.log(retailCompanies)

  
//   const retailCompanies = companies.filter(company => company.category === 'Retail');
  
//   // Get 80s companies
  
//   const eightiesCompanies = companies.filter(company => 
//     (company.start >= 1980 && company.start < 1990));
  
// console.log(eightiesCompanies);

//   // Get companies that lasted 10 years or more
  
//   const lastedTenYears = companies.filter(company => 
//     (company.end - company.start >= 10));
//   console.log(lastedTenYears)


// map


//Create array of companies names
//   const companyNames = companies.map(company =>
//    company.name);
//   console.log(companyNames)


//   const testMap = companies.map(function(company) {
//     return `${company.name} [${company.start} - ${company.end}]`;
//   });
//   

//   const testMap = companies.map(company => `${company.name} 
//   [${company.start} - ${company.end}]`);
  
//   const agesMap = ages.map(age => Math.sqrt(age)).map(age => age * 2);
  
//   console.log(agesMap);
  
  // sort
  
  // Sort companies by start year
  
//   const sortedCompanies  = companies.sort(function(c1, c2) {
//     if(c1.start > c2.start) {
//       return 1;
//     } else {
//       return -1;
//     }
//   });
//   console.log(sortedCompanies)

//   const sortedCompanies = companies.sort((a, b) =>
//    (a.start > b.start ? 1 : -1));
//    console.log(sortedCompanies)
  
  // Sort ages
//   const sortAges = ages.sort((a, b) => a - b);
  
//   console.log(sortAges);
  
  
  // reduce
  
//   let ageSum = 0;
//   for(let i = 0; i < ages.length; i++) {
//     ageSum += ages[i];
//   }
 
  
//   const ageSum = ages.reduce(function(total, age) {
//     return total + age;
//   }, 0);
//   

//   const ageSum = ages.reduce((total, age) => total + age, 0);

//   console.log(ageSum);

  // Get total years for all companies
   
//   const totalYears = companies.reduce(function(total, company) {
//     return total + (company.end - company.start);
//   }, 0);

//   console.log(totalYears);
  
//   const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
  
//   // Combine Methods
  
//   const combined = ages
//     .map(age => age * 2)
//     .filter(age => age >= 40)
//     .sort((a, b) => a - b)
//     .reduce((a, b) => a + b, 0);
  
//   console.log(combined);
document.addEventListener('DOMconstructloaded', );
function gowhile() {
    
}
  