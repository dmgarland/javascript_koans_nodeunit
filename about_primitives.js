exports.a_variable_that_has_never_been_defined_is_undefined = function(test) {
	test.equal("undefined", typeof(some_made_up_variable));
	test.done();
};

exports.undefined_is_a_primitive = function(test) {
	test.equal("undefined", typeof(undefined));
	test.done();
};

exports.a_variable_that_has_no_value_is_null = function(test) {
	var b;
	test.equal(null, b);
	test.done();
};

exports.typeof_null_is_broken = function(test) {
	test.equal("object", typeof(null), "This is not what we'd expect it to be...");
	test.done();
};

exports.numbers_are_also_primitives = function(test) {
	test.equal('number', typeof(3));
	test.equal('number', typeof(3.14));
	test.equal('number', typeof(NaN));
	test.equal('number', typeof(Infinity));
	test.done();
};

exports.strings_are_also_primitives = function(test) {
	test.equal('string', typeof("Hi"));
	test.done();
};

exports.booleans_are_also_primitives = function(test) {
	test.equal('boolean', typeof(true));
	test.done();
};

exports.primitives_have_no_prototype_because_they_are_not_objects = function(test) {
	var data_types = [undefined, null, true, 3, "hello"];

	for(var primitive in data_types) {
		try {
			Object.getPrototypeOf(primitive);
		}
		catch(err) {
			test.equal('TypeError', err.name);
		}
	}
	test.done();
};