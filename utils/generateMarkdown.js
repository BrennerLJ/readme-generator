// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// This function displays the license badge on the README, and if there is no badge for the license
// it displays nothing.
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`;
  }
  return "";
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string

// This function displays the link on your README for whichever license you choose.
function renderLicenseLink(license) {
  if (license !== "none") {
    return `\n* [License](#license)\n`;
  }
  return "";
}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string

// This function displays the License section on the README
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License
    
      Licensed under the ${license} license.`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README

// This function generates a markdown file with the README template.
function generateMarkdown(data) {
  return ` 
  #Project Title
  ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents (Optional)
  1. Numbered Item 1
  2. Numbered Item 2
  3. Numbered Item 3

  ## Installation
  ${data.require}
  ## Usage
  ${data.usage}
  ## Credits

  ## E-mail
  ${data.email}
  
  ## license
  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;
