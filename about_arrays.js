var ___ = "Fill me in!";

exports.arrays_are_just_objects = function(test) {
	test.equal(___, typeof([]));
	test.done();
};

exports.arrays_are_defined_using_square_brackets = function(test) {
	var fruits = ['mango', 'pear', 'banana'];
	test.equal(___, fruits[0]);
	test.equal(___, fruits[1]);
	test.equal(___, fruits[2]);
	test.equal(___, fruits["0"]);
	test.equal(___, fruits["1"]);
	test.equal(___, fruits["2"]);
	test.equal(___, fruits.length);
	test.done();
};

exports.arrays_can_be_defined_using_new = function(test) {
	var fruits = new Array('mango', 'pear', 'banana');
	test.equal(___, fruits[0]);
	test.equal(___, fruits[1]);
	test.equal(___, fruits[2]);
	test.equal(___, fruits.length);
	test.done();
};

exports.subarrays_using_splice = function(test) {
  var daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  var workingWeek = daysOfWeek.splice(0, 5);
  test.equal(___, workingWeek);
  test.done();
};

exports.arrays_used_are_like_a_stack = function(test) {
	var fruits = [];
	fruits.push("mango");
	fruits.push("apple");
	fruits.push("pear");

	test.equal(___, fruits[0]);
	test.equal(___, fruits[1]);
	test.equal(___, fruits[2]);
	test.equal(___, fruits.pop());
	test.equal(___, fruits.pop());
	test.equal(___, fruits.pop());
	test.done();
};

exports.arrays_can_be_used_as_a_queue = function(test) {
	var fruits = [];
	fruits.push("mango");
	fruits.push("apple");
	fruits.push("pear");

	test.equal(___, fruits.unshift());
	test.equal(___, fruits.unshift());
	test.equal(___, fruits.unshift());
	test.done();
};

exports.arrays_truncate_elements_when_length_is_set = function(test) {
	var fruits = ['mango', 'pear', 'strawberry'];
	fruits.length = 2;
	test.equal(___, fruits[0]);
	test.equal(___, fruits[1]);
	test.equal(___, fruits[2]);
	test.equal(___, fruits.length);
	test.done();
};

exports.arrays_create_empty_elements_when_elements_are_set = function(test) {
	var fruits = [];
	fruits[2] = 'mango';

	test.equal(___, fruits.length);
	test.equal(___, fruits[0]);
	test.equal(___, fruits[1]);
	test.equal(___, fruits[2]);
	test.done();
};

exports.arrays_join_method_to_create_a_string = function(test) {
	var url_params = ['category', '2', 'products', '1'];

	test.equal(___, url_params.join("/"));
	test.done();
};
