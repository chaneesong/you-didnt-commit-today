const { google } = require('googleapis');

require('dotenv').config();

const youtube = google.youtube({
  version: 'v3',
  auth: process.env.YOUTUBE_API_KEY,
});

const params = {
  part: 'snippet',
  q: '동기부여',
  maxResults: 50,
};

function parseSearchItems(searchItems) {
  return searchItems.map((item) => ({
    videoId: item.id.videoId,
    thumbnail: item.snippet.thumbnails.high.url,
  }));
}

async function getOneVideoInfo() {
  const searchData = await youtube.search.list(params, { responseType: 'json' });
  const parsingItems = parseSearchItems(searchData.data.items);
  const resultItem = parsingItems[Math.floor(Math.random() * 50)];

  return resultItem;
}

module.exports = getOneVideoInfo;
