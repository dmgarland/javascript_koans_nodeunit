var ___ = "Fill me in!";

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
	test.equal(___, scope[0]);
	test.equal(___, scope[1]);
	test.equal(___, scope[2]);
	test.done();
};

exports.raises_reference_error_when_out_of_scope_variable_is_accessed = function(test) {
	try {
		peeking_into_another_scope(test);
	}
	catch(err) {
		test.equal(___, err.name);
	}

	test.done();
};

exports.out_of_scope_variables_are_undefined = function(test) {
	function look_at_type_of_variables() {
		test.equal(___, typeof(global));
		test.equal(___, typeof(local));
		test.equal(___, typeof(a));
	}

	look_at_type_of_variables();
	test.done();
};