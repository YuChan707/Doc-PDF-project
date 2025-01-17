import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

import { useTextContext } from '../../word-base/text-context'; 

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const { text_ } = useTextContext();

// Create Document Component
export const MyDocument = () => {
  const { text_ } = useTextContext(); // Access the text from context

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Your own text: {text_}</Text> {/* Display the text */}
        </View>
      </Page>
    </Document>
  );
};