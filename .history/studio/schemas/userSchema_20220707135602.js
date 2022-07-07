

///////////// Sanity Schema for all the Registered Users through MetaMask and their details like
///////////// Name, Wallet Address, Profile Image details, Cover Image and All the tweets by the userr


export const userSchema = {
    name: 'users',
    title: 'Users',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'walletAddress',
        title: 'Wallet Address',
        type: 'string',
      },
      {
        name: 'profileImage',
        title: 'Profile Image',
        type: 'string',
      },
      {
        name: 'isProfileImageNft',
        title: 'Is Profile Image NFT',
        type: 'boolean',
      },
      {
        name: 'coverImage',
        title: 'Cover Image',
        type: 'string',
      },
      {
        name: 'tweets',
        title: 'Tweets',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'tweets' }],
          },
        ],
      },
    ],
  }