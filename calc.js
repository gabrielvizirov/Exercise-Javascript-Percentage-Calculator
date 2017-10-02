var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');
var form = document.getElementById('percentageCalculator');

form.addEventListener('submit', function(event) {
    
    if (!numField1.value || !numField2.value) {
        alert("Please enter values in the fields");
    } else {
        var q = question.value;  
        var num1 = parseFloat(numField1.value);
        var num2 = parseFloat(numField2.value);
        
        if(question.value == "xIsWhatPercentOfY" ) {
            var result = num1 / num2;
            var percent = result * 100;

            resultField.innerText = "Answer: " + percent + "%";
        }
        else if(question.value == "whatIsYPercentOfX" ) {
            var result = (num2 / 100) * num1;

            resultField.innerText = "Answer: " + result;
        }
        else if(question.value == "xIsYPercentOfWhat" ) {
            var result = (num1 * 100) / num2;

            resultField.innerText = "Answer: " + result;
        }
        else if(question.value == "whatPercentOfXIsY" ) {
            var result = (num2 / num1) * 100;

            resultField.innerText = "Answer: " + result + "%";
        }
        else if(question.value == "xPercentOfWhatIsY" ) {
            var result = num1 * num2;

            resultField.innerText = "Answer: " + result;
        }
        else if(question.value == "yPercentOfXIsWhat" ) {
            var result = num2 / num1;

            resultField.innerText = "Answer: " + result;
        }
        else {
            resultField.innerText = "Answer: Not Found";
        }
    
        event.preventDefault();
    }
    

});
