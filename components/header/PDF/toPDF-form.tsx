import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { useTextContext } from '../text-context'; // Ensure the path is correct for the context

// Define styles for the PDF
const styles = StyleSheet.create({
  page: { flexDirection: 'column', padding: 20 },
  section: { margin: 10, padding: 10, flexGrow: 1 },
});

// PDF Document Component
export const MyDocument: React.FC = () => {
  const { text } = useTextContext(); // Access text from context

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Your own text: {text || 'No content provided.'}</Text>
        </View>
      </Page>
    </Document>
  );
};
