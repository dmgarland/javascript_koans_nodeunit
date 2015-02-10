exports.equal_equals_equals_performs_strict_comparison = function(test) {
	test.equal(false, 3 === "3");
	test.equal(true, 3 === 3.0);
	test.equal(false, true === 1);
	test.equal(false, false === 0);
	test.equal(false, "3.0" === "3");
	test.equal(true, "abc" === "abc");
	test.equal(false, null === undefined);
	test.equal(false, NaN === NaN);
	test.done();
};

exports.equals_equals_converts_operands_to_same_type = function(test) {
	test.equal(true, 3 == "3");
	test.equal(true, 3 == 3.0);
	test.equal(true, true == 1);
	test.equal(true, false == 0);
	test.equal(false, "3.0" == "3");
	test.equal(true, "abc" == "abc");
	test.equal(true, null == undefined);
	test.done();
};

exports.equals_equals_determines_whether_objects_are_the_same_object_in_memory = function(test) {
	var a = new String("abc");
	var b = new String("abc");

	test.equal(false, a == b);
	test.equal(true, a == a);
	test.equal(false, a === b);
	test.equal(true, a === a);
	test.equal(true, a == "abc");
	test.done();
};
