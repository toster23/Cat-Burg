let options = {
	root: null,
	rootMargin: "0px",
	threshold: 0.5,
};

let callback = function (htmlElements) {
	htmlElements.forEach(element => {
		if (element.isIntersecting) {
			element.target.classList.add("active");
		}
	});
};

let observer = new IntersectionObserver(callback, options);
let targets = document.querySelectorAll(".anim");

targets.forEach(target => {
	observer.observe(target);
});
