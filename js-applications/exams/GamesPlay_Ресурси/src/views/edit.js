import { getGameById, updateGame } from "../api/games.js";
import { html } from "../lib.js";

const editTemplate = (game, onSubmit) => html`
<section id="edit-page" class="auth">
    <form id="edit" @submit=${onSubmit}>
        <div class="container">

            <h1>Edit Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" .value=${game.title}>

            <label for="category">Category:</label>
            <input type="text" id="category" name="category" .value=${game.category}>

            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" .value=${game.maxLevel}>

            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" .value=${game.imageUrl}>

            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary" .value=${game.summary}></textarea>
            <input class="btn submit" type="submit" value="Edit Game">

        </div>
    </form>
</section>
`

export async function editView(ctx) {
    const game= await getGameById(ctx.params.id)

    ctx.render(editTemplate(game, onSubmit));

    async function onSubmit(event){
        event.preventDefault()

        let formData=new FormData(event.target)

        let title = formData.get('title')
        let category = formData.get('category')
        let maxLevel = formData.get('maxLevel')
        let imageUrl = formData.get('imageUrl')
        let summary = formData.get('summary')

        if (title == '' || category == '' || maxLevel == '' || imageUrl == '' || summary == '') {
            return alert("All fields are required!")
        }

        await updateGame(ctx.params.id, {
            title,
            category,
            maxLevel,
            imageUrl,
            summary
        })

        event.target.reset()
        ctx.page.redirect('/games/'+ctx.params.id)

    }
}