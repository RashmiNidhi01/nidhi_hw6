change_p_bg_color();
change_p_font();
function change_p_bg_color() {
    const p_Elements = document.getElementsByTagName("p");
    console.log(p_Elements[0].style.backgroundColor = 'Yellow');
    console.log(p_Elements[1].style.backgroundColor = 'Yellow');
}
function change_p_font() {
    const p_font = document.getElementsByTagName("p");
    console.log(p_font[0].style.fontWeight = "bold")
    console.log(p_font[1].style.fontWeight = "bold")
}
