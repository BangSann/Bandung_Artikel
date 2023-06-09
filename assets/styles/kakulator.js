
    const calculator = {
      displayNumber: '0',
      operator: null,
      firstNumber: null,
      isWaitForSecondNumber: false,
    };
     
    function updateDisplay() {
      document.querySelector('#displayNumber').innerText = calculator.displayNumber;
    }
     
    function clearCalculator() {
      calculator.displayNumber = '0';
      calculator.operator = null;
      calculator.firstNumber = null;
      calculator.isWaitForSecondNumber = false;
    }
     
    function inputDigit(digit) {
	if (calculator.displayNumber==='0'){
	calculator.displayNumber = digit;
	} else {
      	calculator.displayNumber += digit;
	}	
    }
     
    const buttons = document.querySelectorAll('.button');

    for (const button of buttons) {
      button.addEventListener('click', function (event) {
        // mendapatkan objek elemen yang diklik
        const target = event.target;

	    if (target.classList.contains('clear')){
        clearCalculator();
        updateDisplay();
        return;
      } if (target.classList.contains('negative')){
        reverseCalculator();
        updateDisplay();
        return;
      } if (target.classList.contains('operator')){
        operatorCalculator(target.innerText);
        updateDisplay();
        return;
      } if (target.classList.contains('equals')){
        performCalculator();
        updateDisplay();
        return;
      }
      
        inputDigit(target.innerText);
        updateDisplay();
	
      });
    }

    function reverseCalculator(){
      if (calculator.displayNumber==='0'){
        return;
      }
      calculator.displayNumber = calculator.displayNumber*-1;
    }


    function operatorCalculator(operator){
      if(!calculator.isWaitForSecondNumber){
        calculator.operator=operator;
        calculator.isWaitForSecondNumber=true;
        calculator.firstNumber=calculator.displayNumber;
        calculator.displayNumber = '0';
      } else{
        alert ("Operator Sudah Digunakan")
      }
    }

    function performCalculator(){
      if (calculator.operator==null||calculator.firstNumber==null){
        alert("Anda Belum Melakuka Operasi");
        return;
      }
      let result ='0';
      if (calculator.operator==='+'){
        result = parseInt(calculator.firstNumber)+parseInt(calculator.displayNumber);
      }else{
        result = parseInt(calculator.firstNumber)-parseInt(calculator.displayNumber);
      }

      const history={
        firstNumber:calculator.firstNumber,
        secondNumber:calculator.displayNumber,
        operator:calculator.operator,
        result:result,
      };
      putHistory(history);
      calculator.displayNumber=result;
      renderHistory();
    }

    lo
