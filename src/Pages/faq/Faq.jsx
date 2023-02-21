import React from "react";
import SimpleAccordion from "../../components/Accordion";
import PageNavbar from "../../components/PageNavbar";
import PageFooter from "../../components/PageFooter";
function Faq() {
  return (
    <div className="faq">
      <PageNavbar/>
      <SimpleAccordion />
      <PageFooter/>
    </div>
  );
}

export default Faq;
