// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${data.badge}
  # ${data.projectname}
  ## ${data.github}


  ## Description

  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributors](#contributing)
  * [License](#license)
  * [Test](#test)
  * [Questions](#questions)


  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributors

  ${data.contributing}

  ## License

  ${data.license}

  ## Test

  ${data.test}

  ## Questions

  ${data.questions}

  http://github.com/${data.github}/${data.projectname}


  ${data.e_mail}

`;
}

module.exports = generateMarkdown;
