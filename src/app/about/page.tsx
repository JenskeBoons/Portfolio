import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    Hallo ik ben <span>Jens Boons</span>
                  </h2>
                  <p>
                    Momenteel studeer ik <strong>Toegepaste Informatica</strong> aan Thomas More Geel. Ik vind het leuk om iets over mezelf en mijn <strong>passie voor programmeren</strong> met jullie te delen.
                  </p>
                  <p>Al sinds mijn jeugd ben ik <strong>gefascineerd door technologie</strong> en de manier waarop deze ons dagelijks leven beïnvloedt. Toen ik ouder werd, ontdekte ik mijn liefde voor podiumverlichting en programmering, en de eindeloze mogelijkheden die dit biedt.</p>
                  <p>
                    Mijn studies aan Thomas More Geel hebben mij een stevige basis gegeven in <strong>verschillende programmeertalen en concepten</strong>. Ik onderzoek voortdurend nieuwe technologieën en trends in de branche om mijn <strong>kennis en vaardigheden te vergroten</strong>. Ik wil ook graag leren van ervaren professionals in het veld en praktijkervaring opdoen in echte projecten.
                  </p>
                  <p>
                    Naast het programmeren werk ik graag samen met anderen om complexe problemen aan te pakken. Ik geloof in de kracht van <strong>communicatie en effectief teamwerk</strong> om geweldige resultaten te bereiken.

                    Bedankt dat je de tijd hebt genomen om mij te leren kennen.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Website : <span><a href="https://www.jensboons.be/">jensboons.be</a></span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email: <span><a href="mailto:Jens.Boons@gmail.com">Jens.Boons@gmail.com</a></span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Talen : <span>Nederlands, Engels & Frans</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Rijbewijs : <span>B</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a
                        href="/assets/Jens_Boons_CV.pdf"
                        target="_target"
                        className="btn"
                      >
                        Download CV
                      </a>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>JAVA</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "85%" }} />
                        <div className="skill-percent">85%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>PHP</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>PYTHON</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>DOCKER</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "75%" }} />
                        <div className="skill-percent">75%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>LINUX</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "65%" }} />
                        <div className="skill-percent">65%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>QLIK SENSE</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "55%" }} />
                        <div className="skill-percent">55%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>KUBERNETES</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "50%" }} />
                        <div className="skill-percent">50%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>HTML</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>CSS</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>REACT</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "75%" }} />
                        <div className="skill-percent">75%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>NEXT JS</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "65%" }} />
                        <div className="skill-percent">65%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>ANGULAR</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "55%" }} />
                        <div className="skill-percent">55%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>FLUTTER</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "55%" }} />
                        <div className="skill-percent">55%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>.NET</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "40%" }} />
                        <div className="skill-percent">40%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="softskills padd-15">
                <div className="row">
                  <div className="softskill-item padd-15">
                    <h5>Feedback krijgen</h5>
                    <p>Ik ben altijd open voor te leren van feedback</p>
                  </div>
                  <div className="softskill-item padd-15">
                    <h5>Teamwerk</h5>
                    <p>Ik werk heel goed samen met andere collega's om tot een mooi en functioneel eindproduct te komen.</p>
                  </div>
                  <div className="softskill-item padd-15">
                    <h5>Doorzettingsvermogen</h5>
                    <p>Ik geef niet op voordat ik tevreden ben met het resultaat.</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2021 - Heden
                          </h6>
                          <h4 className="timeline-title">
                            Toegepaste Informatica
                          </h4>
                          <p className="timeline-text">
                            Thomas More Kempen - bachelor's diploma
                          </p>
                        </div>
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" />  Jan 2024 - Feb 2024
                          </h6>
                          <h4 className="timeline-title">
                            Next.js 14 & React - The Complete Guide
                          </h4>
                          <p className="timeline-text">
                            Udemy cursus
                            <p>
                              <a
                                href="/assets/Next.pdf"
                                target="_target"
                                className="timeline-btn"
                              >
                                Download certificaat
                              </a>
                            </p>
                          </p>
                        </div>
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> Jan 2024 - Feb 2024
                          </h6>
                          <h4 className="timeline-title">
                            Complete Blender Creator: Learn 3D Modelling for Beginners

                          </h4>
                          <p className="timeline-text">
                            Udemy cursus
                            <p>
                              <a
                                href="/assets/Blender.pdf"
                                target="_target"
                                className="timeline-btn"
                              >
                                Download certificaat
                              </a>
                            </p>
                          </p>
                        </div>
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2015 - 2021
                          </h6>
                          <h4 className="timeline-title">
                            Elektriciteit Elektronica
                          </h4>
                          <p className="timeline-text">
                            Damiaan Instituut Aarschot - Midelbaar diploma
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> Feb 2024 - Mei 2024
                          </h6>
                          <h4 className="timeline-title">Stage Pensionarchitects</h4>
                          <p className="timeline-text">
                            Verbetering van Data-Export Functionaliteit voor Grootschalige Grids.
                            <span>Vind meer info op de <a href="">Stage pagina.</a></span>
                          </p>
                        </div>
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2021
                          </h6>
                          <h4 className="timeline-title">Boons Sound & Light (BSL) Website</h4>
                          <p className="timeline-text">
                            HTML en bootstrap website voor BSL
                          </p>
                        </div>
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2019 - Heden
                          </h6>
                          <h4 className="timeline-title">Kerstdecoverlichting</h4>
                          <p className="timeline-text">
                            <li>
                              Plaatsen van kerstverlichting
                            </li>
                            <li>
                              Onderhoud van elektronica
                            </li>
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2018 - Heden
                          </h6>
                          <h4 className="timeline-title">Fun Fair</h4>
                          <p className="timeline-text">
                            <li>
                              Plaatsen van evenement tenten
                            </li>
                            <li>
                              Tafels en stoelen plaatsen
                            </li>
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2018 - Heden
                          </h6>
                          <h4 className="timeline-title">Boons Sound & Light (BSL)</h4>
                          <p className="timeline-text">
                            <li>
                              Plaatsen van licht en geluid
                            </li>
                            <li>
                              Light design voor evenementen
                            </li>
                            <li>
                              Onderhoud van elektronica
                            </li>
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
