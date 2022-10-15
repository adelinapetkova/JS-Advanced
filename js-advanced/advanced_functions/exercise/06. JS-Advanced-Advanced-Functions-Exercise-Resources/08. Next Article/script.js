function getArticleGenerator(articles) {
    let counter=0;
    let content=document.getElementById('content');
    return function(){
        if(counter<articles.length){
            let article=document.createElement('article');
            article.textContent=articles[counter];
            counter++;
            content.appendChild(article);
        }
    }
}
