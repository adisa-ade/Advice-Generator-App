const paragragh = document.getElementById('quote')
const dice = document.getElementById('dice')
const id = document.getElementById('id')

async function getQuotes(){
const URL = await fetch ('https://api.adviceslip.com/advice')
const res = await URL.json()
showquote(res)
}
getQuotes()    

// DISPLAY RANDOM QUOTE AFER 10 SECONDS
try{
 setInterval(() => {
    getQuotes()    
}, 10000);
}
catch{
    paragragh.innerHTML = 'error occured'
}

const showquote = (data) => {
    id.innerHTML = ` #${data.slip.id}`
    paragragh.innerHTML = data.slip.advice    
}
// CHANGE QUOTE WHEN CLICKED
dice.addEventListener('click', getQuotes)