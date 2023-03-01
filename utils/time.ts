export const convertUTCToLocalTime = (datetime: string) => {
  const date = new Date(datetime)
  return date.toLocaleString();
}