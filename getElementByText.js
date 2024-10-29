// or https://github.com/hchiam/learning-js/blob/main/xpath_get_elements_by_text.js
function getByText(text) {
    return $(`:contains("${text}")`).last();
}
