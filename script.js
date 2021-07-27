function animatedScrool() {

	function smoothScroll(target, duration) {
		let targetN = document.querySelector(target);
		let targetPosition = targetN.getBoundingClientRect().top;
		let startPosition = window.pageYOffset;
		let distance = targetPosition - startPosition;
		let startTime = null;

		function animation(currentTime) {
			if(startTime === null) startTime = currentTime;
			let timeElapsed = currentTime - startTime;

			let run = ease(timeElapsed, startPosition, distance, duration);
			window.scrollTo(0, run);
			if(timeElapsed < duration) requestAnimationFrame(animation);
		}

		// ფორმულა ვიპოვე აქ http://www.gizma.com/easing/
		function ease(t, b, c, d) {
			t /= d/2;
			if (t < 1) return c/2*t*t + b;
			t--;
			return -c/2 * (t*(t-2) - 1) + b;
		};

		requestAnimationFrame(animation);
	}

	let links = document.querySelectorAll("a");

	for(let i = 0; i < links.length; i++) {
		links[i].addEventListener('click', function(e) {
			smoothScroll(this.getAttribute('href'), 1000);
			e.preventDefault();
		})
	}
}

animatedScrool();