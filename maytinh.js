let firstnumber = document.getElementById("firstnumber");
let secondnumber = document.getElementById("secondnumber");
let ketqua = document.getElementById("ketqua");

function cong() {

    let tong = parseInt(firstnumber.value) + parseInt(secondnumber.value);
    ketqua.innerHTML = tong;
}

function tru() {
    let hieu = parseInt(firstnumber.value) - parseInt(secondnumber.value);
    ketqua.innerHTML = hieu;
}

function nhan() {
    let tich = parseInt(firstnumber.value) * parseInt(secondnumber.value);
    ketqua.innerHTML = tich;
}

function chia() {
    let thuong = parseInt(firstnumber.value) / parseInt(secondnumber.value);
    ketqua.innerHTML = thuong;
}