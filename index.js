const isTodayCommit = require('./github/isTodayCommit');
const getOneVideoInfo = require('./youtube/getOneVideoInfo');
const renderMailBody = require('./mail/renderMailBody');
const sendMail = require('./mail/sendMail');

async function main() {
  const isCommit = await isTodayCommit();
  if (!isCommit) {
    const { videoId, thumbnail } = await getOneVideoInfo();
    sendMail(renderMailBody(videoId, thumbnail));
  }
}

main();
