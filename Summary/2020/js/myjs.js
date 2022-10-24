// show pop up
function ShowDiv(show_div, bg_div){
    document.getElementById(show_div).style.display='block';
    document.getElementById(bg_div).style.display='block';
    var bgdiv = document.getElementById(bg_div);
    bgdiv.style.width = document.body.scrollWidth;
    // bgdiv.style.height = $(document).height();
    $("#"+bg_div).height($(document).height());
};

// close pop up
function CloseDiv(show_div, bg_div)
{
    document.getElementById(show_div).style.display='none';
    document.getElementById(bg_div).style.display='none';
};


// show more
function ShowMore(show_div){
    document.getElementById(show_div).style.display='block';
    var sdiv = document.getElementById(show_div);
    sdiv.style.width = document.body.scrollWidth;
    // bgdiv.style.height = $(document).height();
    $("#"+sdiv).height($(document).height());
    sdiv.style.display = 'none';
};

// show less
function ShowLess(show_div, bg_div)
{
    document.getElementById(show_div).style.display='none';
    document.getElementById(bg_div).style.display='none';
};