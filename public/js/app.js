
console.log('Client side javascript file is loaded!')

// fetch('http://localhost:3000/weather?address=boston').then((response) => {
//    response.json().then((data) => {
//         if(data.error) {
//               console.log(data.error)
//         }
//         console.log(data)
//    })
// })


var weatherForm = document.querySelector('form');
var input = document.querySelector('input').value;

  weatherForm.addEventListener('submit', (e) => {
      e.preventDefault()
      var input = document.querySelector('input').value;
      let message = document.getElementById('message');
      
      fetch('http://localhost:3000/weather?address='+input).then((response) => {
   response.json().then((data) => {
        if(data.error) {
              console.log(data.error)
              message.innerHTML = data.error;
        } else {
            console.log(data)
            message.innerHTML =  data.location + ". " + data.forecast
        }
   })
 })
})
