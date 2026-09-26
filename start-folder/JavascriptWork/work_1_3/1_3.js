// 小計を計算する関数（そのまま数値を返す）
const getTotalPrice = (price, quantity) => {
  return price * quantity;
};

// 税込金額を計算する関数（小数点以下を切り捨てるために Math.floor を使用）
const addTax = total => {
  return Math.floor(total * 1.1);
};

// 1. 小計を求めて出力（※課題の指定通りの文言に合わせます）
const total = getTotalPrice(1000, 2);
console.log(`税抜金額は${total}円です`);

// 2. 税込金額を求めて出力
const taxedTotal = addTax(total);
console.log(`税込金額は${taxedTotal}円です`);