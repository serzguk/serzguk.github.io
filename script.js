const selectEL = document.getElementById('select');
const registrationImage = document.getElementById('planet__img');
const button = document.getElementsByTagName('button');



selectEL.addEventListener('change', function () {
    // if(this.value === 'mercury'){
    //     registrationImage.src="./IMG/Mercury.svg"
    // }else{
    //     registrationImage.src="./IMG/Uran.svg"
    // }
    switch(true){
        case this.value === 'mercury' : registrationImage.src="./IMG/Mercury.svg";
        break;
        case this.value === 'uranus' : registrationImage.src="./IMG/Uran.svg";
        break;
        default: console.log("Don't image")
    }
})
