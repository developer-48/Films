document.addEventListener("DOMContentLoaded", () =>{
    let index = 1;
    for(let filmCategory of filmsCategory){
        let newcat = document.createElement("div")
        newcat.classList.add("filmsCategory");
        newcat.classList.add(`filmsCategory_${index}`);
        newcat.innerText = filmCategory;
        let a = document.createElement("a");
        a.href = "./index.html";
        a.appendChild(newcat)
        document.querySelector(".categories").appendChild(a);
        newcat.addEventListener("click", ()=> {
            sessionStorage.setItem("FilmCategory", filmCategory)
        })
        index++
    }
    selectFilm()
})

let selectFilm = () =>{
    let name = films[GlobalId];
    let container = document.createElement("div");
    container.classList.add("filmList")
    container.classList.add("filmListTwo")
    let filmName = document.createElement("div");
    filmName.classList.add("filmNameTitle");         
    filmName.innerText = name.name;
    container.appendChild(filmName)
    let newFilm = document.createElement("div");
    newFilm.classList.add("film");
    filmName = document.createElement("div");
    filmName.classList.add("filmImg");
    newFilm.appendChild(filmName)
    let filmDescription = document.createElement("div");
    filmDescription.classList.add("filmDescription");
    let descriptionType = document.createElement("p")
    descriptionType.innerText = `Жанр: ${name.category}`
    filmDescription.appendChild(descriptionType)
    descriptionType = document.createElement("p")
    descriptionType.innerText = `Страна: ${name.country}`
    filmDescription.appendChild(descriptionType)
    descriptionType = document.createElement("p")
    descriptionType.innerText = `Дата выхода: ${name.releasedate}`
    filmDescription.appendChild(descriptionType)
    descriptionType = document.createElement("p")
    descriptionType.innerText = `Бюджет: ${name.spent}`
    filmDescription.appendChild(descriptionType)
    descriptionType = document.createElement("p")
    descriptionType.innerText = `Рейтинг: ${name.getstars()}`
    filmDescription.appendChild(descriptionType)
    newFilm.appendChild(filmDescription)
    container.appendChild(newFilm)
    descriptionType = document.createElement("div");
    descriptionType.classList.add("filmDescriptionText");
    let p = document.createElement("p");
    p.classList.add("descFilmName")
    p.innerText = `Описание к фильму ${name.name}`;
    descriptionType.appendChild(p);
    p = document.createElement("p");
    p.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, mollitia accusantium cum quidem eligendi voluptatibus consectetur aut rem unde eos? Aliquid odit inventore quam incidunt quo rerum, minima blanditiis possimus repellat eius laboriosam delectus reprehenderit perspiciatis, modi, in illum dolores voluptates unde vero aliquam.";
    descriptionType.appendChild(p);
    p = document.createElement("p");
    p.innerText = "Deserunt, explicabo! Voluptatibus aspernatur possimus dicta quis eos eligendi explicabo facere incidunt nesciunt nulla reprehenderit et pariatur quos voluptatem illum recusandae minus, ipsum amet neque. Id quis, aspernatur dolore unde quibusdam quia accusantium. Voluptates magnam ut rem expedita nisi accusantium ex, sapiente dolorum aspernatur vero consequatur fugiat nam sequi voluptate optio? Obcaecati praesentium voluptatibus quisquam quasi dolor";
    descriptionType.appendChild(p);
    container.appendChild(descriptionType)
    container.appendChild(video("https://cdnv.rt.com/russian/video/2021.07/60e44fb602e8bd0962559888.mp4"))
    let commentContainer = document.createElement("div");
    commentContainer.classList.add("commentContainer");
    filmDescription = document.createElement("div")
    filmDescription.classList.add("commentsBlock")
    descriptionType = document.createElement("div")
    descriptionType.classList.add("commentTitle")
    descriptionType.innerText = `Отзывы(${name.comments.length})`;
    descriptionType.addEventListener("click", ()=>{
        openComments(name.id)
    })        
    filmDescription.appendChild(descriptionType)
    let comments = document.createElement("div")
    comments.classList.add(`comments${name.id}`)
    comments.classList.add("commentsList")
    for(let com of name.comments){
        addComment(com, comments)
    }
    comments.style.display = "none";
    commentContainer.appendChild(comments);
    filmDescription.appendChild(commentContainer);
    descriptionType = document.createElement("div")
    descriptionType.classList.add("AddCommentBlock");
    descriptionType.classList.add(`AddCommentBlock${name.id}`);
    let addcomBlock = document.createElement("div")
    addcomBlock.innerText = "";
    addcomBlock.classList.add("addCommError");
    descriptionType.appendChild(addcomBlock);
    addcomBlock = document.createElement("input");
    addcomBlock.type = "text";
    addcomBlock.placeholder = "Введите имя";
    addcomBlock.classList.add("addCommName");
    descriptionType.appendChild(addcomBlock);
    addcomBlock = document.createElement("textarea");
    addcomBlock.type = "text";
    addcomBlock.placeholder = "Введите отзыв"
    addcomBlock.classList.add("addCommText");
    descriptionType.appendChild(addcomBlock);
    let starsBlock = document.createElement("div");
    starsBlock.classList.add("starsBlock");
    addcomBlock = document.createElement("div");
    addcomBlock.classList.add("starsBlockTitle");
    addcomBlock.innerText = "Оценка: ";
    starsBlock.appendChild(addcomBlock);
    addcomBlock = document.createElement("div");
    addcomBlock.classList.add("AddCommStarsSel");
    addcomBlock.classList.add(`AddCommStarsSel${name.id}`);
    for(let i = 1; i <= 5; i++){
        let star = document.createElement("div")
        star.innerText = i;
        star.addEventListener("click", (event)=>{
            if(event.target.classList.contains("CommStarsActive")){
                event.target.classList.remove("CommStarsActive");
            }
            else{
                let stars = document.querySelectorAll(`.AddCommStarsSel${name.id} div`);
                for(let i of stars){
                    if(i.classList.contains("CommStarsActive")){
                        i.classList.remove("CommStarsActive")
                    }
                }
                event.target.classList.add("CommStarsActive")
            }
        })
        addcomBlock.appendChild(star)
    }
    starsBlock.appendChild(addcomBlock);
    descriptionType.appendChild(starsBlock);
    let block = document.createElement("div");
    block.classList.add("addComBtnBlock")
    addcomBlock = document.createElement("button")
    addcomBlock.innerText = "Опубликовать";
    addcomBlock.classList.add("postCommBtn");
    addcomBlock.addEventListener("click", () => {
        openAddComments(name.id)
    })     
    descriptionType.appendChild(addcomBlock);
    filmDescription.appendChild(descriptionType)
    container.appendChild(filmDescription) 
    document.querySelector(".content").appendChild(container)     
}

