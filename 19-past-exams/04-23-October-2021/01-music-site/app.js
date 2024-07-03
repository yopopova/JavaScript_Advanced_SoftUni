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
        // ^ Allows elements to be added. If we don't use it, we won't be able to add songs. Without it, the browser skips.

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

            // If I hook '.addEventListener' to a button without setting the function yet, it will break the code and things won't work.

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
        let currentSongDivElement = e.currentTarget.parentElement; // This is how we get the 'div', the parent of the song.
        let currentSaveButtonElement = currentSongDivElement.querySelector('.save-btn').remove();
        let currentLikeButtonElement = currentSongDivElement.querySelector('.like-btn').remove();
        // ^ We remove the two buttons.
        savedSongsElement.appendChild(currentSongDivElement);
        // ^ Finally, we hook the song container to the saved songs container.
    }

    function likeSong(e) {
        let currentLikes = Number(likesParagraphElement.textContent.slice(-1));
        // ^ With the negative index, '.slice' starts counting from the end of the string, taking ONLY the last character!!!
        currentLikes++;
        likesParagraphElement.textContent = `Total Likes: ${currentLikes}`;
        e.currentTarget.disabled = true;
        // ^ This is how we make the button inactive because 1 user can only vote 1 time per song.
    }

    function deleteSong(e) {
        e.currentTarget.parentElement.remove();
    }
}