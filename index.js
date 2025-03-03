document.querySelectorAll('.menu-list a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});

// Mencegah otomatis pindah
document.querySelector('.logo-link').addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector('#menu');
    if (target) {
        window.scrollTo({
            top: target.offsetTop - 50, // offset
            behavior: 'smooth'
        });
    }
});

// tombol burger
const tombol = document.querySelector('.tombol');
const menu = document.querySelector('.menu');

// on off menu
tombol.addEventListener('click', () => {
    menu.classList.toggle('aktif');
});
