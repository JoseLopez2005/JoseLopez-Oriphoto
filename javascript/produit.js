let url = new URLSearchParams(document.location.search);

let id = url.get('id');

const fetchCamera = async() => {
    camera = await fetch(`http://localhost:3000/api/cameras/${id}` ).then(res => res.json());
};

const appareil = document.getElementById('appareil');

let camera;

const showCamera = async() => {
    await fetchCamera();

    let item = document.createElement('li');
    item.classList.add("cameras-item");

    let img = document.createElement('img');
    img.classList.add("cameras-item__img");
    img.src = camera.imageUrl;

    let div = document.createElement('div')

    let title = document.createElement('h3');
    title.classList.add("cameras-item__name");
    title.innerText = camera.name;

    let descrTitre = document.createElement("p");
    descrTitre.classList.add("cameras-item__titre");
    descrTitre.innerText = 'Description :';

    let description = document.createElement("p");
    description.classList.add("cameras-item__descr");
    description.innerText = camera.description;

    let label = document.createElement("label");
    label.classList.add("cameras-item__titre");
    label.innerText = 'Lentilles ';

    let select = document.createElement("select");
    select.classList.add("cameras-item__lenses");

    /*const {lenses} = camera;
    let option = HTMLOptionElement;
    select.innerHTML = lenses.map(lenses => `<option>lenses[i]</option>`);*/

    /*const {lenses} = camera;
    let option = HTMLOptionElement;
    for (let i = 0; i < lenses.length; i++) {
        select.innerHTML = `<option>${lenses[i]}</option>`;
        console.log(lenses[i]);
    };*/


    /*window.onload = () => {
        const {lenses} = camera;

        lenses.forEach(element => {
                let option = document.createElement("option");
            document.querySelector("select").appendChild(option);
            optionTag.innerHTML = element;
            console.log(element);
        });
    };*/

    let price = document.createElement("p");
    price.classList.add("cameras-item__price");
    price.textContent = 'Prix : '+numberWithSpace(camera.price)+'€';
    
    let abtn = document.createElement('button');
    abtn.classList.add("cameras-item__bouton");
    abtn.innerText = "Ajouter au panier";

    item.appendChild(img);

    item.appendChild(div);
        div.appendChild(title);
        div.appendChild(descrTitre);
        div.appendChild(description);
        div.appendChild(label);
        div.appendChild(select);
            //select.appendChild(option);
        div.appendChild(price);

    item.appendChild(abtn);

    appareil.append(item);

    abtn.addEventListener("click", function () {
        document.location.href = "panier.html";
    });
};


showCamera();