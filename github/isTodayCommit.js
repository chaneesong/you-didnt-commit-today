const { Octokit } = require('octokit');

require('dotenv').config();

function getoday(today) {
  const year = today.getFullYear();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const date = ('0' + today.getDate()).slice(-2);

  return [year, month, date].join('-');
}

function createQuery() {
  const committerDateQuery = encodeURIComponent(`committer-date:${getoday(new Date())}T00:00:00+0900`);
  const userNameQuery = encodeURIComponent(`user:${process.env.USER_NAME}`);
  return `${committerDateQuery}+${userNameQuery}`;
}

module.exports = async () => {
  const octokit = new Octokit({ auth: process.env.GITHUB_ACCESS_KEY });
  const query = createQuery();
  const req = await octokit.request(`GET /search/commits?q=${query}`, {});

  return req.data.total_count ? true : false;
};
