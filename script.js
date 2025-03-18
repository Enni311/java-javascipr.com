document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.dataset.target;
        const targetContent = document.getElementById(targetId);
        if (targetContent.style.display === 'block') {
            targetContent.style.display = 'none';
        } else {
            targetContent.style.display = 'block';
        }
    });
});