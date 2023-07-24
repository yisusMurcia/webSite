let blog= document.getElementById("blog");
let inADiv= document.getElementsByClassName("inADiv");
let update= document.getElementById("updates");
update.addEventListener("click", ()=> window.open("https://sites.google.com/view/programmind/notasdeactualizaci%C3%B3n"));
inADiv[0].addEventListener("click", ()=> window.open("https://sites.google.com/view/programmind/blog"));
inADiv[1].addEventListener("click", ()=> window.open("https://sites.google.com/view/programmind/blog"));
let proyectDiv= document.getElementsByClassName("proyects")[0];
for (let i= 0; i<3; i++){
    let post= postArray[i];
    let postTitle= document.createElement("h2");
    postTitle.innerHTML= post[0];
    postTitle.setAttribute("class", "post");
    postTitle.addEventListener("click", ()=>window.open(post[1]));
    blog.appendChild(postTitle);
    proyect= proyects[i];
    let proyectTitle= document.createElement("h2");
    proyectTitle.innerHTML= proyect[0];
    proyectTitle.setAttribute("class", "proyect");
    proyectTitle.addEventListener("click", ()=>window.open(proyect[1]));
    proyectDiv.appendChild(proyectTitle);
};
fetch('https://cdn.jsdelivr.net/gh/yisusMurcia/webSite@main/notasDeActualizaci%C3%B3n.html')
    .then(response => response.text())
    .then(data => {
    let elemento = document.createElement('div');
    elemento.innerHTML = data;
    let h1 = elemento.querySelector('.withP');
    let ul = elemento.querySelector('ul');
    document.getElementById('updateNotes').appendChild(h1);
    document.getElementById('updateNotes').appendChild(ul);
    });
let element = document.createElement('div');
fetch('https://cdn.jsdelivr.net/gh/yisusMurcia/programmind@main/proyectos.html')
.then(response => response.text())
.then(data => {
let element = document.createElement('div');
element.innerHTML = data;
let h2s = element.querySelectorAll('.proyect');
let h2Selected = Array.from(h2s).slice(0, 3);
let proyects = document.getElementById('proyects');
h2Selected.forEach((h2)=> {
    proyects.appendChild(h2);
});
});
let socialMediaImg= document.getElementsByClassName("socialMediaImg");
let socialMedia= ["https://twitter.com/theprogrammind", "https://github.com/yisusMurcia", "https://www.threads.net/@jesusantoniomurciaguzman"];
for (let i = 0; i < 3; i++) {
    socialMediaImg[i].addEventListener("click", ()=>window.open(socialMedia[i]));
};
