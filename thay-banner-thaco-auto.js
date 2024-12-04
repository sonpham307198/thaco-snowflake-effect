// Kiểm tra DOM đã sẵn sàng
document.addEventListener('DOMContentLoaded', function () {
    // Kiểm tra nếu hostname là "thacoauto.vn"
    if (window.location.hostname === 'thacoauto.vn') {
        // Lấy phần tử slide đầu tiên và thay thế bằng video
        const sliderItem = document.querySelector('.owl-stage-outer .owl-stage .owl-item .slider-main-item');
        if (sliderItem) {
            sliderItem.innerHTML = `
                <div>
                    <video autoplay muted playsinline id="intro-video" style="width: 100%; height: auto; z-index: -11;" loop>
                        <source src="https://thacoauto.vn/storage/banner-trang-chu/banner-thaco-auto-giang-sinh-2024-7.mp4" type="video/mp4">
                    </video>
                </div>
            `;
            // Phát video
            const video = document.querySelector('#intro-video');
            if (video) {
                video.play();
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
                    <video autoplay muted playsinline id="intro-video" style="width: 100%; height: auto; z-index: -11;" loop>
                        <source src="https://thacoauto.vn/storage/banner-cttt/banner-thaco-auto-tt-giang-sinh-2024-7.mp4" type="video/mp4">
                    </video>
                </div>
            `;
            // Phát video
            const video = document.querySelector('#intro-video');
            if (video) {
                video.play();
            }
        } else {
            console.error('Slider item for non-thacoauto.vn not found!');
        }
    }
});
