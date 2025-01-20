import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { MyDocument } from './toPDF-form';

export const DownloadPDF: React.FC = () => {
    return (
      <PDFDownloadLink
        document={<MyDocument />}
        fileName={`mydocument_${new Date().toISOString()}.pdf`}
        style={{ textDecoration: 'none', color: 'blue', cursor: 'pointer' }}
      >
        {({ loading }) => (loading ? 'Preparing PDF...' : 'Download PDF')}
      </PDFDownloadLink>
    );
  }
  //{({ loading }) => (loading ? 'Preparing PDF...' : 'Download PDF')}