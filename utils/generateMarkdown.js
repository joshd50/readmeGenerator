const writeToFile = require('../index');
const index = require('../index')


const licenseBadges = {
  MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  Apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  GPLv2: '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
  GPLv3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
  BSD: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
}



// ['MIT', 'Apache license 2.0', 'GPLv2', 'GPLv3', 'BSD 3-Clause License', 'None']]

// TODO: Create a function that returns a license badge based on which license is passed in
function returnBadge(license){
  const {MIT, Apache, GPLv2, GPLv3, BSD } = licenseBadges
  switch (license){
    case 'MIT' :
      console.log(MIT);
      break;
    case 'Apache license 2.0':
      console.log(Apache);
      break;
    case 'GPLv2' :
      console.log(GPLv2);
      break;
    case  'GPLv3':
      console.log(GPLv3)
      break;
    case 'BSD 3-Clause License':
      console.log(BSD)
      break;
    case 'None':
      console.log('N/A');
      break;
  }
}

// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // returnBadge(data.license)

  return `# ${data.title}

## Description

-${data.dsMotiviation}
-${data.dsWhy}
-${data.dsProblem}
-${data.dsLearn}


## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

## License

${renderLicenseSection(data.license)}


`;
writeToFile('README.md',data)
}

module.exports = generateMarkdown;
