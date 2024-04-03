function shortcut(s1, s2) {
  // Check if any of the strings is empty
  if (s1 === "" || s2 === "") {
    return ""; // Return empty string if any string is empty
  }
  
  // Extract the initial letters and convert to uppercase
  const initialLetters = s1.charAt(0).toUpperCase() + s2.charAt(0).toUpperCase();
  
  return initialLetters; // Return uppercase initial letters
}



// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
