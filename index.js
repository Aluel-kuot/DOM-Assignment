document.body.style.backgroundColor='silver'
document.body.style.fontSize='20px'
document.getElementById('container').style.margin ='5%'
document.getElementById('title').style.color='green'

document.getElementById('fruits').style.textTransform='uppercase'
document.getElementById('fruits').style.color='#2f9e44'
document.getElementById('vegetables').style.textTransform='uppercase'
document.getElementById('vegetables').style.color='#2f9e44'


let addFruit=document.createElement("li");
addFruit.innerHTML="pineapple"
document.getElementById('fruList').appendChild(addFruit)

let addVegetable=document.createElement("li");
addVegetable.innerHTML="Potatoes"
document.getElementById('vegList').appendChild(addVegetable)

var image=document.createElement('img')
image.src='grocery.png'
document.container.appendChild(image)










// Change document background color to
// silver

// Change the font color for h1 title tag to
// green

// Change the font case for h3 title tags to
// uppercase

// Add one more fruit to the fruits list

// Add one more vegetable to the vegetables list