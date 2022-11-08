import { html } from "../lib.js";
import { searchForAlbum } from "../api/albums.js"
import { getUserData } from "../util.js";

let searchTemplate = (albums, onSearch, userData) => html`
<section id="searchPage">
    <h1>Search by Name</h1>

    <div class="search">
        <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
        <button @click=${onSearch} class="button-list">Search</button>
    </div>

    <h2>Results:</h2>

    <!--Show after click Search button-->
    <div class="search-result">
        ${albums.length == 0 ? html`<p class="no-result">No result.</p>` : albums.map(album => albumCard(album, userData))}
    </div>
</section>
`


let albumCard = (album, userData) => html`
    <div class="card-box">
        <img src=${album.imgUrl}>
        <div>
            <div class="text-center">
                <p class="name">Name: ${album.name}</p>
                <p class="artist">Artist: ${album.artist}</p>
                <p class="genre">Genre: ${album.genre}</p>
                <p class="price">Price: $${album.price}</p>
                <p class="date">Release Date: ${album.releaseDate}</p>
            </div>

            ${userData? html `
            <div class="btn-group">
                <a href="/albums/${album._id}" id="details">Details</a>
            </div>`:''}
        </div>
    </div>
`

export async function searchView(ctx) {
    let albums = []
    let userData=getUserData()

    ctx.render(searchTemplate(albums, onSearch, userData))

    async function onSearch(event) {
        event.preventDefault()

        let query = document.getElementById('search-input').value;

        if(query==''){
            return alert("Please, fill the required field!")
        }

        albums = await searchForAlbum(query)

        ctx.render(searchTemplate(albums, onSearch, userData))
    }

}