exports.conditionals_using_if_statements = function(test) {
	var ifDemo = function(x, y) {
		var result;

		if(x < y) {
			result = -1;
		}
		else if(y == x) {
			result = 0;
		}
		else {
			result = 1;
		}

		return result;
	};

	test.equal(___, ifDemo(5, 7));
	test.equal(___, ifDemo(5, 5));
	test.equal(___, ifDemo(7, 5));
	test.done();
};

exports.short_conditionals_using_if_statements = function(test) {
	var x = 5;
	var y = 7;
	var tautology;

	if(x < y) tautology = true;

	test.equal(___, tautology);
	test.done();
};

exports.single_line_conditionals = function(test) {
	var x = 5;
	var y = 7;
	var tautology = x < y ? true : false;

	test.equal(___, tautology);
	test.done();
};

exports.case_statements_with_switch = function(test) {
	var switchDemo = function(option) {
		var result;

		switch(option) {
			case 'a':
				result = "You selected A";
				break;
			case 'b':
				result = "You selected B";
				break;
			default:
				result = "I don't know";
		}

		return result;
	};

	test.equal(___, switchDemo('a'));
	test.equal(___, switchDemo('b'));
	test.equal(___, switchDemo('c'));
	test.done();
};

exports.forgetting_break_in_switch_leads_to_unexpected_results = function(test) {
	var switchDemo = function(option) {
		var result;

		switch(option) {
			case 'a':
				result = "You selected A";
				// oops
			case 'b':
				result = "You selected B";
				break;
			default:
				result = "I don't know";
		}

		return result;
	};

	test.equal(___, switchDemo('a'));
	test.equal(___, switchDemo('b'));
	test.done();
};

exports.while_loop_with_conditional_test_at_the_start = function(test) {
	var i = 0;
	var sum = 0;

	while(i <= 10) {
		sum += i;
		i += 1;
	}

	test.equal(___, i);
	test.equal(___, sum);
	test.done();
};

exports.while_loop_with_conditional_test_at_the_end = function(test) {
	var i = 0;
	var sum = 0;

	do {
		sum += i;
		i += 1;
	} while(i <= 10);

	test.equal(___, i);
	test.equal(___, sum);
	test.done();
};

exports.while_loop_with_conditional_using_break = function(test) {
	var i = 0;
	var sum = 0;

	while(true) {
		sum += i;
		i += 1;
		if(i >= 10) break;
	}

	test.equal(___, i);
	test.equal(___, sum);
	test.done();
};

exports.skip_to_next_while_loop_iteration_with_continue = function(test) {
	var i = 0;
	var results = [];

	while(i < 10) {
		i += 1;
		if(i % 2 === 0) continue;
		results.push(i);
	}

	test.deepEqual(___, results);
	test.done();
};

exports.for_loop_iterator = function(test) {
	var fruits = ['apple', 'mango', 'strawberry'];
	var results = [];

	for(var i = 0; i < fruits.length; i++) {
		if(fruits[i][0] === 'a') results.push(fruits[i]);
	}

	test.deepEqual(___, results);
	test.done();
};

exports.for_loop_in_iterator = function(test) {
	var person = {
		name: "Dan",
		age: 30,
		favouriteFruit: "Mango"
	};

	var allYouNeedToKnowAboutDan = [];
	for(var property in person) {
		var info = ['his', property, 'is', person[property]];
		allYouNeedToKnowAboutDan.push(info.join(" "));
	}

	test.equal(___, allYouNeedToKnowAboutDan.join(", "));
	test.done();
};

exports.exception_handling_with_try_catch = function(test) {
	var whateverHappens;

	try {
		throw "Some nasty exception";
	}
	catch(err) {
		test.equal(___, err);
		test.equal(___, err.name);
		test.equal(___, err.message);
		test.equal(___, typeof(err));
	}
	finally {
		whateverHappens = true;
	}

	test.equal(___, whateverHappens);
	test.done();
};

exports.exception_handling_with_try_catch_using_an_object = function(test) {
	var whateverHappens;

	try {
		var my_amazing_error = {
			name: "AmazingError",
			message: "It appears that an amazing error occured."
		}
		throw my_amazing_error;
	}
	catch(err) {
		test.equal(___, typeof(err));
		test.equal(___, err.name);
		test.equal(___, err.message);
	}

	test.done();
};