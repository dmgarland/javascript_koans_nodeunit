var ___ = "Fill me in!";

function true_or_false(value) {
	if(value) {
		return true;
	}
	else {
		return false;
	}
}

exports.true_is_treated_as_true = function(test) {
	test.equal(___, true_or_false(true));
	test.done();
};

exports.false_is_treated_as_false = function(test) {
	test.equal(___, true_or_false(false));
	test.done();
};

exports.undefined_is_treated_as_false = function(test) {
	test.equal(___, true_or_false(undefined));
	test.done();
};

exports.null_is_treated_as_false = function(test) {
	test.equal(___, true_or_false(undefined));
	test.done();
};

exports.non_zero_numbers_are_treated_as_true = function(test) {
	test.equal(___, true_or_false(3));
	test.equal(___, true_or_false(-3));
	test.equal(___, true_or_false(Infinity));
	test.done();
};

exports.zero_is_treated_as_false = function(test) {
	test.equal(___, true_or_false(0));
	test.done();
};

exports.irrational_numbers_are_treated_as_false = function(test) {
	test.equal(___, true_or_false(NaN));
	test.equal(___, true_or_false(Math.sqrt(-1)));
	test.done();
};

exports.non_empty_strings_are_treated_as_true = function(test) {
	test.equal(___, true_or_false("true"));
	test.equal(___, true_or_false("false"));
	test.done();
};

exports.empty_strings_are_treated_as_false = function(test) {
	test.equal(___, true_or_false(""));
	test.done();
};

exports.objects_are_treated_as_true = function(test) {
	test.equal(___, true_or_false("true"));
	test.equal(___, true_or_false("false"));
	test.done();
};

