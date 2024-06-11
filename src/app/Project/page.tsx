import Carousel from "../../components/Carousel";
import type { NextPage } from "next";

const Project: NextPage = () => {
  // Define images for this page
  const images = [
    "/imgs/php/ddp1.webp",
    "/imgs/php/ddp2.webp",
    "/imgs/php/ddp3.webp",
    "/imgs/php/ddp7.webp",
    "/imgs/php/ddp6.webp",
  ];
  return (
    <main>
      <section className="project section" id="project">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Project PHP</h2>
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
                <h3>PHP Project - PHP</h3>
                <p>
                  <strong>Categorie:</strong> Full stack Laravel PHP <br />
                  <strong>Project datum:</strong> 2de semester 2de jaar <br />
                  <strong>Link:</strong><a target="_blank" href="https://ddpc.projectphp-503.com/"> PHP Project</a> <br />
                  <strong>Repo:</strong><a className="icon" target="_blank" href="https://github.com/itfactory-tm/2023-ProjectPHP-503"> <i className="fa fa-github" /></a>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 padd-15">
              <div className="project-explanation">
                <h3>Opdracht</h3>
                <p>
                  Ons team kreeg de opdracht om een <strong>PHP-teamproject</strong> te ontwikkelen onder begeleiding van onze leraar, Dirk De Peuter. Het hoofddoel was om een <strong>efficiënt systeem</strong> te creëren waarmee onze school kleine ontmoetingen kon organiseren tussen studenten en bedrijven. Dit systeem moest studenten helpen bij het vinden van potentiële werkgevers en het <strong>vergemakkelijken van contacten</strong> tussen beide partijen. Onze opdracht omvatte het ontwerp, de ontwikkeling en de implementatie van een gebruiksvriendelijke en betrouwbare applicatie die aan <strong>alle vereisten</strong> van het project voldeed.
                </p>
                <h3>Benadering</h3>
                <p>
                  Als <strong>documentleider</strong> nam ik de verantwoordelijkheid voor het beheren van alle benodigde documenten en het schrijven van wekelijkse <strong>vergaderrapporten</strong>. Daarnaast was ik verantwoordelijk voor de <strong>webhosting</strong> en creëerde ik pagina&apos;s voor het beheer van bestanden en gebruikersaccounts.
                </p>
                <h3>Eindresultaat</h3>
                <p>
                  Het project resulteerde in een <strong>goed functionerend systeem</strong> waarmee studenten gemakkelijk in contact konden komen met potentiële werkgevers. We voltooiden het project binnen de gestelde tijd.
                </p>
                <h3>Mijn inbreng</h3>
                <p>
                  Ik nam de <strong>leiding</strong> over documentatie, webhosting en het ontwerp en de ontwikkeling van gebruikersaccountbeheer. Dit omvatte het maken van nieuwe accounts, het bewerken van bestaande accounts en het implementeren van functionaliteiten voor bestandsbeheer.
                </p>
                <h3>Wat ik heb geleerd</h3>
                <p>
                  Het project bood mij waardevolle ervaring in projectmanagement, webontwikkeling en samenwerking binnen een team. Ik leerde effectief communiceren, problemen oplossen en projecten succesvol afronden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Project;
