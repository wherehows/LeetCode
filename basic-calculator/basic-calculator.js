var calculate = function (s) {
    let i = 0;

    const recur = function (s) {
        let res = 0;
        let sign = 1;
        let num = "";
        while (i < s.length) {
            let c = s[i];
            switch (c) {
                case '+':
                    sign = 1;
                    break;

                case '-':
                    sign = -1;
                    break;

                case '(':
                    i++;
                    res += recur(s) * sign;
                    break;

                case ')':
                    return res;

                default:
                    while (!isNaN(s[i])) {
                        num+=s[i];
                        i++;
                    }
                    res += num * sign;
                    num ="";
                    i--;
                    break;
            }
            i++;
        }
        return res;
    }

    let get = recur(s);
    return get;
}