function editElement(ref, match, replacer) {
    const content=ref.textContent;
    const result=content.split(match).join(replacer);
    ref.textContent=result;
}