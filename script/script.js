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

const nav = document.getElementById("nav-wrapper");
const header = document.getElementById("header");
console.log(header.offsetHeight);
let last_scroll = 0;
window.addEventListener('scroll', function(){
    const curr_scroll = window.pageYOffset;
    if(curr_scroll >=(header.offsetHeight - nav.offsetHeight)){
        nav.classList.add("fixed");
    }else{
        nav.classList.remove("fixed");
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

class CustomizedSiema extends Siema {

    constructor(options){
        super(options);
        this.paused = false;
    }
    

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
        this.paused = true;
        this.goTo(i);
        })

        dot.addEventListener('blur', ()=>{
            this.paused = false;
        })

        // append dot to a container for all of them
        this.dots.appendChild(dot);
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


    addButton(){

    this.btn_pre = document.createElement("button");
    this.btn_next =  document.createElement("button");
    this.btn_pre.classList.add("btn-slider","pre");
    this.btn_next.classList.add("btn-slider","next");

    this.btn_pre.addEventListener('click', () => {
        this.paused = true;
        this.prev();

    });
    this.btn_pre.addEventListener('blur', () => 
    {
        this.paused = false;
    });
    console.log("outter button",this.paused)
    this.btn_next.addEventListener('click', () => 
    {        
        this.paused = true;
        this.next();
    });
    this.btn_next.addEventListener('blur', () => 
    {

        this.paused = false;
    });

    this.selector.parentNode.insertBefore(this.btn_pre,null);
    this.selector.parentNode.insertBefore(this.btn_next,null);

    }

    autoSlide(interval){

        setInterval(()=>{
            if(this.paused) return;
            this.next() },interval);

        //Stop autoplay on hover img, reset when mouseout
        const img = document.querySelectorAll(`#${this.selector.id} img`);
        for(let i  = 1; i < img.length-1; i++){

            //Bind function to this to access Class constructor's variables
            img[i].addEventListener("mouseover",OnMouseOver.bind(this));
                

    
            img[i].addEventListener("mouseout",OnMouseOut.bind(this));
            // }
        }

                        
        function OnMouseOver(){
                this.paused = true;
        }

        function OnMouseOut(){
                //delay2s
                setTimeout(()=>this.paused = false, 2000); 
        }
    }
}


    const mySlider = new CustomizedSiema({
        selector: slider,
        loop:true,
        duration: 1000,
        paused: false,
        easing: 'ease-in-out',

    // on init trigger method created above
    onInit: function(){
    this.addDots();
    this.updateDots();
    this.addButton();
    this.autoSlide(2000);
    },

    // on change trigger method created above
    onChange: function(){
    this.updateDots()
    },
    });


    // //Add css to i class grid
    // const grid_items = document.querySelectorAll(".topic__body > a");
    
    // for(var i = 0 ;i < grid_items.length; i++){
    //     grid_items[i].classList.add(`i`+(i+1))
    // }

    // console.log(grid_items);


    // Resize author avatar image
    const author_img = document.querySelectorAll(".author__avatar > img");
    author_img.forEach((e)=> {e.style.height = '48px'; e.style.width = '48px'})