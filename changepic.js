var n = 1;
function change_pic2() {
  var filename;
  switch (n) {
    case 1:
      filename = "./pic/1ccc.jpg";
      break;
    case 2:
      filename = "./pic/294758918_1036464017068149_1751725504055237183_n.jpg";
      break;
    case 3:
      filename = "./pic/40358484.jpg";
      break;
    case 4:
      filename = "./pic/42428639.jpg";
      break;
    case 5:
      filename = "./pic/42557286.jpg";
      break;
    case 6:
      filename = "./pic/42635082.jpg";
      break;
    case 7:
      filename = "./pic/Untitled-59.jpg";
      break;
  }
  n++;
  if (n > 7) n = 1;
  document.getElementById("bodypage").background = filename;
  window.setTimeout("change_pic2()", 2000);
}