let openComments = (id) =>{
    let block = document.querySelector(`.comments${id}`)
    if(block.style.display == "none"){
        block.style.display = "block";
    }
    else block.style.display = "none"
}

let openAddComments = (id) =>{
    if(document.querySelector(`.AddCommStarsSel${id} .CommStarsActive`) == null || document.querySelector(`.AddCommentBlock${id} input`).value == "" || document.querySelector(`.AddCommentBlock${id} textarea`).value == ""){
        document.querySelector(".addCommError").innerText = "Необходимо заполнить все поля*"
    }
    else if(!isValid(document.querySelector(`.AddCommentBlock${id} input`).value) || !isValid(document.querySelector(`.AddCommentBlock${id} textarea`).value)){
        document.querySelector(".addCommError").innerText = "Вы ввели некорректные символы"
    }
    else{
        document.querySelector(".addCommError").innerText = ""
        let date = new Date()
        let data = {author: document.querySelector(`.AddCommentBlock${id} input`).value, stars: document.querySelector(`.AddCommStarsSel${id} .CommStarsActive`).innerText, comment: document.querySelector(`.AddCommentBlock${id} textarea`).value, time: {date: "Сегодня",   time:`${new Date(01, 11, 2020, date.getUTCHours() + 3).getHours()}:${(date.getUTCMinutes() + 1 < 10)? `0${date.getUTCMinutes() + 1}`: date.getUTCMinutes() + 1}`}}
        films[id].addComment(data.author, data.stars, data.comment, {date: `${date.getDate()}.${(date.getMonth() + 1 < 10)? `0${date.getMonth() + 1}`: date.getMonth() + 1}`,   time: `${new Date(01, 11, 2020, date.getUTCHours() + 3).getHours()}:${(date.getUTCMinutes() + 1 < 10)? `0${date.getUTCMinutes() + 1}`: date.getUTCMinutes() + 1}`});
        let comments = document.querySelector(".commentsList");
        addComment(data, comments);
        document.querySelector(".commentTitle").innerText = `Отзывы(${films[id].comments.length})`
        document.querySelector(`.AddCommentBlock${id} input`).value = "";
        document.querySelector(`.AddCommentBlock${id} textarea`).value = "";
        let stars = document.querySelectorAll(`.AddCommStarsSel${id} div`);
        for(let i of stars){
            if(i.classList.contains("CommStarsActive")){
                i.classList.remove("CommStarsActive")
            }
        }
    }
}

let video = (src) =>{
    let videoPlayer = document.createElement("div");
    videoPlayer.classList.add("videoplayer")
    let videoBlock = document.createElement("video");
    videoBlock.setAttribute("controls", "controls");
    videoBlock.src = src;
    videoPlayer.appendChild(videoBlock);
    return videoPlayer;
}

let addComment = (com, comments) =>{
    let commentElem = document.createElement("div")
    commentElem.classList.add("commentsListElem");
    let comment = document.createElement("div");
    comment.classList.add("commentsListTitle");
    let author = document.createElement("p");
    author.classList.add("commentName")
    author.innerText = `${com.author}`;
    comment.appendChild(author)
    author = document.createElement("p");
    let date = new Date();
    author.innerText = `${(com.time.date == `${date.getDate()}.${(date.getMonth() + 1 < 10)? `0${date.getMonth() + 1}`: date.getMonth() + 1}`)? `Сегодня ${com.time.time}` :`${com.time.date} ${com.time.time}`}`
    comment.appendChild(author);
    commentElem.appendChild(comment);
    comment = document.createElement("p")
    comment.innerText = `${com.comment}`;
    comment.classList.add("commentsText");
    commentElem.appendChild(comment);
    comment = document.createElement("p")
    comment.innerText = `Оценка: ${com.stars}`;
    comment.classList.add("commentStarTitle");
    commentElem.appendChild(comment);
    comments.appendChild(commentElem);
}

const isValid = (str) =>{
    return !/[~`#$\^&\[\]\\';/{}|\\<>]/g.test(str);
}