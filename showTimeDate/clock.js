var centerX = 800;
var centerY = 125;
var rX = 100;
var rY = 100;
var red = (Math.PI * 2) / 12;

function makeClock() {
  let m = 0;
  for (n = 0 - red * 3; n <= 6 - red * 3; n += red) {
    document.write(
      "<div style='font-size:20;font-weight:bolder;position:absolute; left:" +
        (centerX + rX * Math.cos(n)) +
        "px; top:" +
        (centerY + rY * Math.sin(n)) +
        "px;'>"
    );
    if (m == 0) {
      document.write("12</div>");
    } else {
      document.write(m + "</div>");
    }
    m++;
  }

  for (n = 0; n < 45; ++n) {
    document.write(
      "<div id='s" +
        n +
        "'style='position:absolute;font-size:1px;width:1px;height:1px;background-color:blue'></div>"
    );
  }
  for (n = 0; n < 39; ++n) {
    document.write(
      "<div id='m" +
        n +
        "'style='position:absolute;font-size:1px;width:3px;height:3px;background-color:red'></div>"
    );
  }
  for (n = 0; n < 29; ++n) {
    document.write(
      "<div id='h" +
        n +
        "'style='position:absolute;font-size:1px; width:5px; height:5px; background-color:green'></div>"
    );
  }
}

makeClock();

function clock() {
  let dt = new Date();
  let hour = dt.getHours();
  let minute = dt.getMinutes();
  let second = dt.getSeconds();
  let x = centerX + 5;
  let y = centerY + 7;

  for (n = 0; n < 45; n++) {
    document.getElementById("s" + n).style.left =
      x + 2 * n * Math.cos((second / 5) * red - red * 3) + "px";
    document.getElementById("s" + n).style.top =
      y + 2 * n * Math.sin((second / 5) * red - red * 3) + "px";
  }

  for (n = 0; n < 39; n++) {
    document.getElementById("m" + n).style.left =
      x + 2 * n * Math.cos((minute / 5) * red - red * 3) + "px";
    document.getElementById("m" + n).style.top =
      y + 2 * n * Math.sin((minute / 5) * red - red * 3) + "px";
  }

  if (hour >= 12) hour -= 12;
  for (n = 0; n < 29; n++) {
    document.getElementById("h" + n).style.left =
      x + 2 * n * Math.cos(((hour * 60 + minute) / 60) * red - red * 3) + "px";
    document.getElementById("h" + n).style.top =
      y + 2 * n * Math.sin(((hour * 60 + minute) / 60) * red - red * 3) + "px";
  }
  setTimeout("clock()", 1000);
}
