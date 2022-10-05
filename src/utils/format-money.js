export function formatMoney(money) {
  return money.toFixed(2).toString().replace(".", ",");
}
