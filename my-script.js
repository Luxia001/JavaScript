var hello = "Hello";
console.log(hello);
let x = 5;
{
  let x = 10;
  console.log("x : ", x);
}
console.log("x : ", x);
// n=prompt("Hello","xxx")
// alert("Hello "+ n +" How are you?")
hello = "hi";
console.log(hello);
hello = true;
console.log(1 + hello);
var total = 1 + parseInt("5.01 hello");
console.log(total);
console.log((total = parseFloat(total + "2.1 Hi")));
console.log(total);
console.log(typeof total);
scores = new Array();
scores[0] = 0;
scores[1] = 1;
scores[2] = 2;
console.log(scores[0] + scores[1] + scores[2]);
scores = [0, 1, 2];
console.log(scores);
document.write(scores.length);
test = "This is a test";
document.write(test.charAt(2).toUpperCase());
// alert(test.substring(0,3))
document.write(test.indexOf("is"));
document.write(test.indexOf("is", 6));
document.write("<p>; : \"  '</p>");
const person = {
  first: "Panuwat",
  last: "Vigisiriwat",
  country: "Thailan",
  city: "Samutprakan",
};
console.log(person.first);
for (i = 0; i < 5; i++) {
  if (i == 0) {
    document.write("0");
  } else if (i % 2 == 0) {
    document.write("#");
  } else {
    document.write("^");
  }
}
function showMessage() {
  alert("Message !!!");
}
function myClircleArea(radius = 0) {
  var resualt = 3.14 * radius * radius;
  alert("area circle : " + resualt.toFixed(2));
}
function clickHandler() {
  var input;
  do {
    input = prompt("Input : ");
    input = parseInt(input);
  } while (isNaN(input));
  {
    myClircleArea(input);
  }
}
function myClircleLength(radius) {
  let x = 2 * 3.14 * radius;
  return x;
}
var area = myClircleLength(1);
document.write("<br>");
document.write(area);

var area = (radius = 0) => {
  let x = 2 * 3.14 * radius;
  return x;
};
document.write("<br>");
document.write(area(1));

function Gamer() {
  this.playTime = 0;
  setInterval(() => {
    this.playTime++;
  }, 1000);
}
setInterval(function () {
  // console.log(gamer.playTime)
}, 2000);
document.write("<br>");
function multiply(multi, ...rest) {
  var multiply = rest.map((x) => multi * x);
  var sort = rest.sort();
  var size = rest.length;
  return multiply + "\tsort = " + sort + "\tcount = " + size;
}
document.write("value = 1,5,4,3,2");
document.write("<br>");
document.write("value * 2 = " + multiply(2, 1, 5, 4, 3, 2));

function* myGenerator() {
  var x = 5;
  yield "first value x = " + x;
  x = 5 * 2;
  yield "second value x = " + x;
  x = Math.pow(5, 2);
  return x;
}
var iterator = myGenerator();

first = iterator.next();
second = iterator.next();
third = iterator.next();
document.write("<br>");
document.write("value : " + first.value + " , done : " + first.done);
document.write("<br>");
document.write("value : " + second.value + " , done : " + second.done);
document.write("<br>");
document.write(
  "value : third value = : " + third.value + " , done : " + third.done
);

var myCalulator = (x, y, callback) => {
  var resualt = callback(x, y);
  return resualt;
};
var plusFunc = (a, b) => a + b;
var minusFunc = (a, b) => a - b;
var multiplyFunc = (a, b) => a * b;
var divideFunc = (a, b) => {
  if (b === 0 || 1 / b === -Infinity) {
    throw new Error("can't be calculate " + b);
  }
  return a / b;
};
var result1 = myCalulator(9, 3, divideFunc);
console.log(9 + "/" + 3 + "=" + result1);
var result2 = myCalulator(10, 5, minusFunc);
console.log(10 + "-" + 5 + "=" + result2);

const myClosure = () => {
  var count = 0;
  var increaseFunction = () => {
    count++;
    console.log(`Lates num : ${count}`);
  };
  return increaseFunction;
};
var increaseFunc = myClosure();
increaseFunc();
increaseFunc();
increaseFunc();

const rectangle = {
  w: 10,
  l: 5,
  area: function () {
    return this.w * this.l;
  },
  parimeter: function () {
    return (this.w + this.l) * 2;
  },
};
document.write("<br>width : " + rectangle.w + "\tlong : " + rectangle.l);
document.write(
  "<br>area : " + rectangle.area() + "\tround range : " + rectangle.parimeter()
);

