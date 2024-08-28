// Function to add or remove the 'navbar-scrolled' class based on scroll position
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNavbar');
    if (window.scrollY > 50) { // You can adjust the scroll threshold (50px) as needed
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});
$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if(window.scrollY>60){
            document.querySelector('#scroll-top').classList.add('active');
        }else{
            document.querySelector('#scroll-top').classList.remove('active');
        }
// scroll spy
$('section').each(function(){
    let height = $(this).height();
    let offset = $(this).offset().top - 200;
    let top = $(window).scrollTop();
    let id = $(this).attr('id');

    if(top>offset && top<offset+height){
        $('.navbar ul li a').removeClass('active');
        $('.navbar').find(`[href="#${id}"]`).addClass('active');
    }
});
});

// // smooth scrolling
$('a[href*="#"]').on('click',function(e){
e.preventDefault();
$('html, body').animate({
    scrollTop : $($(this).attr('href')).offset().top,
},500, 'linear')
})
});

document.addEventListener('visibilitychange',
function(){
if(document.visibilityState === "visible"){
document.title = "Portfolio | Shambhavi Jha";
}
else {
document.title = "Waiting!!!";

}
});


document.addEventListener('DOMContentLoaded', function() {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarCollapse = document.querySelector('.navbar-collapse');

    // Close the navbar when clicking outside of it
    document.addEventListener('click', function(event) {
        var isClickInside = document.querySelector('.navbar').contains(event.target);
        
        if (!isClickInside && navbarCollapse.classList.contains('show')) {
            var bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
            navbarToggler.classList.remove('collapsed');
        }
    });
});
