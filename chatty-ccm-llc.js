// Add new message handler
var newMessageElement = document.getElementById("newMessage");
newMessageElement.onkeyup=postMessage;

function postMessage(event) {
	// DEBUG console.log("in postMessage");
	// DEBUG 
	console.log(event);
	console.log(event.which);
	var message = newMessageElement.value;
	var messagesElement = document.getElementById("messages-container");

	if (event.which===13) {
		//DEBUG console.log("creating new message");
		//DEBUG console.log(message);
		
		// post message to DOM
		 messagesElement.innerHTML += "<div>"+message+" <input type=\"button\" value=\"Delete\"></button></div>";//+delete message button;
		 // Clear new message box of user text
		 newMessageElement.value = "";
		 // Enable clear messages button
		 //DEBUG console.log(document.getElementById("clearMessagesButton"))
		 // document.getElementById("clearMessagesButton").setAttribute("disabled", true);
		 document.getElementById("clearMessagesButton").disabled = false;
	}
}

// Clear messages handler
// get clear-messages button element
var clearMessagesButtonElement = document.getElementById("clearMessagesButton");

clearMessagesButtonElement.onclick=clearMessages;

function clearMessages(event) {
	var messagesElement = document.getElementById("messages-container");
	messagesElement.innerHTML = "";
	document.getElementById("clearMessagesButton").disabled = true;
}

/*
// Create event handler for HTML DOM element
1. var <element name> = document.getElementById("<element ID>");
2. <element name>.<event> = <function name>;
3. function <function name> = {      };
*/