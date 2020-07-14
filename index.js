let globalContext;
let globalUser;
const assignButton = document.getElementById('assign');

Front.contextUpdates.subscribe(context => {
  console.log('Context:', context);

  globalContext = context;

  globalUser = context.conversation.recipient.contact;

  var displayTeammate = document.getElementById('frontTeammate');
  displayTeammate.innerHTML = 'Hello ' + context.teammate.name.split(' ')[0] + ' 👋';

  var messageRecipient = document.getElementById('messageRecipient');
  messageRecipient.innerHTML = 'Displaying ' + globalUser.name;
  console.log('Contact:', globalUser);

  //assignButton.removeEventListener('click', _assign);

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

      //assignButton.addEventListener('click', function _assign() {
      //  Front.assign(context.teammate.id)
      //});

      break;
    case 'multiConversations':
      console.log('Multiple conversations selected', context.conversations);
      break;
    default:
      console.error(`Unsupported context type: ${context.type}`);
      break;
  }

  console.log("inside switch")

});

console.log("outside switch")
loadCredentials(globalUser);


function assign(context) {
  console.log('context in assign() method');
  console.log(context);
  Front.assign(context.teammate.id);
}

function loadCredentials(user) {
  userCard = getContact(user.id)
  console.log("User: ", userCard);
}