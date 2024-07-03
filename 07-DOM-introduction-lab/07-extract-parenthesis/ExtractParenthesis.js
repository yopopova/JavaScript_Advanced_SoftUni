function extract(content) {
    let contentEl = document.getElementById(content);
    let pattern = /\(([^)]+)\)/g;

    let matches = contentEl.textContent.matchAll(pattern);
    // ^ Capturing group
    
    let result = [];

    for (let match of matches) {
        result.push(match[1]);
        // ^ We get the element at index '1' because at index '0' is the bracket.
    }

    return result.join('; ');
}