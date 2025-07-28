import React from "react";
import "./Privacy.css";
import { Mynav } from "../../Upper/Nav/Nav";
import NewFooter from "../../../footer/Newfooter";
export function Privacy() {
  return (
    <React.Fragment>
      <nav className="priv-nav">
        <Mynav />
      </nav>
      <div className="priv-main">
        <div className="priv-heading">Privacy Policy</div>
        <div className="priv-main-sub">
          <div className="priv-submain-type1" id="priv-special">
            <div className="priv-submain-heading">Introduction</div>
            <div className="priv-submain-content">
              Welcome to Book and Go. We are committed to protecting your
              privacy and ensuring the security of your personal information.
              This Privacy Policy outlines how we collect, use, and safeguard
              your data when you use our website and services.
            </div>
          </div>
          <div className="priv-submain-type1">
            <div className="priv-submain-heading">Information We Collect</div>
            <div className="priv-submain-content">
              <p>
                We collect various types of information to provide and improve
                our services:
              </p>
              <ul className="priv-ul">
                <li className="priv-li">
                  <span>Personal Information</span>: When you make a booking,
                  create an account, or contact us, we collect personal
                  information such as your name, email address, phone number,
                  payment details, and travel preferences.
                </li>
                <li className="priv-li">
                  <span>Usage Data</span>: We collect information on how you use
                  our website, such as your IP address, browser type, pages
                  visited, and the date and time of your visit. This helps us
                  improve our website and services.
                </li>
                <li className="priv-li">
                  <span>Cookies and Tracking Technologies</span>: We use cookies
                  and similar tracking technologies to enhance your experience
                  on our website. Cookies help us remember your preferences and
                  gather usage data.
                </li>
              </ul>
            </div>
          </div>
          <div className="priv-submain-type1">
            <div className="priv-submain-heading">
              How We Use Your Information
            </div>
            <div className="priv-submain-content">
              <p>We use the information we collect for various purposes:</p>
              <ul className="priv-ul">
                <li className="priv-li">
                  <span>To Provide Services</span>: We use your personal
                  information to process bookings, manage your account, and
                  provide customer support.
                </li>
                <li className="priv-li">
                  <span>To Improve Our Services</span>: Usage data and feedback
                  help us understand how our services are used and where we can
                  make improvements.
                </li>
                <li className="priv-li">
                  <span>Marketing and Promotions</span>: With your consent, we
                  may use your contact information to send you promotional
                  offers, travel deals, and updates about our services.
                </li>
                <li className="priv-li">
                  <span>Security and Fraud Prevention</span>: We use your
                  information to protect against, investigate, and deter
                  fraudulent, unauthorized, or illegal activities.
                </li>
              </ul>
            </div>
          </div>
          <div className="priv-submain-type1">
            <div className="priv-submain-heading">Sharing Your Information</div>
            <div className="priv-submain-content">
              We do not sell your personal information to third parties.
              However, we may share your information with trusted partners and
              service providers who assist us in delivering our services, such
              as airlines, hotels, payment processors, and customer support
              platforms. These partners are contractually obligated to protect
              your information and use it only for the purposes for which it was
              shared.
            </div>
          </div>
          <div className="priv-submain-type1">
            <div className="priv-submain-heading">Data Security</div>
            <div className="priv-submain-content">
              We implement a variety of security measures to ensure the safety
              of your personal information. This includes encryption, secure
              servers, and restricted access to personal data. However, please
              be aware that no method of transmission over the Internet or
              electronic storage is 100% secure.
            </div>
          </div>
          <div className="priv-submain-type1">
            <div className="priv-submain-heading">Your Rights</div>
            <div className="priv-submain-content">
              <p>You have the right to:</p>
              <ul className="priv-ul">
                <li className="priv-li">
                  <span>Access Your Information</span>: Request a copy of the
                  personal data we hold about you.
                </li>
                <li className="priv-li">
                  <span>Update Your Information</span>: Correct any inaccuracies
                  in your personal data.
                </li>
                <li className="priv-li">
                  <span>Delete Your Information</span>: Request the deletion of
                  your personal data, subject to certain legal requirements.
                </li>
                <li className="priv-li">
                  <span>Opt-Out</span>: Unsubscribe from marketing
                  communications at any time by following the instructions in
                  our emails or contacting us directly.
                </li>
              </ul>
            </div>
          </div>
          <div className="priv-submain-type1">
            <div className="priv-submain-heading">
              Changes To This Privacy Policy
            </div>
            <div className="priv-submain-content">
              We may update this Privacy Policy periodically to reflect changes
              in our practices or for legal, operational, or regulatory reasons.
              We will notify you of any significant changes by posting the new
              Privacy Policy on our website and updating the effective date.
            </div>
          </div>
          <div className="priv-submain-type1">
            <div className="priv-submain-heading">Contact Us</div>
            <div className="priv-submain-content">
              If you have any questions or concerns about this Privacy Policy or
              our data practices, please contact u1
            </div>
          </div>
        </div>
      </div>
      <footer className="priv-footer">
        <NewFooter />
      </footer>
    </React.Fragment>
  );
}
