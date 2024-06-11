import Carousel from "../../components/Carousel";
import type { NextPage } from "next";

const Angular : NextPage = () => {
  // Define images for this page
  const images = [

    "/imgs/Angular/1.jpeg",
    "/imgs/Angular/2.jpeg",
    "/imgs/Angular/3.jpeg",
    "/imgs/Angular/4.jpeg",

  ];
  return (
    <main>
      <section className="project section" id="project">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Angular</h2>
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
                <h3>Angular Wanderlust rijs app</h3>
                <p>
                  <strong>Categorie:</strong> Angular Frondend met Java Backend<br />
                  <strong>Project date:</strong> 1ste semester 3de year <br />
                  <strong>Repo:</strong><a target="_blank" href="https://github.com/itfactory-tm/Angular-23-team-03"> <i className="fa fa-github" /></a>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 padd-15">
              <div className="project-explanation">
                <h3>Opdracht</h3>
                <p>
                Tijdens mijn cursus in <strong>Angular</strong> begon ik aan een boeiend project samen met Joppe Kerkhofs&#44; Thomas Verbruggen en Tymo Verhaegen om een applicatie te ontwikkelen die is ontworpen voor het <strong>plannen van meerdaagse reizen</strong> met gebruiksvriendelijkheid in gedachten. Ons doel was om een praktische oplossing te creëren voor reisenthousiasten&#44; waarbij we dieper ingingen op de <strong>complexiteiten van Angular</strong>.
                </p>
                <h3>Benadering</h3>
                <p>
                Het project omvatte het ontwikkelen van een applicatie met een breed scala aan reismogelijkheden&#44; zoals wandelvakanties&#44; hotelverblijven en gemengde ervaringen&#44; om diverse voorkeuren tegemoet te komen. Mijn specifieke bijdrage lag in het creëren van de <strong>trip details pagina</strong>&#44; waar gebruikers gedetailleerde informatie over hun reis kunnen bekijken. Bovendien heb ik me beziggehouden met de integratie van de weer <strong>API</strong>&#44; zodat gebruikers het weer op hun bestemming kunnen bekijken en plannen dienovereenkomstig kunnen aanpassen.
                </p>
                <h3>Eindresultaat</h3>
                <p>
                Hoewel het project zijn uitdagingen had&#44; met name als mijn eerste Angular-onderneming&#44; omarmde ik de <strong>leercurve</strong> en ben ik trots op het resultaat. De applicatie werd een bewijs van mijn aanpassingsvermogen en <strong>vastberadenheid</strong> om obstakels te <strong>overwinnen</strong> bij het streven naar het leveren van impactvolle oplossingen.
                </p>
                <h3>Mijn inbreng</h3>
                <p>
                Binnen het project heb ik actief bijgedragen aan de ontwikkeling van de Angular-applicatie&#44; waarbij ik mijn kennis en vaardigheden in Angular verder heb <strong>ontwikkeld</strong>. Mijn focus lag met name op het implementeren van functionaliteiten zoals de <strong>trip details</strong> pagina en de integratie met de weer <strong>API</strong>&#44; waardoor gebruikers een beter inzicht kregen in hun reisomstandigheden.
                 </p>
                <h3>Wat ik heb geleerd</h3>
                <p>
                Deze ervaring heeft mijn <strong>begrip van Angular verdiept</strong> en heeft me geleerd hoe ik complexe applicaties kan ontwikkelen met een focus op <strong>gebruiksvriendelijkheid</strong>. Ik heb mijn aanpassingsvermogen en vastberadenheid versterkt door de uitdagingen van het project aan te gaan en met succes impactvolle oplossingen te leveren.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Angular ;
