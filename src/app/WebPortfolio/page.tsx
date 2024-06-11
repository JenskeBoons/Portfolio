import Carousel from "../../components/Carousel";
import type { NextPage } from "next";

const Webportfolio : NextPage = () => {
  // Define images for this page
  const images = [

    "/imgs/Webportfolio/Portfolio.PNG",
    "/imgs/Webportfolio/portlogo.PNG",
    "/imgs/Webportfolio/info.PNG",
    "/imgs/Webportfolio/projects.PNG",

  ];
  return (
    <main>
      <section className="project section" id="project">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Portfolio</h2>
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
                <h3>Portfolio</h3>
                <p>
                  <strong>Categorie:</strong> Full stack Next Js<br />
                  <strong>Project date:</strong> 2de semester 3de jaar <br />
                  <strong>Repo:</strong><a target="_blank" href="https://github.com/JenskeBoons/Portfolio"> <i className="fa fa-github" /></a>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 padd-15">
              <div className="project-explanation">
                <h3>Opdracht</h3>
                <p>
                Ik heb mijn persoonlijke portfolio ontwikkeld in <strong>Next.js 14.</strong> Mijn doel was om een <strong>platform te creëren</strong> dat mijn vaardigheden&#44; ervaringen en projecten kon presenteren&#44; om potentiële werkgevers en klanten een duidelijk beeld te geven van <strong>wie ik ben en wat ik kan</strong>. De keuze voor Next.js 14 was gebaseerd op mijn wens om mezelf uit te dagen en mijn vaardigheden verder te ontwikkelen.
                </p>
                <h3>Benadering</h3>
                <p>
                Tijdens het ontwikkelproces van mijn portfolio lag de nadruk op het creëren van een aantrekkelijke en gebruiksvriendelijke <strong>gebruikerservaring</strong>. Met behulp van Next.js 14 kon ik een <strong>dynamische en responsieve</strong> website bouwen die niet alleen mijn werk professioneel en overzichtelijk presenteert&#44; maar ook een soepele en snelle navigatie biedt voor bezoekers. Door gebruik te maken van de nieuwste functies en mogelijkheden van Next.js&#44; heb ik <strong>mezelf uitgedaagd</strong> om mijn vaardigheden naar een hoger niveau te tillen en nieuwe technologieën te verkennen.
                </p>
                <h3>Eindresultaat</h3>
                <p>
                Het eindresultaat van mijn portfolio in Next.js 14 is een verzorgde en professionele website die mijn <strong>persoonlijke merk vertegenwoordigt</strong> en mijn vaardigheden en ervaringen op een duidelijke en overtuigende manier <strong>presenteert</strong>. Het portfolio biedt een overzicht van mijn werk&#44; projecten en vaardigheden&#44; waardoor potentiële werkgevers en klanten een goed beeld krijgen van mijn capaciteiten en <strong>expertise</strong>.
                </p>
                <h3>Mijn inbreng</h3>
                <p>
                Als eigenaar en ontwikkelaar van mijn portfolio heb ik <strong>alle aspecten van het project aangepakt</strong>&#44; van het ontwerp en de ontwikkeling tot het implementeren van de nodige functionaliteiten en het onderhouden van de website. Mijn focus lag op het creëren van een <strong>professioneel ogende</strong> en goed presterende website die mijn persoonlijke merk effectief zou vertegenwoordigen.
                 </p>
                <h3>Wat ik heb geleerd</h3>
                <p>
                Het ontwikkelen van mijn portfolio in Next.js 14 was een leerzame ervaring die mijn <strong>vaardigheden</strong> als ontwikkelaar heeft verbeterd. Door mezelf uit te dagen met een nieuwe technologie&#44; heb ik mijn begrip van Next.js verdiept en nieuwe <strong>vaardigheden</strong> opgedaan in het bouwen van dynamische en responsieve websites. Deze ervaring heeft me geholpen om mijn portfolio te verbeteren en mezelf beter te presenteren aan potentiële werkgevers en klanten.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Webportfolio ;
