function editElement(element, match, replacer) {
    let content = element.textContent;
    let matcher = new RegExp(match, 'g');
    let newContent = content.replace(matcher, replacer);
    element.textContent = newContent;
}