var ___ = "Fill me in!";

function Animal(name) {
  this.name = name;
}

Animal.prototype = {
  speak: function() {
  },

  getName: function() {
    return this.name;
  },

  whoAmI: function() {
    return this;
  }
}

function Dog(name) {
  this.name = name;
};
Dog.prototype = new Animal();
Dog.prototype.speak = function() {
  return "Woof!";
}

function Duck(name) {
  this.name = name;
};
Duck.prototype = new Animal();
Duck.prototype.speak = function() {
  return "Quack!";
}

var duck = new Duck("Donald");

// exports.test_inheritance_means_using_a_parent_object_as_the_prototype = function(test) {
//   test.equal(___, typeof(duck));
//   test.equal(___, Object.getPrototypeOf(duck) instanceof Animal);
//   test.done();
// };

// At this point, the 'prototype chain' of a Duck object is as follows:
// Duck -> Animal -> Object -> Object.prototype -> null
//
exports.test_objects_ultimately_use_object_as_the_prototype = function(test) {
  var duckPrototype = Object.getPrototypeOf(duck);
  var animalPrototype = Object.getPrototypeOf(duckPrototype);
  var objectPrototype = Object.getPrototypeOf(animalPrototype);
  var noMorePrototypes = Object.getPrototypeOf(objectPrototype);

  test.equal(___, duckPrototype instanceof Animal);
  test.equal(___, animalPrototype instanceof Object);
  test.equal(___, objectPrototype === Object.prototype);
  test.equal(___, noMorePrototypes);
  test.done();
};