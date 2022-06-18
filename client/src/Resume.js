import React from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import resume from "./Lyssie-Wright-Resume.pdf"

function Resume() {


  

  return (
    <div>
          <embed
    src={resume}
    type="application/pdf"
    height={740}
    width={500}/>
        {/* <Document file={resume} /> */}
    </div>
    
  );
}

export default Resume;