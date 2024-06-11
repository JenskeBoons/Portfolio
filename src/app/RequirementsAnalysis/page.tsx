import Carousel from "../../components/Carousel";
import type { NextPage } from "next";

const RequirementsAnalysis : NextPage = () => {
  // Define images for this page
  const images = [

    "/imgs/RequirementsAnalysis/1.webp",
    "/imgs/RequirementsAnalysis/lst5.webp",
    "/imgs/RequirementsAnalysis/lst4.webp",
    "/imgs/RequirementsAnalysis/lst3.webp",
    

  ];
  return (
    <main>
      <section className="project section" id="project">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Requirements Analysis </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 padd-15">
              <div className="carousel-container">
              <Carousel images={images} /> {/* Assuming you've imported and implemented the Carousel component */}
              </div>
            </div>
            <div className="col-12 col-md-6 padd-15">
              <div className="project-details">
                <h3>Requirements Analysis </h3>
                <p>
                  <strong>Categorie:</strong> Requirements Analysis <br />
                  <strong>Project datum:</strong> 1ste semester 2de jaar <br />
                  <strong>Protype:</strong> Axure <br />
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 padd-15">
              <div className="project-explanation">
                <h3>Opdracht</h3>
                <p>
                Tijdens mijn studie Requirements Analysis aan Thomas More Geel kregen we de opdracht om een <strong>groepsproject</strong> uit te voeren waarbij we <strong>de requirements analysis</strong> en een prototype-applicatie moesten ontwikkelen. Samen met mijn medestudenten: Joppe Kerkhofs&#44; Jorn Van Dijck&#44; Jules Torfs&#44; Jari Vandyck en Jordi Peashuijse&#44; werkten we aan het identificeren van <strong>gebruikersvereisten</strong> en het ontwerpen van een oplossing die aan deze behoeften voldeed.
                </p>
                <h3>Benadering</h3>
                <p>
                Ons team <strong>werkte nauw samen</strong> om gebruikersvereisten te analyseren en een prototype te ontwerpen dat deze behoeften zou adresseren. We maakten gebruik van verschillende tools en technieken om <strong>feedback van potentiële gebruikers te verzamelen</strong> en deze te integreren in ons ontwerp. Mijn specifieke rol binnen het project was het ontwerpen van het <strong>bestandsmanagementsysteem</strong>.
                </p>
                <h3>Eindresultaat</h3>
                <p>
                Het resultaat van ons project was een goed <strong>doordacht prototype</strong> dat was ontworpen om een reëel probleem aan te pakken dat werd geconfronteerd door de beoogde gebruikers. Hoewel er geen echte code werd geschreven&#44; hebben we een gedetailleerd prototype kunnen presenteren dat de <strong>functionaliteit</strong> van de beoogde applicatie demonstreerde en de verwachte gebruikerservaring illustreerde.
                </p>
                
                <h3>Wat ik heb geleerd</h3>
                <p>
                Dit project heeft mijn begrip van <strong>Requirements Analysis</strong> verdiept en heeft mij geleerd hoe belangrijk het is om nauwkeurig te <strong>luisteren</strong> naar de behoeften van gebruikers en deze te vertalen naar <strong>functionele vereisten</strong> voor een applicatie. Het heeft ook mijn projectmanagementvaardigheden verder ontwikkeld door het belang van een georganiseerde en <strong>gestructureerde</strong> aanpak te benadrukken. Daarnaast heb ik geleerd hoe effectief samen te werken in een teamomgeving en hoe feedback van gebruikers kan worden geïntegreerd om een betere eindoplossing te bereiken.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RequirementsAnalysis ;
