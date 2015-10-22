$(document).ready(function() {



$("body").click(function(event) {
	// Handle the click event on any DOM element with a certain class
	if (event.target.className === "clearMessageBtn") {
	  // Delete div element including message and button
	   event.target.parentNode.parentNode.removeChild(event.target.parentNode);
	   msgCounter--;
	   console.log(msgCounter);
	}

	// handle click events on checkboxes
	if (event.target.type === "checkbox") {
		// toggle darkTheme class on "messages-container element"
		if (event.target.id === "darkTheme") {
			// DEBUG console.log("checked darkTheme")
			var messages = $(".message");
			messages.toggleClass("darkTheme");
			// for (var i = 0; i < messages.length; i++) {
			// 	messages[i].classList.toggle("darkTheme");
			// }
		}

		//document.getElementsByClassName("message").classList.toggle("darkTheme");

		// toggle largeText class on "messages-container element"
		else if (event.target.id === "largeText") {
			$("#messages-container").toggleClass("largeText");
		}
	}
});

// Add new message handler
var newMessageElement = $("#newMessage");
newMessageElement.keyup(postMessage);

// message counter
var msgCounter = 0;

// Function to post new messsage
function postMessage(event) {
	// Get messages element
	var message = newMessageElement.val();
	var messagesElement = $("#messages-container");

	// Handler for 'enter' keypress
	if (event.which===13) {
		// clear "no items" header from DOM before loading first message
		//messagesElement.innerHTML = "";

		// Create timestamp
		Stamp = new Date();
		year = Stamp.getYear();
		if (year < 2000) year = 1900 + year;
		var Hours;
		var Mins;
		var Time;
		Hours = Stamp.getHours();
		if (Hours >= 12) {Time = " PM";}
		else {Time = " AM";}
		if (Hours > 12) {Hours -= 12;}
		if (Hours == 0) {Hours = 12;}
		Mins = Stamp.getMinutes();
		if (Mins < 10) {Mins = "0" + Mins;}	
		var timestamp =  Hours + ":" + Mins + Time  + " "  + (Stamp.getMonth() + 1) +"/"+Stamp.getDate()+ "/"+ year;

		// post message to DOM
		var messageHTML = "<div class=\"message\"><p>"+message+"</p><input type=\"button\" value=\"Delete\" class=\"clearMessageBtn\"> <time>"+timestamp+"</time></button></div>"+messagesElement.html();
		console.log(typeof messageHTML);
		console.log(messageHTML)
		 messagesElement.html(messageHTML);

		 // increase message counter
		 msgCounter++;
		 console.log(msgCounter);

		 // Delete excessive messages over 20
		 if (msgCounter === 1) {$(".message:last").remove();}
		 else if (msgCounter > 20) {
		 	// remove last child node
		 	$(".message:last").remove();
		 	msgCounter = 20;
		 }

		 // Clear new message box of user text
		 newMessageElement.val("");
		 // Enable clear messages button
		 $("#clearMessagesButton").removeAttr("disabled");
	}
}

// Clear messages handler
// get clear-messages button element
var clearMessagesButtonElement = document.getElementById("clearMessagesButton");

clearMessagesButtonElement.onclick=clearMessages;

function clearMessages(event) {

	$("#messages-container").html("<p class=\"message\"><em>No more items</em></p>");
	$("#clearMessagesButton").attr("disabled",true);
	msgCounter = 0;
}

/*
// Create event handler for HTML DOM element
1. var <element name> = document.getElementById("<element ID>");
2. <element name>.<event> = <function name>;
3. function <function name> {      };
*/
});