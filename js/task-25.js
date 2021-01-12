function checkStorage(available, ordered) {
  let message;
  // Пиши код ниже этой строки

  if (ordered > available) {
    message = 'На складе недостаточно товаров!';
  } else {
    message = 'Заказ оформлен, с вами свяжется менеджер';
  }
    message = ordered > available ? 'На складе недостаточно товаров!' : 'Заказ оформлен, с вами свяжется менеджер';
  // Пиши код выше этой строки
  return message;
}