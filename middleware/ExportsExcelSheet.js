const xlsx = require("xlsx")
const path = require("path")

const ExportExcel =(data,workSheetColoumNames,workSheetName,filePath)=>{

const workBook =xlsx.utils.book_new();
const workSheetData =[
    workSheetColoumNames,
    ... data
]
const workSheet =xlsx.utils.aoa_to_sheet(workSheetData);
xlsx.utils.book_append_sheet(workBook,workSheet,workSheetName);
xlsx.writeFile(workBook,path.resolve(filePath));

}
const ExportUserToExcel=(users,workSheetColoumNames,workSheetName,filePath)=>{
    const data = users.map(users=>{
        return[users.CustomerId,users.CustomerName,users.Email,users.Mobile,users.State]
    })
    ExportExcel(data,workSheetColoumNames,workSheetName,filePath)
}
module.exports = ExportUserToExcel;

