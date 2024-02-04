let mockups = []
let definitions = {}
let id = 0
console.log(mockups.length)
mockups.forEach((a) => {
  definitions['entity'+id] = {}
  definitions['entity'+id].COLOR = a.color
  definitions['entity'+id].LABEL = a.name
  definitions['entity'+id].SIZE = a.size
  let defguns = []
  let id2 = 0
  a.guns.forEach((b) => {
    defguns[id2] = {}
    //console.log(b)
    defguns[id2].POSITION = [b.length*10,b.width*10,b.aspect,b.offset*10,b.direction*10,b.angle*180/Math.PI,0]
    id2+=1
  })
  //console.log(defguns)
  definitions['entity'+id].GUNS = defguns
  //definitions['entity'+id].TURRETS = a.turrets
  definitions['entity'+id].SHAPE = a.shape
  id+=1
})
exports.definitionsv2 = definitions;
//console.log(definitions)