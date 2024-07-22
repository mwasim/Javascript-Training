const getMaxLessThanK = (n, k) => {
  let maxAnd = 0;
  for (let a = 1; a < n; a++) {
    for (let b = a + 1; b <= n; b++) {
      const result = a & b;
      if (result < k) {
        maxAnd = Math.max(maxAnd, result);
      }
    }
  }

  return maxAnd;
};

console.log(getMaxLessThanK(5, 2));
