import { deleteGame, getGameById, getAllCommentsByGameId, createComment } from "../api/games.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (game, userData, isOwner, onDelete, comments, addComment) => html`
<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">

        <div class="game-header">
            <img class="game-img" src=${game.imageUrl} />
            <h1>${game.title}</h1>
            <span class="levels">MaxLevel: ${game.maxLevel}</span>
            <p class="type">${game.category}</p>
        </div>

        <p class="text">${game.summary}</p>

        <!-- Bonus ( for Guests and Users ) -->
        <div class="details-comments">
            <h2>Comments:</h2>
            ${comments.length == 0 ? html`<p class="no-comment">No comments.</p>` : html`<ul>${comments.map(commentLi)}
            </ul>`}
        </div>

        <!-- Edit/Delete buttons ( Only for creator of this game )  -->
        ${isOwner ? html`
        <div class="buttons">
            <a href="/edit/${game._id}" class="button">Edit</a>
            <a @click=${onDelete} class="button">Delete</a>
        </div>`: ''}
    </div>

    <!-- Bonus -->
    <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
    ${isOwner || !userData ? '' : html`
    <article class="create-comment">
        <label>Add new comment:</label>
        <form class="form" @submit=${addComment}>
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input class="btn submit" type="submit" value="Add Comment">
        </form>
    </article>`}
</section>
`

const commentLi = (comment) => html`
<li class="comment">
    <p>Content: ${comment.comment}</p>
</li>
`

export async function detailsView(ctx) {
    const game = await getGameById(ctx.params.id);
    const userData = getUserData()
    const isOwner = userData?.id == game._ownerId;
    const comments = await getAllCommentsByGameId(ctx.params.id)
    ctx.render(detailsTemplate(game, userData, isOwner, onDelete, comments, addComment));

    async function onDelete() {
        const choice = confirm("Are you sure you want to delete this game?")

        if (choice) {
            await deleteGame(ctx.params.id)
            ctx.page.redirect('/')
        }
    }

    async function addComment(event) {
        event.preventDefault()

        let formData = new FormData(event.target)
        let comment = formData.get('comment')

        if (comment == '') {
            return alert("All fields are required!")
        }

        await createComment(ctx.params.id, comment)
        event.target.reset()
        ctx.page.redirect('/games/' + ctx.params.id)
    }
}