function checkForSpam(message) {
  let result;
  // Пиши код ниже этой строки
    result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale') ? result = true : result = false;
  // Пиши код выше этой строки
  return result;
}
