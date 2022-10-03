function extract(content) {
    let text=document.getElementById(content).textContent;
    const matcher=new RegExp(/\(([^)]+)\)/,'g');
    const matches=text.match(matcher)
    for(let match of matches){
        match=match.slice(1, -1);
    }

    return matches.join('; ')
}