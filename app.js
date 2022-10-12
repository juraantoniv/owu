//-------------------------------------------------------
//2
var User = /** @class */ (function () {
    function User(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    return User;
}());
var user = new User('Max', 18, 'male');
var All = /** @class */ (function () {
    function All(a, b, inc, age) {
        this.a = a;
        this.b = b;
        this.inc = inc;
        this.age = age;
    }
    All.prototype.Sum = function () {
        return this.a + this.b;
    };
    All.prototype.incAge = function () {
        this.age += this.inc;
        return this.age;
    };
    All.prototype.showSum = function () {
        return console.log(this.b + this.b);
    };
    return All;
}());
function sum(a, b) {
    return a + b;
}
function showSum(a, b) {
    console.log(a + b);
}
function incAge(someUser, inc) {
    someUser.age += inc;
    return someUser;
}
console.log(sum(1, 2));
showSum(2, 3);
incAge(user.age, 2);
