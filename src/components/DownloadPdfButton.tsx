import React from 'react';
import PdfDocument from './PdfDocument';
import {IStartupValuationResponse} from "../common/Types";
import {renderToString} from "react-dom/server";

const DownloadPdfButton = ( evaluation :IStartupValuationResponse) => {
    const handleDownloadPdf = () => {
        const pdfContent = renderToString(<PdfDocument rate={evaluation.rate}  explanation={evaluation.explanation}/>);
        const blob = new Blob([pdfContent], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'evaluation.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button className="flex justify-center text-center relative rounded-full bg-blue-600 px-3 py-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleDownloadPdf}>
            Download PDF
        </button>
    )
}

export default DownloadPdfButton;
