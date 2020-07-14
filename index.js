//var Front = require('@frontapp/ui-sdk');

// Do something with Front

let globalContext;
let globalContact;

Front.contextUpdates.subscribe(context => {
  console.log('Context:', context);

  globalContext = context;

Front.contactUpdates.subscribe(contact => {
  console.log('Contact:', contact);

  globalContact = contact;

  var displayTeammate = document.getElementById('frontTeammate');
  displayTeammate.innerHTML = 'Hello ' + context.teammate.name.split(' ')[0] + ' 👋';

  var messageRecipient = document.getElementById('messageRecipient');
  messageRecipient.innerHTML = 'Hello ' + contact.name;


  switch(context.type) {
    case 'noConversation':
      console.log('No conversation selected');
      break;
    case 'singleConversation':
      console.log('Selected conversation context:', context);

      try {
        console.log(context.conversation);
        context.listMessages().then((results) => {
          console.log('Results: ', results);
        });
      } catch (error) {
        console.log('Error: ', error);
      }
      break;
    case 'multiConversations':
      console.log('Multiple conversations selected', context.conversations);
      break;
    default:
      console.error(`Unsupported context type: ${context.type}`);
      break;
  }
});

function openUrl() {
  Front.openUrl('https://frontapp.com');
}

function openUrlInPopup() {
  Front.openUrlInPopup('https://suspicious-wozniak-9e3a7e.netlify.com/popup.html');
}


async function getMessage() {
  console.log('Called getMessage()');
  let list = await Front.listMessages();
  console.log('List: ', list);
  let messageId = list.results[0]['id'];
  console.log(`returning message ID `, messageId);
  return messageId;
}
