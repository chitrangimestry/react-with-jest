const getFullName = (firstName, lastName) => {
  return firstName + " " + lastName;
};


const fullName = getFullName("John", "Doe");
const expectedFullName = "JohnDoe";
console.log(fullName);

if(fullName !== expectedFullName) {
  throw new Error(`${fullName} is not equal to ${expectedFullName}`);
}