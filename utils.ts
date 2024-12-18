export function numberToHebrewLetter(num: number): string {
  if (num <= 0) {
    throw new Error("Number must be greater than zero.");
  }

  let ret = '';
  ret += 'ת'.repeat(Math.floor(num / 400));
  num %= 400;

  if (num >= 100) {
    const hundredSymbols = ['ק', 'ר', 'ש', 'ת'];
    ret += hundredSymbols[Math.floor(num / 100) - 1];
    num %= 100;
  }

  if (num >= 10) {
    const tensSymbols = 'יכלמנסעפצ';
    if(num == 15){ret += 'טו'; return ret}
    if(num == 16){ret += 'טז'; return ret}
    else {
      ret += tensSymbols[Math.floor(num / 10) - 1];
      num %= 10;
    }
  }

  if (num > 0) {
    const onesSymbols = 'אבגדהוזחט';
    ret += onesSymbols[num - 1];
  }

  return ret;
}