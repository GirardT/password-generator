document.addEventListener("DOMContentLoaded", function() {
    const generateBtn = document.getElementById("generate-btn");
    const passwordLengthInput = document.getElementById("password-length");
    const passwordDisplay = document.getElementById("password");
  
    generateBtn.addEventListener("click", function() {
      const passwordLength = parseInt(passwordLengthInput.value);
      const password = generatePassword(passwordLength);
      passwordDisplay.textContent = password;
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
  