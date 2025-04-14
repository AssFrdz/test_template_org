document.addEventListener('DOMContentLoaded', function() {
    const scrollableContent = document.querySelector('.slides');
    
    let scrollInterval;

    // Fonction pour démarrer le scroll automatique
    function startAutoScroll() {
        let scrollWidth = scrollableContent.scrollWidth;
        let clientWidth = scrollableContent.clientWidth;
        let scrollStep = 2.5; // Vitesse de défilement

        scrollInterval = setInterval(function() {
            scrollableContent.scrollLeft += scrollStep;
            if (scrollableContent.scrollLeft >= scrollWidth - clientWidth) {
                scrollableContent.scrollLeft = 0; // Revenir au début
            }
        }, 20); // Intervalle de défilement en millisecondes
    }

    // Démarrer le scroll automatique
    startAutoScroll();

    // Optionnel : Arrêter le scroll automatique au survol
    scrollableContent.addEventListener('mouseover', function() {
        clearInterval(scrollInterval);
    });

    scrollableContent.addEventListener('mouseout', function() {
        startAutoScroll();
    });

    


/* normalize ur image name : food_1.jpg for example*/ 

let normalizedName = "food";

/* ur extension */

let ext = ".jpg";

/* the img tab */

let imagesTab = [];

/* the number of images */

let numImages = 12;

for(i=0;i<numImages;i++){
    imagesTab.push(normalizedName+"_"+i+ext);
}



/* or you can make the imagesTab alone, like this : 

let imagesTab = ["nuggets.jpg","burger.jpg","bread.png"];

In both case, ensure you have put the images in the folder "assets/img"

*/


function addImagesToSlides(slides, imgTab){

    imgTab.forEach(element => {

    img = document.createElement("img");
    img.src = "../assets/img/"+element;
    slides.appendChild(img);
        
    });

    

}

addImagesToSlides(scrollableContent, imagesTab);



});

