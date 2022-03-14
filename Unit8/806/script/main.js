

function main(){
    
    let divInfo = document.querySelector("#info");  
    let paraphs = document.createElement('p');
    let article = document.querySelector("#article");
    let paraphInDocument = article.getElementsByTagName("p")[0];
    console.log(paraphInDocument);     
    divInfo.append(paraphs);
    paraphs.innerHTML= "The number of paragraphs on the page:";

}

document.addEventListener("DOMContentLoaded", main);
