var arrMenu = new Array("not use", "", "", "");
var curLevel = 0;
var maxLevel = 3;
var mousex;
var mousey;

function falsefunc() {
  return false;
}

function popUp(obj, name, level, x, y, e) {
  document.onmouseover = falsefunc;

  for (i = level; i <= maxLevel; i++) {
    if (arrMenu[i] != "")
      document.getElementById(arrMenu[i]).style.visibility = "hidden";
  }
  curLevel = level;
  arrMenu[curLevel] = name;

  document.getElementById(name).style.visibility = "visible";

  var curleft = (curtop = 0);
  if (obj.offsetParent) {
    curleft = obj.offsetLeft;
    curtop = obj.offsetTop;
    while ((obj = obj.offsetParent)) {
      curleft += obj.offsetLeft;
      curtop += obj.offsetLeft;
    }
  }
  document.getElementById(name).style.left = curleft + x + "px";
  document.getElementById(name).style.top = curtop + y + "px";
}

function pipDown(level) {
  for (i = level; i <= maxLevel; ++i) {
    if (arrMenu[i] != "")
      document.getElementById(arrMenu[i]).style.visibility = "hidden";
  }
}
