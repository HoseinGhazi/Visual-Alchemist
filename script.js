document.getElementById('date').addEventListener('change', function() {
    const selectedDate = this.value;
    const imageName = formatDate(selectedDate) + '.jpg';
    const imageElement = document.getElementById('art-image');
    imageElement.src = 'images/' + imageName;
    imageElement.alt = 'Art for ' + selectedDate;
});

function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // January is 0
    const year = date.getFullYear();
    return year + '-' + month + '-' + day;
}
