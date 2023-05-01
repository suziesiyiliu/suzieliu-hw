
document.getElementById("meatIcon").click();

var display

function hover(name) {
    selected = document.getElementById(name+'Icon');
    selected.style.transform = "scale(1.5)";
    selected.style.transition = "0.1s"
}

function leave(name) {
    selected = document.getElementById(name+'Icon');
    if (selected!=display){
    selected.style.transform = "scale(1)";
    selected.style.transition = "0.1s"
    };
}

function openCategory(name) {

    var i, columns;
    columns = document.getElementsByClassName("columns");
    for (i = 0; i < columns.length; i++) {
    columns[i].style.display = "none";
    }

    var x, icons;
    icons = document.getElementsByClassName("icon");
    for (x = 0; x < icons.length; x++) {
        if (icons[x].style.transform == "scale(1.5)"){
            icons[x].style.transform = "scale(1)";
            selected.style.transition = "0.1s"
        };
    }
    
    // Show the specific tab content
    document.getElementById(name).style.display = "flex";

    // Get the img object using its Id
    display = document.getElementById(name+'Icon');
    
    // increase image size
    display.style.transform = "scale(1.5)";
    selected.style.transition = "0.1s"
    
};
  


