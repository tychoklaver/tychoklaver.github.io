document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');
    const overlay = document.getElementById('overlay');
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupImageContainer = document.getElementById('popup-image-container');
    const popupImage = document.getElementById('popup-image');
    const popupText = document.getElementById('popup-text');
    const popupText2 = document.getElementById('popup-text-two')
    const body = document.body;

    projects.forEach(project => {
        project.addEventListener('click', function() {
            const projectName = project.getAttribute('data-project');
            const projectContent = getProjectContent(projectName);

            popupTitle.textContent = projectName;
            popupImage.src = projectContent.image;
            popupText.textContent = projectContent.text;
            popupText2.textContent = projectContent.text2;

            if (projectName === 'Project Melvin') {
                popup.classList.add('project-melvin-popup');
                overlay.classList.add('active');
            } else {
                popup.classList.remove('project-melvin-popup');
                overlay.classList.remove('active');
            }

            overlay.classList.add('active');
            popup.classList.add('active');
            body.style.overflow = 'hidden';
        });
    });

    overlay.addEventListener('click', function() {
        overlay.classList.remove('active');
        popup.classList.remove('active'); 
        popup.classList.remove('project-melvin-popup');
        body.style.overflow = '';
    });

    function getProjectContent(projectName) {
        switch (projectName) {
            case 'Duplicate Dash':
                return {
                    image: 'images/DuplicateDashCover.jpg',
                    text: 
                    'Duplicate Dash is een game die ik samen met 5 andere studenten gemaakt heb in Unity. ' + 
                    'In het spel kan jij als speler jezelf, zoals in de titel vermeld staat, "dupliceren". Het doel is om aan het eind van elk level zoveel mogelijk duplicaties verzameld te hebben om de boss fight te kunnen winnen.' +
                    ' Door de levels heen staan poortjes geplaatst met nummers op. Als de speler door zo`n poortje heen loopt, krijgt hij zoveel mogelijk duplicaties er bij als op het poortje staat. Dit kan natuurlijk ook minder worden, want de speler moet zelf er achter komen welke poortjes het beste zijn om door heen te lopen!' +
                    ' De speler kan zelf ook skins verzamelen door middel van gems. Deze gems zijn over de levels verspreid, dus de speler kan ze op elk moment verzamelen.',
                    text2: 'Ik heb met dit project vooral gewerkt aan het dupliceren van de spelers. Ook heb ik veel bestanden ingeleverd zodat de deadlines behaald zouden zijn, en heb ik meegedacht over de concepten in het spel. Uiteindelijk is het project goed afgerond met dubbele voldoendes voor iedereen in de groep.'
                };
            case 'Galactical Warfare':
                return {
                    image: 'images/GalacticalCover.jpg',
                    text: 'Galactical Warfare is een game die ik heb gemaakt in het C# framework MonoGame. ' + 
                    'In het spel is het je doel als speler om als ruimteschip zo lang mogelijk vijandige schepen te ontwijken. Als je 30 seconden lang de schepen ontwijkt/neerschiet, win je het spel!' +
                    ' Het spel is zo "user friendly" mogelijk gemaakt, door het middel van simpel te begrijpen menu`s waardoor de speler door het spel kan navigeren.' +
                    ' Ook is het makkelijk te spelen, het enigste wat de speler hoeft in te drukken zijn de A & D knoppen om te bewegen, en de spatiebalk om te schieten.'
                };
            case 'Project Melvin':
                return {
                    image: 'images/comingsoon.png',
                };
            default:
                return {
                    image: '',
                    text: 'Default'
                };
        }
    }
});