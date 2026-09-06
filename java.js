/* ============================================================
   OUR LITTLE WORLD
   Main JavaScript
============================================================ */


/* ============================================================
   STORY PHOTOS

   These are the photos inside:

   assets/story/
============================================================ */

const storyPhotos = [
    "photo_1_2026-09-06_22-13-17.jpg",
    "image.png",
    "photo_2_2026-09-06_22-13-17.jpg",
    "photo_3_2026-09-06_22-13-17.jpg",
    "photo_4_2026-09-06_22-13-17.jpg",
    "photo_5_2026-09-06_22-13-17.jpg",
    "photo_6_2026-09-06_22-13-17.jpg",
    "photo_7_2026-09-06_22-13-17.jpg",
    "photo_8_2026-09-06_22-13-17.jpg",
    "photo_9_2026-09-06_22-13-17.jpg",
    "photo_10_2026-09-06_22-13-17.jpg"

];


/* ============================================================
   OUR GALLERY PHOTOS

   These are the photos inside:

   assets/gallery/
============================================================ */

const galleryPhotos = [

    "photo_1_2026-09-06_22-26-24.jpg",
    "photo_2_2026-09-06_22-26-24.jpg",
    "photo_3_2026-09-06_22-26-24.jpg",
    "photo_4_2026-09-06_22-26-24.jpg",
    "photo_5_2026-09-06_22-26-24.jpg",
    "photo_6_2026-09-06_22-26-24.jpg",
    "photo_7_2026-09-06_22-26-24.jpg",
    "photo_8_2026-09-06_22-26-24.jpg",
    "photo_9_2026-09-06_22-26-24.jpg",
    "photo_10_2026-09-06_22-26-24.jpg",
    "photo_11_2026-09-06_22-26-24.jpg",
    "photo_12_2026-09-06_22-26-24.jpg",
    "photo_13_2026-09-06_22-26-24.jpg",
    "photo_14_2026-09-06_22-26-24.jpg",
    "photo_15_2026-09-06_22-26-24.jpg",
    "photo_16_2026-09-06_22-26-24.jpg",
    "photo_17_2026-09-06_22-26-24.jpg",
    "photo_18_2026-09-06_22-26-24.jpg",
    "photo_19_2026-09-06_22-26-24.jpg",
    "photo_20_2026-09-06_22-26-24.jpg",
    "photo_21_2026-09-06_22-26-24.jpg",
    "photo_22_2026-09-06_22-26-24.jpg",
    "photo_23_2026-09-06_22-26-24.jpg",
    "photo_24_2026-09-06_22-26-25.jpg",
    "photo_25_2026-09-06_22-26-25.jpg",
    "photo_26_2026-09-06_22-26-25.jpg",
    "photo_27_2026-09-06_22-26-25.jpg"

];


/* ============================================================
   CREATE STORY GALLERY
============================================================ */

function createStoryGallery() {

    const container =
        document.getElementById("storyGallery");

    if (!container) {
        return;
    }


    container.innerHTML = "";


    storyPhotos.forEach(
        (filename, index) => {

            const figure =
                document.createElement("figure");

            figure.className =
                "story-photo";


            const image =
                document.createElement("img");

            image.src =
                `assets/story/${filename}`;

            image.alt =
                `A memory together ${index + 1}`;

            image.loading =
                index < 3
                    ? "eager"
                    : "lazy";


            figure.appendChild(image);

            container.appendChild(figure);

        }
    );

}


/* ============================================================
   CREATE OUR GALLERY
============================================================ */

function createOurGallery() {

    const container =
        document.getElementById("ourGallery");

    if (!container) {
        return;
    }


    container.innerHTML = "";


    galleryPhotos.forEach(
        (filename, index) => {

            const button =
                document.createElement("button");


            button.type =
                "button";


            button.className =
                "memory-photo";


            button.setAttribute(
                "aria-label",
                `Open memory ${index + 1}`
            );


            const image =
                document.createElement("img");


            image.src =
                `assets/gallery/${filename}`;


            image.alt =
                `Our memory ${index + 1}`;


            image.loading =
                "lazy";


            button.appendChild(image);

            container.appendChild(button);

        }
    );

}


/* ============================================================
   LIGHTBOX VARIABLES
============================================================ */

const lightbox =
    document.getElementById(
        "galleryLightbox"
    );


const lightboxImage =
    document.getElementById(
        "lightboxImage"
    );


const lightboxClose =
    document.getElementById(
        "lightboxClose"
    );


const lightboxPrev =
    document.getElementById(
        "lightboxPrev"
    );


const lightboxNext =
    document.getElementById(
        "lightboxNext"
    );


const photoCounter =
    document.getElementById(
        "photoCounter"
    );


let currentPhotoIndex = 0;


/* ============================================================
   UPDATE LIGHTBOX
============================================================ */

