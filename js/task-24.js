function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Пиши код ниже этой строки
    if (totalSpent >= 50000) {
        discount = totalSpent * GOLD_DISCOUNT;
    } else if (totalSpent >= 20000 && totalSpent < 50000) {
         discount = totalSpent * SILVER_DISCOUNT;
    } else if (totalSpent >= 5000 && totalSpent < 20000) {
        discount = totalSpent * BRONZE_DISCOUNT;
    } else {
        discount = totalSpent * BASE_DISCOUNT;
}
  // Пиши код выше этой строки
  return discount;
}