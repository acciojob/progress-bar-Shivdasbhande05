//your JS code here. If required.
const circles = document.querySelector(".circle");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

let activeCircle = 1;
userInterface();

nextButton.addEventListener('click',() => {
	activeCircle++;
	if(activeCircle > circles.length){
		activeCircle = circles.length;
	}
	userInterface();
});

prevButton.addEventListener('click', () =>{
	activeCircle--;
	if(activeCircle < 1){
		activeCircle = 1;
	}
	userInterface();
});

function userInterface() {
	circles.forEach((circle, index) => {
		if(circle < activeCircle){
			circles.classList.add('active');
		} else {
			circles.classList.remove('active');
		}
	});
	prevButton.disabled = activeCircle ===1;
	nextButton.disabled = activeCircle === circles.length;
}
