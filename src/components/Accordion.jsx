import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

function SimpleAccordion() {
  const data = [
    {
      id: 1,
      question: "What is Regiz?",
      answer:
        "Regiz is a generation alpha digital documentation technology project that focuses onAuthentication, verification and digitization of hand written Documents , so that can be electronically stored more compactly. Documents snapped uploaded and minted upon block-chain Technology.",
    },

    {
      id: 2,
      question: "What are the advantages of Using regiz Document Technology?",
      answer: "Regiz turns your Document to a digital Asset.",
      para: "Puts you in charge and in control of your Document.",
      para2: "Stores your Document in a Decentralized Regiztry.",
      para3: "Protects rights of use, falsification or alteration of Document.",
      para4: "Makes Document Handling more efficient and Self-driven.",
      para5: "Curbs Certification Fraud.",
      para6:
        "Help bridge the gap between the training and certification System.",
      para7: "You can earn on searches for your document.",
    },

    {
      id: 3,
      question: "What are the categories of Minting?",
      answer:
        "Grade B Minting I.e Documents are genuine digital copy, but are yet to be verified as authentic",
      para: "Grade A Minting I.e Documents are genuine digital copy, and has been verified as authentic.",
    },

    {
      id: 4,
      question: "How much does it cost to mint Grade B document? ",
      answer:
        "It cost only $3.99 to mint a Grade B document and has a Search Validity of up to 1yr, and $4.99 to mint a Grade B document with Search Validity Of up to 2yr",
    },

    {
      id: 5,
      question:
        "How much doest it cost to verify my documents and upgrade to Grade A? ",
      answer:
        "Verification starts from $29.99 up $50, one time payment,+Search 3yrs search Validity, Validity Renews @ $3.99/yr ,$4.99 2yrs.",
    },
    {
      id: 6,
      question: "How long does it take to verify my document? ",
      answer:
        "It takes approximately seven working Days to complete a verification process.",
    },

    {
      id: 7,
      question: "How do you verify these uploaded documents?",
      answer:
        "We have our verification partners available in our licensed geographical locations.",
    },

    {
      id: 8,
      question:
        "Do you verify certificate directly from the issuing institution?",
      answer: "Yes we verify directly from issuing organization.",
    },

    {
      id: 9,
      question: "Will my document be handed over to a verification partner?",
      answer:
        "No, our verification partners only establish connections between us and the institution.",
    },

    {
      id: 10,
      question: "How do i pay for minting? ",
      answer:
        "Purchase Regiz cryptocurrency (Regizcoin) using you debit or credit card. purchased amount will be automatically added to your wallet, use this to pay for all services across the platform.",
    },

    {
      id: 11,
      question:
        "If I am not ready for verification can i still upgrade when i am ready ?",
      answer:
        "Yes, you can always upgrade. Your Subscription Automatically renews with 3years search validity for Grade A.",
    },

    {
      id: 12,
      question:
        "How do you verify if the owner of the certificate is the one uploading it? ",
      answer:
        "Once you create your account ,you will go through a kyc verification process. you are advised to use your name as shown of valid I.d during Regiztration. all documents uploaded must meet the basic requirements which are clear picture showing all for corners, full name on document as shown on your account.",
    },

    {
      id: 13,
      question: "How do people verify the document is Authentic ? ",
      answer:
        "Once the document has been Minted upon using block-chain, Document can be verified using the Doc-tag given by the owner.",
    },

    {
      id: 14,
      question:
        "How do you protect unwanted access in case your Doc-tag leaks?",
      answer:
        "Do not worry you are in control, you still need to grant access via your app before anyone can see your document.",
    },
  ];
  return (
    <div className="lg:mt-[10%] w-[80%] mx-auto mt-[20%] mb-[10%]">
      <h1 className="text-3xl text-center font-bold mb-10 dark:text-white">FAQS</h1>

      <div className="max-w-[650px] mx-auto">
        {data.map(
          ({
            question,
            id,
            answer,
            para,
            para2,
            para3,
            para4,
            para5,
            para6,
            para7,
          }) => {
            return (
              <div key={id}>
                <Accordion className="mb-[30px] mt-[30px]">
                  <div className="border p-2 rounded">
                    <AccordionSummary
                      expandIcon={
                        <p className="text-[30px] text-black cursor-pointer">
                          +
                        </p>
                      }
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className="text-[18px] font-600 leading-[28px] text-[#1c2022]">
                        {question}
                      </Typography>
                    </AccordionSummary>
                  </div>

                  <AccordionDetails className="space-y-5 text-[16px] leading-9 text-[#737373] tracking-wider">
                    <Typography>{answer}</Typography>
                    <Typography>{para}</Typography>
                    <Typography>{para2}</Typography>
                    <Typography>{para3}</Typography>
                    <Typography>{para4}</Typography>
                    <Typography>{para5}</Typography>
                    <Typography>{para6}</Typography>
                    <Typography>{para7}</Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default SimpleAccordion;
