// see http://stackoverflow.com/questions/9899372/pure-javascript-equivalent-to-jquerys-ready-how-to-call-a-function-when-the
// to find out when to execute the DOM query function defined here

function executeDomQueries() {
	// Prior to IE 8
	console.log('The node having the id “hotelsContainer”');
	console.log(document.getElementById('hotelsContainer'));

	console.log('All the span tags that are children of the node with the id “third”');
	console.log(document.getElementById('third').getElementsByTagName('span'));

	console.log('All the nodes having the class “right”');
	console.log(document.getElementsByClassName('right'));


	// After IE 8
	console.log('The node having the id “hotelsContainer”');
	console.log(document.querySelector('#hotelsContainer'));

	console.log('All the span tags that are children of the node with the id “third”');
	console.log(document.querySelectorAll('#third span'));

	console.log('All the nodes having the class “right”');
	console.log(document.querySelectorAll('.right'));
}