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
    const popupVideo = document.getElementById('popup-video');
    const popupVideoContainer = document.getElementById('popup-video-container');
    const downloadLink = document.getElementById('download-link');

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

            if (projectContent.video) {
                document.getElementById('popup-video-source').src = projectContent.video;
                document.getElementById('popup-video').load();
                document.getElementById('popup-video-container').style.display = 'block';
            } else {
                document.getElementById('popup-video-container').style.display = 'none';
            }

            if (projectContent.download) {
                document.getElementById('download-link').href = projectContent.download;
                document.getElementById('popup-download').style.display = 'block';
            } else {
                document.getElementById('popup-download').style.display = 'none';
            }
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
                    image: 'images/TR_BG.png',
                    text: 'Thrill Runner is een 3D platformer waarbij de speler zo snel mogelijk door een parkourlevel moet navigeren. ' + 
                    'Het spel maakt gebruik van herbruikbare componenten zoals pickups met verschillende visuele effecten (roteren, zweven, knipperen), een ghost player die de vorige poging naspeelt, ' + 
                    'en een movement-systeem met verwisselbare logica zoals lopen en dashen. De speler moet gebruik maken van zijn snelheid en reactievermogen om het doel te bereiken. ' + 
                    'Wanneer je het level voltooit, pauzeert het spel automatisch en wordt je tijd weergegeven. De game bevat ook triggers zoals death zones, een start-/finishsysteem ' + 
                    'en een event-gedreven pickup systeem voor feedback via VFX, geluid en UI.',
                    seperator: 'Code & Ontwikkeling',
                    image2: 'images/TRScreenshot1.png',
                    image3: 'images/TRScreenshot2.png',
                    codeText: 'De MovementController klasse gebruikt een interface-based systeem om dynamisch te wisselen tussen movement types zoals lopen en dashen. Deze componenten kunnen hergebruikt worden op andere objecten.',
                    codeText2: 'Pickups maken gebruik van een Event Channel met events om visuele effects centraal aan te sturen.' + 
                    ' Hierdoor kunnen pickups geluid, particles en UI tonen zonder dat elk object aparte logica nodig heeft.',
                    video: 'videos/ThrillRunnerGameplay.mp4',
                    download: 'https://1drv.ms/u/c/9d6fff210c833989/ESjGzfHHtl9Crhz4dbb4if0BkyxdBq0FejNj1ehG3PAVJA?e=ogeJv9'
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
                    'de speler binnen de scherm boundaries blijft.',
                    video: '',
                    download: ''
                };
            default:
                return {
                    image: '',
                    text: 'Default'
                };
        }
    }
});
