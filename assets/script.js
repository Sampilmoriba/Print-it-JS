const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

function initDots() {
	const dotsContainer = document.querySelector('.dots');

	// Ajoute les dots en fonction de la taille du tableau slides
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement('div');
		dot.classList.add('dot');
		dotsContainer.appendChild(dot);
	}
}


let currentSlideIndex = 0;

function updateSlide() {
	const bannerImg = document.querySelector('.banner-img');
	const tagline = document.getElementById('tagline');

	bannerImg.src = `./assets/images/slideshow/${slides[currentSlideIndex].image}`;
	tagline.innerHTML = slides[currentSlideIndex].tagLine;

	// Update dots
	const dots = document.querySelectorAll('.dot');
	dots.forEach((dot, index) => {
		dot.classList.toggle('dot_selected', index === currentSlideIndex);
	});
}

// Change the current index to the previous and update slide
function previous() {
	currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
	updateSlide();
}

// Change the current index tp the next and update slide
function next() {
	currentSlideIndex = (currentSlideIndex + 1) % slides.length;
	updateSlide();
}

// Initial slide update
initDots();
updateSlide();