
    var date = new Date();
    document.getElementById("time").innerHTML = "<br /><br /><br /><br /><br /><br />" + date;
    var hr = date.getHours();
    if (hr >= 6 && hr < 12) {
        document.getElementById("greeting").innerHTML = "Good Morning";
    } else if (hr >= 12 && hr <= 18) {
        document.getElementById("greeting").innerHTML = "Good AfterNoon";
    } else {
        document.getElementById("greeting").innerHTML = "Good Evening";
    }
