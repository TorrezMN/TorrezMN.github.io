
// Remove and update the "copy text" on the footer.
function UpdateCopy() {
    // Select the first 'small' element within the specified div
    const firstSmall = document.querySelector('#component-footer > div > div > small:first-of-type');

    // Check if the element exists
    if (firstSmall) {
        // Change the text content
        //firstSmall.textContent = 'Copyright © Torrez, Milton (Somewhere on earth.)';
        firstSmall.innerHTML = '<b>Copyright © Torrez, Milton</b> <br/>(<span style="font-size: 15px;">Somewhere on planet Earth.</span>)';

    }
}

document.addEventListener('DOMContentLoaded', UpdateCopy);


