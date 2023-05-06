let borda = document.getElementById('borda')
let borderValue = 0;

borda.oninput = function(){
    borderValue = document.getElementsByClassName('left1')[0].value;
    borda.style.borderTopLeftRadius = `${borderValue}`;
}