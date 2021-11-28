const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
var overlay = $('.overlay');

/*Header */
var closeBtnHeader = $('header .close-btn')
var headerTabs = $$('header .tab');
var headerPanes = $$('header .pane');

function resetHeader() {
    headerTabs.forEach((t, i) => {
        t.style.opacity = 0.6;
        headerPanes[i].style.transform = "translateY(-200px)";
        headerPanes[i].style.opacity = 0;
        headerPanes[i].style.visibility = "hidden";
    });
    overlay.style.display = "none";
    $('.header__wrapper').style.height = 0;
    closeBtnHeader.style.display = "none";
    $('body').classList.remove('stop-scrolling');
}

headerTabs.forEach((tab, index) => {
    tab.onclick = () => {
        resetHeader();
        
        overlay.style.display = "block";
        tab.style.opacity = 1;
        headerPanes[index].style.transform = "translateY(0)";
        headerPanes[index].style.opacity = 1;
        headerPanes[index].style.visibility = "visible";
        $('.header__wrapper').style.height = "400px";
        closeBtnHeader.style.display = "block";
        $('body').classList.add('stop-scrolling');
    }
});

closeBtnHeader.onclick = () => {
    resetHeader();
}
/*Hide header when scroll-down*/
var scroll = window.onscroll = () => {
    if (this.oldScroll > this.scrollY){
        // Scroll-Up
        $('header').classList.remove('hide');
        $('nav').classList.remove('hide');
    } else {
        // Scroll-Down
        $('header').classList.add('hide');
        $('nav').classList.add('hide');
    }
    this.oldScroll = this.scrollY;
}

/*Nav*/
var closeBtnNav = $('.all-games .close-btn');
var menuBtn = $('nav .menu>i');

function resetNav() {
    overlay.style.display = "none";
    $('.all-games').style.transform = "translateX(-100%)";
    $('body').classList.remove('stop-scrolling');
}

menuBtn.onclick = () => {
    $('header').classList.remove('hide');
    $('nav').classList.remove('hide');
    overlay.style.display = "block";
    $('.all-games').style.transform = "translateX(0)";
    $('body').classList.add('stop-scrolling');
}

closeBtnNav.onclick = () => {
    resetNav();
}
/*Mobile Nav*/
var mobileNavBtn = $('.mobile-nav__btn');
var mobileNavClose = $('.mobile-nav .close');

function resetMobileNav() {
    overlay.style.display = "none";
    $('body').classList.remove('stop-scrolling');
    if (window.innerWidth < 740) {
        $('.mobile-nav').style.transform = "translateY(-100%)";
    } else $('.mobile-nav').style.transform = "translateX(-100%)";
}

mobileNavBtn.onclick = () => {
    overlay.style.display = "block";
    $('.mobile-nav').style.transform = "translate(0)";
    $('header').classList.remove('hide');
    $('nav').classList.remove('hide');
    $('body').classList.add('stop-scrolling');;
}
mobileNavClose.onclick = () => {
    resetMobileNav();
}
/*Tab Main */
var mainTabs = $$('.box-games .tab');
var mainPanes = $$('.box-games .pane');

mainTabs.forEach((tab, index) => {
    tab.onclick = () => {
        $('.tab.active').classList.remove('active');
        $('.pane.show').classList.remove('show');

        tab.classList.add('active');
        mainPanes[index].classList.add('show');
    };
});

/*Tab Slide Mobile*/
new Splide( '.box-games>.splide', {
    pagination: false,
    autoWidth: true,
    arrows: false,
} ).mount();

//Reset all when click overlay
overlay.onclick = () => {
    resetHeader();
    resetNav();
    resetMobileNav();
}
