import React from 'react';
import {Document, Page, StyleSheet, Text, View} from '@react-pdf/renderer';
import {IStartupValuationResponse} from "../common/Types";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    progressContainer: {
        marginBottom: 20,
    },
    explanationText: {
        marginBottom: 20,
    },
    button: {
        borderRadius: 999,
        backgroundColor: '#007bff',
        padding: '8px 16px',
        color: '#fff',
        fontWeight: 'bold',
        cursor: 'pointer',
    },
});

const PdfDocument = (evaluation: IStartupValuationResponse) => {
    return (
        <Document>
            <Page size="A4">
                <View style={styles.container}>
                    <View style={styles.progressContainer}>
                        <Text>Progress: {evaluation?.rate}%</Text>
                    </View>
                    <Text style={styles.explanationText}>{evaluation?.explanation}</Text>
                </View>
            </Page>
        </Document>
    )
}

export default PdfDocument;
