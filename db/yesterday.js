function getYesterday() {
  var today = new Date();
  var yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  var year = yesterday.getFullYear();
  var month = (yesterday.getMonth() + 1).toString().padStart(2, '0'); // Adding padding if month is single digit
  var day = yesterday.getDate().toString().padStart(2, '0'); // Adding padding if day is single digit

  return year + "-" + month + "-" + day;
  // return '2024-03-22';
}

// Example usage
module.exports = { getYesterday };