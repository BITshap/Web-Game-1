/*let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)

let pineTree = document.createElement('img')
pineTree.src = 'assets/pine-tree.png'
pineTree.style.position = 'fixed'
pineTree.style.left = '450px'
pineTree.style.bottom = '200px'
document.body.append(pineTree)

function newImage(source, left, right) {
    let item = document.createElement('img')
    item.src = (source)
    item.style.position = ('fixed')
    item.style.left = (left)
    item.style.bottom = (right)
    documentt.body.append(item)
} 
*/

function newImage(source, positionLeft, positionRight) {
let item = document.createElement('img')
item.src = source
item.style.position = 'fixed'
item.style.left = positionLeft
item.style.bottom = positionRight
document.body.append(item)
}

newImage('assets/pine-tree.png', '300px', '300px')
newImage('assets/green-character.gif', '100px', '100px')
newImage('assets/pillar.png', '350px', '100px')
newImage('assets/crate.png', '150px', '200px')
newImage('assets/well.png', '500px', '425px')
newImage('assets/tree.png', '200px', '300px')

function newItem(source, positionLeft, positionRight){
     let item = document.createElement('img')
     item.src = source
     item.style.position = 'fixed'
     item.style.left = positionLeft
     item.style.bottom = positionRight
     document.body.append(item)

item.addEventListener('dblclick', function(){
    item.remove()
})
}

newItem('assets/sword.png', '500px', '405px')
newItem('assets/shield.png', '165px', '185px')
newItem('assets/staff.png', '600px', '100px')

//This didn't work but I saw it in the solution code. I see what it's trying to do but it SOO complicated. 
function tile(url, left, bottom, width, height){ 
    for(let h = 0; h < height; h++){
        for(let w = 0; w < width; w++){
            newImage(url, left + w*100, bottom+h*100)
        }
    }
}

let horizon = window.innerHeight / 1.75
let heightOfSky = window.innerHeight-horizon
let heightOfGrass = horizon

tile('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100)
tile('assets/grass.png', 0, 0, window.innerWidth/100, heightOfGrass/100)