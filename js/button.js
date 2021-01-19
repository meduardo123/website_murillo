var feild = document.querySelectorAll("textarea");
var backUp = feild.getAttribute("placeholder");
var button = document.querySelectorAll("button");
var clear = document.getElementById("clear");

feild.onfocus = function(){
    this.setAttribute('placeholder', '');
    this.style.borderColor= #333;
    button.style.display = 'block';
}
feild.onblur = function(){
    this.setAttribute('placeholder', backUp);
    this.borderColor = #aaa;
}
clear.onclick = function(){
    button.style.display = 'none';
    feild.value = '';
}