const rectangle2 = new Object();
rectangle2.w = 5;
rectangle2.l = 10;
rectangle2.area = function () {
  return this.w * this.l;
};
rectangle2.perimeter = function () {
  return 2 * (this.w + this.l);
};
document.write("<br>width : " + rectangle2.w + "\tlong : " + rectangle2.l);
document.write(
  "<br>area : " +
    rectangle2.area() +
    "\tround range : " +
    rectangle2.perimeter()
);

function Employee(first, last, age, depart) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.department = depart;
  this.fullname = function () {
    return (
      "<br>Fullname : " +
      this.firstName +
      " " +
      this.lastName +
      "\tAge : " +
      this.age
    );
  };
}
Employee.prototype.start = 2010;
Employee.prototype.period = function () {
  const d = new Date();
  return d.getFullYear() - this.start;
};
const emp = new Employee("Ale", "Baba", 24, "Aphabet");
document.write(
  emp.fullname() +
    "\tDepartment : " +
    emp.department +
    "\tPeriod : " +
    emp.period()
);

class TwoDShape {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  show() {
    this.showD = "Width and height are " + this.width + " and " + this.height;
    return this.showD;
  }
}
class Triangle extends TwoDShape {
  area() {
    return (this.height * this.width) / 2;
  }
}
var t = new Triangle();
t.height = 10;
t.width = 10;
document.write("<br>" + t.show());
document.write("<br>Area triangle : " + t.area());

var myJSONtxt01 =
  "{" + '"course" : "JavaScript Basic",' + '"code" : "JS001M"' + "}";

var myJSONtxt02 =
  "{" +
  '"students" : [' +
  '{ "firstName": "Tanong","LastName":"Srisiam"},' +
  '{ "firstName": "Kwangnoi","LastName":"Dachsataporn"},' +
  '{ "firstName": "Orapan","LastName":"Pankeaw"},' +
  '{ "firstName": "Bumroung","LastName":"Dumnenkai"}' +
  "]" +
  "}";

var objBasic = JSON.parse(myJSONtxt01);
var objComplex = JSON.parse(myJSONtxt02);
console.log(`
Name Subject: ${objBasic.course}
Code Subject: ${objBasic.code}
`);
console.log(
  `Name Student: ${objComplex.students[0].firstName} ${objComplex.students[0].LastName}`
);

console.log("10 : " + isFinite("10") + ", Hello : " + isFinite("Hello"));
console.log(Number("1") + " " + parseFloat(1) + " " + String(1));
const myArray = [1.01, 2.48, 3.79, 4.21];
const newArray = myArray.map((item) => {
  return Math.floor(item);
});
console.log(myArray);
console.log(newArray);

const myRequest = (data, callback) => {
  const response = 10 + data;
  const error = undefined;
  const result = callback(error, response);
  return result;
};
const myCallback = (error, res) => {
  if (error) {
    return "You have got Error";
  } else {
    return res;
  }
};
const result = myRequest(10, myCallback);
console.log(result);

const myAsync = (callback) => {
  console.log("Start");
  setTimeout(() => {
    const result = callback("Hello");
    console.log(result);
  }, 0);
  console.log("Finish");
};
myAsync((message) => {
  return message + " Async ";
});

const p = new Promise(function (reslove, reject) {
  setTimeout(function () {
    reslove({ id: 1, name: "jerawuth" });
    reject(new Error("ERROR 404 Bad Request"));
  }, 2000);
});
console.log("Before Asynchronous");
p.then((result) => {
  console.log("result is : ", result);
}).catch(function (err) {
  console.log(err.message);
});
console.log("After Asynchronous");

const getStudent = (id) => {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      let name;
      name = "Jeerawuth";
      if (name) {
        reslove({ id: id, name: name });
      } else {
        reject(new Error("Cannot get the result"));
      }
    }, 2000);
  });
};
const resultStudent = getStudent(3);
resultStudent
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

myPromise = Promise.reject(new Error("You have got error"));
myPromise.catch((err) => {
  console.log(err);
});

myPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The first route to my home!");
    resolve(1);
  }, 3000);
});
myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The second route to my home!!");
    resolve(2);
  }, 2000);
});
Promise.all([myPromise1, myPromise2]).then((result) => {
  console.log(result);
});

myPromise1 = new Promise((reslove, reject) => {
  setTimeout(() => {
    console.log("link 1");
    reslove(1);
  }, 3000);
});
myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("link 2");
  resolve(2);
  }, 2000)
  
})
Promise.race([myPromise1,myPromise2])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.log(error.message);
  });

const myAsyncFunc = async() => {
  const result = await Promise.resolve('Hello Async')
  console.log(result)
}
myAsyncFunc()