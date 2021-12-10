let a = 1;
console.log(a);

let b = a++;
console.log(b);

let c = ++a;
console.log(c);

let d = "hello";
console.log(d++);

let e = false;
console.log(e++);

let price = 2.7
console.log(price.toFixed(2));

console.log(isNaN(0));
console.log(isNaN(1));
console.log(isNaN("string"));
console.log(isNaN("0"));
console.log(isNaN("1"));
console.log(isNaN("3.145"));
console.log(isNaN(Number.MAX_VALUE));
console.log(isNaN(Infinity));
console.log(isNaN("true"));
console.log(isNaN(true));
console.log(isNaN("false"));
console.log(isNaN(false));
console.log(!true)
console.log(!false)
console.log(!!true)
console.log(!!false)
console.log(!!0)
console.log(!!-0)
console.log(!!1)
console.log(!!-1)
console.log(!!0.1)
console.log(!!"hello")
console.log(!!"")
console.log(!!'')
console.log(!!"false")
console.log(!!"0")

let sample = "Hello Codeup, "

console.log(sample.length)

console.log(sample.toUpperCase())

console.log(sample.toLowerCase())

sample = sample + "Students"
console.log(sample)

console.log(sample.replace("Students", "Class"))

console.log(sample.indexOf("c"))

console.log(sample.indexOf("C"))

console.log(sample.substring(sample.indexOf("C"), 12))

