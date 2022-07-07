

//////////////// Sanity Schema for storing all the tweets along with the timestamp and author


export const tweetSchema = {
    name: 'tweets',
    title: 'Tweets',
    type: 'document',
    fields: [
          {
            name: 'tweet',
            type: 'string',
            title: 'Tweet',
          },
          {
            name: 'timestamp',
            type: 'datetime',
            title: 'Timestamp',
          },
          {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [{ type: 'users' }],
          },
    ],
}