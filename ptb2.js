function disabled() {
    document.getElementById("count").innerHTML = (++count) - 1;
}

function choso() {
    var a = Math.round(Math.random() * 10);
    var b = Math.round(Math.random() * 10);
    var c = Math.round(Math.random() * 10);
    document.getElementById("a").value = a;
    document.getElementById("b").value = b;
    document.getElementById("c").value = c;
    var btn = document.getElementById("btngiai");
    btn.disabled = false;
    btn.className = 'nut';
}
function ptb2() {
    var a = document.forms["ptb2form"]["a"].value;
    var b = document.forms["ptb2form"]["b"].value;
    var c = document.forms["ptb2form"]["c"].value;
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Vui lòng nhập số từ -10 đến 10")
        return;
    }
    if (a > 10 || a < -10 || b > 10 || b < -10 || c > 10 || c < -10) {
        alert("Vui lòng nhập số từ -10 đến 10")
        return;
    }

    if (a == 0) {

        if (b == 0) {

            if (c == 0) {

                document.getElementById("ptb2").innerHTML = "<p>Phương trình có vô số nghiệm</p>"
            } else {

                document.getElementById("ptb2").innerHTML = "<p>Phương trình vô nghiệm</p>"
            }
        } else {

            document.getElementById("ptb2").innerHTML = "<p>Phương trình một nghiệm</p><p> X = " + (-c / b).toFixed(2) + "</p>"
        }
    } else {

        var delta = b * b - 4 * a * c;
        if (delta > 0) {
            var x1 = (-b + Math.sqrt(delta)) / (2 * a);
            var x2 = (-b - Math.sqrt(delta)) / (2 * a);
            document.getElementById("ptb2").innerHTML = "<p>Phương trình có 2 nghiệm</p>" + "<p>X<sub>1</sub> = " + x1.toFixed(2) + "</p>" + "<p>X<sub>2</sub> = " + x2.toFixed(2) + "</p> <p>Tổng 2 nghiệm = " + ((x1) + (x2)).toFixed(2) + "</p> <p>Hiệu 2 nghiệm = " + ((x1) - (x2)).toFixed(2) + "</p>";
        } else if (delta == 0) {
            var sum = -b / 2 * a
            document.getElementById("ptb2").innerHTML = "<p>Phương trình có nghiệm kép </p><p> X<sub>1</sub> = X<sub>2</sub> = " + sum + "</p>"
        } else {
            document.getElementById("ptb2").innerHTML = "<p>Phương trình vô nghiệm</p>"
        }
    }
    if (a == 0 && b != 0 && c != 0) {
        document.getElementById("pt2").innerHTML = b + "x +" + c + "= 0"
        if (b == 0 && c != 0 && a == 0) {
            document.getElementById("pt2").innerHTML = c + "= 0"
            if (c == 0 && a == 0 && b == 0) {
                document.getElementById("pt2").innerHTML = "0"
            } else {
                document.getElementById("pt2").innerHTML = c + "= 0"
            }
        } else {
            document.getElementById("pt2").innerHTML = b + "x +" + c + "= 0"
        }
    } else {
        document.getElementById("pt2").innerHTML = a + "x<sup>2</sup> + " + b + "x +" + c + "= 0"
    }
    if (a == 0 && b != 0 && c != 0) {
        document.getElementById("pt2").innerHTML = b + "x +" + c + "= 0"
    }
    else if (a == 0 && b == 0 && c != 0) {
        document.getElementById("pt2").innerHTML = c + "= 0"
    }
    if (a == -1 && b == 0 && c == -1) {
        document.getElementById("pt2").innerHTML = "-x<sup>2</sup> " + c + "= 0"
    }
    if (b == 0 && a != 0 && c != 0) {
        document.getElementById("pt2").innerHTML = a + "x<sup>2</sup> + " + c + "= 0"
    } else if (b == 0 && c == 0 && a != 0) {
        document.getElementById("pt2").innerHTML = a + "x<sup>2</sup> = 0"
    }
    if (c == 0 && b != 0 && a != 0) {
        document.getElementById("pt2").innerHTML = a + "x<sup>2</sup> + " + b + "x = 0"
    }
    else if (c == 0 && a == 0 && b != 0) {
        document.getElementById("pt2").innerHTML = b + "x = 0"
    }

    if (b < 0 && c > 0 && a > 0) {
        document.getElementById("pt2").innerHTML = a + "x<sup>2</sup>" + b + "x +" + c + "= 0"
        if (c < 0 && b < 0) {
            document.getElementById("pt2").innerHTML = a + "x<sup>2</sup>" + b + "x " + c + "= 0"
        }
    }
    if (c < 0 && b > 0 && a > 0) {
        document.getElementById("pt2").innerHTML = a + "x<sup>2</sup> +" + b + "x " + c + "= 0"
    }
    if (a == 1 && b > 0 && c > 0) {
        document.getElementById("pt2").innerHTML = "x<sup>2</sup> +" + b + "x +" + c + "= 0"
        if (b == 1 && c > 0 && a == 1) {
            document.getElementById("pt2").innerHTML = "x<sup>2</sup> + x +" + c + "= 0"
        }
    }
    if (a == -1 && b > 0 && c > 0) {
        document.getElementById("pt2").innerHTML = "-x<sup>2</sup> +" + b + "x +" + c + "= 0"
    } if (a == -1 && b == 1 && c == 1) {
        document.getElementById("pt2").innerHTML = "-x<sup>2</sup> + x +" + c + "= 0"
    }
    if (a == -1 && b == -1 && c > 0) {
        document.getElementById("pt2").innerHTML = "-x<sup>2</sup> - x +" + c + "= 0"
    }
    if (a == -1 && b == -1 && c < 0) {
        document.getElementById("pt2").innerHTML = "-x<sup>2</sup> - x " + c + "= 0"
    }
    if (b == -1 && a != -1 && c > 0) {
        document.getElementById("pt2").innerHTML = "x<sup>2</sup> - x +" + c + "= 0"
    }
    btn = document.getElementById("btngiai");
    btn.className = "nut_khoa";
    btn.disabled = true;
}
function dongho() {
    var today = new Date();
    var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;

    document.getElementById("hvn").innerHTML = "Bây giờ là " + dateTime;
}
setInterval("dongho()", 1000);


