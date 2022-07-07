import React from 'react'
import Post from '../Post'
imp

const style = {
    wrapper: `no-scrollbar`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
}

const tweets = [
    {
        displayName:'Anuj',
        userName:'0xf5e33dAc2ca4AFa86e962399777092d426e947Db',
        avatar:'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
        text:'Hola!!! It\'s Blockchain Based Twitter!!',
        isProfileImageNft:false,
        timestamp: '2022-06-01T12:00:00.000Z'
    },
    {
        displayName:'Anuj',
        userName:'0xf5e33dAc2ca4AFa86e962399777092d426e947Db',
        avatar:'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
        text:'Hola!!! It\'s Blockchain Based Twitter!!',
        isProfileImageNft:false,
        timestamp: '2020-06-01T12:00:00.000Z'
    },
    {
        displayName:'Anuj',
        userName:'0xf5e33dAc2ca4AFa86e962399777092d426e947Db',
        avatar:'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
        text:'Hola!!! It\'s Blockchain Based Twitter!!',
        isProfileImageNft:false,
        timestamp: '2020-06-01T12:00:00.000Z'
    },
    {
        displayName:'Anuj',
        userName:'0xf5e33dAc2ca4AFa86e962399777092d426e947Db',
        avatar:'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
        text:'Hola!!! It\'s Blockchain Based Twitter!!',
        isProfileImageNft:false,
        timestamp: '2020-06-01T12:00:00.000Z'
    },
]

const ProfileTweets = () => {
  return (
    <div className={style.wrapper}>
        {tweets.map((tweet, index) => (
            <Post 
            key={index}
            displayName="Anuj Yadav"
            userName={`${tweet.userName.slice(0,4)}...${tweet.userName.slice(-4)}`}
            text={tweet.text}
            avatar={tweet.avatar}
            isProfileImageNft={tweet.isProfileImageNft}
            timestamp={tweet.timestamp}
            />
        ))}
    </div>
  )
}

export default ProfileTweets