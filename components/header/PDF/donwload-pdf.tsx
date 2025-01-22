import React from 'react';
import { pdf } from '@react-pdf/renderer';
import { MyPDF } from './toPDF-form';


export const savePDF = async (information) => {
//save console log
console.log(information);

  // Create a PDF blob
  const blob = await pdf(<MyPDF information={information} />).toBlob();

  // Trigger download
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'your-document.pdf'; // Default file name
  link.click();
};