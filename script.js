var settingmenu = document.querySelector(".setting-menu");
var darkBtn = document.getElementById("dark-btn");

function settingMenuToggle(){
    settingmenu.classList.toggle("setting-menu-height");
}
darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
}
alert("the site is not mobile friendly")