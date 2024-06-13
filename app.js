// console.log('Hi B2S');
// -shift forward / will comment any language out & uncomment-

//Create some constants which will be used later on to find out the structure of the workbook
const viz = document.getElementById("tableauViz");
let workbook;
let vizActiveSheet;
let dashboard;
let listSheets;
//constant cannot be changed once it is generated

//Create a function which will log info of the workbook
function logWorkbookInformation() {
    workbook = viz.workbook;
    console.log(`The workbook name is : "${workbook.name}"`)

    //find array of dashboards within workbook
    let sheets = workbook.publishedSheetsInfo;
    sheets.forEach((element) => {
        index = element.index;
        console.log(`The sheet with index [${index}] is "${element.name}"`)
    });

    //find the active sheet
    vizActiveSheet = workbook.activeSheet;
    console.log(`The active sheet is "${vizActiveSheet.name}"`)

    //find array of sheets within dashboards
    listSheets = vizActiveSheet.worksheets;
    listSheets.forEach((element) => {
        index = element.index;
        console.log(`The worksheet with indes [${index}] is "${element.name}"`)
    })
}

viz.addEventListener("firstinteractive",logWorkbookInformation);