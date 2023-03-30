


const licenseBadges = {
  MIT: ['[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)','https://choosealicense.com/licenses/mit/', 'MIT License'],
  Apache: ['[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)','https://choosealicense.com/licenses/apache-2.0/', 'Apache license 2.0'],
  GPLv2: ['[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)','https://choosealicense.com/licenses/gpl-2.0/', 'GNU General Public License v2.0'],
  GPLv3: ['[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)', 'https://choosealicense.com/licenses/gpl-3.0/', 'GNU General Public License v3.0'],
  BSD: ['[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)','https://choosealicense.com/licenses/0bsd/', 'BSD Zero Clause License']
}



// [, , 'GPLv2', 'GPLv3', 'BSD 3-Clause License', 'None']]

// TODO: Create a function that returns a license badge based on which license is passed in
function returnBadge(license){
  const {MIT, Apache, GPLv2, GPLv3, BSD } = licenseBadges
  switch (license){
    case 'MIT' :
      return MIT[0];
    case 'Apache license 2.0':
      return Apache[0];
    case 'GPLv2' :
      return GPLv2[0];
    case  'GPLv3':
      return GPLv3[0];
    case 'BSD 3-Clause License':
      return BSD[0];
    case 'None':
      return '';
  }
}

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badge = returnBadge(license);

  return badge

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    const {MIT, Apache, GPLv2, GPLv3, BSD } = licenseBadges
  switch (license){
    case 'MIT' :
      return MIT;
    case 'Apache license 2.0':
      return Apache;
    case 'GPLv2' :
      return GPLv2;
    case  'GPLv3':
      return GPLv3;
    case 'BSD 3-Clause License':
      return BSD;
    case 'None':
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenselink = renderLicenseLink(license);
  if (licenselink && licenselink.length != 0) {
    return `This application is covered by [${licenselink[2]}](${licenselink[1]})`
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // returnBadge(data.license)
  console.log(data[0])

  return `# ${data[0].title}

## Description

-${data[1].dsMotiviation}
-${data[2].dsWhy}
-${data[3].dsProblem}
-${data[4].dsLearn}

${renderLicenseBadge(data[8].license)}

## Table of Contents 

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data[5].installation}

## Usage

${data[6].usage}

## Credits

${data[7].credits}

## License

${renderLicenseSection(data[8].license)}

## Contribution Guidelines

${data[9].contribute}

## Tests

${data[10].tests}


`;
}

module.exports = generateMarkdown;
