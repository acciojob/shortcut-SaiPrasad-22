function shortcut(s1, s2) {
  // Convert both strings to lowercase
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();
  
  // Extract the initial letters
  const initialLetters = s1.charAt(0) + s2.charAt(0);
  
  return initialLetters.toUpperCase(); // Convert the result to uppercase
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
