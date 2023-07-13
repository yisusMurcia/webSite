let postArray=[
    ["Los pilares del Desarrollo Web", "https://programmind.notion.site/Los-pilares-del-desarrollo-Web-9e36696683884a70a8ac3e450db39c17?pvs=4"],
    ["Entendiendo HTML", "https://programmind.notion.site/Etiquetas-HTML-adcaf805227c4b4db6473cf817b445fd?pvs=4"],
    ["Primeros pasos en HTML", "https://programmind.notion.site/Primeros-pasos-en-HTMl-b712e24ac56d447faf63f7b2131d0c8a?pvs=4"],
    ["Un poco de estilo", "https://programmind.notion.site/Un-poco-de-estilo-76537578429a49f089ff847ffa096e27?pvs=4"],
    ["Agregando cometarios", "https://programmind.notion.site/Comentarios-ec4c2c2062ef4229a38d39270ed191e2?pvs=4"],
    ["Más que solo párrafos", "https://programmind.notion.site/HTML-es-m-s-que-p-rrafos-y-t-tulos-ac7ab7e1ed51448a941b521b6f40d016?pvs=4"]
];
let blogContent= document.getElementById("blogContent");
        for (let post of postArray.reverse()){
            let postTitle= document.createElement("h2");
            postTitle.setAttribute("class", "post");
            postTitle.addEventListener("click", ()=>window.open(post[1]));
            postTitle.innerText= postArray.length- postArray.indexOf(post) + ". "+ post[0];
            blogContent.appendChild(postTitle);
        };