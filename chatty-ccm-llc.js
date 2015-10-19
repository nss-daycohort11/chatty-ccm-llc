
function postMessage () {
	newMessageElement.style.backgroundColor = "red";;
}

// Add an event listener for "keypress" and detect when then return key has been pressed in the message field.
var newMessageElement = document.getElementById("newMessage");

// var messagesContainerElement = document.getElementByID("messages-container");

// newMessageElement.addEventListener("keyup", postMessage(event));
newMessageElement.onkeyup(postMessage(event));

 /*
function postMessage() {
	//create new message in messages-container
    document.getElementById("messages-container").style.backgroundColor = "red";
}
*/
