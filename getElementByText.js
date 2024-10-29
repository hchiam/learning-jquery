function getByText(text) {
    const label = $(`:contains("${text}")`).last();
    const inputOrSelectOrTextareaOrButton = label.parent().find(':input');
    return inputOrSelectOrTextareaOrButton;
}
