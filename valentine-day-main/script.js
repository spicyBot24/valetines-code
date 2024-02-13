const alternatives = [
  {text:"", images:"image/1.gif"},
  {text:"I could kiss you like that for hours", images:"image/3.gif"},
  {text:"I will always let u work in peace", images:"image/2.gif"},
  {text:"Im very patient, you won't be distracted", images:"image/7.gif"},
  {text:"I don't get angry easily", images:"image/8.gif"},
  {text:"Im no annoying", images:"image/4.gif"},
  {text:"I respect your personal space, im not clingy at all", images:"image/5.gif"},
  {text:"I eat healthy, so i won't make you fat", images:"image/10.gif"},
  {text:"I will always send you love from everywhere", images:"image/6.gif"},
  {text:"Im emotionally stable", images:"image/9.gif"},
  
]
const ohyes = {text:"I knew you would accept !!", images:"image/last.gif"}
const cat = document.querySelector('.cat')
const text = document.querySelector('.text')
const buttons = document.querySelectorAll('.button')
const errorButton = document.querySelector('.button__error')

let count = 0;

function updateDisplay(item){
  cat.src = item.images
  text.innerHTML = item.text
}

errorButton.addEventListener('click', ()=>{
  count = 0;
  updateDisplay(alternatives[count])
  buttons.forEach(btn => btn.style.display = 'inline-block')
  errorButton.style.display = 'none'
})

buttons.forEach(button => {
  button.addEventListener('click', ()=>{
      if(button.textContent == "Yes"){
          updateDisplay(ohyes)
          buttons.forEach(btn => btn.style.display = 'none')
      }
      if(button.textContent == 'Reason to say yes'){
          count++
          if(count < alternatives.length){
              updateDisplay(alternatives[count])
          }else{
              buttons.forEach(btn => btn.style.display = 'none')
              errorButton.style.display = 'inline-block'
          }
      }
  })
})