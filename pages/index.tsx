import Image from "next/image";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
import Layout from "./layout/Layout"
export default function Home() {
  return (

    
     <Layout>
      <div className="background-2">
        <div className="background-image2">
          <div className="wrap">
            <img className="a" src="/images/Vector (26).png" alt="" />
            <img className="aa" src="/images/Vector (27).png" alt="" />
            <center>
              <span className="titles">
                We believe that <span className="italic">technology</span> can{" "}
                <span className="white">change</span> the world.
              </span>
              <p>
                That's why we're committed to delivering innovative IT solutions
                to businesses of all sizes. Our team of experienced
                professionals is dedicated to helping you achieve your goals and
                thrive in a rapidly evolving digital landscape.
              </p>
            </center>
            <div className="successfull-projects">
              <div className="item-projects">
                <h2>500+</h2>
                <p>Successful Projects</p>
              </div>
              <div className="borders"></div>
              <div className="item-projects">
                <h2>98%</h2>
                <p>Satisfied Clients</p>
              </div>
              <div className="borders"></div>
              <div className="item-projects">
                <h2>35+</h2>
                <p>Handled Countries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="Client-box">
          <h2>Client Stories</h2>
          <img src="/images/Arrow Icon.png" alt="" />
        </div>
        <div className="flex">
          <div className="item-flex">
            <h2>Amazing!</h2>
            <p>
              “WaveNet's cybersecurity solution gave us the peace of mind we
              needed to focus on our business. They took the time to understand
              our unique needs and created a solution that protected our
              sensitive data and ensured compliance with industry regulations.”
            </p>
            <div className="column">
              <div className="left">
                <span className="name">Tom Johnson</span>
                <span className="descr">CIO of Mika Medika Healthcare</span>
              </div>
              <div className="right">
                <button>
                  <img src="/images/Image Placeholder.png" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="brdr"></div>
          <div className="item-flex">
            <h2>Best Service</h2>
            <p>
              “We were struggling to keep up with the demands of our growing
              business until we partnered with WaveNet. Their custom software
              development solution has helped us streamline our operations and
              improve efficiency, saving us time and money.”
            </p>
            <div className="column">
              <div className="left">
                <span className="name">Jane Doe</span>
                <span className="descr">COO of DEF Manufacturing</span>
              </div>
              <div className="right">
                <button>
                  <img src="/images/Image Placeholder (1).png" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="icons">
          <img src="/images/Logo 1.png" alt="" />
          <img src="/images/Logo 4.png" alt="" />
          <img src="/images/Logo 3.png" alt="" />
          <img src="/images/g887.png" alt="" />
        </div>
      </div>
      <div className="background3">
        <div className="wrap">
          <center>
            <h2>Services</h2>
          </center>
          <div className="develoment">
            <div className="item">
              <span>Web Development</span>
              <img src="/images/Arrow Icon (1).png" alt="" />
            </div>
            <div className="item">
              <span>Mobile Development</span>
              <img src="/images/Arrow Icon (1).png" alt="" />
            </div>
            <div className="item-hard">
              <div className="left">
                <span>Cyber Security</span>
                <p>
                  Our cyber security service provides advanced protection for
                  your data and systems against potential threats and attacks,
                  ensuring your business operates securely and efficiently.
                </p>
                <img src="/images/Group (11).png" alt="" />
              </div>
              <div className="right">
                <div className="border-img">
                  <img src="/images/Image Placeholder (2).png" alt="" />
                </div>
              </div>
            </div>
            <div className="item">
              <span>Digital Marketing</span>
              <img src="/images/Arrow Icon (1).png" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="back-img">
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
      </div> */}
      </Layout>
  );
}
