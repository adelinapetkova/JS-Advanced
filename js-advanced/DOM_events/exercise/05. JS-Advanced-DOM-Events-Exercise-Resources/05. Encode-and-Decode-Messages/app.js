function encodeAndDecodeMessages() {
    let btns=document.getElementsByTagName('button');
    let textareas=document.getElementsByTagName('textarea');

    let encodeBtn=btns[0];
    let decodeBtn=btns[1];

    let sender=textareas[0];
    let receiver=textareas[1];

    encodeBtn.addEventListener('click', encode);
    decodeBtn.addEventListener('click', decode);

    function encode(){
        let result='';

        for(let i=0; i<sender.value.length; i++){
            result+=String.fromCharCode(sender.value.charCodeAt(i)+1);
        }

        receiver.value=result;
        sender.value='';
    }

    function decode(){
        let result='';

        for(let i=0; i<receiver.value.length; i++){
            result+=String.fromCharCode(receiver.value.charCodeAt(i)-1);
        }

        receiver.value=result;
    }
}