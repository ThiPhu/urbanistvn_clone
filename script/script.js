// const menu = document.getElementById("top-menu");
// const menu_right = document.getElementById("top-menu__right");
// // menu_left.addEventListener("mouseover", function(e){
// //         console.log(e.target.parentElement.nodeName);
    
// // })

// // menu_left.addEventListener("mouseout", function(e){
// //     e.target.style.textDecoration = "none";
// // })

// menu.addEventListener("mouseover", function(e){
//     // if(e.target.nodeName == "A"){
//         e.target.style.textDecoration = "underline";
        
//     console.log(e.target.parentElement.nodeName);
// })

// menu.addEventListener("mouseout", function(e){
// e.target.style.textDecoration = "none";
// })

const sbranch = document.querySelectorAll(".menu__subBranch");


// sbranch.forEach(function(e){
//     console.log("pre", e.children[1]); 
//      e.addEventListener("mouseleave",function(){

//     e.children[1].style.animation = " dropup 500ms ease-in";
//     console.log(e.children[1]); 
// })
// });

const bottom_nav = document.getElementById("bottom-nav-wrapper");
const nav = document.getElementById("nav");
console.log(nav.offsetHeight);
let last_scroll = 0;
window.addEventListener('scroll', function(){
    const curr_scroll = window.pageYOffset;
    if(curr_scroll >=(nav.offsetHeight - bottom_nav.offsetHeight)){
        bottom_nav.classList.add("fixed");
    }else{
        bottom_nav.classList.remove("fixed");
    }
});

//slider siema
// const slider = document.getElementById("slider");
// const mySlider = new Siema({
//     selector: slider,
//     loop:true,
//     duration: 1000,
//     perPage:1,
// });

// setInterval(()=> mySlider.next(), 2000 )


//siema with dóts

class SiemaWithDots extends Siema {

    addDots() {
    // create a contnier for all dots
    // add a class 'dots' for styling reason
    this.dots = document.createElement('div');
    this.dots.classList.add('dots');

    // loop through slides to create a number of dots
    for(let i = 0; i < this.innerElements.length; i++) {
        // create a dot
        const dot = document.createElement('button');

        // add a class to dot
        dot.classList.add('dots__item');

        // add an event handler to each of them
        dot.addEventListener('click', ()=>{
        // setInterval(function(){this.goTo(i)
        // console.log("go to" + i)},5000);
        this.goTo(i);
        })

        // append dot to a container for all of them
        this.dots.appendChild(dot);
    }

    function clearTimer(){
        clearInterval(sliderTimer);
        console.log("clear!")
    }

    // add the container full of dots after selector
    this.selector.parentNode.insertBefore(this.dots, this.selector.nextSibling);
    }

    updateDots() {
    // loop through all dots
    for(let i = 0; i < this.dots.querySelectorAll('button').length; i++) {
        // if current dot matches currentSlide prop, add a class to it, remove otherwise
        const addOrRemove = this.currentSlide === i ? 'add' : 'remove';
        this.dots.querySelectorAll('button')[i].classList[addOrRemove]('dots__item--active');
    }
    }
    }


const mySlider = new SiemaWithDots({
        selector: slider,
        loop:true,
        duration: 500,
        easing: 'ease-in-out',

    // on init trigger method created above
    onInit: function(){
    this.addDots();
    this.updateDots();
    },

    // on change trigger method created above
    onChange: function(){
    this.updateDots()
    },
    });




// Button
console.log(document.querySelector('.btn-slider.pre'));
document.querySelector('.btn-slider.pre').addEventListener('click', () => mySlider.prev());
document.querySelector('.btn-slider.next').addEventListener('click', () => mySlider.next());