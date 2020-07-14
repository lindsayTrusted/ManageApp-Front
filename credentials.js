// This file provides fake CRM functionality to provide information to the sample plugin
// and should be seen as an analog for the functionality developers add for their custom plugin.
//
// This function returns mock CRM data and simply picks a random index from the mockStatus and organizes data related to the index.
function mockQueryCRM(email) {
  return "Lindsay Rawitscher"
}

// This function operates as a blackbox CRM function which creates a new note and returns it to be displayed.
// This function picks a random index from mockNotesSamples and returns the relevant note.
function mockPostNote() {
  return "fake note"
}


function visitCredentials(TUUID){
  base_url = "https://app.trustedhealth.com/credentials?sfdc_user_id=0053m00000AvSIBAA3&user_uuid="
  manageApp_url = base_url+TUUID
  window.location.replace(manageApp_url);
  return
}

function getContact(FrontID){
  var data = null;
  var xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
    }
  });

  xhr.open("GET", "https://api2.frontapp.com/contacts/"+FrontID);
  xhr.send(data);
  return data
}