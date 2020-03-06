            
            var symbArr = ["@","%","+","\\","/","'","!","#","$","^","?",":",",",")","(","}","{","]","[","~","-","_","."];
            var lowerArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
            var upperArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
            var numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


            function getPasswordOptions() {
                var length = parseInt(prompt(
                  "How many characters would you like your password to contain?"
                ));
              
                if (isNaN(length) === true) {
                  alert("Password length must be provided as a number");
                  return;
                }
              
                if (length < 8) {
                  alert("Password length must be at least 8 characters");
                  return;
                }
              
                if (length > 128) {
                  alert("Password length must less than 129 characters");
                  return;
                }
              

            var hasSymbArr = confirm(
                "Click OK to confirm including special characters."
            );
            
            var hasNumArr = confirm(
                "Click OK to confirm including numeric characters."
            );
                
            var hasLowerArr = confirm(
                "Click OK to confirm including lowercase characters."
            );

            var hasUpperArr = confirm(
                    "Click OK to confirm including uppercase characters."
            );

            if (
                hasSymbArr === false &&
                hasNumArr === false &&
                hasLowerArr === false &&
                hasUpperArr === false
              ) {
                alert("Must select at least one character type");
                return;
              }

              var passwordOptions = {
                length: length,
                hasSymbArr: hasSymbArr,
                hasNumArr: hasNumArr,
                hasLowerArr: hasLowerArr,
                hasUpperArr: hasUpperArr
              };
            
              return passwordOptions;
            }

            function getRandom(arr) {
                var randIndex = Math.floor(Math.random() * arr.length);
                var randElement = arr[randIndex];
              
                return randElement;
              }

              function generatePassword() {
                var options = getPasswordOptions();
                var result = [];
              
                var possibleCharacters = [];
                var guaranteedCharacters = [];

                if (options.hasSymbArr) {
                    possibleCharacters = possibleCharacters.concat(symbArr);
                    guaranteedCharacters.push(getRandom(symbArr));
                  }
                
                  if (options.hasNumChars) {
                    possibleCharacters = possibleCharacters.concat(numChars);
                    guaranteedCharacters.push(getRandom(numChars));
                  }
                
                  if (options.hasLowerArr) {
                    possibleCharacters = possibleCharacters.concat(lowerArr);
                    guaranteedCharacters.push(getRandom(lowerArr));
                  }

                  if (options.hasUpperArr) {
                    possibleCharacters = possibleCharacters.concat(upperArr);
                    guaranteedCharacters.push(getRandom(upperArr));
                  }
                
                  for (var i = 0; i < options.length; i++) {
                    var possibleCharacter = getRandom(possibleCharacters);
                
                    result.push(possibleCharacter);
                  }
                  for (var i = 0; i < guaranteedCharacters.length; i++) {
                    result[i] = guaranteedCharacters[i];
                  }
                  return result.join("");
                }

                
                var copyBtn = document.querySelector("#copy");
                var generateBtn = document.querySelector("#generate");

                function writePassword() {
                var password = generatePassword();
                var passwordText = document.querySelector("#password");

                passwordText.value = password;

                copyBtn.removeAttribute("disabled");
                copyBtn.focus();
                }

    function copyToClipboard() {
  var passwordText = document.querySelector("#password");

  passwordText.select();
  document.execCommand("copy");

  alert(
    "Your password " + passwordText.value + " was copied to your clipboard."
  );
}

generate.addEventListener("click", writePassword);
copy.addEventListener("click", copyToClipboard);

            
            
                
                    
            

              

            // var finalPassword = "";
            // var passwordDisplay = document.getElementById("password");
            // passwordDisplay.innerHTML = finalPassword;

            // var randomLowerIndex = Math.floor( Math.random() * lowerArr.length );
            // var randomLower = lowerArr[randomLowerIndex];

            // for (var i=0; i<numChars; i++) {
            //     finalPassword = finalPassword + ""
            // }

            // console.log(randomLowerIndex + " = random lower index");
            // console.log(randomLower + " = random lower");


            // console.log(numChars + " = password length");
            // console.log(symbWanted + " = special chars");
            // console.log(lowerWanted + " = lower chars");
            // console.log(upperWanted + " = upper chars");
            // console.log(numWanted + " = num chars");


        
