const { google } = require('googleapis');

require('dotenv').config();

const youtube = google.youtube('v3');

const params = {
  key: process.env.YOUTUBE_API_KEY,
  part: 'snippet',
  q: '동기부여',
  maxResults: 50,
};

function parseTitleOfSearchItems(searchItems) {
  return searchItems.map((item) => item.snippet.title);
}

youtube.search.list(params, (err, res) => {
  if (err) {
    console.log(err);
    return;
  }
  return parseTitleOfSearchItems(res.data.items);
});
