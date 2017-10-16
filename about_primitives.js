exports.a_variable_that_has_never_been_defined_is_undefined = function(test) {
	test.equal(___, typeof(some_made_up_variable));
	test.done();
};

exports.undefined_is_a_primitive = function(test) {
	test.equal(___, typeof(undefined));
	test.done();
};

exports.a_variable_that_has_no_value_is_null = function(test) {
	var b;
	test.equal(___, b);
	test.done();
};

exports.typeof_null_is_broken = function(test) {
	test.equal(___, typeof(null), "This is not what we'd expect it to be...");
	test.done();
};

exports.numbers_are_also_primitives = function(test) {
	test.equal(___, typeof(3));
	test.equal(___, typeof(3.14));
	test.equal(___, typeof(NaN));
	test.equal(___, typeof(Infinity));
	test.done();
};

exports.strings_are_also_primitives = function(test) {
	test.equal(___, typeof("Hi"));
	test.done();
};

exports.booleans_are_also_primitives = function(test) {
	test.equal(___, typeof(true));
	test.done();
};

exports.primitives_have_no_prototype_because_they_are_not_objects = function(test) {
	var dataTypes = [undefined, null, true, 3, "hello"];

	for(var primitive in dataTypes) {
		try {
			Object.getPrototypeOf(dataTypes[primitive]);
		}
		catch(err) {
			test.equal(___, err.name);
		}
	}
	test.done();
};