function updateLightbox() {

    if (!lightboxImage) {
        return;
    }


    const filename =
        galleryPhotos[currentPhotoIndex];


    lightboxImage.src =
        `assets/gallery/${filename}`;


    if (photoCounter) {

        const current =
            String(
                currentPhotoIndex + 1
            ).padStart(2, "0");


        const total =
            String(
                galleryPhotos.length
            ).padStart(2, "0");


        photoCounter.textContent =
            `${current} / ${total}`;

    }

}


/* ============================================================
   OPEN PHOTO
============================================================ */

function openPhoto(index) {

    if (!lightbox) {
        return;
    }


    currentPhotoIndex =
        index;


    updateLightbox();


    lightbox.classList.add(
        "open"
    );


    document.body.style.overflow =
        "hidden";

}


/* ============================================================
   CLOSE PHOTO
============================================================ */

function closePhoto() {

    if (!lightbox) {
        return;
    }


    lightbox.classList.remove(
        "open"
    );


    document.body.style.overflow =
        "";

}


/* ============================================================
   NEXT PHOTO
============================================================ */

function nextPhoto() {

    currentPhotoIndex++;

    if (
        currentPhotoIndex >=
        galleryPhotos.length
    ) {

        currentPhotoIndex = 0;

    }


    updateLightbox();

}


/* ============================================================
   PREVIOUS PHOTO
============================================================ */

function previousPhoto() {

    currentPhotoIndex--;

    if (
        currentPhotoIndex < 0
    ) {

        currentPhotoIndex =
            galleryPhotos.length - 1;

    }


    updateLightbox();

}


/* ============================================================
   CONNECT GALLERY
============================================================ */

function setupGalleryClicks() {

    const photos =
        document.querySelectorAll(
            ".memory-photo"
        );


    photos.forEach(
        (photo, index) => {

            photo.addEventListener(
                "click",
                () => {

                    openPhoto(index);

                }
            );

        }
    );

}


/* ============================================================
   BUTTON CONTROLS
============================================================ */

if (lightboxClose) {

    lightboxClose.addEventListener(
        "click",
        closePhoto
    );

}


if (lightboxPrev) {

    lightboxPrev.addEventListener(
        "click",
        previousPhoto
    );

}


if (lightboxNext) {

    lightboxNext.addEventListener(
        "click",
        nextPhoto
    );

}


/* ============================================================
   CLICK OUTSIDE PHOTO = CLOSE
============================================================ */

if (lightbox) {

    lightbox.addEventListener(
        "click",
        (event) => {

            if (
                event.target ===
                lightbox
            ) {

                closePhoto();

            }

        }
    );

}


/* ============================================================
   KEYBOARD CONTROLS
============================================================ */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            !lightbox ||
            !lightbox.classList.contains("open")
        ) {

            return;

        }


        if (
            event.key ===
            "Escape"
        ) {

            closePhoto();

        }


        if (
            event.key ===
            "ArrowRight"
        ) {

            nextPhoto();

        }


        if (
            event.key ===
            "ArrowLeft"
        ) {

            previousPhoto();

        }

    }
);


/* ============================================================
   IPHONE SWIPE CONTROLS
============================================================ */

let touchStartX = 0;
let touchStartY = 0;


if (lightbox) {

    lightbox.addEventListener(
        "touchstart",
        (event) => {

            const touch =
                event.changedTouches[0];


            touchStartX =
                touch.screenX;


            touchStartY =
                touch.screenY;

        },
        {
            passive: true
        }
    );


    lightbox.addEventListener(
        "touchend",
        (event) => {

            const touch =
                event.changedTouches[0];


            const touchEndX =
                touch.screenX;


            const touchEndY =
                touch.screenY;


            const differenceX =
                touchStartX -
                touchEndX;


            const differenceY =
                touchStartY -
                touchEndY;


            /*
                Ignore mostly vertical swipes.
            */

            if (
                Math.abs(differenceX) <
                Math.abs(differenceY)
            ) {

                return;

            }


            /*
                Ignore tiny movements.
            */

            if (
                Math.abs(differenceX) <
                50
            ) {

                return;

            }


            /*
                Swipe left
                = next photo
            */

            if (
                differenceX > 0
            ) {

                nextPhoto();

            }


            /*
                Swipe right
                = previous photo
            */

            else {

                previousPhoto();

            }

        },
        {
            passive: true
        }
    );

}


/* ============================================================
   SCROLL REVEAL
============================================================ */

const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


function setupRevealAnimations() {

    const elements =
        document.querySelectorAll(
            ".reveal"
        );


    elements.forEach(
        (element) => {

            revealObserver.observe(
                element
            );

        }
    );

}


/* ============================================================
   INITIALIZE
============================================================ */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        createStoryGallery();

        createOurGallery();

        setupGalleryClicks();

        setupRevealAnimations();

    }
);