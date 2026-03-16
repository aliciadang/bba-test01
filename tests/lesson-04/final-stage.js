function timCapSo() {
  let count = 0;
  for (let a = 1; a <= 100; a++) {
    for (let b = a + 1; b <= 100; b++) {
      if ((a + b) % 17 === 0) {
        count++;
        console.log(`(${a}, ${b}) = ${a + b}`);
      }
    }
  }
  console.log(`\nTổng cộng: ${count} cặp`);
}

timCapSo();
