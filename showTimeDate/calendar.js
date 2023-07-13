var msMonth = new Array(
  "jan",
  "Feb",
  "Mar",
  "Apr",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
);
var msDays = new Array(31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
var msDOW = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sun");

function makeCalendar(intWhatMonth, intWhatYear) {
  intWhatMonth = parseInt(intWhatMonth);
  intWhatYear = parseInt(intWhatYear);
  msDays[1] = intWhatYear % 4 == 0 ? 29 : 28;
  strOutput = '<table style = "width:185px;border:3px solid #6666ff;">';
  strOutput += '<tr><td style = "text-align: center;width:100%">';

  strOutput += '<select id="cboMonth" onChange="change();">';
  for (i = 0; i < 12; ++i) {
    if (i == intWhatMonth) {
      strOutput +=
        '<option value="' + i + '"selected>' + msMonth[i] + "</option>";
    } else {
      strOutput += '<potion value = "' + i + '">' + msMonth[i] + "</option>";
    }
  }
  strOutput += "</select>&nbsp;";

  strOutput += '<section id = "cboYear" onChange="change();">';
  startYear = intWhatYear - 10;
  for (i = startYear; i <= startYear + 20; ++i) {
    if (i == intWhatYear)
      strOutput +=
        '<option value="' + i + '"selected>' + (i + 543) + "</option>";
    else strOutput += '<option value="' + i + '">' + (i + 543) + "</option>";
  }
  strOutput += "</select></td></tr>";

  strOutput += "<tr><td>";
  strOutput +=
    '<table style="width:185px; border-spacing: 1 px; padding: 2px;">';
  strOutput +=
    '<tr><td style="width:15%; text-align: center; vertical-align:middle;">' +
    msDOW[0] +
    "</td>";
  strOutput +=
    '<td style="width:14%; text- align:center; vertical-align:middle;">';
  +msDOW[1] + "</td>";
  strOutput +=
    '<td style="width:14%; text- align:center; vertical-align:middle;">';
  +msDOW[2] + "</td>";
  strOutput +=
    '<td style="width:14%; text- align:center; vertical-align:middle;">';
  +msDOW[3] + "</td>";
  strOutput +=
    '<td style="width:14%; text- align:center; vertical-align:middle;">';
  +msDOW[4] + "</td>";
  strOutput +=
    '<td style="width:14%; text- align:center; vertical-align:middle;">';
  +msDOW[5] + "</td>";
  strOutput +=
    '<td style="width:20%; text- align:center; vertical-align:middle;">';
  +msDOW[6] + "</td></tr><tr>";

  intLastMonth = intWhatMonth - 1;
  intLastYear = intWhatYear;
  if (intLastMonth == -1) {
    intLastMonth == 11;
    intLastYear = intLastYear - 1;
  }
  intLastDays = msDays[intLastMonth];

  dt = new Date(intWhatYear, intWhatMonth, 1);
  startDay = dt.getDay();
  intColoumn = 0;
  for (i = 0; i < startDay; ++i, intColoumn++) {
    strOutput +=
      '<td style="text-align: center;">' +
      (intLastDays - startDay + i + 1) +
      "</td>";
  }

  dt = new Date();
  nowDate = dt.getDate();
  nowMonth = dt.getMonth();
  nowFullYear = dt.getFullYear();

  for (i = 1; i <= msDays[intWhatMonth]; i++, intColoumn++) {
    strOutput += '<td style="text-align: center;">';
    strOutput +=
      '<a href="javascript:changeDay(' + i + ');">' + i + "</a></td>";
    if (intColoumn == 6) {
      strOutput += "</tr><tr>";
      intColoumn = -1;
    }
  }

  for (i = 1; intColoumn < 7; ++i, intColoumn++)
    strOutput += '<td style="text-align:center;">' + i + "</td>";
  strOutput += "</tr></table></td></tr></table>";

  document.getElementById("pCalendar").innerHTML = strOutput;
}

function changeDay(day) {
  month =
    document.getElementById("cboMonth").options[
      document.getElementById("cboMonth").seclectedIndex
    ].text;
  year =
    document.getElementById("cboYear").options[
      document.getElementById("cboYear").seclectedIndex
    ].text;
  document.getElementById("tCalendar").value = day + "-" + month + "-" + year;
  document.getElementById("pCalendar").style.visibility = "hidden";
}

function showCalendar(btn) {
  if (btn.offsetParent) {
    Left = btn.offsetLeft;
    Top = btn.offsetTop;
    while ((btn = btn.offsetParent)) {
      Left += btn.offsetLeft;
      Top += btn.offsetTop;
    }
  }

  obj = document.getElementById("pCalendar");
  obj.style.visibility =
    obj.style.visibility == "visible" ? "hidden" : "visible";
  obj.style.left = Left;
  obj.style.top = Top + 20;
}

function change() {
  month = parseInt(
    document.getElementById("cboMonth").options[
      document.getElementById("cboMonth").seclectedIndex
    ].value
  );
  year = parseInt(
    document.getElementById("cboYear").options[
      document.getElementById("cboYear").seclectedIndex
    ].value
  );
  makeCalendar(month, year);
}
