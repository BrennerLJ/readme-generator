// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
        default: "project title",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter your project title.");
            }
            return true;
        }
    },
    {
        type: "input",
        message: "What is the description of your project?",
        name: "description",
        default: "project description",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a description.");
            }
            return true;
        }
    },
    {
        type: "input",
        message: "What are the steps to install your project?"
        name: "installation"
    },
    {
        type: "input",
        message: ""
    }
        
        
        
        
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(filename, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Your README.md file has been generated!")
    });
}

const writeFileAsync = util.promisify(writeToFile);

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
