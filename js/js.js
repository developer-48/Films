let filmsCategory = ["Триллер", "Боевик", "Комедия", "Ужас", "Фантастика", "Приключения", "Спорт", "Биография", "Драмма"];
let films = [];
let glFilmCategory = (sessionStorage.getItem("FilmCategory") != null)? sessionStorage.getItem("FilmCategory"): filmsCategory[0];
let GlobalId = (sessionStorage.getItem("id") != null)? sessionStorage.getItem("id"): 0;
class Comment{
    constructor(author, star, comm, time){
        this.author = author;
        this.stars = star;
        this.comment = comm;
        this.time = {date: time.date, time: time.time}
    }
}

class film{
    constructor(name, index, country, releasedate, spent, id){
        this.id = id;
        this.name = name;
        this.category = filmsCategory[index];
        this.country = country;
        this.releasedate = releasedate;
        this.spent = spent;
        this.comments = [];
    }
    addComment(author, star, comm, time){
        this.comments.push(new Comment(author, star, comm, time));
    }
    getstars(){
        let sumstars = 0;
        this.comments.forEach(i => sumstars += i.stars);
        return (this.comments.length > 0)? Math.round(sumstars/this.comments.length) : "Фильм пока не оценили";
    }    
}

function addByCategory(cat){
    let filmscat = [];
    for(let i of films){
        if(i.category == cat){
            filmscat.push(i)
        }
    }
    return filmscat;
}

function addByReleaseDate(rel){
    let filmreleasedate = [];
    for(let i of films){
        if(i.releasedate == rel){
            filmreleasedate.push(i)
        }
    }
    return filmreleasedate;
}

