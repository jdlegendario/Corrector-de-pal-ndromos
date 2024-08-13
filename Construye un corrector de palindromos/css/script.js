document.getElementById('check-btn').addEventListener('click', function() {
    const textInput = document.getElementById('text-input').value;
    const result = document.getElementById('result');
  
    if (textInput === "") {
      alert("Please input a value");
      return;
    }
  
    const cleanedInput = textInput.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedInput = cleanedInput.split('').reverse().join('');
    const isPalindrome = cleanedInput === reversedInput;
  
    if (isPalindrome) {
      result.textContent = `${textInput} is a palindrome`;
    } else {
      result.textContent = `${textInput} is not a palindrome`;
    }
  });
  