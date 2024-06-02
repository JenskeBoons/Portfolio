
export default async function Home() {

  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img
              src="/imgs/me.jpg"
              className="shadow-dark"
            />
            <h1>Your Name</h1>
            <p>Your expertise</p>
            <div className="social-links">
            <a href="https://www.linkedin.com/in/jens-boons/" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
              <a href="https://github.com/JenskeBoons" target="_blank">
                <i className="fa fa-github" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100014944083100" target="_blank">
                <i className="fa fa-facebook" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
