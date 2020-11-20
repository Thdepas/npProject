let cta = document.getElementById('cta');
let fName = document.getElementById('fName').value;
let lName = document.getElementById('lName').value;
let emailN = document.getElementById('emailN').value;
let logO = document.getElementById('logO');


cta.addEventListener('click', (event) => {
  event.preventDefault();

if (this.emailN.value == null || this.emailN.value == ""){
  error.classlist.add('errorAnim');

}else{

let fetchData = {
  method: 'POST',
  body: JSON.stringify({emailN: this.emailN.value, fName: this.fName.value, lName: this.lName.value, js : true}),
  headers: {"Content-Type": "application/json"}
}
 fetch('/newsL', fetchData)
    .then(res =>{
        if (res.ok){

          console.log('yay it worked')
 
        }else{
          console.log('error')
        }
    })
  }
})