"use strict";

console.log("Hello World from main.js! \nChange this message, and make sure it changes in the browser \nto verify that you're working in the right files.");
gsap.registerPlugin(ScrollTrigger);
var sections = gsap.utils.toArray('.panel');
gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: 'none',
  scrollTrigger: {
    trigger: '.container',
    pin: true,
    scrub: 1,
    // snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: function end() {
      return '+=' + document.querySelector('.container').offsetWidth;
    }
  }
});
sections.forEach(function (sct, i) {
  ScrollTrigger.create({
    trigger: sct,
    start: 'top top-=' + (sct.offsetLeft - window.innerWidth / 2) * (document.querySelector('.container').offsetWidth / (sct.offsetWidth * (sections.length - 1))),
    end: '+=' + sct.offsetWidth * (document.querySelector('.container').offsetWidth / (sct.offsetWidth * (sections.length - 1))),
    toggleClass: {
      targets: sct,
      className: 'active'
    }
  });
}); // gsap.to('.c', {
// 	horizontal: true,
// 	scrollTrigger: {
// 		trigger: '.c',
// 		horizontal: true,
// 		start: 'left start',
// 		end: 'right center',
// 		scrub: true,
// 		// end: () => '=+' + document.querySelector('.c').offsetWidth,
// 		markers: true,
// 		toggleActions: 'restart pause reverse pause',
// 	},
// 	x: 400,
// 	rotation: 360,
// 	ease: 'none',
// 	duration: 3,
// });
// gsap.to('.ghost1', {
// 	scrollTrigger: {
// 		trigger: '.c',
// 		horizontal: true,
// 		start: 'left center',
// 		end: 'right center',
// 		scrub: 2,
// 		// end: () => '=+' + document.querySelector('.c').offsetWidth,
// 		markers: true,
// 		toggleActions: 'restart pause reverse pause',
// 	},
// 	x: 400,
// 	rotation: 360,
// 	ease: 'none',
// 	duration: 3,
// });
// gsap.to('.ghost2', {
// 	scrollTrigger: {
// 		trigger: '.c',
// 		horizontal: true,
// 		start: 'left center',
// 		end: 'right center',
// 		scrub: 4,
// 		// end: () => '=+' + document.querySelector('.c').offsetWidth,
// 		markers: true,
// 		toggleActions: 'restart pause reverse pause',
// 	},
// 	x: 400,
// 	rotation: 360,
// 	ease: 'none',
// 	duration: 3,
// });
// gsap.to('.ghost3', {
// 	scrollTrigger: {
// 		trigger: '.c',
// 		horizontal: true,
// 		start: 'left center',
// 		end: 'right center',
// 		scrub: 8,
// 		// end: () => '=+' + document.querySelector('.c').offsetWidth,
// 		markers: true,
// 		toggleActions: 'restart pause reverse pause',
// 	},
// 	x: 400,
// 	rotation: 360,
// 	ease: 'none',
// 	duration: 3,
// });
//# sourceMappingURL=main.js.map
