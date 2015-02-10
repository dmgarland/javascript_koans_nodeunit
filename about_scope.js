global = 1;
var local = 2;

function do_stuff() {
	var a = 3;
	return [global, local, a];
}

function peeking_into_another_scope() {
	return a;
}

exports.scope_of_variables = function(test) {
	scope = do_stuff();
	test.equal(1, scope[0]);
	test.equal(2, scope[1]);
	test.equal(3, scope[2]);
	test.done();
};

exports.raises_reference_error_when_out_of_scope_variable_is_accessed = function(test) {
	try {
		peeking_into_another_scope(test);
	}
	catch(err) {
		test.equal('ReferenceError', err.name);
	}

	test.done();
};

exports.out_of_scope_variables_are_undefined = function(test) {
	function look_at_type_of_variables() {
		test.equal('number', typeof(global));
		test.equal('number', typeof(local));
		test.equal('undefined', typeof(a));
	}

	look_at_type_of_variables();
	test.done();
};