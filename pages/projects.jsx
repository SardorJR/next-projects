import Layout from "./layout/Layout";
function Projects() {
  return (
    <Layout>
      <div className="back-img">
        <div className="wrap">
          <div className="projects-container">
            <div className="elem">
              <h2>Projects</h2>
              <div className="image">
                <div className="texts">
                  <p> 2022</p>
                  <span>Uwang Corp.</span>
                </div>
              </div>
            </div>
            <div className="elem2">
              <p>
                As an IT company, we pride ourselves on delivering customized
                solutions that meet our clients' unique needs. Our projects
                highlight our expertise in web & mobile development, cloud
                computing, cybersecurity, and digital marketing.
              </p>
              <div className="box">
                <center>
                  <p>C Y B E R S E C U R I T Y</p>
                  <h3>Mika Medika</h3>
                  <h4>
                    Mika Medika Healthcare, a large hospital network, was
                    concerned about the security of their patient data.
                  </h4>
                  <button>
                    <span>READ MORE</span>
                    <img src="" alt="" />
                  </button>
                </center>
              </div>
            </div>
          </div>
          <div className="any-questions">
            <div className="item">
              <h2>
                Got Any <br /> Questions?
              </h2>
              <button>
                <span>ASK A QUESTION</span>
                <img src="/images/Arrow Icon (2).png" alt="" />
              </button>
            </div>
            <div className="item_2">
              <div className="item-ml">
                <span>What services does WaveNet offer?</span>
                <span>+</span>
              </div>
              <div className="item-ml">
                <span>What services does WaveNet offer?</span>
                <span>+</span>
              </div>
              <div className="hard">
                <div className="left">
                  <h2>How much do the services cost?</h2>
                  <p>
                    Our pricing varies based on the specific services and needs
                    of your business. We offer flexible pricing options to suit
                    your budget and requirements. Contact us to learn more.
                  </p>
                </div>
                <div className="right">
                  <span>-</span>
                </div>
              </div>
              <div className="item-ml">
                <span>What services does WaveNet offer?</span>
                <span>+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="white-back">
        <div className="wrap">
          <center>
            <h2>Blog</h2>
            <p>
              Stay up to date with the latest trends and insights in technology
              with our informative blog. From industry news to expert tips,
              we've got you covered.
            </p>
          </center>
          <div className="flex-box">
            <div className="item-flex">
              <span>T E C H</span>
              <h2>
                Why Cloud Computing is Essential for Your Business in Year 2023
              </h2>
              <p>01.03</p>
            </div>
            <div className="item-flex-hard">
              <center>
                <span>T I P S</span>
                <p>How to Protect Business from Cybersecurity Threats</p>
                <h4>12 April 2023 | TeamWaveNet</h4>
                <button>READ MORE</button>
              </center>
            </div>
            <div className="item-flex">
              <span>T E C H</span>
              <h2>
                Why Cloud Computing is Essential for Your Business in Year 2023
              </h2>
              <p>01.03</p>
            </div>
          </div>
          <center>
            <button>
              <span>READ MORE ARTICLES</span>
              <img src="/images/Arrow Icon (4).png" alt="" />
            </button>
          </center>
        </div>
      </div>
    </Layout>
  );
}

export default Projects;
