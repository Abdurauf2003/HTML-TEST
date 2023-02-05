function tekshir() {
    var a = document.getElementById("l0");
    var c = document.getElementById("l1");
    var d = document.getElementById("l2");
    var f = document.getElementById("l3");
    var e = document.getElementById("l4");
    var g = document.getElementById("l5");
    var h = document.getElementById("l6");
    var i = document.getElementById("l7");
    var j = document.getElementById("l8");
    var k = document.getElementById("l9");
    var b = 0;
    if (a.checked == true) {
        b = b + 1;
    }
    if (c.checked == true) {
        b = b + 1;
    }
    if (d.checked == true) {
        b = b + 1;
    }
    if (f.checked == true) {
        b = b + 1;
    }
    if (e.checked == true) {
        b = b + 1;
    }
    if (g.checked == true) {
        b = b + 1;
    }
    if (h.checked == true) {
        b = b + 1;
    }
    if (i.checked == true) {
        b = b + 1;
    }
    if (j.checked == true) {
        b = b + 1;
    }
    if (k.checked == true) {
        b = b + 1;
    }
    document.getElementById("rslt").innerText = b;
}