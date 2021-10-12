function getUserName(firstName, secondName){
    var fullName = "Your name is: " + firstName + " " + secondName;
    return fullName;
}

console.log(getUserName("Matej", "Planeta"));

var logInInfo = {
    nickname: "Jupiter090",
    firstName: "Matej",
    lastName: "Planeta",
    userID: 3569,
    gender: "male",
    display: function () {
        this.nickname = "Jupiter";
        console.log(this.nickname);
        console.log(this.userID);
    }
};
logInInfo.display();

function isGreater(a, b){
    if (a>b) {
        console.log(a + " is greater than " + b);
    }else{
        console.log(a + " is not greater than " + b);
    }
}
function isEqual(a, b){
    if (a===b) {
        console.log(a + " is equal to " + b);
    }else{
        console.log(a + " isn't equal to " + b)
    }
}
isGreater(20, 3);
isEqual(55, 66);

function returnStops(){
    console.log("Im here")
    return "";
    console.log("Im not here")
}

console.log(returnStops());

function displayExercise(time, exercise){
    for (var i = 0; i <= time; i++) {
        console.log(i + " " + exercise);
    }
}

displayExercise(20, "Push-Up");

var price = (total=0, discount=0) =>{
    var operation = total-discount;
    return "Total is " + operation;
}

console.log(price(1265, 500));

class UserInfo{
    constructor(userName, UserID){
        this.userName = userName
        this.userID = UserID
    }
}


var displayUser = (name, UID) =>{
    var User = new UserInfo(name, UID);
    console.log(name);
    console.log(UID);
}

displayUser("Jupiter090", 001);

class Dog{
    constructor(Dog){
        this.Dog = Dog;
    }
    eat(food) {
        if (food==="treat") {
            console.log("Nom nom");
        }else{
            console.log("You killed the dog!!!")
        }
        
    }
}

var dog = new Dog("Puppy");
dog.eat("s");

class user{
    constructor(name, isOnline){
        this.name = name
        this.isOnline = isOnline
    }
}

var user1 = new user("John Walley", true);
var user2 = new user("Rick Astley", true);
var user3 = new user("Matej Planeta", false);

user1.isOnline = false;
user3.isOnline = true;

console.log(user1);
console.log(user2);
console.log(user3);

class animal{
    constructor(name, horsepower=100){
        this.horsepower = horsepower
        this.doors = 4
        this.name = name
    }
}

class dog1 extends animal{
    constructor(horsepower, turbo){
        super(horsepower)
        this.turbo = turbo
    }
    bark(){
        console.log("Woof Woof!");
    }
}

var dog = new dog1("Puppy", 100);

console.log(dog);
dog.bark();

var šObsah = {
    dlzka: 152,
    sirka: 52,
    obsah: function(){
        var obsah = this.dlzka * this.sirka;
        return obsah + " cm"
    }
}

console.log(šObsah.obsah());

function greetUser(time){
    if (time <= 12) {
        console.log("Good morning its " + time + " o'clock");
    }
    else if (time <= 17) {
        console.log("Good afternoon its " + time + " o'clock");
    }
    else if (time <=22) {
        console.log("Good evening its " + time + " o'clock");
    }else if (time <= 23){
    console.log("Good nigth its " + time + " o'clock");
    }
    else{
        console.log("Syntax error!")
    }
}

var name = "John";

for (var i = 0; i < 21; i++) {
    console.log("Booting...");
}
console.log("Hello " + name + ".")

greetUser(23);