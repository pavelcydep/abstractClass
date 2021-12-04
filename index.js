/**
 * Abstract Class Aclass.
 *
 * @class Aclass
 */
 class Aclass {

	constructor(numbers) {
		if (this.constructor == Aclass) {
			throw new Error("Abstract classes can't be instantiated.");
		}
		this.numbers = numbers;
	}

	fill() {
		return this.numbers.from({
			length: 10
		}, () => Math.floor(Math.random() * 10));

	}


	factorial() {
		const facArray = [],
			fil = this.fill();

		function fctrl(num) {
			if (num == 0 || num == 1) {
				return 1;
			}
			return num * fctrl(num - 1);
		}

		function getF(arr) {
			var result = arr.map(x => fctrl(x));
			return result;
		}
		return getF(fil)
	}

	sort() {
		throw new Error("Method 'sort()' must be implemented.");
	}
}

class Class1 extends Aclass {

	sort() {
		const factorial = this.factorial();
		factorial.sort(function (a, b) {
			return a - b;
		});
		return factorial;
	}
}


class Class2 extends Aclass {
	sort() {
		const factorial = this.factorial();
		factorial.sort(function (a, b) {
			return b - a;
		});
		return factorial;
	}
}

const class1 = new Class1(Array);
class1.fill();
class1.factorial();
console.log(class1.sort());

const class2 = new Class1(Array);
class2.fill();
class2.factorial();
console.log(class2.sort());