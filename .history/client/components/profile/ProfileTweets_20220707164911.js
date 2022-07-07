
//// Page for looping through the tweets by the user and displaying them using post page

import React from 'react'
import Post from '../Post'
import { useContext } from 'react'
import { TwitterContext } from '../../context/TwitterContext'

//// Styling the section
const style = {
    wrapper: `no-scrollbar`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
}


//// Main function
const ProfileTweets = () => {
    const {currentAccount,currentUser} = useContext(TwitterContext)
  return (
    <div className={style.wrapper}>
        {/*  */}
        {currentUser.tweets?.map((tweet, index) => (
            <Post 
            key={index}
            displayName={
                currentUser.name === 'Unnamed' 
                ? `${currentAccount.slice(0,4)}...${currentAccount.slice(-2)}`
                : currentUser.name 
            }
            userName={`${currentAccount.slice(0,4)}...${currentAccount.slice(-2)}`}
            text={tweet.tweet}
            avatar={currentUser.profileImage}
            isProfileImageNft={currentUser.isProfileImageNft}
            timestamp={tweet.timestamp}
            />
        ))}
    </div>
  )
}

export default ProfileTweets