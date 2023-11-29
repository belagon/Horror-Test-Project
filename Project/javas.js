const container = document.querySelector('.container');
let question = document.querySelector('.pergunta');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

const contRect =  container.getBoundingClientRect();
const noRect =  noBtn.getBoundingClientRect();

yesBtn.addEventListener('click', () => {
  question.innerHTML = `𓁹‿𓁹`
  question.style.color = 'red';
});

noBtn.addEventListener('mouseover', () => {
  
  const i = Math.floor(Math.random() * (contRect.width - noRect.width)) + 160;

  const j = Math.floor(Math.random() * (contRect.height - noRect.height)) + 99;
  noBtn.style.display = 'hidden';
  noBtn.style.left = i + 'px';
  noBtn.style.top = j + 'px';

});
noBtn.addEventListener('click', () => {
  
 question.innerHTML = "N̵̛̛̼̦̫̩͓͙̱̳͌̈́͆͆̈̀͌̓̑̕͜͠͝Ã̴͍̞̼͇̙̈́̀̀͆̎̈́͂̊̆̅̑̚͜͝Ọ̷͖̮̳͈̞͈͈̙̀͆͗ ̴̡͓͍̮̫̟͖̼̥̗̣̭̬̰́̎̊̄͊̉͂̊̅͋͘͝͝M̶̱̫̯͍̬̪̼̤̥͇̼̀̈́̀͗̈́́̈̆̄͌͠E̷̡̧͙̞͈̙̪͇̭̱̱͇̱̲̽̾̊̓̇̄͝͝ ̷̡̨̛̳̫͖̫̣͈̙̣̤̾̊͂̐́̐̀͛̆̀̎̑̏̕͜D̵͕̪̭͕̫̀̀̓͘ͅE̵̢̨̛̜̙͚̠̯͇̳̲͓͎͓͛̇͂̓̂̓̿̇͐̓̄̒͐̑I̸̢̠̙̠̲̖̟̖̩̫̖͊͜͝X̴̛̲̲̍̇̈́̒̄̎͑̈͋͠E̸̢̺͈̥͍̟̤̥̦̋̄̽̈́͊̾̅̒̄̽̕͘ͅ"

document.getElementById("nope").style.visibility = "hidden"

  

 setTimeout(function() {
  document.getElementById('element').innerHTML += '<br>';
}, 10000);
 question.style.color = 'red'


});

(function blink() {
  $('.blink_me').fadeOut(500).fadeIn(500, blink);
})();

var i = 0;
var txt = 'Lorem ipsum typing effect!'; /* The text */
var speed = 30; /* The speed/duration of the effect in milliseconds */

