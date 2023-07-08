const $containerCharacters = document.querySelector(".container-characters");
let url = "https://pokeapi.co/api/v2/pokemon";
let countPokemon = 8;

async function loadCharacters(url) {
  try {
    let res = await fetch(url);
    let json = await res.json();
    let $template = "";

    
    //console.log(res);
    //console.log(json);
   
 

    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    for (let i = 0; i < json.results.length; i++) {
       
    url_image = json['sprites']['other']['official-artwork']['front_default']
    console.log(url_image)
    
    $template += `
        <div class="card-container" >
            </div>
            <div class="card-details">
            <img class = "imgPoke" src = "${json.sprites.other["official-artwork"].front_default}">
            </div> 
          </div>
        `;
      //$containerCharacters.innerHTML=$template;
    }
  } catch (err) {
    console.log(err);
  }
}

loadCharacters(url);