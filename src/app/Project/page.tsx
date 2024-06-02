import Carousel from "../../components/Carousel";
import type { NextPage } from "next";

const Project: NextPage = () => {
  // Define images for this page
  const images = [
    "/imgs/portfolio/1.jpg",
    "/imgs/portfolio/2.jpg",
    "/imgs/portfolio/3.jpg",
    "/imgs/portfolio/4.jpg",
    "/imgs/portfolio/5.jpg",
    "/imgs/portfolio/ddp2.webp",
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
                  <strong>Category:</strong> Full stack Laravel PHP <br />
                  <strong>Project date:</strong> 2de semester 2de year <br />
                  <strong>Link:</strong><a target="_blank" href="https://ddpc.projectphp-503.com/"> PHP Project</a>
                  <a target="_blank" href="https://github.com/itfactory-tm/2023-ProjectPHP-503"><strong>Repo:</strong> <i className="fa fa-github" /></a>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 padd-15">
              <div className="project-explanation">
                <h3>Opdracht</h3>
                <p>
                  During our PHP Project course, my teammates Tymo Verhaegen, Mohamed Ajimi, and I worked on a PHP team project for our teacher, Dirk De Peuter. The project was designed to help our school plan small meetings between students and companies. Our team worked together to create a system that would make it easy for students to connect with potential employers.
                </p>
                <h3>Benadering</h3>
                <p>
                  As part of our project, I was appointed as the document lead, which meant that I was in charge of all the documents that needed to be filled out, as well as writing weekly stand-up meeting reports. I also took charge of the web hosting and created the pages that manage the files in the system and allow users to upload them. In addition, I designed the pages that manage user accounts and created the functionalities to make new and edit existing accounts.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 padd-15">
              <div className="project-explanation">
                <h3>Eindresultaat</h3>
                <p>
                  Working on this project helped me develop several key skills. Firstly, it taught me how to work effectively as part of a team. I learned to communicate effectively with my teammates, sharing ideas and solutions, and providing feedback when necessary. Secondly, I gained experience in project management, which involved managing the various aspects of the project, such as documentation, hosting, and user management. This allowed me to develop a comprehensive understanding of the project and ensured that we were able to complete it on time and within budget.
                </p>
                <h3>Mijn inbreng</h3>
                <p>
                  Overall, this project was a great learning experience for me. I gained valuable experience in project management, web development, and teamwork. It was a learning experience to work with my teammates, Tymo Verhaegen and Mohamed Ajimi, and our teacher, Dirk De Peuter. I am proud of the work I did and hope that the school might actually use our design.
                </p>
                <h3>Wat ik heb geleerd</h3>
                <p>
                  This project taught me the importance of effective communication within a team, the significance of project management skills in meeting deadlines and staying within budget, and the technical skills required for web development and hosting. Additionally, it provided valuable experience in collaborating with teammates and handling responsibilities within a group project.
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
