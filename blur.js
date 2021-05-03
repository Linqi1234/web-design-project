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
	const percent = current / viewheight;
	const fontSize = 30 + (100 - 30) * (1 - percent);
	title.style.display = "block";
	title.style.position = "relative";
	title.style.fontSize = fontSize + "px";
	title.style.left = viewwidth * (1 - percent) / 2 - fontSize + "px";
	title.style.top = current + (viewheight - current) / 2 - title.getBoundingClientRect().height / 2 + "px";
}

window.addEventListener('scroll', (event) => {
	updateBlurEffect()
	updateCharacterPostion();
})

updateCharacterPostion();
