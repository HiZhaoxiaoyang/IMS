function get_cookie(Name) {
var search = Name + "="
var returnvalue = "";
if (document.cookie.length > 0) {
offset = document.cookie.indexOf(search)
if (offset != -1) { 
offset += search.length
end = document.cookie.indexOf(";", offset);
if (end == -1) end = document.cookie.length;
returnvalue=unescape(document.cookie.substring(offset, end))
}
}
return returnvalue;
}

if (get_cookie(window.location.pathname) != ''){
var openresults=get_cookie(window.location.pathname).split(" ")
for (i=0 ; i < openresults.length ; i++){
foldinglist[openresults[i]].style.display=''
document.all[foldinglist[openresults[i]].sourceIndex -
1].style.listStyleImage="url(images/plus.gif)"
}
}

if (document.all){
var nodelength=foldinglist.length-1
var nodes=new Array(nodelength)
var openones=''
}

function check(){
for (i=0 ; i <= nodelength ; i++){
if (foldinglist[i].style.display=='')
openones=openones + " " + i
}
document.cookie=window.location.pathname+"="+openones
}

if (document.all)
document.body.onunload=check
