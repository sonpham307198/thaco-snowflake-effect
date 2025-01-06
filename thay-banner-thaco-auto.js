document.addEventListener('DOMContentLoaded', function () {
    // Kiểm tra nếu hostname là "thacoauto.vn"
    if (window.location.hostname === 'thacoauto.vn') {
        // Lấy phần tử slide đầu tiên và thay thế bằng video
        const sliderItem = document.querySelector('.owl-stage-outer .owl-stage .owl-item .slider-main-item');
        if (sliderItem) {
            sliderItem.innerHTML = `
                <div>
                    <video autoplay muted playsinline id="intro-video" style="width: 100%; height: auto; z-index: -11;" loop>
                        <source src="https://thacoauto.vn/storage/banner-trang-chu/banner-tet-2025-thaco-auto-vpdh-3.mp4" type="video/mp4">
                    </video>
                </div>
            `;
            // Phát video
            const video = document.querySelector('#intro-video');
            if (video) {
                video.play();
              // Tạm dừng tự động chuyển slide trong 10 giây
                const owlCarousel = document.querySelector('.owl-carousel'); // Lấy slider chính
                if (owlCarousel && $(owlCarousel).data('owl.carousel')) {
                    $(owlCarousel).trigger('stop.owl.autoplay'); // Dừng tự động chuyển slide
                    setTimeout(() => {
                        $(owlCarousel).trigger('play.owl.autoplay'); // Tiếp tục tự động chuyển slide sau 10 giây
                    }, 10000); // 10 giây (do hệ thống dg tự cộng thêm 5s ko rõ lý do)
                }
            }
        } else {
            console.error('Slider item not found!');
        }
    } else {
        // Trường hợp hostname không phải là "thacoauto.vn"
        const sliderItemAlt = document.querySelector('.slider-main-item');
        if (sliderItemAlt) {
            sliderItemAlt.innerHTML = `
                <div>
                    <video autoplay muted playsinline class="intro-video" style="width: 100%; height: auto; z-index: -11;" loop>
                        <source src="https://thacoauto.vn/storage/banner-cttt/banner-tet-2025-thaco-auto-tinhthanh-3.mp4" type="video/mp4">
                    </video>
                </div>
            `;
            // Phát video
            const video = sliderItemAlt.querySelector('.intro-video');
            if (video) {
                video.play();
                // Dừng tự động chuyển slide trong 10 giây
                const swiperContainer = document.querySelector('.banner-default-slider'); // Lấy slider Swiper
                const interval = setInterval(() => {
                    if (swiperContainer && swiperContainer.swiper) {
                        clearInterval(interval); // Dừng kiểm tra
                        if (swiperContainer.swiper.autoplay) {
                            swiperContainer.swiper.autoplay.stop(); // Dừng autoplay
                            console.log('Swiper autoplay dừng.');
                            setTimeout(() => {
                                swiperContainer.swiper.autoplay.start(); // Tiếp tục autoplay sau 10 giây
                                console.log('Swiper autoplay tiếp tục sau 10 giây.');
                            }, 10000); // 10 giây
                        } else {
                            console.warn('Autoplay không được bật trên Swiper.');
                        }
                    }
                }, 100); // Kiểm tra Swiper khởi tạo mỗi 100ms
            }
        } else {
            console.error('Slider item for non-thacoauto.vn not found!');
        }
    }
});
