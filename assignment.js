// 1.
let label = "keyincollege";
let tld = "ca";
let domainName = label + '.' + tld;

// 2.
let isKeyin = domainName === "keyincollege.ca";

// 3.
let isNotKeyin = !isKeyin;

// 4.
let byte1 = 192;
let byte2 = 168;
let byte3 = 2;
let byte4 = 1;

// 5.
let ipAddress = byte1 + '.' + byte2 + '.' + byte3 + '.' + byte4;

// 6.
let table = 15;
for (let i = 1; i <= 10; i++) {
    console.log(table + " X " + i + " = " + table * i);
}

// 7.
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}

// 8.
let evenSum = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        evenSum += i;
    }
}
console.log("Sum of even numbers:", evenSum);

// 9.
let number = 28;
let sum = 0;
for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
        sum += i;
    }
}
if (sum === number) {
    console.log(number + " is a perfect number");
} else {
    console.log(number + " is not a perfect number");
}

// 10.
let givenNumber = 19;
let isPrime = true;
if (givenNumber > 1) {
    for (let i = 2; i < givenNumber; i++) {
        if (givenNumber % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(givenNumber + " is a prime number");
    } else {
        console.log(givenNumber + " is not a prime number");
    }
} else {
    console.log(givenNumber + " is not a prime number");
}
