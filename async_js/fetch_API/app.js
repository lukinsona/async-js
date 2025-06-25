// information responses(100-199)
//succsesfull responses(200-299)
//redirects(300-399)
//clients errors(400-499)
//server errors(500-599)



/* fetch('users.json')
.then(res => res.json())
.then(users => {
    console.log(users);

    const row_box = document.querySelector('#card_space')
    console.log(row_box);
    
    users.forEach((user) => {
        const cards = `
            <div class="col-4">
            <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${user.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p class="card-text">${user.email}</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
    </div>`
            row_box.innerHTML += cards
    })

})
.catch(err => console.log(err)) */


//wavides ara json() aramed text()
//Number()




fetch('http://numbersapi.com/random')
  .then(res => res.text())
  .then(fact => {
    const row_box = document.querySelector('#card_space');

const cards = `
  <div class="col-4">
    <div class="card" style="width: 28rem; height: 20vh;">
      <div class="card-body">
        <input type="number" placeholder="Enter a number" class="form-control mb-2 number-input">
        <input type="text" class="form-control fact-output h-75" readonly>
      </div>
    </div>
  </div>`;

row_box.innerHTML += cards;
const numberInput = document.querySelector('.number-input');
const factOutput = document.querySelector('.fact-output');

numberInput.addEventListener('input', () => {
  const number = numberInput.value;
  if (number) {
    fetch(`http://numbersapi.com/${number}`)
      .then(res => res.text())
      .then(fact => {
        factOutput.value = fact;
      })
      .catch(err => console.log('info not found'))
  }
})
  })
