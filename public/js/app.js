// const { response } = require("express")
// load script from client side
console.log('Client side javascript is loaded')

// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data)
//     })
// })
const weatherForm = document.querySelector('form')
const searchElement = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo =   document.querySelector('#message-2')
messageOne.textContent=''
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = searchElement.value
    console.log(location)
    messageOne.textContent='Loading...'
    fetch('/weather?address='+location).then((response)=>{

    response.json().then((data)=>{
        if(data.error){
            messageOne.textContent=data.error
        }
        else{
            console.log(data)
            messageOne.textContent=data.temp+` in `+data.location+'.'
            messageTwo.textContent= data.weather
        }
    })
})
}) 
