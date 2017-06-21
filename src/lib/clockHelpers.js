export const formatTime = (dateObject) => {
  let formattedTime = formatLeadingZero(dateObject.getHours()) + ':';
  formattedTime += formatLeadingZero(dateObject.getMinutes()) + ':';
  formattedTime += formatLeadingZero(dateObject.getSeconds());

  return formattedTime;

};

const formatLeadingZero = (num) => {
  return num < 10 ? '0' + num.toString() : num.toString();
};
