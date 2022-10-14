const fs = require('fs');
const ejs = require('ejs');
const path = require('path');

function renderMailBody(videoId, thumbnail) {
  const html = fs.readFileSync(path.join(__dirname, 'mailBody.ejs'), { encoding: 'utf-8' });
  const href = `www.youtube.com/watch?v=${videoId}`;

  return ejs.render(html, { href, imgSrc: thumbnail });
}

module.exports = renderMailBody;
