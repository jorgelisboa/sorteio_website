function List() {
    var objectList = [
        {
            nome: "Peaky Blinders",
            image: "https://i.pinimg.com/originals/af/34/1e/af341e79a94853eb03fb149f3cfbe509.jpg"
        },
        {
            nome: "(Des)encanto",
            image: "https://br.web.img3.acsta.net/pictures/19/09/20/20/10/0249008.jpg"
        },
        {
            nome: "Brooklyn Nine-Nine",
            image: "https://m.media-amazon.com/images/M/MV5BNzVkYWY4NzYtMWFlZi00YzkwLThhZDItZjcxYTU4ZTMzMDZmXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_FMjpg_UX1000_.jpg"
        },
        {
            nome: "The Office",
            image: "https://m.media-amazon.com/images/I/81NK3yCvMJL._AC_SL1500_.jpg"
        },
        {
            nome: "Alice in Borderland",
            image: "https://static.prensa.li/uploads/2021/09/29/alice_in_borderland_netflix_season_1_poster_01.jpg"
        },
        {
            nome: "Arcane",
            image: "https://i.pinimg.com/736x/4a/39/13/4a3913697b3edeb221c6c89744970c74.jpg"
        },
        {
            nome: "Sintonia",
            image: "https://br.web.img3.acsta.net/pictures/21/09/28/18/33/0121813.jpg"
        },
        {
            nome: "Demon slayer",
            image: "https://m.media-amazon.com/images/M/MV5BZjZjNzI5MDctY2Y4YS00NmM4LTljMmItZTFkOTExNGI3ODRhXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg"
        },
    ]
    return objectList
}

function sortMovieOrSerie(list) {
    const position = Math.floor(Math.random() * (list.length + 1))
    return list[position]    
}

function showMovieOnScreen(object){
    var contentBox = document.getElementById("content-box")

    var  showingComponent = `
        <h1>${object.nome}</h1>
        <img src="${object.image}" alt="${object.nome}">`

    contentBox.innerHTML = showingComponent
}

showMovieOnScreen(sortMovieOrSerie(List()))
sortMovieOrSerie(List())