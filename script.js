document.getElementById('image-number').addEventListener('input', function() {
    const selectedNumber = this.value;
    const imageName = 'image-' + selectedNumber + '.jpg';
    const imageElement = document.getElementById('art-image');
    imageElement.src = 'images/' + imageName;
    imageElement.alt = 'Art Image ' + selectedNumber;
});
