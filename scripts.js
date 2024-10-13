document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = "#ff6347"; // Change link color on hover
    });
    link.addEventListener('mouseout', () => {
        link.style.color = "white"; // Reset to white on mouse out
    });
});
