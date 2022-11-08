import { createAlbum, getAlbumById, updateAlbum } from "../api/albums.js";
import { html } from "../lib.js";
import { getUserData } from '../util.js'

const editTemplate = (album, onSubmit) => html`
<section class="editPage">
    <form @submit=${onSubmit}>
        <fieldset>
            <legend>Edit Album</legend>

            <div class="container">
                <label for="name" class="vhide">Album name</label>
                <input id="name" name="name" class="name" type="text" .value=${album.name}>

                <label for="imgUrl" class="vhide">Image Url</label>
                <input id="imgUrl" name="imgUrl" class="imgUrl" type="text" .value=${album.imgUrl}>

                <label for="price" class="vhide">Price</label>
                <input id="price" name="price" class="price" type="text" .value=${album.price}>

                <label for="releaseDate" class="vhide">Release date</label>
                <input id="releaseDate" name="releaseDate" class="releaseDate" type="text" .value=${album.releaseDate}>

                <label for="artist" class="vhide">Artist</label>
                <input id="artist" name="artist" class="artist" type="text" .value=${album.artist}>

                <label for="genre" class="vhide">Genre</label>
                <input id="genre" name="genre" class="genre" type="text" .value=${album.genre}>

                <label for="description" class="vhide">Description</label>
                <textarea name="description" class="description" rows="10" cols="10" .value=${album.description}></textarea>

                <button class="edit-album" type="submit">Edit Album</button>
            </div>
        </fieldset>
    </form>
</section>
`

export async function editView(ctx) {
    const album= await getAlbumById(ctx.params.id)

    ctx.render(editTemplate(album, onSubmit));

    async function onSubmit(event){
        event.preventDefault()

        let formData=new FormData(event.target)

        let name = formData.get('name')
        let imgUrl = formData.get('imgUrl')
        let price = formData.get('price')
        let releaseDate = formData.get('releaseDate')
        let artist = formData.get('artist')
        let genre = formData.get('genre')
        let description = formData.get('description')

        if(name=='' || imgUrl=='' || price=='' || releaseDate=='' || artist=='' || genre=='' || description==''){
            return alert("All fields are required!")
        }

        await updateAlbum(ctx.params.id, {
            name,
            imgUrl,
            price,
            releaseDate,
            artist,
            genre,
            description
        })

        event.target.reset()
        ctx.page.redirect('/albums/'+ctx.params.id)
    }
}