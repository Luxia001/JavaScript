var showtooltip = false;
var mousex = 0;
var mousey = 0;

function getMouseXY(e) {
  if (!e) e = window.event;
  if (e) {
    if (e.pageX || e.pageY) {
      mousex = e.pageX;
      mousey = e.pageY;
    } else if (e.clientX || e.clientY) {
      mousex = e.clientX + document.body.scrollLeft;
      mousey = e.clientY + document.body.scrollTop;
    }
  }
}

function falsefunc() {
  return false;
}

function showtip(t, e) {
  showtooltip = true;
  document.onmouseover = falsefunc;
  document.onmousemove = updatetip;
  document.onmouseout = hidetip;

  getMouseXY(e);
  var path = t.src;
  var filename = path.substring(path.lastIndexOf("/") + 1);
  var s = `<img src=${path} alt=""> <br> ${filename} 
            <br> ${t.width} x ${t.height} pixels - 61 kB`;
  document.getElementById( 'dPanel').innerHTML=s;
  document.getElementById( 'dPanel').style.visibility ="visible";
  document.getElementById('dPanel').style.left = mousex +15+'px';
  document.getElementById('dPanel').style.top = mousey +15+'px';
}

function hidetip(){
    showtooltip=false;
    document.onmousemove = null;
    document.onmouseout = null;
    document.getElementById('dPanel').style.visibility = "hidden";
}

function updatetip(e){
    if(showtooltip){
        getMouseXY(e);
        document.getElementById('dPanel').style.left = mousex +15+'px';
        document.getElementById('dPanel').style.top = mousey +15+'px';
    }
    return false;
}
