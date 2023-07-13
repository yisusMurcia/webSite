let proyects=[
    ["Números aleatorios", "https://sites.google.com/view/programmind/proyectos/generadorDeNumerosAleatorios"],
    ["listas", "https://sites.google.com/view/programmind/proyectos/lista"],
    ["Cronómetro", "https://sites.google.com/view/programmind/proyectos/cronometro"]
];
let proyectsContent= document.getElementById("proyects");
for (let post of proyects.reverse()){
    let postTitle= document.createElement("h2");
    postTitle.setAttribute("class", "proyect");
    postTitle.addEventListener("click", ()=>window.open(post[1]));
    postTitle.innerText= post[0];
    proyectsContent.appendChild(postTitle);
};