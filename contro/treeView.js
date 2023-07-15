function show(e){
    var obj;
    var objParent;

    if (!e) var e =window.event;
    if(e.target) obj = e.target;
    else if(e.srcElement) obj  = e.srcElement;

    objParent = obj.parentNode;

    if (obj.id == "fd_head"){
        i=0;
        while (true){
            if (obj == objParent.childNodes[i])break;
            i++;
        }

        j= i;
        while (true){
            if(objParent.childNodes[j].id=="fd_list")break;
            j++;
        }

        if(objParent.childNodes[j].style.display == "none"){
            objParent.childNodes[j].style.display="";
            objParent.childNodes[i].style.lisStyleImage="url(open.gif)";
        }else {
            objParent.childNodes[j].style.display = "none";
            objParent.childNodes[i].style.lisStyleImage="ulr(fold.gif)";
        }
    }
}
document.onmousedown = show;