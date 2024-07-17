/**
 * 
 * @param {*} str abc123.3456
 * @param {*} round 2
 * @returns 123.34
 */
function formatString(str,round){
   const numArray = str.replace(/[^0-9/.]/g,"").split(".");
   let decimal = numArray[1] ? numArray[1] : 0;
   const suffix=(decimal+ Array(round).join(0)).slice(0,round);
   return numArray[0]+"."+suffix;
}

console.log (formatString("abc123.3456", 2)) 
