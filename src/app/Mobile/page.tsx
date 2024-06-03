import Carousel from "../../components/Carousel";
import type { NextPage } from "next";

const Mobile: NextPage = () => {
    return (
        <main>
            <section className="project section" id="project">
                <div className="container">
                    <div className="row">
                        <div className="section-title padd-15">
                            <h2>Augmented Reality and Mobile App Development</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 padd-15">
                            <div className="video-container">
                                <iframe width="50%" height="335" src="https://www.youtube.com/embed/qFsMMtJtNX4" ></iframe>

                            </div>
                        </div>
                        <div className="col-12 col-md-6 padd-15">
                            <div className="project-details">
                                <h3>Mobile Pokédex App</h3>
                                <p>
                                    <strong>Category:</strong> Full stack Flutter<br />
                                    <strong>Project date:</strong> 1ste semester 3de jaar<br />
                                    <strong>Repo:</strong> <a target="_blank" href="https://github.com/itfactory-tm/MobDev-23-11"><i className="fa fa-github" /></a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 padd-15">
                            <div className="project-explanation">
                                <h3>Opdracht</h3>
                                <p>
                                In samenwerking met Tymo Verhaegen heb ik gewerkt aan een <strong>Augmented Reality </strong>app. Het doel van deze app was om een <strong>mobiele Pokédex</strong> te creëren die gebruikmaakte van een <strong>API</strong> de pokeapi weliswaar. Hiermee konden gebruikers alle eerste generatie Pokémon en hun statistieken bekijken evenals alle items uit de Pokémon-wereld. De app werd ontwikkeld in <strong>Flutter</strong> en omvatte zowel een informatief gedeelte als een AR-functionaliteit.
                                </p>
                                <h3>Benadering</h3>
                                <p>
                                Tijdens de ontwikkeling van de app was ik verantwoordelijk voor de <strong>backend en het AR-gedeelte</strong>&#44; terwijl Tymo zich vooral richtte op de frontend. We <strong>werkten nauw samen</strong> en hielpen elkaar waar nodig om een naadloze integratie van beide aspecten te garanderen. Het informatieve deel van de app werd gebouwd met behulp van de pokeapi&#44; terwijl voor de AR-functionaliteit gebruik werd gemaakt van de <strong>wikitude SDK</strong>.
                                </p>
                                <h3>Eindresultaat</h3>
                                <p>
                                Het eindresultaat was een <strong>veelzijdige app</strong> die zowel informatief als interactief was. Gebruikers konden gemakkelijk door de eerste generatie Pokémon bladeren en hun statistieken bekijken&#44; evenals informatie over verschillende items. Het AR-gedeelte voegde een <strong>extra dimensie</strong> toe aan de ervaring door gebruikers in staat te stellen Pokémon in de echte wereld te zien via hun smartphonecamera. Wanneer een Pokémon werd &#39;gevangen&#39; via de AR-functionaliteit&#44; werd deze toegevoegd aan de Pokédex en gemarkeerd als &#39;gevangen&#39;. De combinatie van <strong>informatieve en interactieve</strong> elementen maakte de app tot een boeiende en vermakelijke ervaring voor Pokémon-fans.
                                </p>
                                <h3>Mijn inbreng</h3>
                                <p>
                                Mijn rol in het project omvatte de ontwikkeling van de <strong>backend en het AR-gedeelte</strong> van de app. Dit betekende het opzetten van de <strong>API-integratie</strong> met pokeapi voor het ophalen van Pokémon- en itemgegevens&#44; en het integreren van de wikitude SDK voor de <strong>AR-functionaliteit</strong>. Ik was verantwoordelijk voor het creëren van een stabiele en efficiënte backend-infrastructuur&#44; evenals het implementeren van de AR-ervaring die naadloos werkte binnen de app.
                                </p>
                                <h3>Wat ik heb geleerd</h3>
                                <p>
                                Tijdens het werken aan dit project heb ik waardevolle ervaring opgedaan in zowel backend-ontwikkeling als <strong>Augmented Reality</strong>. Ik heb mijn kennis van API-integratie en <strong>flutter</strong> verder ontwikkeld door de implementatie van de pokeapi en het opzetten van een betrouwbare backend-infrastructuur. Daarnaast heb ik veel geleerd over het gebruik van AR-technologieën en hoe deze kunnen worden geïmplementeerd in mobiele apps. Het <strong>samenwerken</strong> met Tymo en het delen van kennis en expertise heeft mijn begrip van softwareontwikkeling verder verdiept en mijn vaardigheden als ontwikkelaar versterkt.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
};

export default Mobile;
