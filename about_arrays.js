exports.arrays_are_just_objects = function(test) {
	test.equal('object', typeof([]));
	test.done();
};

exports.arrays_are_defined_using_square_brackets = function(test) {
	var fruits = ['mango', 'pear', 'banana'];
	test.equal('mango', fruits[0]);
	test.equal('pear', fruits[1]);
	test.equal('banana', fruits[2]);
	test.equal('mango', fruits["0"]);
	test.equal('pear', fruits["1"]);
	test.equal('banana', fruits["2"]);
	test.equal(3, fruits.length);
	test.done();
};

exports.arrays_can_be_defined_using_new = function(test) {
	var fruits = new Array('mango', 'pear', 'banana');
	test.equal('mango', fruits[0]);
	test.equal('pear', fruits[1]);
	test.equal('banana', fruits[2]);
	test.equal(3, fruits.length);
	test.done();
};

exports.subarrays_using_splice = function(test) {
  var daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  var workingWeek = daysOfWeek.splice(0, 5);
  test.deepEqual(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], workingWeek);
  test.done();
};

exports.arrays_used_are_like_a_stack = function(test) {
	var fruits = [];
	fruits.push("mango");
	fruits.push("apple");
	fruits.push("pear");

	test.equal('mango', fruits[0]);
	test.equal('apple', fruits[1]);
	test.equal('pear', fruits[2]);
	test.equal('pear', fruits.pop());
	test.equal('apple', fruits.pop());
	test.equal('mango', fruits.pop());
	test.done();
};

exports.arrays_can_be_used_as_a_queue = function(test) {
	var fruits = [];
	fruits.push("mango");
	fruits.push("apple");
	fruits.push("pear");

	test.equal('mango', fruits.shift());
	test.equal(2, fruits.length);
	test.equal('apple', fruits[0]);
	test.equal('pear', fruits[1]);
	test.done();
};

exports.arrays_truncate_elements_when_length_is_set = function(test) {
	var fruits = ['mango', 'pear', 'strawberry'];
	fruits.length = 2;
	test.equal('mango', fruits[0]);
	test.equal('pear', fruits[1]);
	test.equal(null, fruits[2]);
	test.equal(2, fruits.length);
	test.done();
};

exports.arrays_create_empty_elements_when_elements_are_set = function(test) {
	var fruits = [];
	fruits[2] = 'mango';

	test.equal(3, fruits.length);
	test.equal(null, fruits[0]);
	test.equal(null, fruits[1]);
	test.equal('mango', fruits[2]);
	test.done();
};

exports.arrays_join_method_to_create_a_string = function(test) {
	var url_params = ['category', '2', 'products', '1'];

	test.equal('category/2/products/1', url_params.join("/"));
	test.done();
};
