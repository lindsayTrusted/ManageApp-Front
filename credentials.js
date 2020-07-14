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