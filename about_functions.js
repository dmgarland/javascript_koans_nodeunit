var ___ = "Fill me in!";

exports.functions_are_their_own_type = function(test) {
	test.equal(___, typeof(function() {}));
	test.done();
};

exports.functions_are_invoked_using_parantheses_syntax = function(test) {
	var result = function(x, y) { return x * y; }(5, 5);
	test.equal(___, result);
	test.done();
};

exports.functions_assigned_to_variables_can_be_called_by_variable_name = function(test) {
  var multiply = function(x, y) { return x *  y; };
  test.equal(___, multiply(5, 5));
  test.done();
};

exports.functions_can_be_defined_as_an_object = function(test) {
  var multiply = new Function("x", "y", "return x * y");
  test.equal(___, multiply(5, 5));
  test.done();
};

exports.functions_can_be_used_to_control_scope = function(test) {
	(function(p) {
        var privateValue = "password";
        test.equal(p, __, 'what is the value of pv?');
        test.equal(typeof(privateValue), "__", "is privateValue available in this context?");
        test.equal(typeof(publicValue), "__", "is publicValue available in this context?");
  })(publicValue);

  test.equal(typeof(privateValue), "__", "is privateValue available in this context?");
  test.equal(typeof(publicValue), "__", "is publicValue available in this context?");
  test.done();
};

exports.named_functions_can_be_called_before_they_are_defined = function(test) {
	test.equal(___, my_amazing_multiply(5, 5));

	function my_amazing_multiply(x, y) { return x * y; }
	test.done();
};

exports.functions_without_an_explicit_return_value_return_undefined = function(test) {
  var dontForgetReturn = function(a, b) {
  	a * b;
  };

  test.equal(___, dontForgetReturn(5, 5));
  test.done();
};

exports.arguments_are_not_enforced = function(test) {
	var sayHello = function(name) {
    return "Hello " + name;
	};

	test.equal("Hello", sayHello());
	test.equal("Hello Dan", sayHello("Dan"));
	test.done();
};

exports.arguments_to_functions_can_be_explict_or_implict = function(test) {
	var repeat = function() {
		var result = [];
		for(var arg in arguments) {
			result.push(arguments[0]);
			result.push(arguments[0]);
		}
	  return result;
	};

	test.equal(___, repeat());
	test.equal(___, repeat("hello"));
	test.done();
};

exports.functions_invoked_using_call_can_change_the_context = function(test) {
	var reflection = function() {
		var firstProperty = Object.keys(this)[0];
		return this[firstProperty];
	}

	var person = {
		name: "Dan"
	}

	var car = {
		brand: "Ferrari"
	}

	test.equal(___, reflection.call(person));
	test.equal(___, reflection.call(car));
	test.done();
};

exports.singleton_functions_can_be_defined_on_single_objects = function(test) {
	var numbers = [1, 2, 3, 4, 5];
	numbers.double = function(n) {
		for(var i = 0; i < this.length; i++) {
			this[i] *= 2;
		}
		return this;
	};

	numbers.double();

	test.equal(___, numbers[0]);
	test.equal(___, numbers[1]);
	test.equal(___, numbers[2]);
	test.equal(___, numbers[3]);
	test.equal(___, numbers[4]);

	var other_numbers = [1, 2, 3, 4, 5];
	try {
		other_numbers.double();
	}
	catch(err) {
		test.equal(___, err.name);
	}
	test.done();
};