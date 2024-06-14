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
  * [Features](#features)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [License](#license)
  * [Questions](#questions)

  ## Features

  ${data.features}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contributing}

  ## License

  ${data.license}

  ## Questions

  ${data.questions}

  http://github.com/${data.github}/${data.projectname}


  ${data.e_mail}

`;
}

module.exports = generateMarkdown;
