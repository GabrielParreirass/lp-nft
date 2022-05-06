function showmenu() {
    let element = document.getElementById('menu-m')
    let open = document.getElementById('open')
    let close = document.getElementById('close')

    if (element.style.display === "none") {
        element.style.display = "flex";
    } else {
        element.style.display = "none";
    }
}



