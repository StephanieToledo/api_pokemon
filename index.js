
const search = event => {
  event.preventDefault();
  const pokenumero = document.getElementById("pokenumero").value;
  const baseURL = "https://pokeapi.co/api/v2/pokemon/";

  if(pokenumero == 0){
    alert("Digite um número ou nome!")
  }else{

  $.get(baseURL + pokenumero, pokemon => {

    document.getElementById("pokenome").innerHTML = pokemon.name;
    document.getElementById("pokeimagem").src = pokemon.sprites.front_default;
    document.getElementById("pokealtura").innerHTML = pokemon.height;
    document.getElementById("pokepeso").innerHTML = pokemon.weight;
    document.getElementById("poketype").innerHTML = pokemon.types.map
                                                    (item => item.type.name).toString()                                                
  });
};
}

document.getElementById("pokeform").addEventListener('submit', search);
