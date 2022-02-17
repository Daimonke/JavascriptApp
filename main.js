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


// wrapper div
const wrapper = document.createElement('div')
wrapper.style = `width: 50%; padding: 30px; background-color: lightblue; margin: 0 auto;
border-radius: 10px; font-family: 'Josefin Sans', sans-serif; position: relative;`
app.append(wrapper)

// Person box div
const personBox = document.createElement('div')
personBox.style = `background-color: white; display: flex; flex-wrap: wrap; width: 80%; margin: 40px auto 20px auto;
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