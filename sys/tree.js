var head="display:''"
img1=new Image()
img1.src="images/plus.gif"
img2=new Image()
img2.src="images/blank.gif"

function change(){
if(!document.all)
return
if (event.srcElement.id=="foldheader") {
var srcIndex = event.srcElement.sourceIndex
var nested = document.all[srcIndex+1]
if (nested.style.display=="none") {
nested.style.display=''
event.srcElement.style.listStyleImage="url(images/blank.gif)"
}
else {
nested.style.display="none"
event.srcElement.style.listStyleImage="url(images/plus.gif)"
}
}
}

document.onclick=change
