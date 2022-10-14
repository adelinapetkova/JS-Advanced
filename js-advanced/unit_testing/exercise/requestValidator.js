function requestValidator(obj){
    // Method
    let validMethods=['GET', 'POST', 'DELETE', 'CONNECT'];

    if(!validMethods.includes(obj.method)){
        throw new Error('Invalid request header: Invalid Method');
    }

    // URI

    if(obj.uri==undefined){
        throw new Error('Invalid request header: Invalid URI');
    }

    let uri=obj.uri;
    let isUriValid=true;
    for(let symbol of uri){
        if(!(!isNaN(symbol) || isLetter(symbol) || symbol=='.')){
            isUriValid=false;
            break;
        }
    }
    if(uri=='*'){
        isUriValid=true;
    }
    
    if(!isUriValid || uri.trim().length===0){
        throw new Error('Invalid request header: Invalid URI');
    }

    // Version
    let validVersions=['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    if(!validVersions.includes(obj.version)){
        throw new Error('Invalid request header: Invalid Version');
    }

    // Message
    if(obj.message==undefined){
        throw new Error('Invalid request header: Invalid Message');
    }

    let messageRegex=/^[^<>\\&\'\"]+$/
    // let specialCharacters=['<', '>', '\\', '&', "'", '"'];
    let message=obj.message;
    let isMessageValid=true;
    // for(let symbol of message){
    //     if(specialCharacters.includes(symbol)){
    //         isMessageValid=false;
    //         break;
    //     }
    // }

    if(!(message=='' || messageRegex.test(message))){
        throw new Error('Invalid request header: Invalid Message');
    }

    // Helpers
    function isLetter(str) {
        return str.length === 1 && str.match(/[a-zA-Z]/i);
    }

    return obj;
}

console.log(requestValidator({uri: 'bdsj', version: 'HTTP/1.1', message: "rm -rf " }))