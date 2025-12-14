document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            
            // Hapus kelas 'active' dari semua tombol dan tambahkan ke tombol yang diklik
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            // Iterasi melalui setiap kartu proyek
            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (filterValue === 'all' || filterValue === cardCategory) {
                    // Tampilkan kartu
                    card.classList.remove('hidden');
                    // Menggunakan timeout untuk transisi opacity (opsional tapi bagus)
                    setTimeout(() => {
                        card.style.opacity = '1';
                    }, 10); 
                } else {
                    // Sembunyikan kartu dengan transisi
                    card.style.opacity = '0';
                    // Sembunyikan elemen setelah transisi opacity selesai
                    setTimeout(() => {
                        card.classList.add('hidden');
                    }, 300); // Sesuaikan dengan durasi transisi CSS
                }
            });
        });
    });
});