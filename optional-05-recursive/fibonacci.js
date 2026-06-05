// fibonacci.js
export function fibonacci(n) {
  const result = [0];
  if (n === 0) return result;
  result.push(1);
  for (let i = 2; i <= n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result;
}
