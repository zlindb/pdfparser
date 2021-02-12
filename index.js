let fs = require('fs');
let path = require('path');
const { PdfReader } = require("pdfreader");

const reader  = new PdfReader();
//let filename = path.join(__dirname, '..', 'pdffile', "./pg8.pdf");
let filename = path.join(__dirname, "./pg8.pdf");
let pages = [];

var rows = {}; // indexed by y-position

function myPDFParser() {
  reader.parseFileItems(filename, (err, item) => {
      if(err) console.error(err);
      else if(!item){
        //  console.log('end of file');
      }
      else if(item.page) {
          //pages.push({});
      }
      else if (item.text) {
        //console.log(item.text);
        // accumulate text items into rows object, per line
        //(rows[item.y] = rows[item.y] || []).push(item.text);
      //   const row = pages[pages.length-1][item.y] || [];
      //
      //   row.push(item.text);
      //
      //   pages[pages.length-1][item.y] = row;
        //console.log(item.text);
        pages.push(item.text);

    //    console.log(...pages);
       }
    });

}

//
// const myPromise = new Promise(myPDFParser);
// myPromise.then(()=>{
//   console.log('in promise');
//   console.log(pages);
// })
// .catch((err)=>{
//   console.log('err?');
//   console.log(err);
// })
