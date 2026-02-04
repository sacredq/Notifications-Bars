// buttons Id
let success = document.getElementById("successBtn");
let warning = document.getElementById("warningBtn");
let notifications = document.getElementById("notificationsBtn");
let error = document.getElementById("errorBtn");
// Bars Id
let sucBar = document.getElementById("successBar");
let warBar = document.getElementById("warningBar");
let infBar = document.getElementById("infoBar");
let erBar = document.getElementById("errorBar");
// Close Id
let close = document.getElementById("xmark")
let close2 = document.getElementById("xmark2")
let close3 = document.getElementById("xmark3")
let close4 = document.getElementById("xmark4")

// Code

success.addEventListener("click", function(){
    sucBar.style.display = "flex"; 
});

warning.addEventListener("click", function(){
    warBar.style.display = "flex"; 
});

notifications.addEventListener("click", function(){
    infBar.style.display = "flex"; 
});

error.addEventListener("click", function(){
    erBar.style.display = "flex"; 
});

close.addEventListener("click", function(){
    sucBar.style.display = "none";
    // warBar.style.display = "none";
});

close2.addEventListener("click", function(){
    warBar.style.display = "none";
});


close3.addEventListener("click", function(){
    infBar.style.display = "none";
});


close4.addEventListener("click", function(){
    erBar.style.display = "none";
});