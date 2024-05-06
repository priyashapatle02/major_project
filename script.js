

Shery.mouseFollower({
  skew:true,
  // ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  // duration: 1,
})

Shery.makeMagnet("h4")


Shery.textAnimate("h1" ,{
  style:1,
  delay:0.5,
})



// Select the banter-loader div
const loader = document.querySelector('.banter-loader');

// Use setTimeout to delay the execution of a function for 3 seconds
setTimeout(function() {
  // Add a class to the banter-loader div which will hide it
  loader.classList.add('banter-loader--hide');

  // Select the main div
  const main = document.querySelector('#main');

  // Add a class to the main div which will show it
  main.classList.add('main--show');
}, 2000);

// Select the banter-loader div
// const loader = document.querySelector('.banter-loader');

// Use setTimeout to delay the execution of a function for 2 seconds
// setTimeout(function() {
//   // Use GSAP to slide up the banter-loader div
//   gsap.fromTo(loader, {y: 0}, {y: -100, duration: 1, onComplete: function() {
//     // Add a class to the banter-loader div which will hide it
//     loader.classList.add('banter-loader--hide');
//   }});

//   // Select the page1 div
//   const page1 = document.querySelector('#main.page1');

//   // Add a class to the page1 div which will show it
//   page1.classList.add('page1--show');

// }, 2000);









var tl = gsap.timeline()
tl.from("#nav",{
        y:-30,
        duration:1,
        opacity:0
})
tl.from("h4",{
    y:-30,
    duration:1,
    opacity:0,
    // stagger:
})

