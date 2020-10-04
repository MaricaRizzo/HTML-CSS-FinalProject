function dropdown() {
    let nav = document.getElementById("navigation");

    if (nav.className === "nav") { 
        nav.className += " show_menu";
    } else {
        nav.className = "nav";
    }
}
