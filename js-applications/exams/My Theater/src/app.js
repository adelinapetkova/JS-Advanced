import page from '../node_modules/page/page.mjs';
import { render } from "../node_modules/lit-html/lit-html.js"
import { getUserData } from './util.js'
import { logout } from './api/users.js'
import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import { registerView } from './views/register.js';
import { profileView } from './views/profile.js';
import { createView } from './views/create.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';

const main = document.getElementById('content')

document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateContext);
page('/', homeView);
page('/theaters/:id', detailsView);
page('/edit/:id', editView);
page('/login', loginView);
page('/register', registerView);
page('/create', createView);
page('/profile', profileView);


updateNav();
page.start();

function decorateContext(ctx, next) {
    ctx.render = renderMain;
    ctx.updateNav = updateNav;
    next()
}

function renderMain(templateResult) {
    render(templateResult, main);
}

function updateNav() {
    const userData = getUserData()
    if (userData) {
        document.getElementById('profile').style.display = 'inline';
        document.getElementById('create').style.display = 'inline';
        document.getElementById('logoutBtn').style.display = 'inline';
        document.getElementById('login').style.display = 'none';
        document.getElementById('register').style.display = 'none';
    } else {
        document.getElementById('profile').style.display = 'none';
        document.getElementById('create').style.display = 'none';
        document.getElementById('logoutBtn').style.display = 'none';
        document.getElementById('login').style.display = 'inline';
        document.getElementById('register').style.display = 'inline';
    }
}

function onLogout() {
    logout()
    updateNav()
    page.redirect('/')
}