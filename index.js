function appendImageElement(keyword, index) {
    const imgElement = document.createElement('img');
    imgElement.src = `https://source.unsplash.com/400x225/?${keyword}&sig=${index}`;

    imgElement.alt = keyword;
    imgElement.style.border = 'solid black 1px';

    const galleryElement = document.querySelector('.gallery');
    galleryElement.appendChild(imgElement);
}

function clearImages() {
    const galleryElement = document.querySelector('.gallery');
    galleryElement.innerHTML = '';
}

function searchPhotos(event) {
    const keyword = event.target.value;

    if (event.key === 'Enter' && keyword) {
        clearImages();

        for (let i = 1; i <= 9; i++) {
            appendImageElement(keyword, i);
        }
    }
}

function run() {
    const searchInputElement = document.getElementById('search-photos');
    searchInputElement.addEventListener('keydown', searchPhotos);
}

run();