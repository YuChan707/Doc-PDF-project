// components/header/src/toPDF-app.tsx
import React, { useState } from 'react';
import { MyDocument } from './toPDF-form'; // Import your PDF component
import { PDFDownloadLink } from '@react-pdf/renderer';

export const triggerPdfDownload = () => {
    // You might need to add a state variable to trigger re-render in toPDF-form.tsx
    // Or, use a different method to force re-render. The example below shows a state variable approach.
    // Then, the toPDF-form.tsx will always use the latest text_ value.
  
    // Example using a state variable (you might need to adapt this depending on your existing code):
    const [renderTrigger, setRenderTrigger] = useState(0);

    setRenderTrigger(renderTrigger + 1);  // Incrementing to force re-render
};


export const DownloadPDF = () => { // Keep DownloadPDF for the PDFDownloadLink component
    // Example usage with a trigger and optional fileName
    const [renderTrigger, setRenderTrigger] = useState(0);
  
    return (
        <PDFDownloadLink
            document={<MyDocument />}
            fileName={`mydocument_${new Date().getTime()}.pdf`} // Example for unique filename
        >
        </PDFDownloadLink>
    );
};
