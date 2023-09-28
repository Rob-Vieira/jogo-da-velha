document.addEventListener("DOMContentLoaded", () => {
    let o_icons = document.querySelectorAll('.board .space .o-icon');

    console.log(o_icons);
    console.log('e');

    o_icons.forEach(e => e.classList.add('o-icon-transition'));
});