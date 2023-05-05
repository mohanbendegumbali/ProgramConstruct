function flipCoin() {
    let randomNumber = Math.floor(Math.random() * 2);
    if (randomNumber === 0) {
      return "Heads";
    } else {
      return "Tails";
    }
  }
  

  console.log(flipCoin());
  