"use strict";

function firstExcercise(statement, array) {
  String.prototype.filter = function () {
    var expStr = array.join("|");
    return this.replace(new RegExp(expStr, "gi"), "")
      .trim()
      .replace(/ +/g, " ");
  };

  return statement.filter();
}

function secondExcercise(array) {
  Array.prototype.bubbleSort = function () {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (array[j] > array[j + 1]) {
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    return array;
  };
  return array.bubbleSort();
}

function thirdExcercise(name, age, course) {
  var Person = function () {};
  Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
  };
  Person.prototype.describe = function () {
    return this.name + ", " + this.age + " years old.";
  };

  var Teacher = function () {};

  Teacher.prototype = new Person();
  Teacher.prototype.teach = function (subject) {
    console.log(this.name + " is now teaching " + subject);
  };

  var me = new Teacher();
  me.initialize(name, age);
  me.teach(course);
}
