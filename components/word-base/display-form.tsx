import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import { MyPDF } from '../header/PDF/toPDF-form';


export const DisplayComponent = ({ information }) => {
    
  return (
    <div style={{ marginTop: '20px' }}>
      <h2>PDF Preview</h2>
      <PDFViewer width="600" height="400">
        <MyPDF information={information} />
      </PDFViewer>
    </div>
  )
}

