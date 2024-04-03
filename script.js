function shortcut(s1, s2) {
  // Convert both strings to lowercase
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();
  
  // Extract the initial letters and convert to lowercase
  const initialLetters = s1.charAt(0) + s2.charAt(0);
  
  return initialLetters; // Return lowercase initial letters
}

// Test Cases (for illustration)
console.log(shortcut("Amnesty", "International")); // Output: 'ai'
console.log(shortcut("Hello", "world")); // Output: 'hw'
console.log(shortcut("", "International")); // Output: ''
console.log(shortcut("Amnesty", "")); // Output: ''

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));

