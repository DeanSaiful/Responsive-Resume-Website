// download resume
document.getElementById("downloadResume").addEventListener("click", function () {
    // Replace "path/to/your/pdf.pdf" with the actual URL/path to your PDF file
    const pdfUrl = "\\Resume H.pdf";

    // Open the PDF in a new tab
    window.open(pdfUrl, "_blank");
});