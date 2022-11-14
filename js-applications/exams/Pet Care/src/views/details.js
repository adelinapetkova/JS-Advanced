import { deletePet, getPetById, getDonationsCountByPetId, addDonation, didUserDonateForPet } from "../api/pets.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (pet, userData, isOwner, onDelete, donate, donation, isThereUserDonation) => html`
<section id="detailsPage">
    <div class="details">
        <div class="animalPic">
            <img src=${pet.image}>
        </div>
        <div>
            <div class="animalInfo">
                <h1>Name: ${pet.name}</h1>
                <h3>Breed: ${pet.breed}</h3>
                <h4>Age: ${pet.age}</h4>
                <h4>Weight: ${pet.weight}</h4>
                <h4 class="donation">Donation: ${donation}$</h4>
            </div>

            ${!userData ? '' : 
            html`<div class="actionBtn">${isOwner ? html`<a href="/edit/${pet._id}" class="edit">Edit</a>
                <a @click=${onDelete} class="remove">Delete</a>` : html`${isThereUserDonation ? '':
                html`<a @click=${donate} class="donate">Donate</a>`}`}
            </div>`}
        </div>
    </div>
</section>
`

export async function detailsView(ctx) {
    const pet = await getPetById(ctx.params.id);
    const userData = getUserData()
    const isOwner = userData?.id == pet._ownerId;
    let donationsCount=await getDonationsCountByPetId(ctx.params.id)
    let donation=Number(donationsCount)*100;
    let isThereUserDonation=await didUserDonateForPet(ctx.params.id, userData?.id)
    ctx.render(detailsTemplate(pet, userData, isOwner, onDelete, donate, donation, isThereUserDonation));

    async function onDelete() {
        const choice = confirm("Are you sure you want to delete this pet?")

        if (choice) {
            await deletePet(ctx.params.id)
            ctx.page.redirect('/')
        }
    }

    async function donate() {
        await addDonation(ctx.params.id)
        donationsCount=await getDonationsCountByPetId(ctx.params.id)
        donation=Number(donationsCount)*100;
        isThereUserDonation=await didUserDonateForPet(ctx.params.id, userData?.id)
        ctx.render(detailsTemplate(pet, userData, isOwner, onDelete, donate, donation, isThereUserDonation));
    }
}