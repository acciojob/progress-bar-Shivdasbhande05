//your JS code here. If required.
const circles = Array.from(document.querySelectorAll(".circle"));
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

let activeCircle = 0;
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
	 if(activeCircle <= 1){
	 	activeCircle = 1;
	 }
	userInterface();
});

function userInterface() {
	circles.forEach((circle, index) => {
		if(index <= activeCircle){
			circle.classList.add('active');
		} else {
			circle.classList.remove('active');
		}
	});
	prevButton.disabled = activeCircle === 0;
	nextButton.disabled = activeCircle === circles.length-1;
}
