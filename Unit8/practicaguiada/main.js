
function main(){

    let contAux = JSON.parse(localStorage.getItem("counter"));

    if(contAux === null){
        counter  = { visit : 0};
    }
    else{
        counter  = contAux;
    }

    counter.visit++;
    let counterSerial = JSON.stringify(counter);
    localStorage.setItem("counter",counterSerial);

    let text = `This is your visit # ${counter.visit}`;
    let p = document.createElement('p');
    p.innerHTML = text;
    document.body.append(p);
}
document.addEventListener("DOMContentLoaded",main);