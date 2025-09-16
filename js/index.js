document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const yearEl = document.getElementById("year");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

const toggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

if (toggleBtn && themeIcon) {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        themeIcon.classList.replace("fa-moon", "fa-sun");
    }

    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        if (document.body.classList.contains("dark")) {
            themeIcon.classList.replace("fa-moon", "fa-sun");
            localStorage.setItem("theme", "dark");
        } else {
            themeIcon.classList.replace("fa-sun", "fa-moon");
            localStorage.setItem("theme", "light");
        }
    });
}

const modal = document.getElementById('project-modal');
const closeModal = document.getElementById('close-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalLink = document.getElementById('modal-link');
const modalImage = document.getElementById('modal-image');

if (modal && closeModal && modalTitle && modalDescription && modalLink && modalImage) {
    document.querySelectorAll('.project-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const card = btn.closest('.project-card');
            if (card) {
                const title = card.dataset.title || "Proyecto";
                modalTitle.textContent = title;
                modalDescription.textContent = card.dataset.description || "Descripción del proyecto.";
                modalLink.href = card.dataset.link || "#";
                modalImage.src = card.dataset.image || "";
                modalImage.alt = title;
                modal.classList.remove('hidden');
                modal.classList.add('flex');
            }
        });
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('flex');
        modal.classList.add('hidden');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('flex');
            modal.classList.add('hidden');
        }
    });
}