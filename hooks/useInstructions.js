const useInstructions = (fullName) => {
  const [first, last] = fullName.split(":");
  let instructions = "Hello!";
  if (first && last) {
    instructions = `Hello, ${first} ${last}!`;
  } else if (first) {
    instructions = `Please also enter your last name below.`;
  } else if (last) {
    instructions = `Please also enter your first name below`;
  } else {
    instructions = `Please enter your full name below`;
  }
  return instructions;
};

export default useInstructions;
