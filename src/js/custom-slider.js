    // this has been moved to be the inline callback function within the plugin settings

const customSlider = (function () {
    
    function init(sliderID) {
        if(document.querySelector(".fl-builder-edit")) {
            return;
        }

        const targetNode = document.querySelector('.n2-section-smartslider');
        const config = { attributes: true, childList: true, subtree: true };

        const callback = function(mutationList, observer) {
            for (const mutation of mutationList) {
                if (mutation.type === 'childList') {

                    if(document.querySelector(`#n2-ss-${sliderID}`)) {
                        n2ss.ready(sliderID, function(slider, sliderElement) {  
                            setTimeout(function() {
                            document.querySelector('.nextend-arrow-previous').insertAdjacentHTML('afterend','<div class="slider-pagination"><span class="current-index"></span><span class="bullet">&bull;</span><span class="slide-length"></span><div>');
                            document.querySelector(".slide-length").innerHTML = slider.slides.length;
                            document.querySelector(".current-index").innerHTML = '1';
                            sliderElement.addEventListener('mainAnimationStart', 
                            function(e, animation, currentSlideIndex, nextSlideIndex) {     
                                setTimeout(function() {
                                    var index = slider.currentSlide.index+1;
                                    document.querySelector(".current-index").innerHTML = index;
                                }, 500);
                            });
                        }, 0);
                        });

                        observer.disconnect();
                    }
                }
            }
        };

        const observer = new MutationObserver(callback);

        observer.observe(targetNode, config);
    }

    return {
        init: init
    }
});

export default customSlider;