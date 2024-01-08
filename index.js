// Get the HTML content from the provided link

const { JSDOM } = require('jsdom');
const url = 'https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge';

const getFlag = async () => {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const dom = new JSDOM(html);
    const urlCharacters = [];

    const elements = dom.window.document.querySelectorAll('[data-class^="23"]>[data-tag$="93"]>[data-id*="21"]>i');  
    elements.forEach(element => {
      urlCharacters.push(element.getAttribute('value'));
    });
    const flag = urlCharacters.join('');
    console.log(flag);

  } catch (error) {
    console.log(error);
  }
}

getFlag();