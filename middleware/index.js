const exportService =require("./ExportsExcelSheet")
const users = [
    {
        CustomerId:1,
        CustomerName:"pavan jadhav",
        Email:"pavan@gmail.com",
        Mobile:"7666001046",
        State:"Maharashtra"
    },
    {
        CustomerId:2,
        CustomerName:"angad man",
        Email:"angad@gmail.com",
        Mobile:"9874561230",
        State:"Gujrat"
    },
    {
        CustomerId:3,
        CustomerName:"tejo juyal",
        Email:"tejo@gmail.com",
        Mobile:"7890123456",
        State:"Panjab"
    }
]

const workSheetColoumNames =[
    "CustomerId","CustomerName","Email","Mobile","State"
]
const workSheetName ="Customer";
const filePath = "./outputFile/excel-to-js.xlsx";
exportService(users,workSheetColoumNames,workSheetName,filePath)