<script>
    // Function to animate floating shapes
    const shapes = document.querySelectorAll('.floating-shapes div');

    function animateShapes() {
        shapes.forEach(shape => {
            // Randomize the position and animation time for each floating shape
            const randomX = Math.random() * window.innerWidth;
            const randomY = Math.random() * window.innerHeight;
            const animationDuration = Math.random() * 3 + 3; // Between 3 and 6 seconds

            shape.style.left = `${randomX}px`;
            shape.style.top = `${randomY}px`;
            shape.style.animationDuration = `${animationDuration}s`;
        });
    }

    // Run the animation on page load and every 3 seconds to create continuous movement
    window.onload = () => {
        animateShapes();
        setInterval(animateShapes, 3000); // Update position every 3 seconds
    };
</script>
