//sets a header to appear on a timer
window.onload = function()
{
   setTimeout(textAppear,5000); 
}

function textAppear()
{
   document.getElementById("hidden").style.display="block"; 
}
