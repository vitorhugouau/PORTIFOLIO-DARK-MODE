document.getElementById('chk').addEventListener('change', function() {
    var content = document.querySelectorAll('.icon');

    content.forEach((content) => {
    if (this.checked) {
        content.classList.add('charge');
    } else {
        content.classList.remove('charge');
        }
    });
});
