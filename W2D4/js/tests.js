"use strict";

describe("filter", function () {
    describe("The function returns the string after removing all the banned words in array['Esperanto','State','Function'] ", function () {
        let statement = "Yo hablo Esperanto en el Function con State";
        let array = ['Esperanto','State','Function'];
        let statementExpected = "Yo hablo en el con";
        it(`the statement ${statement} with banned words are ${statementExpected}`, function () {
            assert.equal(firstExcercise(statement,array), statementExpected);
        });
    });
});

describe("bubbleSort", function () {
    describe("sort array the elements in the array [60, 10, 24, 5]", function () {
        let array = [60, 10, 24, 5];
        let expected = [5, 10, 24, 60];
        it(`${array} sort of all the elements is ${expected}`, function () {
            assert.equal(secondExcercise(array).toString, expected.toString);
        });
    });
});