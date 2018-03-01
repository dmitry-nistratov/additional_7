module.exports = function solveSudoku(matrix) {
  let array = [1,2,3,4,5,6,7,8,9];
  let arrayApp = matrix;
  function repl0 (arrayApp){
  for(let i = 0; i<arrayApp.length; i++){
    for(let j = 0; j<arrayApp[i].length; j++){
      if(matrix[i][j] == 0){
        arrayApp[i][j] = array;
      }
    }
  }
  return arrayApp;
}
  function sLine (arrayApp){
  let arrPos = [];
  for(let i = 0; i<arrayApp.length; i++){
    for(let j = 0; j<arrayApp[i].length; j++){
      if(typeof arrayApp[i][j] == "object"){
        arrPos.push(j);
      }
    }
    for(let j = 0; j<arrPos.length; j++){
      for(let z = 0; z<arrayApp[i][arrPos[j]].length; z++){
        for(let k = 0; k<arrayApp[i].length; k++)
          if (arrayApp[i][arrPos[j]][z] == arrayApp[i][k]){
            arrayApp[i][arrPos[j]].splice(z, 1);
            if (arrayApp[i][arrPos[j]].length == 1){
              arrayApp[i][arrPos[j]] = arrayApp[i][arrPos[j]][0];
            }
          }
        }
      }
    }
    return arrayApp;
  }
  function sColumn (arrayApp){
  for(let i = 0; i<9; i++){
    for(let j = 0; j<9; j++){
      if (typeof arrayApp[i][j] == "object"){
        for(let z = 0; z<9; z++){
          for(let k = 0; k<arrayApp[i][j].length; k++){
            if (arrayApp[i][j][k] == arrayApp[z][j] && typeof arrayApp[z][j] != "object"){
              arrayApp[i][j].splice(k, 1);
              if (arrayApp[i][j].length == 1){
                arrayApp[i][j] = arrayApp[i][j][0];
              }
            }
          }
        }
      }
    }
  }
  return arrayApp;
}
  return sColumn(sLine(repl0(arrayApp)));
}