function addByAverageRating(star){
    let filmstar = [];
    for(let i of films){
        if (i.getstars() >= star){
            filmstar.push(i);
        }
    }
    return filmstar;
}
id = 0;
films.push(new film("Зов предков", 5, "США", 2020, 2500000, id++));
films.push(new film("Титаник", 2, "США", 2000, 1900000, id++));
films.push(new film("Джокер", 0, "США", 2019, 13500000, id++));
films.push(new film("Жажда скорости", 0, "США", 2000, 16000000, id++));
films.push(new film("Движение вверх", 6, "Россия", 2000, 5000, id++));
films.push(new film("Терминатор", 1, "США", 2000, 1900000, id++));
films.push(new film("Просто помиловать", 7, "США", 2020, 15000000, id++));
films[6].addComment("Иван", 5, "Отличный фильм.", {date: "11.07", time: "9:57"});
films[3].addComment("Ольга", 5, "Фильм супер.", {date: "11.02", time: "9:57"});
films[6].addComment("Виктор", 5, "Очень итересный фильм, всем рекомендую.", {date: "11.02", time: "9:57"});
films[1].addComment("Сергей", 2, "Только 10 минут вытерпил и то с перемоткой.", {date: "11.02", time: "9:57"});
films[5].addComment("Екатерина", 4, "Норм.", {date: "11.02", time: "9:57"});
films[6].addComment("Сергей", 5, "Отличный фильм.", {date: "11.02", time: "9:57"});
films[0].addComment("Антон", 5, "Супер.", {date: "11.02", time: "9:57"});
films[2].addComment("Антон", 3, "Один раз посмотреть можно и то с трудом.", {date: "11.02", time: "9:57"});
films[2].addComment("Антон", 2, "Помойка какая-то вообще не то что ожидал, не рекомендую к просмотру.", {date: "11.02", time: "9:57"});
films.push(new film("Зов предков", 5, "США", 2020, 2500000, id++));
films.push(new film("Титаник", 2, "США", 2000, 1900000, id++));
films.push(new film("Джокер", 0, "США", 2019, 13500000, id++));
films.push(new film("Жажда скорости", 0, "США", 2000, 16000000, id++));
films.push(new film("Движение вверх", 6, "Россия", 2000, 5000, id++));
films.push(new film("Терминатор", 1, "США", 2000, 1900000, id++));
films.push(new film("Просто помиловать", 7, "США", 2020, 15000000, id++));
films[6].addComment("Иван", 5, "Отличный фильм.", {date: "11.02", time: "9:57"});
films[3].addComment("Ольга", 5, "Фильм супер.", {date: "11.02", time: "9:57"});
films[6].addComment("Виктор", 5, "Очень итересный фильм, всем рекомендую.", {date: "11.02", time: "9:57"});
films[1].addComment("Сергей", 2, "Только 10 минут вытерпил и то с перемоткой.", {date: "11.02", time: "9:57"});
films[5].addComment("Екатерина", 4, "Норм.", {date: "11.02", time: "9:57"});
films[6].addComment("Сергей", 5, "Отличный фильм.", {date: "11.02", time: "9:57"});
films[0].addComment("Антон", 5, "Супер.", {date: "11.02", time: "9:57"});
films[2].addComment("Антон", 3, "Один раз посмотреть можно и то с трудом.", {date: "11.02", time: "9:57"});
films[2].addComment("Антон", 2, "Помойка какая-то вообще не то что ожидал, не рекомендую к просмотру.", {date: "11.02", time: "9:57"});
films.push(new film("Зов предков", 5, "США", 2020, 2500000, id++));
films.push(new film("Титаник", 2, "США", 2000, 1900000, id++));
films.push(new film("Джокер", 0, "США", 2019, 13500000, id++));
films.push(new film("Жажда скорости", 0, "США", 2000, 16000000, id++));
films.push(new film("Движение вверх", 6, "Россия", 2000, 5000, id++));
films.push(new film("Терминатор", 1, "США", 2000, 1900000, id++));
films.push(new film("Просто помиловать", 7, "США", 2020, 15000000, id++));
films[6].addComment("Иван", 5, "Отличный фильм.", {date: "11.02", time: "9:57"});
films[3].addComment("Ольга", 5, "Фильм супер.", {date: "11.02", time: "9:57"});
films[6].addComment("Виктор", 5, "Очень итересный фильм, всем рекомендую.", {date: "11.02", time: "9:57"});
films[1].addComment("Сергей", 2, "Только 10 минут вытерпил и то с перемоткой.", {date: "11.02", time: "9:57"});
films[5].addComment("Екатерина", 4, "Норм.", {date: "11.02", time: "9:57"});
films[6].addComment("Сергей", 5, "Отличный фильм.", {date: "11.02", time: "9:57"});
films[0].addComment("Антон", 5, "Супер.", {date: "11.02", time: "9:57"});
films[2].addComment("Антон", 3, "Один раз посмотреть можно и то с трудом.", {date: "11.02", time: "9:57"});
films[2].addComment("Антон", 2, "Помойка какая-то вообще не то что ожидал, не рекомендую к просмотру.", {date: "11.02", time: "9:57"});
films.push(new film("Зов предков", 5, "США", 2020, 2500000, id++));
films.push(new film("Титаник", 2, "США", 2000, 1900000, id++));
films.push(new film("Джокер", 0, "США", 2019, 13500000, id++));
films.push(new film("Жажда скорости", 0, "США", 2000, 16000000, id++));
films.push(new film("Движение вверх", 6, "Россия", 2000, 5000, id++));
films.push(new film("Терминатор", 1, "США", 2000, 1900000, id++));
films.push(new film("Просто помиловать", 7, "США", 2020, 15000000, id++));
films[6].addComment("Иван", 5, "Отличный фильм.", {date: "11.02", time: "9:57"});
films[3].addComment("Ольга", 5, "Фильм супер.", {date: "11.02", time: "9:57"});
films[6].addComment("Виктор", 5, "Очень итересный фильм, всем рекомендую.", {date: "11.02", time: "9:57"});
films[1].addComment("Сергей", 2, "Только 10 минут вытерпил и то с перемоткой.", {date: "11.02", time: "9:57"});
films[5].addComment("Екатерина", 4, "Норм.", {date: "11.02", time: "9:57"});
films[6].addComment("Сергей", 5, "Отличный фильм.", {date: "11.02", time: "9:57"});
films[0].addComment("Антон", 5, "Супер.", {date: "11.02", time: "9:57"});
films[2].addComment("Антон", 3, "Один раз посмотреть можно и то с трудом.", {date: "11.02", time: "9:57"});
films[2].addComment("Антон", 2, "Помойка какая-то вообще не то что ожидал, не рекомендую к просмотру.", {date: "11.02", time: "9:57"});
films.push(new film("Зов предков", 5, "США", 2020, 2500000, id++));
films.push(new film("Титаник", 2, "США", 2000, 1900000, id++));
films.push(new film("Джокер", 0, "США", 2019, 13500000, id++));
films.push(new film("Жажда скорости", 0, "США", 2000, 16000000, id++));
films.push(new film("Движение вверх", 6, "Россия", 2000, 5000, id++));
films.push(new film("Терминатор", 1, "США", 2000, 1900000, id++));
films.push(new film("Просто помиловать", 7, "США", 2020, 15000000, id++));
films[6].addComment("Иван", 5, "Отличный фильм.", {date: "11.02", time: "9:57"});
films[3].addComment("Ольга", 5, "Фильм супер.", {date: "11.02", time: "9:57"});
films[6].addComment("Виктор", 5, "Очень итересный фильм, всем рекомендую.", {date: "11.02", time: "9:57"});
films[1].addComment("Сергей", 2, "Только 10 минут вытерпил и то с перемоткой.", {date: "11.02", time: "9:57"});
films[5].addComment("Екатерина", 4, "Норм.", {date: "11.02", time: "9:57"});
films[6].addComment("Сергей", 5, "Отличный фильм.", {date: "11.02", time: "9:57"});
films[0].addComment("Антон", 5, "Супер.", {date: "11.02", time: "9:57"});
films[2].addComment("Антон", 3, "Один раз посмотреть можно и то с трудом.", {date: "11.02", time: "9:57"});
films[2].addComment("Антон", 2, "Помойка какая-то вообще не то что ожидал, не рекомендую к просмотру.", {date: "11.02", time: "9:57"});
films.push(new film("Зов предков", 5, "США", 2020, 2500000, id++));
films.push(new film("Титаник", 2, "США", 2000, 1900000, id++));
films.push(new film("Джокер", 0, "США", 2019, 13500000, id++));
films.push(new film("Жажда скорости", 0, "США", 2000, 16000000, id++));
films.push(new film("Движение вверх", 6, "Россия", 2000, 5000, id++));
films.push(new film("Терминатор", 1, "США", 2000, 1900000, id++));
films.push(new film("Просто помиловать", 7, "США", 2020, 15000000, id++));
films[6].addComment("Иван", 5, "Отличный фильм.", {date: "11.02", time: "9:57"});
films[3].addComment("Ольга", 5, "Фильм супер.", {date: "11.02", time: "9:57"});
films[6].addComment("Виктор", 5, "Очень итересный фильм, всем рекомендую.", {date: "11.02", time: "9:57"});
films[1].addComment("Сергей", 2, "Только 10 минут вытерпил и то с перемоткой.", {date: "11.02", time: "9:57"});
films[5].addComment("Екатерина", 4, "Норм.", {date: "11.02", time: "9:57"});
films[6].addComment("Сергей", 5, "Отличный фильм.", {date: "11.02", time: "9:57"});
films[0].addComment("Антон", 5, "Супер.", {date: "11.02", time: "9:57"});
films[2].addComment("Антон", 3, "Один раз посмотреть можно и то с трудом.", {date: "11.02", time: "9:57"});
films[2].addComment("Антон", 2, "Помойка какая-то вообще не то что ожидал, не рекомендую к просмотру.", {date: "11.02", time: "9:57"});
films.push(new film("Зов предков", 5, "США", 2020, 2500000, id++));
films.push(new film("Титаник", 2, "США", 2000, 1900000, id++));
films.push(new film("Джокер", 0, "США", 2019, 13500000, id++));
films.push(new film("Жажда скорости", 0, "США", 2000, 16000000, id++));
films.push(new film("Движение вверх", 6, "Россия", 2000, 5000, id++));
films.push(new film("Терминатор", 1, "США", 2000, 1900000, id++));
films.push(new film("Просто помиловать", 7, "США", 2020, 15000000, id++));
films[6].addComment("Иван", 5, "Отличный фильм.", {date: "11.02", time: "9:57"});
films[3].addComment("Ольга", 5, "Фильм супер.", {date: "11.02", time: "9:57"});
films[6].addComment("Виктор", 5, "Очень итересный фильм, всем рекомендую.", {date: "11.02", time: "9:57"});
films[1].addComment("Сергей", 2, "Только 10 минут вытерпил и то с перемоткой.", {date: "11.02", time: "9:57"});
films[5].addComment("Екатерина", 4, "Норм.", {date: "11.02", time: "9:57"});
films[6].addComment("Сергей", 5, "Отличный фильм.", {date: "11.02", time: "9:57"});
films[0].addComment("Антон", 5, "Супер.", {date: "11.02", time: "9:57"});
films[2].addComment("Антон", 3, "Один раз посмотреть можно и то с трудом.", {date: "11.02", time: "9:57"});
films[2].addComment("Антон", 2, "Помойка какая-то вообще не то что ожидал, не рекомендую к просмотру.", {date: "11.02", time: "9:57"});
films.push(new film("Зов предков", 5, "США", 2020, 2500000, id++));
films.push(new film("Титаник", 2, "США", 2000, 1900000, id++));
films.push(new film("Джокер", 0, "США", 2019, 13500000, id++));
films.push(new film("Жажда скорости", 0, "США", 2000, 16000000, id++));
films.push(new film("Движение вверх", 6, "Россия", 2000, 5000, id++));
films.push(new film("Терминатор", 1, "США", 2000, 1900000, id++));
films.push(new film("Просто помиловать", 7, "США", 2020, 15000000, id++));
films[6].addComment("Иван", 5, "Отличный фильм.", {date: "11.02", time: "9:57"});
films[3].addComment("Ольга", 5, "Фильм супер.", {date: "11.02", time: "9:57"});
films[6].addComment("Виктор", 5, "Очень итересный фильм, всем рекомендую.", {date: "11.02", time: "9:57"});
films[1].addComment("Сергей", 2, "Только 10 минут вытерпил и то с перемоткой.", {date: "11.02", time: "9:57"});
films[5].addComment("Екатерина", 4, "Норм.", {date: "11.02", time: "9:57"});
films[6].addComment("Сергей", 5, "Отличный фильм.", {date: "11.02", time: "9:57"});
films[0].addComment("Антон", 5, "Супер.", {date: "11.02", time: "9:57"});
films[2].addComment("Антон", 3, "Один раз посмотреть можно и то с трудом.", {date: "11.02", time: "9:57"});
films[2].addComment("Антон", 2, "Помойка какая-то вообще не то что ожидал, не рекомендую к просмотру.", {date: "11.02", time: "9:57"});
films.push(new film("Зов предков", 5, "США", 2020, 2500000, id++));
films.push(new film("Титаник", 2, "США", 2000, 1900000, id++));
films.push(new film("Джокер", 0, "США", 2019, 13500000, id++));
films.push(new film("Жажда скорости", 0, "США", 2000, 16000000, id++));
films.push(new film("Движение вверх", 6, "Россия", 2000, 5000, id++));
films.push(new film("Терминатор", 1, "США", 2000, 1900000, id++));
films.push(new film("Просто помиловать", 7, "США", 2020, 15000000, id++));
films[6].addComment("Иван", 5, "Отличный фильм.", {date: "11.02", time: "9:57"});
films[3].addComment("Ольга", 5, "Фильм супер.", {date: "11.02", time: "9:57"});
films[6].addComment("Виктор", 5, "Очень итересный фильм, всем рекомендую.", {date: "11.02", time: "9:57"});
films[1].addComment("Сергей", 2, "Только 10 минут вытерпил и то с перемоткой.", {date: "11.02", time: "9:57"});
films[5].addComment("Екатерина", 4, "Норм.", {date: "11.02", time: "9:57"});
films[6].addComment("Сергей", 5, "Отличный фильм.", {date: "11.02", time: "9:57"});
films[0].addComment("Антон", 5, "Супер.", {date: "11.02", time: "9:57"});
films[2].addComment("Антон", 3, "Один раз посмотреть можно и то с трудом.", {date: "11.02", time: "9:57"});
films[2].addComment("Антон", 2, "Помойка какая-то вообще не то что ожидал, не рекомендую к просмотру.", {date: "11.02", time: "9:57"});
films.push(new film("Зов предков", 5, "США", 2020, 2500000, id++));
films.push(new film("Титаник", 2, "США", 2000, 1900000, id++));
films.push(new film("Джокер", 0, "США", 2019, 13500000, id++));
films.push(new film("Жажда скорости", 0, "США", 2000, 16000000, id++));
films.push(new film("Движение вверх", 6, "Россия", 2000, 5000, id++));
films.push(new film("Терминатор", 1, "США", 2000, 1900000, id++));
films.push(new film("Просто помиловать", 7, "США", 2020, 15000000, id++));
films[6].addComment("Иван", 5, "Отличный фильм.", {date: "11.02", time: "9:57"});
films[3].addComment("Ольга", 5, "Фильм супер.", {date: "11.02", time: "9:57"});
films[6].addComment("Виктор", 5, "Очень итересный фильм, всем рекомендую.", {date: "11.02", time: "9:57"});
films[1].addComment("Сергей", 2, "Только 10 минут вытерпил и то с перемоткой.", {date: "11.02", time: "9:57"});
films[5].addComment("Екатерина", 4, "Норм.", {date: "11.02", time: "9:57"});
films[6].addComment("Сергей", 5, "Отличный фильм.", {date: "11.02", time: "9:57"});
films[0].addComment("Антон", 5, "Супер.", {date: "11.02", time: "9:57"});
films[2].addComment("Антон", 3, "Один раз посмотреть можно и то с трудом.", {date: "11.02", time: "9:57"});
films[2].addComment("Антон", 2, "Помойка какая-то вообще не то что ожидал, не рекомендую к просмотру.", {date: "11.02", time: "9:57"});