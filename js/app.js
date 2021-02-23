//This event runs the image ducal on load from the baguettebox file.
window.addEventListener('load', () => {
	baguetteBox.run('.gallery');
});

//Save the searh input to searhInput constant
const searchInput = document.querySelector('#search');
//A function that takes a user's input as argument, interate through the anchor elements, & display the child(img)
// of any, whose captions contains the letters of the user's input.
const realTimeSearch = (input) => {
	//Save the anchors to the anchors constant.
	const anchors = document.querySelectorAll('a');
	anchors.forEach(anchor => {
		//Save the caption attribute of each anchor to the caption variable.
		let caption = anchor.getAttribute('data-caption').toLocaleLowerCase();
		//Save the anchor's child(image) to the image variable.
		let image = anchor.firstElementChild;
		//This condition checks the anchor's caption for any of the user's inputs letter, & display its child if found.
		if (caption.includes(input)) {
			image.style.display = 'block';
		} else {
			//Otherwise, hides it.
			image.style.display = 'none';
		}
	});
}

//This event implement the real-time searh on when keys are pushed.
searchInput.addEventListener('keyup', (e) => {
	//Saved value of the users input to the input variable, and feed it, as argument to the realTimeSearch() function.
	let input = e.target.value.toLowerCase();
	realTimeSearch(input);
})