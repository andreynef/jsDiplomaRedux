function formatDate(date) {
  const format = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  };

  return new Date( Date.parse(date) ).toLocaleString('ru', format);
}

export default formatDate;
