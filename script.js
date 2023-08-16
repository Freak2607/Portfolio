// -----------------------------------navbar icon-----------------------------------
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}

// -----------------typed js----------------------
const typed = new Typed('.multiple-text', {
    strings: ['Web Devoleper', 'Designer', 'Full Stack Devoloper'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// --------localStorage----------

function demo() {
    var fn = document.getElementById("Full-Name").value
    console.log("Full-Name", fn)
    localStorage.setItem("Full-Name", fn)

    var e = document.getElementById("Email").value
    console.log("Email", e)
    localStorage.setItem("Email", e)

    var mn = document.getElementById("Mobile-Number").value
    console.log("Mobile-Number", mn)
    localStorage.setItem("Mobile-Number", mn)

    var es = document.getElementById("Email-Subject").value
    console.log("Email-Subject", es)
    localStorage.setItem("Email-Subject", es)
}
