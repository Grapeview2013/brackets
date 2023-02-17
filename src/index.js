module.exports = function checkBrackets(str, bracketsConfig) {
  const stack = [];

  // create a map of opening brackets to closing brackets for easy reference
  const bracketPairs = {};
  for (const pair of bracketsConfig) {
    bracketPairs[pair[0]] = pair[1];
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char in bracketPairs && bracketPairs[char] !== char) {
      // char is an opening bracket
      stack.push(char);
    } else if (char in bracketPairs && bracketPairs[char] === char) {
      // char is both an opening and closing bracket
      if (stack[stack.length - 1] === char) {
        stack.pop();
      } else {
        stack.push(char);
      }
    } else if (stack.length === 0 || bracketPairs[stack.pop()] !== char) {
      // char is a closing bracket, but does not match the last opening bracket in stack
      return false;
    }
  }

  return stack.length === 0;
}



// This code is checking if a given string of brackets has a valid sequence or not.
// The function starts by creating an empty stack and then iterates over each character in the string.
// If a left bracket is found (i.e., an opening bracket), it is pushed onto the stack.
// If a right bracket is found (i.e., a closing bracket), the top of the stack is popped,
// and the two brackets are checked if they match.
// If they don't match, the function returns false.
// Finally, if the stack is empty at the end of the iteration,
// it means all the brackets have been matched and the function returns true; otherwise, it returns false.

// Bugs fixed:
// Passing a bracketsConfig parameter to the function to support different sets of brackets.
// Creating a map of opening brackets to closing brackets for easy reference.
// Checking whether a bracket is an opening bracket using the in operator, and pushing it onto the stack if it is.
// Handling special case where a bracket is both an opening and closing bracket, and removing it from the stack
// if it matches the last opening bracket.
// Checking whether a bracket is a closing bracket, but does not match the last opening bracket in the stack.