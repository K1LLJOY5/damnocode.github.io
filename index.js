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

document.querySelector('.logo-link').addEventListener('click', function(e) {
    e.preventDefault(); // Mencegah perpindahan default
    const target = document.querySelector('#menu');
    if (target) {
        window.scrollTo({
            top: target.offsetTop - 50, // Sesuaikan offset jika ada navbar tetap
            behavior: 'smooth'
        });
    }
});

// tombol burger
const tombol = document.querySelector('.tombol');
const menu = document.querySelector('.menu');

// Event klik untuk menampilkan/menyembunyikan menu
tombol.addEventListener('click', () => {
    menu.classList.toggle('aktif');
});
