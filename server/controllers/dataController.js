function getDataJSON() {
  const data = getData(env_().SH_TEST)
  const jsonData = [];
 
  for(let i=1;i<data.length;i++){
    var row = {};
    for(let j=0; j<data[0].length;j++){
      row[data[0][j]]=data[i][j];
    }
    jsonData.push(row);
  }
  return JSON.stringify(jsonData);
}
