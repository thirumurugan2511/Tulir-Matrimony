import React from 'react';
import Navbar from '../../../User/Components/Navbar/Navbar';
import './About.css'; // Import the CSS file for styling

function TermsandConditions() {
  return (
    <>
      <Navbar />
      <div className="card">
        <div className="card-header">
          <h3>Terms and Conditions</h3>
        </div>
        <div className="card-body">
          <ul className='content-list mt-3'>
            <li>You must be at least 18 years old for women and 21 years old for men.</li>
            <li>Any law from entering into a contract does not disable you.</li>
            <li>All correspondence with other members should take place according to these guidelines and for the purposes of marriage only. Any individual found attempting to act outside of these boundaries will have their membership terminated.</li>
            <li>The member is responsible for maintaining the security of their password. tulirmatrimony.com shall not be responsible for any damages caused by loss of password or others gaining access to the account or membership.</li>
            <li>The member shall not give any false or misleading information in their account or in communication with other members.</li>
            <li>Your membership will automatically be suspended if you send abusive, obscene, or sexually oriented messages to other members.</li>
            <li>The member shall not share the account with another person or allow anyone else to use the account for any purpose.</li>
            <li>tulirmatrimony.com reserves the right to modify the Terms & Conditions at any time without prior notice to its users.</li>
            <li>tulirmatrimony.com cannot be held responsible for any transmission of computer viruses. Members are advised to keep their antivirus software up to date.</li>
            <li>Any unauthorized use terminates the permission or license granted by tulirmatrimony.com.</li>
            <li>Suggestions and complaints should be first addressed to tulirmatrimony.com.</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default TermsandConditions;
