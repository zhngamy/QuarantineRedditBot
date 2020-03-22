const { CommentStream } = require("snoostorm");

require('dotenv').config();
const Snoowrap = require('snoowrap');
const Snoostorm = require('snoostorm');

// Build Snoowrap and Snoostorm clients
const r = new Snoowrap({
    userAgent: 'reddit-bot-node',
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    username: process.env.REDDIT_USER,
    password: process.env.REDDIT_PASS
});


// Configure options for stream: subreddit & results per query
// const streamOpts = {
//     subreddit: 'all',
//     results: 25
// };

// Create a Snoostorm CommentStream with the specified options
// const comments = client.CommentStream(streamOpts);
const stream = new CommentStream(r, { subreddit: "all", results: 25 });


// On comment, perform whatever logic you want to do
stream.on("item", comment => {

    if (comment.body.includes("quarantine", ":("))
    {
    console.log(comment.body);
    };

    var value = comment.body.includes("quarantine");
    var value2 = comment.body.includes(":(");
    if (value&value2) {
        comment.reply("We're all in this together!! Love and light your way.");

    }


})
