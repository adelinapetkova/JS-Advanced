function extractText(){
    let text='Some (text) in (parenthesis).';
    const matcher=new RegExp(/\(([^)]+)\)/,'g');
    console.log(text.match(matcher)[0].slice(1,-1))
}

extractText()