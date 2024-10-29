function getByText(text) {
    return $(`:contains("${text}")`).last();
}
