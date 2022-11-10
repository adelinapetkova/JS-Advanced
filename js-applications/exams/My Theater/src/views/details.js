import { deleteTheater, getTheaterById, getTotalLikesForTheater, createLike, isTheaterLikedByCurrentUser } from "../api/theaters.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (theater, isOwner, onDelete, likes, onLike, showLikeBtn) => html`
<section id="detailsPage">
    <div id="detailsBox">
        <div class="detailsInfo">
            <h1>Title: ${theater.title}</h1>
            <div>
                <img src=${theater.imageUrl} />
            </div>
        </div>

        <div class="details">
            <h3>Theater Description</h3>
            <p>${theater.description}</p>
            <h4>Date: ${theater.date}</h4>
            <h4>Author: ${theater.author}</h4>
            <div class="buttons">
                ${isOwner ? html `<a class="btn-delete" @click=${onDelete}>Delete</a>
                <a class="btn-edit" href="/edit/${theater._id}">Edit</a>` : ''}
                ${ showLikeBtn ? html `<a class="btn-like" @click=${onLike}>Like</a>` : ''}
            </div>
            <p class="likes">Likes: ${likes}</p>
        </div>
    </div>
</section>
`

export async function detailsView(ctx) {
    const theater = await getTheaterById(ctx.params.id);
    const userData = getUserData()
    const isOwner = userData?.id == theater._ownerId;
    const likes = await getTotalLikesForTheater(ctx.params.id);
    let showLikeBtn=false;
    const isLikedByUser=await isTheaterLikedByCurrentUser(ctx.params.id, userData.id)
    if(!isOwner && userData && !isLikedByUser){
        showLikeBtn=true;
    }
    ctx.render(detailsTemplate(theater, isOwner, onDelete, likes, onLike, showLikeBtn));

    async function onDelete() {
        const choice = confirm("Are you sure you want to delete this theater?")

        if (choice) {
            await deleteTheater(ctx.params.id)
            ctx.page.redirect('/profile')
        }
    }

    async function onLike() {
        await createLike(ctx.params.id)
        ctx.page.redirect('/theaters/'+ctx.params.id)
    }
}