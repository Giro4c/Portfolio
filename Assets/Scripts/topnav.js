/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function ToggleResponsive() {
    var nav = document.getElementById("topnav");
    if (nav.className === "nav") {
        nav.className += " responsive";
    } else {
        nav.className = "nav";
    }

    ToggleNavIcon(nav);
}

function ToggleNavIcon(x) {
    var icon = document.getElementById("topnav-toggle-icon");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-close");
}