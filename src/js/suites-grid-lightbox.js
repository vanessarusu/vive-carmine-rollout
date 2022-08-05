const suitesGridLightbox = (function () {

    var gridItems = document.querySelectorAll("#esg-grid-3-1 li");
    var lightboxActive = false;
    var allLightboxPosts = [];
    var allFloorplans = getAllPosts();

    function configureClickEvent(item, index) {
        var postID = item.getAttribute("id").split('-');
        postID = postID[postID.length-1];
        setTimeout(function(){
            item.addEventListener("click", function() {
                allFloorplans.forEach(item => {
                    if (item.id == postID) {
                        createLightbox(item);
                    }
                    else {
                    }
                });        
            });

        }, 2000);

        
    };


    function getAllPosts() {
        var post = new wp.api.models.Floorplans();

        return post.fetch({ data: { per_page: 40 } }).done((data) => {
            console.log(data);
            debugger;
                return allFloorplans = data;
        });
    }

    function createLightbox(post) {
            
            var body = document.querySelector("body");
            var content = post.id;
            var lightBoxImage = post.acf.floorplan_lightbox_image;
            var pdfDownload = post.acf.floorplan_pdf_download;
            
            var markup = `<div id="essentialGridCustomLightbox" class="essential-grid-custom-modal">
                            <div class="content-container">
                                <div class="dismiss">
                                    <button><span></span><span></span></button>
                                </div>
                                <div class="image-container">
                                    <img src="${lightBoxImage}" />
                                </div>
                                <div class="button-container">
                                    <a class="fl-button rounded-corners" href="${pdfDownload}" target="blank">Download Suite PDF</a>
                                </div>
                            </div>
                        </div>`;
            body.insertAdjacentHTML('afterend', markup);
            body.classList.add('modal-open');
            document.querySelector(".dismiss button").addEventListener('click', dismissLightbox);
            window.addEventListener("keyup", keyboardDismissLightbox)
            return lightboxActive = true;
    }

    function dismissLightbox() {
        if(lightboxActive) {
            document.querySelector(".dismiss button").removeEventListener('click', dismissLightbox);
            var body = document.querySelector("body");
            document.querySelector("#essentialGridCustomLightbox").remove();
            body.classList.remove('modal-open');
            window.removeEventListener("keyup", keyboardDismissLightbox);
        }
        return lightboxActive = false;
    }

    function keyboardDismissLightbox(e) {
        if(e.keyCode == 27) {
            dismissLightbox();
        }
    }

    function init() {
        wp.api.loadPromise.done( function(data) {
            gridItems.forEach(configureClickEvent);

        } );
    }

    return {
        init: init
    }
});

export default suitesGridLightbox;