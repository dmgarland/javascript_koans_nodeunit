exports.objects_are_their_own_type = function(test) {
	test.equal(___, typeof({}));
	test.done();
};

exports.objects_can_be_defined_using_new_keyword = function(test) {
	test.equal(___, typeof(new Object()));
	test.done();
};

exports.objects_are_different_objects_in_memory = function(test) {
	var a = new Object();
	var b = new Object();
	test.equal(___, a === b);
	test.done();
};

var person = {
	name: "Dan",
	age: 30
};

exports.objects_properties_accessed_using_dot_notion = function(test) {
	test.equal(___, person.name);
	test.equal(___, person.age);
	test.done();
};

exports.objects_defined_in_literal_notation_like_dictionaries = function(test) {
	test.equal(___, person["name"]);
	test.equal(___, person["age"]);
	test.done();
};

exports.objects_can_dynamically_add_properties = function(test) {
	person.favourite_telly = "Red Dwarf";
	person["eye_colour"] = "Blue";

	test.equal(___, person.favourite_telly);
	test.equal(___, person.eye_colour);
	test.done();
};

exports.object_properties_can_hold_function_objects_eg_methods = function(test) {
	person.toString = function() {
		return this.name + " aged " + this.age + " likes watching " + this.favourite_telly;
	};

	test.equal(___, person.toString());
	test.done();
};