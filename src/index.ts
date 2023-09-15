// TypeScript code that manipulates the DOM and adds content to the 'root' div
document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    if (root) {
        console.log("Hello World!");
        root.innerHTML = '<h2>Hello, World!</h2>';
    }
});
