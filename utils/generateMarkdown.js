const data = require("../index.js");


// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.apptitle}

  ## Table of Contents
  [Description](#description)  | 
  [Installation](#installation) | 
  [Usage](#usage) | 
  [License](#license) | 
  [Contributors](#contributors) | 
  [Test](#test) | 
  [Questions](#questions)

  ## Description
  ${data.appdescription}


  ## Installation
  ${data.appinstallation}
  
  ## Usage
  ${data.appusage}

  ## License
  ${data.applicense}  
  <img src = "./images/${data.applicense}.jpg" alt = "${data.applicense} license logo">

  ## Contributors
  ${data.appcontributors}

  ## Test
  ${data.apptest}

  ## Questions
    For questions, please contact me at ${data.email}. Visit my Github profile at http://github.com/${data.github}.
`;
}

console.log(data)

module.exports = generateMarkdown;
