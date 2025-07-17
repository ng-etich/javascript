//javascript as other languages provide a set of methods to manipulate strings
//these methods can be used to perform various operations sch as searching , replacing and formating strings
//eaxampe using string methods to manipulate a string

const fullName ="Emmanuel Ngetich";

// 1. length of the string
const lengthOfFUllName =fullName.length;
console.log(lengthOfFUllName);


//2. convert to uppercase
const uppercaseFullName = fullName.toUpperCase;
console.log(uppercaseFullName);


//3.convert to lowercase
const lowercaseFullName = fullName.toLocaleLowerCase;
console.log(lowercaseFullName);


//4.extract a substring
const firstName = fullName.substring(0,8);//Emmanuel
console.log(firstName);


//5.find the index of a character
const indexOfN = fullName.indexOf("N");//9
console.log(indexOfN);


//6. REPLACE A SUBSTRING
const replacedFullName = fullName.replace("Ngetich", "maraba");
console.log(replacedFullName);

//7.split the string into an array
const nameParts = fullName.split("");//["Emmanuel" "Ngetich"]
console.log(nameParts);
