var nowDate = new Date();
var ddd = nowDate.getDate();
var mmm = nowDate.getMonth();
var dm = ddd + mmm;

if (dm > 6) {
    document.getElementById("d0").style.opacity = "0";
}
if (dm > 13) {
    document.getElementById("d1").style.opacity = "0";
}
if (dm > 20) {
    document.getElementById("d2").style.opacity = "0";
}
if (dm > 27) {
    document.getElementById("d3").style.opacity = "0";
}
if (dm < 6) {
    document.getElementById("d0").style.opacity = "0";
}
if (dm < 13) {
    document.getElementById("d1").style.opacity = "0";
}
if (dm < 20) {
    document.getElementById("d2").style.opacity = "0";
}
if (dm < 27) {
    document.getElementById("d3").style.opacity = "0";
}
if (dm == 6) {
    document.getElementById("d0").style.opacity = "1";
}
if (dm == 13) {
    document.getElementById("d1").style.opacity = "1";
}
if (dm == 20) {
    document.getElementById("d2").style.opacity = "1";
}
if (dm == 27) {
    document.getElementById("d3").style.opacity = "1";
}