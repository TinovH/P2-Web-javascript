const toggle = document.querySelector('.toggle')

toggle.addEventListener('click', () => {
    const nav = document.querySelector('nav')
    nav.classList.toggle('active')
})

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}