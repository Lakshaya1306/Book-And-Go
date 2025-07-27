import React from "react";
import "./Career.css";
import { Mynav } from "../../Upper/Nav/Nav";
import NewFooter from "../../../footer/Newfooter";
export function Career() {
  return (
    <React.Fragment>
      <div className="career-nav">
        <Mynav />
      </div>
      <div className="career-main">
        <div className="career-heading">Career at Book And Go</div>
        <div className="career-submain">
          <div className="career-submain-heading">
            Join our team at Book and Go
          </div>
          <div className="career-submain-content">
            Welcome to the Book and Go career page! We're passionate about
            travel and technology, and we're looking for talented individuals to
            join our dynamic team. At Book and Go, we believe in innovation,
            collaboration, and creating exceptional experiences for our
            customers. If you're driven, creative, and love making a difference
            in the travel industry, we want to hear from you.
          </div>
        </div>
        <div className="career-submain">
          <div className="career-submain-heading">Why Work With Us</div>
          <div className="career-submain-content">
            <ul className="career-ul">
              <li className="career-li">
                Innovative Environment: Join a team that values creativity and
                embraces cutting-edge technology to revolutionize travel
                booking.
              </li>
              <li className="career-li">
                Career Growth: We support professional development and offer
                opportunities for career advancement within the company.
              </li>
              <li className="career-li">
                Collaborative Culture: Work alongside like-minded individuals
                who are passionate about travel and dedicated to delivering
                excellence.
              </li>
              <li className="career-li">
                Benefits Package: Enjoy competitive compensation, comprehensive
                health benefits, and perks that enhance work-life balance.
              </li>
              <li className="career-li">
                Impactful Work: Contribute to a platform that simplifies travel
                planning and enhances the customer experience worldwide.
              </li>
            </ul>
          </div>
        </div>
        <div className="career-submain">
          <div className="career-submain-heading">Current Openings</div>
          <div className="career-submain-content">
            Explore our current job openings below. If you don't see a position
            that matches your skills, feel free to send us your resume and a
            cover letter outlining how you can contribute to our team at
            lakshay13062004@gmail.com
          </div>
        </div>
        <div className="career-submain">
          <div className="career-submain-heading">How to Apply</div>
          <div className="career-submain-content">
            To apply for a position, please email your resume and cover letter
            to lakshay13062004@gmail.com, Be sure to include the job title in
            the subject line of your email. We look forward to hearing from you
            and potentially welcoming you to our team at Book and Go!
          </div>
        </div>
      </div>
      <div className="career-footer">
        <NewFooter />
      </div>
    </React.Fragment>
  );
}
