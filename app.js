// console.log('Hi B2S');
// -shift forward / will comment any language out & uncomment-

//Create some constants which will be used later on to find out the structure of the workbook
const viz = document.getElementById("tableauViz");
let workbook;
let vizActiveSheet;
let dashboard;
let listSheets;
//constant cannot be changed once it is generated

//Creating variables for worksheets
let saleMap;
let totalSales;
let salesByProduct;
let salesBySegment;


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

    //Assign sheets to variables
    saleMap = listSheets.find((ws) => ws.name == "SaleMap");
    totalSales = listSheets.find((ws) => ws.name == "Total Sales");
    salesByProduct = listSheets.find((ws) => ws.name == "SalesbyProduct");
    salesBySegment = listSheets.find((ws) => ws.name == "SalesbySegment");
}

viz.addEventListener("firstinteractive",logWorkbookInformation);

//Making the buttons work
//Tell js which button to look for
const oreganwashingtonButton = document.getElementById("oregon_and_washington")
const clearfilterButton = document.getElementById("clear_filter")
const undoButton = document.getElementById("undo")

function oreganwashingtonFunction() {
    console.log(oreganwashingtonButton.value)

    //Apply filters to sheets
    saleMap.applyFilterAsync("State", ["Washington", "Oregon"], "replace")
    totalSales.applyFilterAsync("State", ["Washington", "Oregon"], "replace")
    salesByProduct.applyFilterAsync("State", ["Washington", "Oregon"], "replace")
    salesBySegment.applyFilterAsync("State", ["Washington", "Oregon"], "replace")
}

function clearfilterFunction() {
    console.log(clearfilterButton.value)

    //log what's pressed
    saleMap.clearFilterAsync("State")
    totalSales.clearFilterAsync("State")
    salesByProduct.clearFilterAsync("State")
    salesBySegment.clearFilterAsync("State")
}

function undoFunction() {
    console.log(undoButton.value)

    //log what being pressed
    viz.undoAsync();
}

//event listener for my buttons
oreganwashingtonButton.addEventListener("click",oreganwashingtonFunction);
clearfilterButton.addEventListener("click",clearfilterFunction);
undoButton.addEventListener("click",undoFunction);
