import React from 'react';
import Navbar from '../../../User/Components/Navbar/Navbar';
import './About.css'; // Import the CSS file for styling

function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <div className="privacy-card">
        <div className="privacy-card-header">
          <h3>Privacy Policy</h3>
        </div>
        <div className="privacy-card-body mt-3">
          <p>
            tulirmatrimony.com is an online matrimonial portal endeavoring to provide you with matrimonial services.
            This privacy statement is common to all websites/apps operated under tulirmatrimony.com. We are strongly committed to your right to privacy and have created this privacy statement to explain the information we collect and how it is used.
          </p>
          <ul className="privacy-content-list mt-3">
            <li>
              You acknowledge that you are disclosing information voluntarily. By using the website/apps, you consent to the collection, use, and processing of the info you disclose in accordance with this Privacy Policy.
            </li>
            <li>
              The information we gather includes email addresses, names, dates of birth, identification proofs, educational qualifications, and other details necessary to provide our services.
            </li>
            <li>
              We use a secure server for credit card transactions and store login information using cookies. We do not control third-party cookies, which may be used on some pages of the website/apps.
            </li>
            <li>
              If you establish a credit account, additional billing information, including a billing address and payment details, will be collected.
            </li>
            <li>
              The information collected is used for verification, data analysis, and improving services. We also collect geographic location and device information when accessing the website/apps.
            </li>
            <li>
              We may share your information with associates, affiliates, subsidiaries, or third-party service providers for marketing purposes or fraud prevention.
            </li>
            <li>
              For EU members, we collect and process data with your consent, and you have the right to withdraw consent at any time. Your personal information may be stored in databases outside the EU, subject to appropriate safeguards.
            </li>
            <li>
              Personal information is retained for as long as necessary to fulfill the purposes for which it was collected and to comply with legal obligations.
            </li>
            <li>
              We cannot guarantee that the internet is 100% secure. We use security measures to protect your information, but you must also take care in protecting your information.
            </li>
            <li>
              We may update this privacy policy from time to time, and any changes will be reflected on the privacy policy page.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;
