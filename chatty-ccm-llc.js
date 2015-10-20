document.querySelector("body").addEventListener("click", function(event) {
  console.log(event);
	
	// Handle the click event on any DOM element with a certain class
	if (event.target.className === "clearMessageBtn") {
	  // Delete div element including message and button
	   event.target.parentNode.parentNode.removeChild(event.target.parentNode);
	}

	// handle click events on checkboxes
	if (event.target.type === "checkbox") {
		// toggle darkTheme class on "messages-container element"
		if (event.target.id === "darkTheme") {
			// DEBUG console.log("checked darkTheme")
			var messages = document.getElementsByClassName("message");
			for (var i = 0; i < messages.length; i++) {
				console.log(messages[i].classList);
				messages[i].classList.toggle("darkTheme");
				console.log(messages[i].classList);
			}
		}

		//document.getElementsByClassName("message").classList.toggle("darkTheme");

		// toggle largeText class on "messages-container element"
		else if (event.target.id === "largeText") {
			document.getElementById("messages-container").classList.toggle("largeText");
		}
	}
});

// Add new message handler
var newMessageElement = document.getElementById("newMessage");
newMessageElement.onkeyup=postMessage;

function postMessage(event) {
	// DEBUG console.log("in postMessage");
	// DEBUG console.log(event.which);
	var message = newMessageElement.value;
	var messagesElement = document.getElementById("messages-container");

	if (event.which===13) {
		//DEBUG console.log("creating new message");
		//DEBUG console.log(message);
		
		// clear "no items" header from DOM before loading first message
		//messagesElement.innerHTML = "";
		
		// post message to DOM
		 messagesElement.innerHTML = "<div class=\"message\">"+message+"<input type=\"button\" value=\"Delete\" class=\"clearMessageBtn\"></button></div>"+ messagesElement.innerHTML;
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
	messagesElement.innerHTML = "<p class=\"message\"><em>No more items</em></p>";
	document.getElementById("clearMessagesButton").disabled = true;
}

/*
// Create event handler for HTML DOM element
1. var <element name> = document.getElementById("<element ID>");
2. <element name>.<event> = <function name>;
3. function <function name> {      };
*/
