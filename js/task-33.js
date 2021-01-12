function formatMessage(message, maxLength) {
  let result;
// Пиши код ниже этой строки
    if (message.length <= maxLength) {
        result = message;
    } else {
        result = `${message.slice(0, maxLength)}...`;
    };
// Пиши код выше этой строки
  return result;
}
