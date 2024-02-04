const c = require('./config.json');
let randommode = Math.floor(Math.random() * 27);
var noevent = [0]
let eventmode = [5,6,26]// id of the modes that are more likely to get
if (eventmode !== noevent) {
  let randommode2 = Math.floor(Math.random() * 2) // to change gm
  console.log(randommode2)
  if (randommode2 === 1) {
    let randomeventmode = Math.floor(Math.random() * eventmode.length)
    console.log(eventmode[randomeventmode])
    randommode = eventmode[randomeventmode]
  }
}
let randommode3 = Math.floor(Math.random() * 2);
if (randommode3 !== 0) {
  exports.mode = randommode//27
} else {
  exports.mode = randommode
}
//exports.mode = 6
let ARMSRACE = c['ARMSRACE'+randommode];
if (ARMSRACE === undefined) {
  ARMSRACE = false;
} else {
  ARMSRACE = true;
}
let ARMSRACE_VARIANT = c['ARMSRACE_VARIANT'+randommode]
if (ARMSRACE_VARIANT === undefined && ARMSRACE === false) {
  ARMSRACE_VARIANT = true;
  let choose = Math.floor(Math.random() * 2);
  if (choose !== 1) {
    ARMSRACE = true
  }
}
exports.armsrace = ARMSRACE