function true_or_false(value) {
	if(value) {
		return true;
	}
	else {
		return false;
	}
}

exports.true_is_treated_as_true = function(test) {
	test.equal(true, true_or_false(true));
	test.done();
};

exports.false_is_treated_as_false = function(test) {
	test.equal(false, true_or_false(false));
	test.done();
};

exports.undefined_is_treated_as_false = function(test) {
	test.equal(false, true_or_false(undefined));
	test.done();
};

exports.null_is_treated_as_false = function(test) {
	test.equal(false, true_or_false(null));
	test.done();
};

exports.non_zero_numbers_are_treated_as_true = function(test) {
	test.equal(true, true_or_false(3));
	test.equal(true, true_or_false(-3));
	test.equal(true, true_or_false(Infinity));
	test.done();
};

exports.zero_is_treated_as_false = function(test) {
	test.equal(false, true_or_false(0));
	test.equal(false, true_or_false(-0));
	test.done();
};

exports.irrational_numbers_are_treated_as_false = function(test) {
	test.equal(false, true_or_false(NaN));
	test.equal(false, true_or_false(Math.sqrt(-1)));
	test.done();
};

exports.non_empty_strings_are_treated_as_true = function(test) {
	test.equal(true, true_or_false("true"));
	test.equal(true, true_or_false("false"));
	test.equal(true, true_or_false("0"));
	test.done();
};

exports.empty_strings_are_treated_as_false = function(test) {
	test.equal(false, true_or_false(""));
	test.done();
};

exports.objects_are_treated_as_true = function(test) {
	test.equal(true, true_or_false(new Object(true)));
	test.equal(true, true_or_false(new Object(false)));
	test.done();
};

exports.boolean_primitives_wrapped_in_boolean_objects_behave_misleadingly = function(test) {
	test.equal(true, true_or_false(new Boolean(true)));
	test.equal(true, true_or_false(new Boolean(false)));
	// Much better to use primitives instead...
	test.equal(true, true_or_false(new Boolean(true).valueOf()));
	test.equal(false, true_or_false(new Boolean(false).valueOf()));
	test.equal(true, true_or_false(Boolean(true)));
	test.equal(true, true_or_false(Boolean(false)));
	test.done();
};
