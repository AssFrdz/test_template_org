document.addEventListener('DOMContentLoaded', function() {
    const scrollableContent = document.querySelector('.slides');
    const nav = document.querySelector("header nav");
    const navLinks = document.querySelectorAll("header nav a");
    const phoneElements = document.querySelectorAll(".phone-element");
    const rsx = document.querySelector(".rsx-bar");

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

    /* Normalize image name: food_1.jpg for example */
    let normalizedName = "food";
    let ext = ".jpg";
    let imagesTab = [];
    let numImages = 12;

    for (let i = 0; i < numImages; i++) {
        imagesTab.push(normalizedName + "_" + i + ext);
    }

    function addImagesToSlides(slides, imgTab) {
        imgTab.forEach(element => {
            let img = document.createElement("img");
            img.src = "../assets/img/" + element;
            slides.appendChild(img);
        });
    }

    addImagesToSlides(scrollableContent, imagesTab);

    const handleScroll = () => {

        if(window.innerWidth > 930){
            if ( window.scrollY > 1000) {
                navLinks.forEach(link => {
                    link.style.color = "black";
                    document.querySelector("nav").style.background = "#FF8548";
                    document.querySelector("nav").style.transition = "all 0.5s ease-in";
                    link.style.transition = "all 0.5s ease-in";
    
                    
                });
                phoneElements.forEach(e =>{
                    e.style.background = "transparent"
                });


            } else {
                navLinks.forEach(link => {
                    link.style.color = "white";
                    document.querySelector("nav").style.background = "transparent";
                    document.querySelector("nav").style.transition = "all 0.5s ease-in";
                    link.style.transition = "all 0.5s ease-in";
                 
                });
                phoneElements.forEach(e =>{
                    e.style.background = "white";
                });
            }
        }
        else{
            if(window.scrollY > 1000){
                navLinks.forEach(link => {
                    if(link.classList.contains("logo")){
                        link.style.color = "black";
                        link.style.transition = "all 0.5s ease-in";
    
                    }
                });

                nav.classList.add("mobile-closed");

                

            }else{

                navLinks.forEach(link => {
                    if(link.classList.contains("logo")){
                        link.style.color = "white";
                        link.style.transition = "all 0.5s ease-in";
    
                    }
                });

                nav.classList.remove("mobile-closed");


                

            }


        }
        
    };
    
    const afficheMenu = ()=>{
        nav.classList.toggle("mobile-opened")


    }

    window.addEventListener('scroll', handleScroll);
    

    phoneElements[0].addEventListener("click",afficheMenu)
    phoneElements[1].addEventListener("click",()=>{
        target = document.getElementById("mail");
        window.scrollTo({
            top: target.offsetTop-200,
            behavior: 'smooth'
        });
    });

    navLinks.forEach(a=>{
        a.addEventListener("click",()=>{
            nav.classList.remove("mobile-opened");
        });

    });




    



});
