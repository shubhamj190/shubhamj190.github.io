$(document).ready(function () {


    let $btns = $('.project-area .button-group button');


    // Owl-carousel

    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    })
});

document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
            
        });
    });
});

// social media buttons 
let facebook=document.getElementById('facebook')
facebook.addEventListener('click',()=>{
    window.open("https://www.facebook.com/Shubhamjadhav190/");
    
})

let instagram= document.getElementById('instagram')
instagram.addEventListener('click',()=>{
    window.open("https://www.instagram.com/tom_mavrick/?hl=en");
})

let twitter= document.getElementById('twitter')
twitter.addEventListener('click',()=>{
    window.open("https://twitter.com/shubhamj190");
})

let linkedin= document.getElementById('linkedin')
linkedin.addEventListener('click',()=>{
    window.open("https://www.linkedin.com/in/shubham-jadhav-4b437615b/");
})

let github= document.getElementById('github')
github.addEventListener('click',()=>{
    window.open("https://github.com/shubhamj190");
})
