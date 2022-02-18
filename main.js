// app div
const app = document.querySelector('#app')

// Person object info
const person = [
    {
        vardas: 'Daimonas',
        pavarde: 'Ušackas',
        darbas: 'CodeAcademy studentas',
        gyvenviete: 'Širvintos, LT',
        nuotrauka: 'images/photo.jpg'
    },{
        vardas: 'Muhammad',
        pavarde: 'Ali',
        darbas: 'Profesionalus boksininkas',
        gyvenviete: 'Arizona, JAV',
        nuotrauka: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Muhammad_Ali_NYWTS.jpg/220px-Muhammad_Ali_NYWTS.jpg'
    },{
        vardas: 'Lionel',
        pavarde: 'Messi',
        darbas: 'Profesionalus futbolininkas',
        gyvenviete: 'Rosarijas, Argentina',
        nuotrauka: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR_BSXPlBjoBeJruSaCamv7kQuMNjoIIWX0CITXUVoapFCbRM9g'
    },{
        vardas: 'Michael',
        pavarde: 'Jordan',
        darbas: 'Profesionalus krepšininkas',
        gyvenviete: 'New york, JAV',
        nuotrauka: 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRgexJ5aVLMRh8pTx4ktKg3JtDIFtxPR7DCPXkbqoUSA1vx6RBwb4TUGLKMW5fl'
    }
]
// Which person to show
let rodomasAsmuo = person[0];

// NAV Button
const menuButton = document.createElement('button')
menuButton.style = `width: fit-content; display:flex; align-items: center; justify-content: center; border: unset; position: absolute;
right: 5px; background-color: unset;`
const menuIcon = document.createElement('img')
menuIcon.classList.add('burger')
menuIcon.style = `width: 40px; cursor: pointer;`
menuIcon.src = 'data:image/png;base64,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'
document.addEventListener('focusout', ()=>{
    if(navDiv.classList.contains('noDisplay')){
        return;
    }else {
        setTimeout(()=>{navDiv.classList.add('noDisplay')}, 100)
    }
})
menuIcon.addEventListener('mouseup', ()=>{
    
    if(navDiv.classList.contains('noDisplay')){
        setTimeout(()=>{navDiv.classList.remove('hidden')}, 10)
    } else {
        setTimeout(()=>{navDiv.classList.add('hidden')}, 500)
    }
    setTimeout(()=>{navDiv.classList.toggle('noDisplay')}, 50)
})
app.append(menuButton)
menuButton.append(menuIcon)

// NAV menu
const navDiv = document.createElement('div')
navDiv.style = `z-index: 1;flex-wrap: wrap; flex-direction: column; gap: 15px;
 border: 2px solid black; border-radius: 10px; background-color: gray; color: black; padding: 20px; text-align:center;`
navDiv.classList.add('nav-menu', 'noDisplay', 'hidden')
const zmogus1 = document.createElement('a')
zmogus1.textContent = 'Daimonas'
const zmogus2 = document.createElement('a')
zmogus2.textContent = 'Muhammad'
const zmogus3 = document.createElement('a')
zmogus3.textContent = 'Lionel'
const zmogus4 = document.createElement('a')
zmogus4.textContent = 'Michael'
navDiv.append(zmogus1, zmogus2, zmogus3, zmogus4)
const visiA = navDiv.querySelectorAll("a")
for(let i = 0; i < visiA.length; i++){
    visiA[i].style = `border: 2px solid black; border-radius: 10px; background-color: lightgray;
     font-size: 1.5em; cursor: pointer; padding: 5px;`
    visiA[i].addEventListener('click', ()=>{
        rodomasAsmuo = person[i]
        updatePerson()
    })
}
app.append(navDiv)

// wrapper div
const wrapper = document.createElement('div')
wrapper.style = `width: 50%; padding: 30px; background-color: lightblue; margin: 0 auto;
border-radius: 10px; font-family: 'Josefin Sans', sans-serif; position: relative;`
app.append(wrapper)



// Person box div
const personBox = document.createElement('div')
personBox.style = `background-color: white; display: flex; flex-wrap: wrap; max-width: 80%; margin: 40px auto 20px auto;
height: fit-content; justify-content: center; text-align: center; padding: 30px; box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
border-radius: 10px;`
wrapper.append(personBox)

