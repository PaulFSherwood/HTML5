// Node.js Tutorial for Beginners | CRASH COURSE
// https://www.youtube.com/watch?v=gyQyk80_upM

// Node.js and Express.js - Full Course
// https://www.youtube.com/watch?v=Oe421EPjeBE


console.log("Hello, World!");

import { error } from 'console';
import inquirer from 'inquirer'
import qr from "qr-image";
import fs from "fs";

inquirer 
    .prompt([{
            message: "Type in your URL: ",
            name: "URL"
        }])
    .then((answers) => {
        // use user feedback for .. whaterver!!
        // console.log(answers);
        const url = answers.URL;
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream("qr_img.png"));
        
        fs.writeFile("URL.txt", url, (err) => {
            if (err) throw err;
            console.log("The file has been saved!");            
        });
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });