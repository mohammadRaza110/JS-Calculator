function insert(num) {
  document.getElementById("inp").value += num;
}

function equal() {
  let exp = document.getElementById("inp").value;
  if (exp) {
    document.getElementById("inp").value = eval(exp);
  }
}

function clearInput() {
  document.getElementById("inp").value = "";
}
