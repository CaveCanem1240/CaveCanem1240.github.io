/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')



function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)
/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {

}

window.addEventListener('', )

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop() {

}

window.addEventListener('', )

/*==================== DARK LIGHT THEME ====================*/ 
//const themeButtom =
//const darkTheme =
//const iconTheme =

// Previously selected topic (if user selected)
//const selectedTheme =
//const selectedIcon =

// We obtain the current theme that the interface has by validating the dark-theme class
//const getCurrentTheme = 
//const getCurrentIcon =

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('', () => {
    // Add or remove the dark / icon theme

    // We save the theme and the current icon that the user chose
})

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({

});

sr.reveal(``

    , {

})