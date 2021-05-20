var count = document.getElementById("adults");
count.addEventListener("change", cost);

var day = document.getElementById("fromDate");
day.addEventListener("input", entry);

function entry(){
     document.getElementById("total").value = "Rs. 0";         
}

var days = document.getElementById("toDate");
days.addEventListener("input", cost);

function cost() {
     var ct = document.getElementById("adults").value;
     var date1 = new Date(document.getElementById("fromDate").value);
     var date2 = new Date(document.getElementById("toDate").value);
     if(date2 > date1){
          var diff = date2.getTime() - date1.getTime();
          var daysct = 1 + (diff / (1000 * 3600 * 24));
          var cost = ct*daysct*1000;
          document.getElementById("total").value = `Rs. ${cost}`; 
     }else{
          document.getElementById("total").value = "Rs. 0";
     }
}

