document.getElementById("btn").addEventListener("click", function () {
  var ans = document.getElementById("btn").value;
  if (document.getElementById("answer").value == ans) {
    document.getElementById("sum").innerHTML = "Correct! It's " + ans;
  } else {
    document.getElementById("sum").innerHTML = "Wrong, it's " + ans;
  }
});
