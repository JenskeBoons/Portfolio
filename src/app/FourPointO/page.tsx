import Carousel from "../../components/Carousel";
import type { NextPage } from "next";

const FourPointO: NextPage = () => {
  // Define images for this page
  const images = [

    "/imgs/Four/2.PNG",
    "/imgs/Four/3.PNG",

  ];
  return (
    <main>
      <section className="project section" id="project">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Project 4.0</h2>
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
                <h3> Project 4.0 - VoltSwap</h3>
                <p>
                  <strong>Categorie:</strong> Full stack Next Js<br />
                  <strong>Project datum:</strong> 1ste semester 3de jaar <br />
                  <strong>Prototyp:</strong><a target="_blank" href="https://www.figma.com/design/ejXDR3WYgAzO7DVMSlOgai/Project4.0(VoltSwap)?node-id=0-1"> VoltSwap</a>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 padd-15">
              <div className="project-explanation">
                <h3>Opdracht</h3>
                <p>
                  Ons team kreeg de opdracht om een applicatie te ontwikkelen die het wisselen van auto&#39;s op <strong>laadparkings beheert</strong>. Dit project werd uitgevoerd in samenwerking met <strong>Elision en Nfuse</strong> en had als doel een systeem te creëren dat <strong>real-time updates</strong> biedt over de beschikbaarheid van parkeerplaatsen en de laadstatus van voertuigen. De applicatie moest diverse functionaliteiten bevatten&#44; waaronder authenticatie&#44; een real-time <strong>chatfunctie</strong>&#44; IoT-integraties&#44; en gebruik maken van verschillende AWS-services. </p>
                <h3>Benadering</h3>
                <p>
                Om deze opdracht aan te pakken&#44; verdeelden we de taken op basis van onze <strong>individuele vaardigheden</strong>. Jesse Gabriels nam de verantwoordelijkheid voor de IoT-componenten&#44; inclusief de camera&#44; Raspberry Pi&#44; en het maken van foto&apos;s van parkeerplaatsen. Wouter Selis werkte aan de AI en <strong>computer vision</strong>&#44; specifiek het detecteren van auto&#39;s en het bijwerken van de parkeerstatus. Siebe Camerman was verantwoordelijk voor de <strong>frontend-ontwikkeling</strong> en het opzetten van het autorisatiesysteem. Yannick Hendrickx beheerde de cloud-infrastructuur&#44; waaronder AWS Lambda&#44; API Gateway&#44; en S3 buckets. Ikzelf concentreerde me op de <strong>backend-ontwikkeling</strong> en implementeerde de <strong>chatfunctionaliteit</strong>&#44; evenals een beetje frontend-werk.
                </p>
                <h3>Eindresultaat</h3>
                <p>
                Het eindresultaat van ons project was een <strong>functionele applicatie</strong> die het beheer van auto&#39;s op laadparkings vereenvoudigt. De app biedt <strong>real-time updates</strong> van vrije parkeerplaatsen&#44; beheer van laadstations&#44; en een <strong>chatfunctie</strong> voor communicatie tussen gebruikers. Dankzij de inzet van ons team en de begeleiding van Brent Eerlingen&#44; Leen Dereu&#44; Arif Eredjeb en Eric Pauwels&#44; hebben we een <strong>waardevol product</strong> kunnen opleveren dat de potentie heeft om in een echte bedrijfsomgeving te worden gebruikt.
                </p>
                <h3>Mijn inbreng</h3>
                <p>
                Mijn inbreng in dit project was voornamelijk gericht op de <strong>backend-ontwikkeling</strong>. Ik heb de logica geïmplementeerd die nodig is voor de <strong>chatfunctionaliteit</strong>&#44; waardoor gebruikers in real-time kunnen communiceren. Daarnaast heb ik ook bijgedragen aan de frontend-ontwikkeling door enkele pagina&#39;s te <strong>ontwerpen</strong> en de functionaliteiten voor het beheren van gebruikersaccounts te creëren.
                </p>
                <h3>Wat ik heb geleerd</h3>
                <p>
                Door aan dit project te werken&#44; heb ik veel waardevolle vaardigheden opgedaan. Ik leerde effectief te <strong>communiceren</strong> en samen te werken met mijn teamgenoten&#44; ideeën en <strong>oplossingen</strong> te delen en constructieve feedback te geven. Het beheren van verschillende aspecten van het project&#44; zoals documentatie&#44; hosting en gebruikersbeheer&#44; gaf me een beter inzicht in <strong>projectbeheer</strong>. Ik verbeterde mijn kennis van backend-ontwikkeling&#44; leerde werken metstrong  AWS-services&#44; en kreeg meer ervaring in het ontwerpen en implementeren van chatfunctionaliteiten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FourPointO;
