var ___ = "Fill me in!";

exports.string_are_either_primitives_or_objects = function(test) {
	test.equals(___, typeof(""));
	test.equals(___, typeof(new String("apple")));
	test.done();
};

exports.string_definition_with_quotes_are_primitives_not_objects = function(test) {
	var singleApple = 'apple';
	var doubleApple = "apple";
	var newApple = new String("apple");
	test.equals(___, singleApple === doubleApple);
	test.equals(___, singleApple === newApple);
	test.done();
};

exports.strings_behave_like_arrays_of_character_strings = function(test) {
	var mango = "mango";
	test.equals(___, mango[0]);
	test.equals(___, mango[1]);
	test.equals(___, mango[2]);
	test.equals(___, mango[3]);
	test.equals(___, mango[4]);
	test.equals(___, mango[5]); // Off the edge
	test.equals(___, typeof(mango[0]));
	test.equals(___, mango.length);
	test.done();
};

exports.strings_char_at_function_returns_strings = function(test) {
	var mango = "mango";
	test.equals(___, mango.charAt(0));
	test.equals(___, mango.charAt(1));
	test.equals(___, mango.charAt(2));
	test.equals(___, mango.charAt(3));
	test.equals(___, mango.charAt(4));
	test.equals(___, mango.charAt(5)); // Off the edge!
	test.equals(___, typeof(mango.charAt(0)));
	test.done();
};

exports.string_concatenation_with_plus = function(test) {
	var apple = "apple";
	var pie = "pie";
	test.equals(___, apple + " " + pie);
	test.done();
};

exports.strings_respect_escape_characters = function(test) {
	var withNewLine = 'Mango\n';
	test.equals(___, withNewLine.length);
	test.done();
};

exports.strings_subarrays_with_slice = function(test) {
	var name = "Joe Bloggs";
	test.equals(___, name.slice(0, 1));
	test.equals(___, name.slice(0, 100));
	test.equals(___, name.slice(0, -1));
	test.equals(___, name.slice(0, -7));
	test.equals(___, name.slice(0, 0));
	test.done();
};

exports.strings_substitution_with_replace = function(test) {
	var priceLabel = "Price is X".replace("X", "£19.99");
	test.equals(___, priceLabel);
	test.done();
};

exports.strings_contains_with_index_of = function(test) {
	var searchString = "Hello there";
	test.equals(___, searchString.indexOf("o"));
	test.equals(___, searchString.indexOf("z"));
	test.done();
};

exports.strings_split_function = function(test) {
	var path = '/categories/2/products/4';
	var urlParams = path.split("/");
	test.equals(___, urlParams);
	test.done();
};

exports.string_primitives_evaluate_code_with_eval = function(test) {
	var resultFromPrimitive = "2 + 2";
	var resultFromObject = new String("2 + 2");

	test.equals(___, eval(resultFromPrimitive));
	test.equals(___, eval(resultFromObject));
	test.equals(___, eval(resultFromObject.valueOf()));
	test.done();
}