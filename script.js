function clock() { 
    var d = new Date(); 
    var month_num = d.getMonth();
    var day = d.getDate();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    var day_num = d.getDay();
    
    month=["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    weekday=["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]; 
	
    if (day <= 9) day = "0" + day;
    if (hours <= 9) hours = "0" + hours;
    if (minutes <= 9) minutes = "0" + minutes;
	
    date_time = "\n" + "Сегодня - " + day + " " + month[month_num] + " " + d.getFullYear() + " г.&nbsp;&nbsp;&nbsp;Текущее время - "+ hours + ":" + minutes + ":" + seconds + " " + weekday[day_num] ; 
    if (document.layers) {
    document.layers.doc_time.document.write(date_time);
    document.layers.doc_time.document.close();
    }
    else document.getElementById("doc_time").innerHTML = date_time;
    setTimeout("clock()", 1000);
    }


    function checkbrowser() { // Проверка, на Internet Explorer.
        var useragent = navigator.userAgent;
        if ((useragent.indexOf('Trident') != -1) || (useragent.indexOf('MSIE') != -1)) {
            alert("You are using the wrong browser");
        }
    
    }