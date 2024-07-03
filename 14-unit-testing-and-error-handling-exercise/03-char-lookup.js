function lookupChar(string, index) {
    if (typeof (string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }

    if (string.length <= index || index < 0) {
        // If 'string.length <= index', means index is negative.
        return "Incorrect index";
    }

    return string.charAt(index);
}

module.exports = lookupChar;