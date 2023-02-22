function conexion() {
  return SpreadsheetApp.openById(env_().ID_SHEET);
}

function obtenerShee(NAME) {
  return conexion().getSheetByName(NAME);
}

function getData(NAME) {
  return obtenerShee(NAME).getDataRange().getDisplayValue();
}