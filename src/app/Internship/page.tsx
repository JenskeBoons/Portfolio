import Carousel from "../../components/Carousel";
import type { NextPage } from "next";

const Internship: NextPage = () => {
  // Define images for this page
  const images = [

    "/imgs/Four/2.PNG",
    "/imgs/Four/3.PNG",

  ];
  return (
    <main>
      <section className="intern section" id="intern">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Stage Java Developer</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-md-6 padd-15">
              <div className="intern-content">
                <div className="intern-text">
                  <h3>Opdracht:
                  </h3>
                  <h4> Verbetering van Data-Export Functionaliteit voor Grootschalige Grids
                    Realisatie</h4>
                  <p>
                  Tijdens mijn stage bij <strong> Pension Architects</strong> heb ik gewerkt aan een project om de <strong> exportfunctionaliteit van grote datasets uit het interne beheersysteem te verbeteren</strong>. Dit systeem gebruikt &quot;grids&quot; - grote tabellen met informatie, maar veel klanten geven de voorkeur aan Excel vanwege de flexibiliteit. De huidige exporttoepassing kon grote datasets echter niet efficiënt verwerken, wat leidde tot crashes en inefficiënte workflows. Dit was problematisch voor klanten die regelmatig <strong>grote hoeveelheden </strong> data wilden exporteren voor verdere analyse in Excel.
                  </p> <br />
                  <p>
                  <strong>Mijn taak </strong> was om deze problemen te <strong>onderzoeken en een robuuste oplossing te ontwikkelen </strong> voor het exporteren van grote grids naar Excel. Het project bestond uit <strong>drie fasen</strong>. In de eerste fase analyseerde ik  de beperkingen van de huidige exporttoepassing, waarbij ik de bestaande code doorlichtte om de oorzaken van crashes te <strong>begrijpen</strong>. In de tweede fase richtte ik me op het <strong> identificeren van de belangrijkste oorzaken</strong> van de crashes.</p> <br />
                  <p>
                  De laatste fase bestond uit het <strong> ontwikkelen en testen</strong> van oplossingen om de exportfunctionaliteit te verbeteren. Ik implementeerde technologische verbeteringen en <strong>optimalisaties </strong> die de toepassing stabieler en efficiënter maakten. De effectiviteit van deze oplossingen werd gemeten door tests en gebruikersfeedback.
                  </p> <br />
                  <p>
                  Hoewel het project ambitieuze doelen had, vereist de complexiteit van het exportprobleem <strong>voortdurende inspanning</strong>. Deze studie biedt daarom praktische aanbevelingen voor toekomstige verbeteringen, zodat Pension Architects de exportfunctionaliteit kan blijven optimaliseren.
                  </p> <br />
                  
                </div>
                <div className="intern-img">
                  <img src="/imgs/PenArchLogo.png" alt="" />
                  <img src="/imgs/PenarchBanner.jpg" alt="" />
                </div>  
                   
                <div className="intern-docs">
                  <table>
                    <tr>
                      <td className="docs-item">Project plan:</td>
                      <td><a
                        href="/assets/Plan van aanpak Jens Boons .pdf"
                        target="_target"
                        className="docs-link"
                      >
                        Project plan
                      </a></td>
                    </tr>
                    <tr>
                      <td className="docs-item">Realisatie document:</td>
                      <td><a
                        href="/assets/Realisatie_Jens_Boons.pdf"
                        target="_target"
                        className="docs-link"
                      >
                        Realisatie
                      </a></td>
                    </tr>
                    <tr>
                      <td className="docs-item">Reflectie document:</td>
                      <td className="docs-link"><a
                        href="/assets/Reflectie_Jens_Boons.pdf"
                        target="_target"
                        
                      >
                        Reflectie
                      </a></td>
                    </tr>
                  </table>
                </div>         
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Internship;
