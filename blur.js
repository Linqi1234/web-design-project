const headerHeight = 65;
let mode = "fancy";

function updateBlurEffect() {
	let current = window.scrollY;
	const viewheight = document.getElementById('poster').getBoundingClientRect().height;
	const percent = current / viewheight;
	let blurer = document.getElementById('blurer');
	let px = percent * 100 * 1 + 5 + 'px'
	blurer.style.backdropFilter = `blur(${px})`;
}

function updateCharacterPostion() {
	let current = window.scrollY;
	const viewheight = document.getElementById('poster').getBoundingClientRect().height;
	const viewwidth = document.getElementById('poster').getBoundingClientRect().width;
	let blurer = document.getElementById('blurer');
	let title = document.getElementById('title');
	let poster = document.getElementById('poster');
	poster.style.position = 'static';
	const percent = current / viewheight;
	const fontSize = 30 + (100 - 30) * (1 - percent);
	title.style.display = "block";
	title.style.position = "relative";
	title.style.fontSize = fontSize + "px";
	title.style.left = viewwidth * (1 - percent) / 2 - 2 * fontSize + percent * 50 + "px";
	title.style.top = current + (viewheight - current) / 2 - title.getBoundingClientRect().height / 2 + "px";
}

function setHeaderMode() {
	mode = "header";
	const viewheight = document.getElementById('poster').getBoundingClientRect().height;
	const viewwidth = document.getElementById('poster').getBoundingClientRect().width;
	let current = viewheight - headerHeight;
	let poster = document.getElementById('poster');
	let title = document.getElementById('title');
	let menu = document.getElementById('menu');
	const percent = current / viewheight;
	const fontSize = 30 + (100 - 30) * (1 - percent);
	poster.style.position = "fixed";
	poster.style.width = "100%";
	poster.style.top = -current + "px";
	title.style.display = "block";
	title.style.position = "relative";
	title.style.fontSize = fontSize + "px";
	title.style.left = viewwidth * (1 - percent) / 2 - 2 * fontSize + percent * 50 + "px";
	title.style.top = current + (viewheight - current) / 2 - title.getBoundingClientRect().height / 2 + "px";
	menu.style.visibility = 'visible';
}

function getHeaderSpace() {
	let current = window.scrollY;
	const viewheight = document.getElementById('poster').getBoundingClientRect().height;
	return viewheight - current;
}

window.addEventListener('scroll', (event) => {
	let headerSpace = getHeaderSpace();
	if (headerSpace > headerHeight) {
		mode = 'fancy';
		let menu = document.getElementById('menu');
	menu.style.visibility = 'hidden';
		updateBlurEffect()
		updateCharacterPostion();
	} else {
		if (mode == 'header')
			return;
		setHeaderMode();
	}
})

updateCharacterPostion();
