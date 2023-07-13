//อาเรย์เก็บชื่อภาพ
var pic = new Array();
pic[0] = "../pic/1ccc.jpg";
pic[1] = "../pic/294758918_1036464017068149_1751725504055237183_n.jpg";
pic[2] = "../pic/40358484.jpg";
pic[3] = "../pic/42428639.jpg";
pic[4] = "../pic/42557286.jpg";
pic[5] = "../pic/42635082.jpg";
pic[6] = "../pic/Untitled-59.jpg";

var maxPic = pic.length; //จำนวนภาพ
var nowPic = 4; //ตำแหน่งปัจจุบัน
var addpoint = 1; //ค่าเพิ่มกับ top
var styleTop = 0; //ตำแหน่ง top
var cliptop = 0; //ตำแหน่ง cliptop
var clipbottom = 0; //ตำแหน่ง clipbottom

function init() {
  obj = document.getElementById("panel");
  //หาค่า top เก็บใน styleTop
  if (obj.offsetParent) {
    styleTop = obj.offsetTop;
    while (obj = obj.offsetParent) {
      styleTop += obj.offsetTop;
    }
  }

  //
  //
  //
  //
  arrA = document.getElementById("panel").style.clip.split(" ");
  cliptop = parseInt(arrA[0].substring(5, arrA[0].length - 1));
  clipbottom = parseInt(arrA[2]);
}

function scroll() {
  if (addpoint >= 320) {
    document.getElementById("pic1").src = document.getElementById("pic3").src;
    document.getElementById("pic2").src = document.getElementById("pic4").src;
    addpoint = 0;

    document.getElementById("panel").style.top = styleTop + addpoint + "px";
    document.getElementById("panel").style.clip =
      "rect(" +
      styleTop.addpoint +
      "px 200 px" +
      (clipbottom - addpoint) +
      "px 0px)";
    addpoint++;

    //นำรูปใหม่มาใส่ในช่อง 3 และ 4
    if (nowPic >= maxPic) nowPic = 0;
    document.getElementById("pic3").src = pic[nowPic];
    nowPic++;
    if (nowPic >= maxPic) nowPic = 0;
    document.getElementById("pic4").src = pic[nowPic];
    nowPic++;
  } else {
    document.getElementById("panel").style.top = (styleTop + addpoint) + "px";
    document.getElementById("panel").style.clip =
      "rect(" +
      (cliptop - addpoint) +
      "px 200px" +
      (clipbottom - addpoint) +
      "px 0px)";
    addpoint++;
  }
  window.setTimeout("scroll();", 0);
}
