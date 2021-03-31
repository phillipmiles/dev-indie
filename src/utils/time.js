export const isoDateStringToLabel = (isoDateString) => {
  const date = new Date(isoDateString);
  const todaysDate = new Date();
  const yesterdaysDate = new Date();

  yesterdaysDate.setDate(yesterdaysDate.getDate() - 1);

  if (
    date.getDate() === todaysDate.getDate() &&
    date.getMonth() === todaysDate.getMonth() &&
    date.getFullYear() === todaysDate.getFullYear()
  ) {
    return 'Today';
  } else if (
    date.getDate() === yesterdaysDate.getDate() &&
    date.getMonth() === yesterdaysDate.getMonth() &&
    date.getFullYear() === yesterdaysDate.getFullYear()
  ) {
    return 'Yesterday';
  } else {
    return date.toDateString();
  }
};
