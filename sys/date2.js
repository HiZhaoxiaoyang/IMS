var months = new Array("һ��", "����", "����", 
"����", "����", "����", "����", "����", "����", 
"ʮ��", "ʮһ��", "ʮ����"); 
var daysInMonth = new Array(31, 28, 31, 30, 31, 30, 31, 31, 
30, 31, 30, 31); 
/*var days = new Array("Sunday", "Monday", "Tuesday", 
"Wednesday", "Thursday", "Friday", "Saturday");*/ 
var days = new Array("��","һ", "��", "��", 
"��", "��", "��"); 
function getDays(month, year) { 

if (1 == month) 
return ((0 == year % 4) && (0 != (year % 100))) || 
(0 == year % 400) ? 29 : 28; 
else 
return daysInMonth[month]; 
} 

function getToday() { 
//�õ��������,��,�� 
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
//���죬���ý����Class 
cell.className = "today"; 
else if(intDay==6) 
//���� 
cell.className = "sunday"; 
else if (intDay==0) 
//���� 
cell.className ="satday"; 
else 
//ƽ�� 
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
//��δ��봦������������ 
if ("TD" == event.srcElement.tagName) 
if ("" != event.srcElement.innerText) 
{ 
sDate = document.all.year.value + "��" + document.all.month.value + "��" + event.srcElement.innerText + "��"; 
alert(sDate); 
} 
} 