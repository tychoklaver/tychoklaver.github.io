document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');
    const overlay = document.getElementById('overlay');
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupImage = document.getElementById('popup-image');
    const popupImage2 = document.getElementById('popup-image2');
    const popupText = document.getElementById('popup-text');
    const popupText2 = document.getElementById('popup-text-two');
    const popupSeperator = document.getElementById('popup-seperator');
    const closePopupButton = document.getElementById('close-popup');
    const popupImage3 = document.getElementById('popup-image3');
    const popupCodeText = document.getElementById('popup-codetext');
    const popupCodeText2 = document.getElementById('popup-codetext2');

    const body = document.body;

    closePopupButton.addEventListener('click', function () {
        overlay.classList.remove('active');
        popup.classList.remove('active');
        body.style.overflow = '';
    });

    projects.forEach(project => {
        project.addEventListener('click', function() {
            const projectName = project.getAttribute('data-project');
            const projectContent = getProjectContent(projectName);

            popupTitle.textContent = projectName;
            popupImage.src = projectContent.image;
            popupText.textContent = projectContent.text;
            popupText2.textContent = projectContent.text2;
            popupImage2.src = projectContent.image2;
            popupSeperator.textContent = projectContent.seperator;
            popupImage3.src = projectContent.image3;
            popupCodeText.textContent = projectContent.codeText;
            popupCodeText2.textContent = projectContent.codeText2;

            closePopupButton.addEventListener('click', function() {
                    overlay.classList.remove('active');
                    popup.classList.remove('active');
                    body.style.overflow = '';
            })

            overlay.classList.add('active');
            popup.classList.add('active');
            body.style.overflow = 'hidden';
        });
    });

    overlay.addEventListener('click', function() {
        overlay.classList.remove('active');
        popup.classList.remove('active'); 
        body.style.overflow = '';
    });

    function getProjectContent(projectName) {
        switch (projectName) {
            case 'Thrill Runner':
                return {
                    image: 'images/comingsoon.png',
                    text: 'Work In Progress!',
                    text2: '',
                    image2: '',
                    image3: '',
                    seperator: '',
                    codeText: '',
                    codeText2: ''
                };
            case 'Galactical Warfare':
                return {
                    image: 'images/GalacticalCover.jpg',
                    text: 'Galactical Warfare is een game die ik heb gemaakt in het C# framework MonoGame. ' + 
                    'In het spel is het je doel als speler om als ruimteschip zo lang mogelijk vijandige schepen te ontwijken. Als je 30 seconden lang de schepen ontwijkt/neerschiet, win je het spel!' +
                    ' Het spel is zo "user friendly" mogelijk gemaakt, door middel van eenvoudig te begrijpen menu`s waardoor de speler door het spel kan navigeren.' +
                    ' Ook is het makkelijk te spelen, het enige wat de speler hoeft in te drukken zijn de A & D knoppen om te bewegen, en de spatiebalk om te schieten.',
                    seperator: 'Code Screenshots',
                    image2: 'images/MonoScreenshot1.png',
                    codeText: 'In dit stukje code wordt het spel live geupdate in mijn GameScene class. Ik kijk ondermeer naar speler input, loop door objecten heen om ze te updaten ' +
                    'en kijk naar de wincriteria voor het spel.',
                    image3: 'images/MonoScreenshot2.png',
                    codeText2: 'Hier zorg ik voor de beweging van de speler. Dit doe ik door te kijken naar input, zodat de speler naar links en rechts kan bewegen. Ook zorg ik ervoor dat ' + 
                    'de speler binnen de scherm boundaries blijft.'
                };
            default:
                return {
                    image: '',
                    text: 'Default'
                };
        }
    }
});
