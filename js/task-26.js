function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;
  // Пиши код ниже этой строки
    message = password === 'jqueryismyjam' ? 'Доступ разрешен' : 'Доступ запрещён, неверный пароль!';
  // Пиши код выше этой строки
  return message;
}