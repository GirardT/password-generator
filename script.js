document.addEventListener("DOMContentLoaded", function() {
  const generateBtn = document.getElementById("generate-btn");
  const passwordLengthInput = document.getElementById("password-length");
  const passwordDisplay = document.getElementById("password");
  const copyBtn = document.getElementById("copy-btn");

  generateBtn.addEventListener("click", function() {
    const passwordLength = parseInt(passwordLengthInput.value);
    const password = generatePassword(passwordLength);
    passwordDisplay.textContent = password;
    copyBtn.style.display = "block"; // Show the copy button
  });

  copyBtn.addEventListener("click", function() {
    // Copy password to clipboard
    const password = passwordDisplay.textContent;
    navigator.clipboard.writeText(password).then(function() {
      alert("Password copied to clipboard!");
    }, function(err) {
      console.error('Could not copy text: ', err);
    });
  });

  function generatePassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  }
});
