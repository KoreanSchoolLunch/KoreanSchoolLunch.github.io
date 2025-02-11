   const modal = document.getElementById('modal');

    // Close modal if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.close();
        }
    });
