import { logout } from "./api/users.js";
import { page, render } from "./lib.js";
import { getUserData } from "./util.js";
import { catalogView } from "./views/catalog.js";
import { createView } from "./views/create.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";
import { searchView } from "./views/search.js";

const main=document.getElementById('main-content')

document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateContext);
page('/', homeView);
page('/albums', catalogView);
page('/albums/:id', detailsView);
page('/edit/:id', editView);
page('/login', loginView);
page('/register', registerView);
page('/create', createView);
page('/search', searchView);


updateNav();
page.start();

function decorateContext(ctx, next){
    ctx.render=renderMain;
    ctx.updateNav=updateNav;
    next()
}

function renderMain(templateResult){
    render(templateResult, main);
}

function updateNav(){
    const userData=getUserData()
    if(userData){
        document.getElementById('login').style.display='none'
        document.getElementById('register').style.display='none'
        document.getElementById('create').style.display='inline'
        document.getElementById('logoutBtn').style.display='inline'

    }else{
        document.getElementById('login').style.display='inline'
        document.getElementById('register').style.display='inline'
        document.getElementById('create').style.display='none'
        document.getElementById('logoutBtn').style.display='none'
    }
}

function onLogout(){
    logout()
    updateNav()
    page.redirect('/')
}