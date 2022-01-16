(function () {
    'use strict';


    angular.module('myApp', []).controller('repeatController', repeatController);
    repeatController.$inject = ['$scope'];

    function repeatController($scope) {
        
    };
})();

// *****************************************************************************
// Using JavaScript -- Prototypal Inheritance
// Parent
var parent = {
    value : "parentValue",
    obj : {
        objValue : "parentObjValue"
    },
    walk : function () {
        console.log("Walking!!");
    }
};

// child
var child = Object.create(parent);

console.log("CHILD - child.value : ", child.value);
console.log("CHILD - child.obj.objValue : ", child.obj.objValue);
console.log("PARENT - parent.value : ", parent.value);
console.log("PARENT - parent.obj.objValue : ", parent.obj.objValue);
console.log("PARENT : ", parent);
console.log("CHILD : ", child);

child.value = "childValue";
child.obj.objValue = "childObjValue";
console.log("** CHANGED : child.value : 'childValue'");
console.log("** CHANGED : child.obj.objValue : 'childObjValue'");
console.log("CHILD - child.value : ", child.value);
console.log("CHILD - child.obj.objValue : ", child.obj.objValue);
console.log("PARENT - parent.value : ", parent.value);
console.log("PARENT - parent.obj.objValue : ", parent.obj.objValue);
console.log("PARENT : ", parent);
console.log("CHILD : ", child);

console.log("child.obj === parent.obj ? ", child.obj === parent.obj);

// GrandChild

var grandChild = Object.create(child);
console.log("GrandChild : ", grandChild);
grandChild.walk();



// ***Function Constructors

// function Dog(name) {
//     this.name = name;
//     console.log("'this' is  : ", this);
// }

// var myDog = new Dog("Max");
// console.log("myDog : ", myDog);

// // Not being use as a function constructor
// Dog("Max2");