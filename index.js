import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

inquirer
  .prompt([
    {
    /* Pass your questions in here */
     message: "Type in your URL",
     name: "URL",
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const URL = answers.URL;
    var qr_svg = qr.image(URL);
    qr_svg.pipe(fs.createWriteStream('qr_code.png'));

    //then save user input into a txt file

    fs.writeFile("URL.txt", url, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
      });
    
  })
  .catch((error) => {
    if (error.isTtyError) {
      // catch error if prompt couldn't be rendered in the current environment
    } else {
      //or if something else went wrong
    }
  });

