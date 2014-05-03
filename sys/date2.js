var months = new Array("一月", "二月", "三月", 
"四月", "五月", "六月", "七月", "八月", "九月", 
"十月", "十一月", "十二月"); 
var daysInMonth = new Array(31, 28, 31, 30, 31, 30, 31, 31, 
30, 31, 30, 31); 
/*var days = new Array("Sunday", "Monday", "Tuesday", 
"Wednesday", "Thursday", "Friday", "Saturday");*/ 
var days = new Array("日","一", "二", "三", 
"四", "五", "六"); 
function getDays(month, year) { 

if (1 == month) 
return ((0 == year % 4) && (0 != (year % 100))) || 
(0 == year % 400) ? 29 : 28; 
else 
return daysInMonth[month]; 
} 

function getToday() { 
//得到今天的年,月,日 
this.now = new Date(); 
this.year = this.now.getFullYear(); 
this.month = this.now.getMonth(); 
this.day = this.now.getDate(); 
} 


today = new getToday(); 

function newCalendar() { 

today = new getToday(); 
var parseYear = parseInt(document.all.year 
[document.all.year.selectedIndex].text); 
var newCal = new Date(parseYear, 
document.all.month.selectedIndex, 1); 
var day = -1; 
var startDay = newCal.getDay(); 
var daily = 0; 
if ((today.year == newCal.getFullYear()) &&(today.month == newCal.getMonth())) 
day = today.day; 
var tableCal = document.all.calendar.tBodies.dayList; 
var intDaysInMonth =getDays(newCal.getMonth(), newCal.getFullYear()); 
for (var intWeek = 0; intWeek < tableCal.rows.length;intWeek++) 
for (var intDay = 0;intDay < tableCal.rows[intWeek].cells.length;intDay++) 
{ 
var cell = tableCal.rows[intWeek].cells[intDay]; 
if ((intDay == startDay) && (0 == daily)) 
daily = 1; 
if(day==daily) 
//今天，调用今天的Class 
cell.className = "today"; 
else if(intDay==6) 
//周六 
cell.className = "sunday"; 
else if (intDay==0) 
//周日 
cell.className ="satday"; 
else 
//平常 
cell.className="normal"; 

if ((daily > 0) && (daily <= intDaysInMonth)) 
{ 
cell.innerText = daily; 
daily++; 
} 
else 
cell.innerText = ""; 
} 
} 

function getDate() { 
var sDate; 
//这段代码处理鼠标点击的情况 
if ("TD" == event.srcElement.tagName) 
if ("" != event.srcElement.innerText) 
{ 
sDate = document.all.year.value + "年" + document.all.month.value + "月" + event.srcElement.innerText + "日"; 
alert(sDate); 
} 
} 