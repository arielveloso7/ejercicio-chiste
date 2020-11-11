
const jokeUrl = 'https://api.chucknorris.io/jokes/random';

const obtenerChiste = async () => {
    try {

        const resp = await fetch(jokeUrl);

        if (!resp.ok) throw 'No se pudo realizar la peticion';

        const { icon_url, id, value } = await resp.json(); //desestructuracion

        return { icon_url, id, value };

    } catch (err) {

        throw err;

    }



}

export {
    obtenerChiste
}

/* VERSION LARGA
fetch(jokeUrl).then(resp => {

    resp.json().then(data => {
        console.log(data.value);
    })
});

CADENA DE PROMESAS
fetch(jokeUrl)
    .then(resp => resp.json())
    .then(console.log);

    */