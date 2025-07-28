import React from "react";
import "./About.css";
import img1 from "../About/img1.png";
import img2 from "../About/img2.jpg";
import img3 from "../About/img3.jpg";
import img4 from "../About/img4.jpg";
import img5 from "../About/img5.jpg";
import { Mynav } from "../../Upper/Nav/Nav";
import NewFooter from "../../../footer/Newfooter";
export function Aboutus() {
  return (
    <React.Fragment>
      <nav className="about-nav">
        <Mynav />
      </nav>
      <div className="main">
        <div className="titleparent">
          <h1> About Us</h1>
          <p className="about-p">
            Welcome to <span className="about-span">Book and Go</span> - Your
            Travel Ticket To Anywhere
          </p>
        </div>
        <div className="about-content">
          <div className="box">
            <div className="bg-image">
              <img
                src={img1}
                alt="Our Mission"
                width="100%"
                height="100%"
              ></img>
            </div>
            <div className="descript">
              <div className="heading1">Our Mission</div>
              <div className="cont">
                At Book and Go, our mission is to make travel planning simple,
                affordable, and enjoyable, offering the best deals and top-notch
                service. We cater to all travelers, ensuring every journey
                starts and ends with a smile. Our dedicated team provides
                personalized support, aiming to build lasting relationships with
                our customers. We promote eco-friendly travel to help preserve
                our planet for future generations. Believing in the
                transformative power of travel, we strive to make these
                enriching experiences accessible to everyone, inspiring you to
                discover new places and create unforgettable memories.
              </div>
            </div>
          </div>
          <div className="box">
            <div className="descript">
              <div className="heading1">Who We Are</div>
              <div className="cont">
                Founded in 2024, Book and Go is a dedicated team of travel
                enthusiasts and tech innovators committed to revolutionizing the
                travel booking experience. Our mission is to simplify and
                enhance every aspect of travel planning, offering a
                comprehensive platform that includes flights, hotels, car
                rentals, and more. With a focus on accessibility and
                affordability, we strive to provide competitive prices and a
                wide range of options tailored to suit every traveler's
                preferences. At Book and Go, customer satisfaction is paramount.
                Our team works tirelessly to ensure a seamless booking process
                from start to finish, supported by 24/7 customer support.
              </div>
            </div>
            <div className="bg-image">
              <img src={img2} alt="Who We Are" width="100%" height="100%"></img>
            </div>
          </div>
          <div className="box">
            <div className="bg-image">
              <img
                src={img3}
                alt="what we offer"
                width="100%"
                height="100%"
              ></img>
            </div>
            <div className="descript">
              <div className="heading1">What We Offer</div>
              <div className="cont">
                <ul>
                  <li className="about-li">
                    Best Price Guarantee: We work tirelessly to bring you the
                    most competitive prices, ensuring you get the best value for
                    your money.
                  </li>
                  <li className="about-li">
                    User-Friendly Interface: Our website is designed with you in
                    mind. It's easy to navigate, search, and book your tickets
                    with just a few clicks.
                  </li>
                  <li className="about-li">
                    24/7 Customer Support: Our support team is always here to
                    help. Whether you have a question about your booking or need
                    assistance, we're just a call or email away.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="descript">
              <div className="heading1">Why Choose Us</div>
              <div className="cont">
                <ul>
                  <li className="about-li">
                    Reliability: We partner with trusted travel providers to
                    ensure you have a safe and pleasant journey.
                  </li>
                  <li className="about-li">
                    Convenience: Book your tickets anytime, anywhere, from the
                    comfort of your home or on the go
                  </li>
                  <li className="about-li">
                    Customer Satisfaction: Your satisfaction is our top
                    priority. We listen to your feedback and continuously
                    improve our services to meet your expectations.
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-image">
              <img
                src={img4}
                alt="why choose us"
                width="100%"
                height="100%"
              ></img>
            </div>
          </div>
          <div className="box">
            <div className="bg-image">
              <img
                src={img5}
                alt="Join our community"
                width="100%"
                height="100%"
              ></img>
            </div>
            <div className="descript">
              <div className="heading1">Join Our Community</div>
              <div className="cont">
                Become a part of the Book and Go community today and start your
                journey with us. Follow us on social media for the latest travel
                deals, tips, and inspiration from avid travelers sharing their
                experiences and stories. Engage with our blog featuring travel
                guides, destination highlights, and insider tips. Connect with
                fellow adventurers, share travel photos, and discover new
                places. At Book and Go, we're more than just a travel booking
                platform—we're your gateway to a world of travel experiences and
                connections
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="about-footer">
        <NewFooter />
      </footer>
    </React.Fragment>
  );
}
