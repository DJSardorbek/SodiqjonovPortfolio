window.addEventListener('DOMContentLoaded', function() {
    this.window.addEventListener('scroll', function() {
        const header = this.document.querySelector('header');
        header.classList.toggle('sticky', this.scrollY > 0)
    })

    const menuBtn = this.document.querySelector('.menu-bars');
    const navigation = this.document.querySelector('.navigation');
    const navigationItems = this.document.querySelectorAll('.navigation a');

    menuBtn.addEventListener('click', function () {
        menuBtn.classList.toggle('active');
        navigation.classList.toggle('active');
    })

    navigationItems.forEach(navItem => {
        navItem.addEventListener('click', function() {
            menuBtn.classList.remove('active');
            navigation.classList.remove('active');
        })
    })

    const btnToTop = this.document.querySelector('.scrollToTop-btn');
    this.window.addEventListener('scroll', () => {
        btnToTop.classList.toggle('active', this.window.scrollY > 500);
    })

    btnToTop.addEventListener('click', () => {
        this.document.body.scrollTop = 0;
        this.document.documentElement.scrollTop = 0;
    })

    this.window.addEventListener('scroll', () => {
        let reveals = this.document.querySelectorAll('.reveal');
        reveals.forEach(reveal => {
            let windowHeight = this.window.innerHeight;
            let revealTop = reveal.getBoundingClientRect().top;
            let revealPoint = 50;
            
            if(revealTop < windowHeight - revealPoint) {
                reveal.classList.add('active');
            }
        })
    })
})