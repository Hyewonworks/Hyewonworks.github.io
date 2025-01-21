        const homeLink = document.getElementById('home-link');
        const projectLink = document.getElementById('project-link');
        const homeGallery = document.getElementById('home-gallery-section');
        const gallerySection = document.getElementById('gallery-section');

        // Function to hide all sections
        function hideAllSections() {
            homeGallery.style.display = 'none';
            gallerySection.style.display = 'none';
        }

        // 초기 페이지 로드 시 Home Gallery Section 표시
        window.onload = function() {
            hideAllSections();
            homeGallery.style.display = 'flex';

            // Home 섹션 애니메이션 초기화
            const homeImages = document.querySelectorAll('.home-gallery img');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.transform = 'translateY(0)';
                        entry.target.style.opacity = '1';
                    } else {
                        entry.target.style.transform = 'translateY(50px)';
                        entry.target.style.opacity = '0';
                    }
                });
            });

            homeImages.forEach(img => {
                img.style.transform = 'translateY(50px)';
                observer.observe(img);
            });
        };

        // Project 메뉴 클릭 이벤트
        projectLink.addEventListener('click', () => {
            hideAllSections();
            gallerySection.style.display = 'flex';

            // Project 섹션 애니메이션 초기화
            gallerySection.classList.add('visible');
            const projectItems = document.querySelectorAll('.gallery-item');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        entry.target.classList.remove('visible');
                    }
                });
            });

            projectItems.forEach(item => {
                observer.observe(item);
            });
        });

        // Home 메뉴 클릭 이벤트
        homeLink.addEventListener('click', () => {
            hideAllSections();
            homeGallery.style.display = 'flex';
        });
