document.addEventListener("DOMContentLoaded", function() {
    var today = new Date();
    var currentMonth = today.getMonth();
    var currentYear = today.getFullYear();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    var prevBtn = document.getElementById("prevBtn");
    var nextBtn = document.getElementById("nextBtn");
    var monthYear = document.getElementById("monthYear");
    var calendarBody = document.getElementById("calendarBody");
    
    showCalendar(currentMonth, currentYear);
    
    prevBtn.addEventListener("click", function() {
      currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
      currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
      showCalendar(currentMonth, currentYear);
    });
    
    nextBtn.addEventListener("click", function() {
      currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
      currentMonth = (currentMonth + 1) % 12;
      showCalendar(currentMonth, currentYear);
    });
    
    function showCalendar(month, year) {
      var firstDay = new Date(year, month, 1).getDay();
      var daysInMonth = new Date(year, month + 1, 0).getDate();
    
      monthYear.textContent = months[month] + " " + year;
      calendarBody.innerHTML = "";
    
      var date = 1;
      for (var i = 0; i < 6; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < 7; j++) {
          if (i === 0 && j < firstDay) {
            var cell = document.createElement("td");
            var cellText = document.createTextNode("");
            cell.appendChild(cellText);
            row.appendChild(cell);
          } else if (date > daysInMonth) {
            break;
          } else {
            var cell = document.createElement("td");
            var cellText = document.createTextNode(date);
            cell.appendChild(cellText);
            row.appendChild(cell);
            date++;
          }
        }
        calendarBody.appendChild(row);
      }
    }
  });
  