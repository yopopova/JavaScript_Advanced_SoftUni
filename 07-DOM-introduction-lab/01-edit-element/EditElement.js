function editElement(element, match, replacer) {
    let content = element.textContent; // Get the content of the element.
    let matcher = new RegExp(match, 'g'); // Looking for a match.
    let newContent = content.replace(matcher, replacer); // Replace the old content with the new one.
    element.textContent = newContent; // Assign the new content.
}