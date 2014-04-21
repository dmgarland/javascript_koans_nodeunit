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

exports.functions_can_have_properties_just_like_objects = function(test) {
	function isEven(num) {
    if(isEven.cache === undefined) isEven.cache = [];

		if(isEven.cache[num] === null) {
      isEven.cache[num] = (num % 2 === 0 ? true : false);
    }

		return isEven.cache[num];
	}

	var result = isEven(2);

	test.equal(___, result);
	test.equal(___, isEven.cache[2]);
	test.done();
};

exports.functions_length_is_the_number_of_expected_arguments = function(test) {
  var multiply = function(x, y) { return x * y; };
  test.equal(___, multiply.length);
  test.done();
};

exports.functions_can_be_used_to_control_scope = function(test) {
  var publicValue = "My Amazing String";

	(function(p) {
        var privateValue = "password";
        test.equal(___, privateValue, 'what is the value of privateValue?');
        test.equal(___, publicValue, 'what is the value of publicValue?');
        test.equal(___, p, 'what is the value of p?');
        test.equal(___, typeof(privateValue), "is privateValue available in this context?");
        test.equal(___, typeof(publicValue), "is publicValue available in this context?");
  })(publicValue);

  test.equal(___, typeof(privateValue), "is privateValue available in this context?");
  test.equal(___, typeof(publicValue), "is publicValue available in this context?");
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
	};

	var person = {
		name: "Dan",
    age: 30
	};

	var car = {
		brand: "Ferrari",
    colour: "Yellow"
	};

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