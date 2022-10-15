function attachEvents() {
    let loadPostsBtn = document.getElementById('btnLoadPosts')
    let viewPostBtn = document.getElementById('btnViewPost')

    loadPostsBtn.addEventListener('click', loadPosts)
    viewPostBtn.addEventListener('click', viewPost)

    let postSelection = document.getElementById('posts')
    let postTitleH1=document.getElementById('post-title')
    let postBodyParagraph = document.getElementById('post-body')
    let commentsUl=document.getElementById('post-comments')

    async function loadPosts() {
        let response = await fetch('http://localhost:3030/jsonstore/blog/posts')
        let postsObject = await response.json()

        for (let post in postsObject) {
            let newOption = document.createElement('option')
            newOption.value = post;
            newOption.textContent = postsObject[post].title;

            postSelection.appendChild(newOption)
        }
    }

    async function viewPost() {
        commentsUl.innerHTML='';

        let postId = postSelection.value;

        let responsePost = await fetch(`http://localhost:3030/jsonstore/blog/posts/${postId}`)
        let post = await responsePost.json()

        let responseComments = await fetch('http://localhost:3030/jsonstore/blog/comments')
        let comments = await responseComments.json()

        postTitleH1.textContent=post.title
        postBodyParagraph.textContent=post.body;

        for(let com in comments){
            if(comments[com].postId==postId){
                let newLi=document.createElement('li')
                newLi.id=comments[com].id;
                newLi.textContent=comments[com].text;

                commentsUl.appendChild(newLi)
            }
        }
    }
}

attachEvents();