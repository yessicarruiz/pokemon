const $containerCharacters = document.getElementById("container-characters");
let url = "https://pokeapi.co/api/v2/pokemon";
let typeUrl = "https://pokeapi.co/api/v2/type/"


async function loadCharacters(url) {
    try {
        let res = await fetch(url);
        let json = await res.json();
        let $template = "";
        //console.log(res);
        //console.log(json);  


        if (!res.ok) throw { status: res.status, statusText: res.statusText };
        for (let i = 0; i < json.results.length; i++) {
            url_name = (json.results[i].name);
            let url_pokemon = (json.results[i].url);
            let resPok = await fetch(url_pokemon);
            let jsonPok = await resPok.json();
            console.log(url_pokemon)
            
            let buyCards = document.createElement('div');
            buyCards.className = 'buyCards';
            $template += `
                <div class="buyCards" >
                    
                    <div class="CardsDetails">
                        <p>${json.results[i].name}</p>
                        <i class="fa-sharp fa-regular fa-heart"></i>
                    </div>
                    <img class = "imgPokemon" src = "${jsonPok.sprites.other.home.front_default}">
                    <div class="CardsDetails">
                        <p><b>${jsonPok.base_experience} Exp</b></p>
                        <button class="buybutton">Buy</button>
                    </div>
                    
                </div>`;
            $containerCharacters.innerHTML = $template;
        }
    } catch (err) {
        console.log(err);
    }
}
async function typesButton(type){
    try {
        let res = await fetch(url);
        let json = await res.json();
        let $template = "";
        //console.log(res);
        //console.log(json);  


        if (!res.ok) throw { status: res.status, statusText: res.statusText };
        for (let i = 0; i < json.results.length; i++) {
            url_name = (json.results[i].name);
            let url_pokemon = (json.results[i].url);
            let resPok = await fetch(url_pokemon);
            let jsonPok = await resPok.json();
            console.log(url_pokemon)
            
            let buyCards = document.createElement('div');
            buyCards.className = 'buyCards';
            $template += `
        <div class="buyCards" >
            </div>
            <div class="CardsDetails">
                <p>${json.results[i].name}</p>
                <i class="fa-sharp fa-regular fa-heart"></i>
            </div>
                <img class = "imgPokemon" src = "${jsonPok.sprites.front_default}">
            <div class="CardsDetails">
                <p><b>${jsonPok.base_experience} Exp</b></p>
                <button class="buybutton">Buy</button>
            </div>
            
        </div>`;
            $containerCharacters.innerHTML = $template;
        }
    } catch (err) {
        console.log(err);
    }

}
loadCharacters(url);