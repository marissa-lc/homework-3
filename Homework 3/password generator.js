 function generatePassword() {
            var numChars = prompt("How many chars do you want?");
            var symbWanted = confirm("Do you want special chars?");
            var lowerWanted = confirm("Do you want lowercase chars?");
            var upperWanted = confirm("Do you want uppercase chars?");
            var numWanted = confirm("Do you want numbers?");

            var lowerArr = ["a","b","c","d","e","f","g"];

            var finalPassword = "";
            var passwordDisplay = document.getElementById("password");
            passwordDisplay.innerHTML = finalPassword;

            var randomLowerIndex = Math.floor( Math.random() * lowerArr.length );
            var randomLower = lowerArr[randomLowerIndex];

            for (var i=0; i<numChars; i++) {
                finalPassword = finalPassword + ""
            }

            console.log(randomLowerIndex + " = random lower index");
            console.log(randomLower + " = random lower");


            console.log(numChars + " = password length");
            console.log(symbWanted + " = special chars");
            console.log(lowerWanted + " = lower chars");
            console.log(upperWanted + " = upper chars");
            console.log(numWanted + " = num chars");


        }
