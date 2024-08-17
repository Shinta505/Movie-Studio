const main = document.querySelector("#main");

function OnChangeSearch(searchParam, page = 1) {
    const apikey = "98f03ad5";
    axios.get(`https://www.omdbapi.com/?apikey=${apikey}&s=${searchParam}&page=${page}`)
        .then((response) => {
            const movies = response.data.Search;
            if (!movies) {
                main.innerHTML = notFound();
            } else {
                main.innerHTML = movies.map(showCards).join('');

                const cardsDetail = document.querySelectorAll(".card");

                cardsDetail.forEach(detail => {
                    detail.addEventListener("click", function () {
                        const imdbId = detail.getAttribute("data-id");
                        fetch(`https://www.omdbapi.com/?apikey=${apikey}&i=${imdbId}`)
                            .then(response => response.json())
                            .then(m => {
                                const modal = document.querySelector('.modal');
                                modal.innerHTML = modalDetail(m);
                                modal.style.display = "flex";

                                const btnClose = document.querySelector('.closeModal');
                                btnClose.addEventListener('click', () => modal.style.display = "none");
                            });
                    });
                });
            }
        })
        .catch((error) => {
            console.error(error);
        });
}

const showCards = (data) => {
    return `
    <div class="card" data-id="${data.imdbID}">
        <img src="${data.Poster}" alt="${data.Title}">
        <div class="text">
            <h2>${data.Title}</h2>
            <h3>(${data.Year})</h3>
        </div>
        <button class="btn-details">Details</button>
    </div>`;
};

const notFound = () => {
    return `<h1 class="notFound">Film Not Found</h1>`;
};

const modalDetail = (data) => {
    return `
    <div class="heading">
        <h2>Detail Movie</h2>
        <button type="button" class="closeModal"><i class='bx bx-x'>x</i></button>
    </div>
    <div class="content">
        <div class="img">
            <img src="${data.Poster}" alt="${data.Title}">
            <div class="text">
                <h3>Rated: ${data.Rated}</h3>
                <h3>Rating: ${data.imdbRating}</h3>
            </div>
        </div>
        <div class="desc">
            <div class="poin">
                <h3>Title</h3>
                <p>${data.Title} (${data.Year})</p>
            </div>
            <div class="poin">
                <h3>Director</h3>
                <p>${data.Director}</p>
            </div>
            <div class="poin">
                <h3>Actors</h3>
                <p>${data.Actors}</p>
            </div>
            <div class="poin">
                <h3>Country</h3>
                <p>${data.Country}</p>
            </div>
            <div class="poin">
                <h3>Plot</h3>
                <p class="plot">${data.Plot}</p>
            </div>
        </div>
    </div>`;
};

const input = document.getElementById("search");
const btnSearch = document.getElementById("btn-search");
btnSearch.addEventListener("click", () => {
    OnChangeSearch(input.value);
    input.value = ""; // Mengosongkan kolom input setelah pencarian
});

const nextPage = document.getElementById("next");
const prevPage = document.getElementById("prev");
const currentPageDisplay = document.getElementsByClassName('current');
let currentPage = 1;

nextPage.addEventListener('click', () => {
    currentPage++;
    currentPageDisplay.innerText = currentPage;
    OnChangeSearch(input.value, currentPage);
});

prevPage.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        currentPageDisplay.innerText = currentPage;
        OnChangeSearch(input.value, currentPage);
    }
});

input.addEventListener('blur', () => {
    currentPage = 1;
    currentPageDisplay.innerText = currentPage;
    OnChangeSearch(input.value, currentPage);
});