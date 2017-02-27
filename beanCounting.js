function countBs(str) {
  return countChar(str, "B")
}

function countChar(str, char) {
  var count = 0
  for (counter = 0; counter < str.length; counter++)
    if (str.charAt(counter) == char)
      count++;
  return count
}
