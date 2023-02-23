function connectionSheet() {
  return SpreadsheetApp.openById(env_().ID_SHEET);
}

function getSheet(NAME){
  return connectionSheet().getSheetByName(NAME);
}

function getData(NAME) {
  return getSheet(NAME).getDataRange().getValues();
}