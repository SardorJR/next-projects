import Image from "next/image";
import Link from "next/link";
function Layout({ children }) {
  return (
    <>
      <div className="wiframe"></div>
      <img className="halfball" src="/images/Vector (24).png" alt="" />
      <img className="halfball2" src="/images/Vector (25).png" alt="" />
      <div className="background">
        <div className="background-image">
          <div className="wrap">
            <header>
              <div className="left">
                <Image
                  src="/images/Company Logo.png"
                  width={160}
                  height={25}
                  alt="Company Logo"
                />
              </div>
              <div className="center">
                <a href="#">ABOUT US</a>
                <a href="#">SERVICES</a>
                <a href="#">PRICING</a>
                <a href="#">BLOG</a>
                <a href="#">CONTACT</a>
              </div>
              <div className="right">
                <Link href={'/'}>
                <button>SIGN IN</button>
                </Link>
              </div>
            </header>
            <div className="title">
              <div className="left-img"></div>
              <div className="center-title">
                <h1>YOUR BEST</h1>
                <div className="part-box">
                  <span className="it">
                    IT <span className="partners">PARTNERS</span>
                  </span>
                </div>
              </div>
            </div>
            <center>
              <h4>
                From custom software development to cybersecurity, our team of
                experts is dedicated to delivering solutions that are tailored
                to your unique needs.
              </h4>
            </center>
            <center>
              <Link href={'/projects'}>
                <button>
                  <span>EXPLORE NOW</span>
                  <Image
                    src="/images/Arrow Icon.svg"
                    width={90}
                    height={2}
                    alt="Arrow"
                  />
                </button>
              </Link>
            </center>
          </div>
        </div>
        <div className="backgrond-shadow">
          <div className="wrap">
            <h2>
              Why <br /> Choose Us?
            </h2>
            <div className="choose-container">
              <div className="item-choose">
                <img src="/images/Vector (3).svg" alt="" />
                <div className="description">
                  <span>expertise</span>
                  <p>
                    Our team of experienced experts have the knowledge and
                    expertise to deliver innovative IT solutions that meet your
                    unique needs.
                  </p>
                </div>
              </div>
              <div className="item-choose">
                <img src="/images/Group (10).png" alt="" />
                <div className="description">
                  <span>technology</span>
                  <p>
                    We stay up to date with the latest trends and technologies
                    in the IT industry, so you can get the most advanced
                    solutions available.
                  </p>
                </div>
              </div>
              <div className="item-choose">
                <img src="/images/Vector (22).png" alt="" />
                <div className="description">
                  <span>solutions</span>
                  <p>
                    We take a personalized approach to every project, working
                    closely with you to understand your business and create
                    solutions.
                  </p>
                </div>
              </div>
              <div className="item-choose">
                <img src="/images/Vector (23).png" alt="" />
                <div className="description">
                  <span>results</span>
                  <p>
                    Our track record speaks for itself – we've helped businesses
                    of all sizes and industries achieve their goals with our IT
                    solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content">{children}</div>

      <div className="image-back">
        <div className="wrap">
          <center>
            <h2>
              Need IT Solutions? Let’s start <span> now.</span>
            </h2>
            <button>
              <span>GET FREE CONSULTATION</span>
              <img src="/images/Arrow Icon (2).png" alt="" />
            </button>
          </center>
          <footer>
            <div className="left">
              <img src="/images/Company Logo (1).png" alt="" />
              <div className="icons-box">
                <img src="/images/Group (12).png" alt="" />
                <img src="/images/Facebook Icon.png" alt="" />
                <img src="/images/Twitter Icon.png" alt="" />
              </div>
            </div>
            <div className="right">
              <div className="item-footer">
                <span>Explore</span>
                <a href="#">About Us</a>
                <a href="#">Services</a>
                <a href="#">Pricing</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
              </div>
              <div className="item-footer">
                <span>Contact</span>
                <a href="#">Email</a>
                <a href="#">Phone</a>
                <a href="#">Address</a>
                <a href="#">Social Media</a>
              </div>
              <div className="hards">
                <h2>Newsletter</h2>
                <p>
                  Subscribe to our newsletter to stay informed about our latest
                  products, services, and promotions. Feel free to unsubscribe
                  anytime!
                </p>
                <input type="text" placeholder="Enter Your Email Address ..." />
              </div>
            </div>
          </footer>
          <div className="space">
            <p>Copyright © 2023 for WaveNet. All rights reserved.</p>
            <p>Terms & Condition | Privacy Policy</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