// Person photo
const photo = document.createElement('div')
photo.style = `border-radius: 50%; width: 180px; height: 180px; background-image: url(${rodomasAsmuo.nuotrauka});
background-position: top; background-size: cover; border: 3px solid gray; box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
margin-top: -80px`
personBox.append(photo)

// Person name
const vardas = document.createElement('h1')
vardas.textContent = `${rodomasAsmuo.vardas} ${rodomasAsmuo.pavarde}`
vardas.style = `width: 100%; margin: 30px 0 0 0`
personBox.append(vardas)

// Person job or something about him
const about = document.createElement('h2')
about.textContent = `${rodomasAsmuo.darbas}`
about.style = `width: 100%; margin: 20px 0 0 0; color: gray;`
personBox.append(about)

// Lives in
const gyvenviete = document.createElement('h2')
gyvenviete.textContent = `${rodomasAsmuo.gyvenviete}`
gyvenviete.style = `width: 100%; margin: 10px 0 0 0; color: gray;`
personBox.append(gyvenviete)


// Person scroll button next
const scrollRight = document.createElement('div')
scrollRight.textContent = '>'
scrollRight.style = `width: fit-content; position: absolute; right: 0px; top: 50%; font-family: none; font-size: 3em; cursor: pointer; `
wrapper.append(scrollRight)
scrollRight.addEventListener('click', ()=>{
    switch(rodomasAsmuo){
        case person[0]: rodomasAsmuo = person[1]
        fade()
        setTimeout(updatePerson, 100)
        break;
        case person[1]: rodomasAsmuo = person[2]
        setTimeout(updatePerson, 100)
        fade()
        break;
        case person[2]: rodomasAsmuo = person[3]
        setTimeout(updatePerson, 100)
        fade()
        break;
        case person[3]: rodomasAsmuo = person[0]
        setTimeout(updatePerson, 100)
        fade()
        break;
    }
    })

// Person scroll button previous
const scrollLeft = document.createElement('div')
scrollLeft.textContent = '<'
scrollLeft.style = `width: fit-content; position: absolute; left: 0px; top: 50%; font-family: none; font-size: 3em; cursor: pointer;`
wrapper.append(scrollLeft)
scrollLeft.addEventListener('click', ()=>{
    switch(rodomasAsmuo){
        case person[0]: rodomasAsmuo = person[3]
        fade()
        setTimeout(updatePerson, 100)
        break;
        case person[1]: rodomasAsmuo = person[0]
        fade()
        setTimeout(updatePerson, 100)
        break;
        case person[2]: rodomasAsmuo = person[1]
        fade()
        setTimeout(updatePerson, 100)
        break;
        case person[3]: rodomasAsmuo = person[2]
        fade()
        setTimeout(updatePerson, 100)
        break;
    }
    })

// Update person function
function updatePerson(){
    vardas.textContent = `${rodomasAsmuo.vardas} ${rodomasAsmuo.pavarde}`
    about.textContent = `${rodomasAsmuo.darbas}`
    gyvenviete.textContent = `${rodomasAsmuo.gyvenviete}`
    photo.style = `border-radius: 50%; width: 180px; height: 180px; background-image: url(${rodomasAsmuo.nuotrauka});
    background-position: top; background-size: cover; border: 3px solid gray; box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    margin-top: -80px`;
}
// Photo fade function
function fade(){
    photo.classList.add('fade')
   
    setTimeout(function unfade(){
        photo.classList.remove('fade')
    }, 500)
}

// Preload images
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        person[i].nuotrauka = new Image();
        person[i].nuotrauka = preload.arguments[i];
    }
}

//-- usage --//
preload(
    "images/photo.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Muhammad_Ali_NYWTS.jpg/220px-Muhammad_Ali_NYWTS.jpg",
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR_BSXPlBjoBeJruSaCamv7kQuMNjoIIWX0CITXUVoapFCbRM9g",
    "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRgexJ5aVLMRh8pTx4ktKg3JtDIFtxPR7DCPXkbqoUSA1vx6RBwb4TUGLKMW5fl"
    )
