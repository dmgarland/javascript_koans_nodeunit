var ___ = "Fill me in!";

exports.equal_equals_equals_performs_strict_comparison = function(test) {
	test.equal(___, 3 === "3");
	test.equal(___, 3 === 3.0);
	test.equal(___, true === 1);
	test.equal(___, false === 0);
	test.equal(___, "3.0" === "3");
	test.equal(___, "abc" === "abc");
	test.equal(___, null === undefined);
	test.equal(___, NaN === NaN);
	test.done();
};

exports.equals_equals_converts_operands_to_same_type = function(test) {
	test.equal(___, 3 == "3");
	test.equal(___, 3 == 3.0);
	test.equal(___, true == 1);
	test.equal(___, false == 0);
	test.equal(___, "3.0" == "3");
	test.equal(___, "abc" == "abc");
	test.equal(___, null == undefined);
	test.done();
};

exports.equals_equals_determines_whether_objects_are_the_same_object_in_memory = function(test) {
	var a = new String("abc");
	var b = new String("abc");

	test.equal(___, a == b);
	test.equal(___, a == a);
	test.equal(___, a === b);
	test.equal(___, a === a);
	test.equal(___, a == "abc");
	test.done();
};
