import inquirer from "inquirer"
import qr from "qr-image"
import file_sysytem from "fs"

inquirer
  .prompt([
    {
      message: `Type in your URL:`,
      name: `URL`
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers)
    let url = answers.URL
    let qr_image = qr.image(url);
    qr_image.pipe(file_sysytem.createWriteStream('qr_image.png'));

    file_sysytem.writeFile(`image.text`, url, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    })


  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });






















/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
