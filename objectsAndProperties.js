/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

//OBJECTS & PROPERTIES -  USING DOT NOTATION AND BRACKET NOTATION

var employee = {
  sid: "v587855",
  empData : { //nested object (we can have more than one nested object)
     firstName: "Naquan",
     lastName: "King",
     location: "NOC5"
  }
};
employee.obj3 = { //declaring and defining another object of the employee object
  other: "object"
}

console.log("SID " +employee.sid + ":");
for(var key in employee.empData){ //iterate through empData object being called through dot notation
  console.log("       " +employee.empData[key]); //using bracket notation to print values in empData object
}

console.log(employee.sid);//print SID
console.log(employee.empData.firstName); //print firstName value in empData object using DOT NOTATION
console.log(employee.empData['firstName']); //print firstName value in empData object using BRACKET NOTATION

console.log(employee.obj3.other); //print value of obj3 contained within employee object
