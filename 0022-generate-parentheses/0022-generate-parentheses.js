var generateParenthesis = function (n) {
  const map = new Array(n + 1).fill(null).map(() => []);

  for (let index = 1; index <= n; index++) {
    helper(index, index - 1, index, "(");
  }

  function helper(n, open, close, string) {
    if (open === 0 && close === 0) {
      map[n].push(string);
      return;
    }

    if (open !== 0 && close !== 0 && open === close) {
      for (let i = 0; i < map[open].length; i++) {
        const current = map[open][i];
        map[n].push(string + current);
      }
      return;
    }

    open > 0 && helper(n, open - 1, close, string + "(");
    open < close && helper(n, open, close - 1, string + ")");
  }

  return map[n];
};