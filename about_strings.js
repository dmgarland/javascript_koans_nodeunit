exports.string_are_either_primitives_or_objects = function(test) {
	test.equals('string', typeof(""));
	test.equals('object', typeof(new String("apple")));
	test.done();
};

exports.string_definition_with_quotes_are_primitives_not_objects = function(test) {
	var singleApple = 'apple';
	var doubleApple = "apple";
	var newApple = new String("apple");
	test.equals(true, singleApple === doubleApple);
	test.equals(false, singleApple === newApple);
	test.done();
};

exports.strings_behave_like_arrays_of_character_strings = function(test) {
	var mango = "mango";
	test.equals('m', mango[0]);
	test.equals('a', mango[1]);
	test.equals('n', mango[2]);
	test.equals('g', mango[3]);
	test.equals('o', mango[4]);
	test.equals(null, mango[5]); // Off the edge
	test.equals('string', typeof(mango[0]));
	test.equals(5, mango.length);
	test.done();
};

exports.strings_char_at_function_returns_strings = function(test) {
	var mango = "mango";
	test.equals('m', mango.charAt(0));
	test.equals('a', mango.charAt(1));
	test.equals('n', mango.charAt(2));
	test.equals('g', mango.charAt(3));
	test.equals('o', mango.charAt(4));
	test.equals('', mango.charAt(5)); // Off the edge!
	test.equals('string', typeof(mango.charAt(0)));
	test.done();
};

exports.string_concatenation_with_plus = function(test) {
	var apple = "apple";
	var pie = "pie";
	test.equals("apple pie", apple + " " + pie);
	test.done();
};

exports.strings_respect_escape_characters = function(test) {
	var withNewLine = 'Mango\n';
	test.equals(6, withNewLine.length);
	test.done();
};

exports.strings_subarrays_with_slice = function(test) {
	var name = "Joe Bloggs";
	test.equals('J', name.slice(0, 1));
	test.equals("Joe Bloggs", name.slice(0, 100));
	test.equals("Joe Blogg", name.slice(0, -1));
	test.equals('Joe', name.slice(0, -7));
	test.equals('', name.slice(0, 0));
	test.done();
};

exports.strings_subarrays_with_substring = function(test) {
	var name = "Joe Bloggs";
	test.equals(___, name.substring(0, 1));
	test.equals(___, name.substring(0, 100));
	test.equals(___, name.substring(3, 0));
	test.equals(___, name.substring(4, 10));
	test.equals(___, name.substring(10, 4));
	test.equals(___, name.substring(0, -1));
	test.done();
};

exports.strings_subarrays_with_substr = function(test) {
	var name = "Joe Bloggs";
	test.equals(___, name.substr(0, 1));
	test.equals(___, name.substr(0, 100));
	test.equals(___, name.substr(3, 0));
	test.equals(___, name.substr(4, 10));
	test.equals(___, name.substr(10, 4));
	test.equals(___, name.substr(0, -1));
	test.equals(___, name.substr(4));
	test.done();
};

exports.strings_substitution_with_replace = function(test) {
	var priceLabel = "Price is X".replace("X", "£19.99");
	test.equals("Price is £19.99", priceLabel);
	test.done();
};

exports.strings_contains_with_index_of = function(test) {
	var searchString = "Hello there";
	test.equals(4, searchString.indexOf("o"));
	test.equals(-1, searchString.indexOf("z"));
	test.done();
};

exports.strings_split_function = function(test) {
	var path = '/categories/2/products/4';
	var urlParams = path.split("/");
	test.deepEqual([ '', 'categories', '2', 'products', '4' ], urlParams);
	test.done();
};

exports.string_primitives_evaluate_code_with_eval = function(test) {
	var resultFromPrimitive = "2 + 2";
	var resultFromObject = new String("2 + 2");

	test.equals(4, eval(resultFromPrimitive));
	test.deepEqual('2 + 2', eval(resultFromObject));
	test.equals(4, eval(resultFromObject.valueOf()));
	test.done();
}