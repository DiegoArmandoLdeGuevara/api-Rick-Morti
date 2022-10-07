let d = document, $next = d.querySelector('#next'), $pre = d.querySelector('#pre');

let pag = 1;
let $img = d.querySelector('.img-cont'), $nombre = d.querySelector('.api_nombre'),
$status = d.querySelector('.api_status'), $especie = d.querySelector('.api_specie');


$next.addEventListener("click", e => {
    pag++;
    apiRick(pag);
})

$pre.addEventListener("click", e => {
    if(pag>1){
        pag--;
        apiRick(pag);
    }
})

async function apiRick(pag){
    let url = `https://rickandmortyapi.com/api/character/${pag}`;
    try {
        let res = await fetch(url);
        json = await res.json();
        let apiRickMorty = json; 
        console.log(apiRickMorty);
        $img.src = apiRickMorty.image;
        $nombre.innerHTML = apiRickMorty.name;
        $status.innerHTML = apiRickMorty.status;
        $especie.innerHTML = apiRickMorty.species;
    } catch (error) {
        let mensaje = error.statusText || "Ocurrio un Error";
    }  

    
}
apiRick(pag);