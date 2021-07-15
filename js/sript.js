document.addEventListener("DOMContentLoaded", () =>{
    let index = 1;
    for(let filmCategory of filmsCategory){
        let newcat = document.createElement("div")
        newcat.classList.add("filmsCategory");
        newcat.classList.add(`filmsCategory_${index}`);
        newcat.innerText = filmCategory;
        document.querySelector(".categories").appendChild(newcat);
        newcat.addEventListener("click", ()=> {
            sessionStorage.setItem("FilmCategory", filmCategory)
            selectCategory(filmCategory)
        })
        index++
    }
    selectCategory(glFilmCategory)
})

let selectCategory = (filmCategory) =>{
    let film = [];
    for(let fill of films){
        if(fill.category == filmCategory){
            film.push(fill);
        }
    }
    if(document.querySelector(".categoryTitle")!=null){
        document.querySelector(".categoryTitle").innerText = `Фильмы категории: ${filmCategory}`;
    }
    else{
        let categoryTitle = document.createElement('h1');
        categoryTitle.classList.add("categoryTitle");
        categoryTitle.innerText = `Фильмы категории: ${filmCategory}`;
        document.querySelector(".content").appendChild(categoryTitle);
    }
    let filmList;
    if(document.querySelector(".filmList") == null){
        filmList = document.createElement("div");
        filmList.classList.add("filmList");
        document.querySelector(".content").appendChild(filmList);
    }
    else{
        filmList = document.querySelector(".filmList")
        for(let i of document.querySelectorAll(".filmList .film")){
            filmList.removeChild(i);
        }
        
    }
    for(let name of film){
        let newFilm = document.createElement("div");
        newFilm.classList.add("film");
        let filmName = document.createElement("div");
        filmName.classList.add("filmImg");
        filmName.addEventListener("click", () =>{
            sessionStorage.setItem('id', name.id)
        })
        let but = document.createElement("a");
        but.href = "./film.html"
        but.appendChild(filmName);
        newFilm.appendChild(but)
        filmName = document.createElement("div");
        filmName.classList.add(`film${name.id}`);
        filmName.classList.add("filmName");         
        filmName.innerText = name.name;
        filmName.addEventListener("click", () =>{
            sessionStorage.setItem('id', name.id)
        })
        but = document.createElement("a");
        but.href = "./film.html"
        but.appendChild(filmName);
        newFilm.appendChild(but) 
        filmList.appendChild(newFilm)            
    }
    
       
}
