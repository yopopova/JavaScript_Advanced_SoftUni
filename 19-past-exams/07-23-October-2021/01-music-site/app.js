window.addEventListener('load', solve);

function solve() {
    let songGenreElement = document.getElementById('genre');
    let songNameElement = document.getElementById('name');
    let songAuthorElement = document.getElementById('author');
    let songDateElement = document.getElementById('date');

    let addButtonElement = document.getElementById('add-btn');
    let allHitsContainerElement = document.querySelector('.all-hits-container');
    let likesParagraphElement = document.querySelector('div.likes p');
    let savedSongsElement = document.querySelector('div.saved-container');

    addButtonElement.addEventListener('click', addSong);

    function addSong(e) {
        e.preventDefault();
        // ^ Позволява да се добавят елементи. Ако не го използваме, няма да можем да добавим песни. Без него браузърът прескача.

        if (songGenreElement.value && songNameElement.value && songAuthorElement.value && songDateElement.value) {
            let mainDiv = document.createElement('div');
            mainDiv.className = 'hits-info';

            let pic = document.createElement('img');
            pic.setAttribute('src', './static/img/img.png');
            mainDiv.appendChild(pic);

            let genre = document.createElement('h2');
            genre.textContent = `Genre: ${songGenreElement.value}`;
            mainDiv.appendChild(genre);

            let name = document.createElement('h2');
            name.textContent = `Name: ${songNameElement.value}`;
            mainDiv.appendChild(name);

            let author = document.createElement('h2');
            author.textContent = `Author: ${songAuthorElement.value}`;
            mainDiv.appendChild(author);

            let date = document.createElement('h3');
            date.textContent = `Date: ${songDateElement.value}`;
            mainDiv.appendChild(date);

            // Ако закачам '.addEventListener' на бутон, без все още да сме му задали финкцията, ще счупи кода и нещата няма да работят.

            let saveBtn = document.createElement('button');
            saveBtn.className = 'save-btn';
            saveBtn.textContent = 'Save song';
            saveBtn.addEventListener('click', saveSong);
            mainDiv.appendChild(saveBtn);

            let likeBtn = document.createElement('button');
            likeBtn.className = 'like-btn';
            likeBtn.textContent = 'Like song';
            likeBtn.addEventListener('click', likeSong);
            mainDiv.appendChild(likeBtn);

            let deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', deleteSong);
            mainDiv.appendChild(deleteBtn);

            allHitsContainerElement.appendChild(mainDiv);

            songGenreElement.value = '';
            songNameElement.value = '';
            songAuthorElement.value = '';
            songDateElement.value = '';
        }
    }

    function saveSong(e) {
        let currentSongDivElement = e.currentTarget.parentElement; // Така взимаме 'div-а', родителя на песента.
        let currentSaveButtonElement = currentSongDivElement.querySelector('.save-btn').remove();
        let currentLikeButtonElement = currentSongDivElement.querySelector('.like-btn').remove();
        // ^ Премахваме двата бутона.
        savedSongsElement.appendChild(currentSongDivElement);
        // ^ Накрая закачаме контейнера с песента в контейнера със запазените песни.
    }

    function likeSong(e) {
        let currentLikes = Number(likesParagraphElement.textContent.slice(-1));
        // ^ С отрицателния индекс '.slice' започва да брои от края на стринга, като взима САМО последния символ!!!
        currentLikes++;
        likesParagraphElement.textContent = `Total Likes: ${currentLikes}`;
        e.currentTarget.disabled = true;
        // ^ Така правим бутона неактивен, защото 1 потребител може да гласува само 1 път за песен.
    }

    function deleteSong(e) {
        e.currentTarget.parentElement.remove();
    }
}