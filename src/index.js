module.exports = function check(str, bracketsConfig) {
  let steck = [];
  let l = str.length;
  for (let numStr = 0; numStr < str.length; numStr++) {
    
    for (let numConfig = 0; numConfig < bracketsConfig.length; numConfig++) {
      if (bracketsConfig[numConfig][0] == bracketsConfig[numConfig][1]){
        if (str[numStr] == bracketsConfig[numConfig][0] && steck.slice(-1)== numConfig) {
          steck.pop();
          break;
      } else if (str[numStr] == bracketsConfig[numConfig][0]) {
        steck.push(numConfig);
        break;
      }
    } 
      if (str[numStr] == bracketsConfig[numConfig][0]) {
        steck.push(numConfig);
        break;
      } else if (str[numStr] == bracketsConfig[numConfig][1]) {
          if (steck.slice(-1) == numConfig && steck[0] != null) {
            steck.pop();
            break;
          } else return false;
      }
    }
  }
  if (steck[0] != null) {
    return false;
  }
  return true;
}
