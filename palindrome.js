function arePalindromes(num1, num2) {
    let reversed1 = 0;
    let reversed2 = 0;
    let original1 = num1;
    let original2 = num2;

    while (num1 > 0) {
      let digit = num1 % 10;
      reversed1 = reversed1 * 10 + digit;
      num1 = Math.floor(num1 / 10);
    }

    while (num2 > 0) {
      let digit = num2 % 10;
      reversed2 = reversed2 * 10 + digit;
      num2 = Math.floor(num2 / 10);
    }
    
    return original1 === reversed1 && original2 === reversed2;
  }
  