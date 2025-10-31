var ipr = document.querySelector("input");
var s = "";
let cal = (ch) => {
  if (ch == "AC") {
    s = "";
    ipr.value = s;
  } else if (ch == "C") {
    s = s.slice(0, s.length - 1);
    ipr.value = s;
  } else if (ch == "=") {
    try {
      ipr.value = eval(s);
    } catch {
      s = "";
      ipr.value = "Invalid Syntax";
    }
  } else {
    s = s + ch;
    ipr.value = s;
  }
};
