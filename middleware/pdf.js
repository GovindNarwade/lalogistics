const PDFDocument = require('pdfkit')
const docket = require("../model/docket_model")
const CreatePDFforDocket = async(req,res)=>{
 const doc = new  PDFDocument();
 doc.on('data',docket)
 doc.fontSize(25).text("PDF Created");
 console.log(doc.text);
 doc.end()
}
CreatePDFforDocket()