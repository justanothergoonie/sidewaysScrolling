console.log(`Hello World from main.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`);

gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray('.panel');

const NUM_PANELS = 6;
const PANEL_RATIO = 16 / 9;

const experienceWrapper = document.querySelector('.experience-wrapper');
const experience = experienceWrapper.querySelector('.experience');
const experiencePadder = experienceWrapper.querySelector('.experience-padder');
const panels = experienceWrapper.querySelectorAll('.panel');
const timeline = gsap.timeline({ duration: 100, paused: true }); // set up a 100s timeline

let resizeStuff = () => {
	let onePanelHeight = panels[0].offsetHeight; // just ask the first panel how tall it is, to find what CSS has currently calculated its height to be
	let onePanelWidth = onePanelHeight * PANEL_RATIO; // figure out what its width should be to maintain the chosen ratio
	experience.style.width = onePanelWidth * NUM_PANELS + 'px'; // set the whole sideways scrolling thing to NUM_PANELS times the width of one panel
	panels.forEach((panel) => {
		panel.style.width = onePanelWidth + 'px'; // set the panels to that single panel width too
	});
	experiencePadder.style.height = onePanelWidth * NUM_PANELS + 'px'; // set the hidden padding element to be tall enough that we can scroll down through NUM_PANELS worth of panels
};

window.addEventListener('resize', resizeStuff);
window.addEventListener('orientationchange', resizeStuff);
resizeStuff();

// window.addEventListener('scroll', () => {
gsap.ticker.add(() => {
	let topLimit = experienceWrapper.getBoundingClientRect().top;
	console.log(topLimit);
	if (topLimit < 0) {
		// experience.style.top = -topLimit + 'px'; // keeps the panels in place
		experience.style.left = topLimit + 'px'; // keeps the panels in place
	} else {
		// experience.style.top = 0 + 'px';
	}
	let percent = -topLimit / (experiencePadder.offsetHeight - panels[0].offsetHeight);
	timeline.progress(percent);
});

// gsap animations

// put a tween on the timeline
timeline.to(
	['.painting', '.table', '.man', '.gun', '.news'],
	{
		duration: 5, // takes 2 seconds
		left: '50%',
		top: '50%',
	},
	0
); // starts at the 1 second mark
