function cong() {
    let firstnumber = parseInt(document.getElementById("firstnumber").value);
    let secondnumber = parseInt(document.getElementById("secondnumber").value);
    let ketqua = firstnumber + secondnumber;
    document.getElementById("ketqua").innerHTML= ("Addition = " +ketqua);
}
function tru() {
    let firstnumber = parseInt(document.getElementById("firstnumber").value);
    let secondnumber = parseInt(document.getElementById("secondnumber").value);
    let ketqua = firstnumber - secondnumber;
    document.getElementById("ketqua").innerHTML= ("Subtraction = " +ketqua);
}
function nhan() {
    let firstnumber = parseInt(document.getElementById("firstnumber").value);
    let secondnumber = parseInt(document.getElementById("secondnumber").value);
    let ketqua = firstnumber * secondnumber;
    document.getElementById("ketqua").innerHTML= ("Multiple = " +ketqua);
}
function chia() {
    let firstnumber = parseInt(document.getElementById("firstnumber").value);
    let secondnumber = parseInt(document.getElementById("secondnumber").value);
    let ketqua = firstnumber / secondnumber;
    document.getElementById("ketqua").innerHTML= ("Division = " +ketqua);
}