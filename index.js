// The Front object is loaded through the Front script added in the header of the main HTML.
// This object can be used to listen to conversation event data as it occurs on Front, request information from Front, and perform actions on Front.
// See the full plugin API documentation here: https://dev.frontapp.com/plugin.html

// This keeps track of if Front has returned a conversation to the plugin.
let hasConversation;

// Listen for the `conversation` event from Front and print its contents, then load the contact to the plugin.
Front.on('conversation', function (data) {
  console.log('Event data', data);

  // Set the conversation state.
  hasConversation = true;

  // Load the Contact information based off of the event data. And set tab to 'Info'.
  contact = loadContact(data.contact);
  console.log(contact)
  showInfo();
});

// Listen for the `no_conversation` event.  This can happen when opened to Inbox Zero.
Front.on('no_conversation', function () {
  console.log('No conversation');

  // Set the conversation state.
  hasConversation = false;

  // Display `No Contact` data and clear the notes and set the tab to 'Info'.
  displayContactInfo();
});

// Asynchronously loads the contact through our mocked CRM service once the body of the plugin is loaded.
// This will call our mocked CRM service for data and then add the contact information and notes to the page.
async function loadContact(contact) {
  // Display Front contact info.
  displayContactInfo(contact.display_name || contact.handle, contact.handle);
}

// Displays Front contact information.
function displayContactInfo (display_name = "No Contact", handle = "-") {
  const nameElement = document.getElementById("name");
  const handleElement = document.getElementById("handle");

  nameElement.textContent = display_name;
  handleElement.textContent = handle;
}




