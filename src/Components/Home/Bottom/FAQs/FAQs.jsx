import React from "react";
import "./FAQs.css";
import { Mynav } from "../../Upper/Nav/Nav";
import NewFooter from "../../../footer/Newfooter";
export function FAQs() {
  return (
    <React.Fragment>
      <nav className="faq-nav">
        <Mynav />
      </nav>
      <div className="faq-main">
        <div className="faq-heading">FAQS</div>
        <div className="faq-main-sub">
          <div className="faq-submain" id="special">
            <div className="faq-ques">
              Q.How do I book a ticket on Book and Go?
            </div>
            <div className="faq-ans">
              A. To book a ticket, simply enter your travel details in the
              search bar, including your departure and destination cities,
              travel dates, and the number of passengers. Click on "Search" to
              see available options. Choose your preferred option and follow the
              prompts to complete your booking.
            </div>
          </div>
          <div className="faq-submain">
            <div className="faq-ques">Q.Can I cancel or modify my booking?</div>
            <div className="faq-ans">
              A. Yes, you can cancel or modify your booking through your Book
              and Go account. Log in, navigate to "My Bookings," select the
              booking you wish to change, and follow the instructions. Please
              note that cancellation and modification policies vary by airline,
              hotel, or service provider, and fees may apply.
            </div>
          </div>
          <div className="faq-submain">
            <div className="faq-ques">
              Q.What payment methods do you accept?
            </div>
            <div className="faq-ans">
              A. We accept various payment methods, including major credit and
              debit cards, PayPal, and other popular payment gateways. All
              transactions are secure and encrypted to protect your personal and
              financial information.
            </div>
          </div>
          <div className="faq-submain">
            <div className="faq-ques">
              Q.How can I find the best travel deals?
            </div>
            <div className="faq-ans">
              A. To find the best travel deals, we recommend booking in advance,
              being flexible with your travel dates, and using our "Deals"
              section to explore special offers. Additionally, subscribing to
              our newsletter will keep you updated on the latest discounts and
              promotions.
            </div>
          </div>
          <div className="faq-submain" id="special1">
            <div className="faq-ques">
              Q.What should I do if I have a problem with my booking?
            </div>
            <div className="faq-ans">
              A. If you encounter any issues with your booking, please contact
              our customer support team immediately. We offer 24/7 support to
              assist you with any problems or questions. You can reach us via
              phone, email, or live chat through our website.A
            </div>
          </div>
        </div>
      </div>
      <footer className="faq-footer">
        <NewFooter />
      </footer>
    </React.Fragment>
  );
}
