function anyThing() {
  nextPrime: for (let index = 2; index <= 20; index++) {
    for (let counter = 2; counter < index; counter++) {
      if (index % counter == 0) continue nextPrime;
    }
    console.log(index);
  }
}
anyThing();
