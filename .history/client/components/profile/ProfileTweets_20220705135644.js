import React from 'react'
import Post from '../Post'

const style = {
    wrapper: `no-scrollbar`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
}

const tweets = [
    {
        displayName:'Anuj',
        userName:'0xfd7cD086bDB6Cd7cCc56eE1F7c6156eB14b7240F',
        avatar:'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
        text:'Hola!!! It\'s Blockchain Based Twitter!!',
        isProfileImageNft:false,
        timestamp: '2022-06-01T12:00:00.000Z'
    },
    {
        displayName:'Anuj',
        userName:'0xfd7cD086bDB6Cd7cCc56eE1F7c6156eB14b7240F',
        avatar:'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
        text:'Hola!!! It\'s Blockchain Based Twitter!!',
        isProfileImageNft:false,
        timestamp: '2020-06-01T12:00:00.000Z'
    },
    {
        displayName:'Anuj',
        userName:'0xfd7cD086bDB6Cd7cCc56eE1F7c6156eB14b7240F',
        avatar:'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
        text:'Hola!!! It\'s Blockchain Based Twitter!!',
        isProfileImageNft:false,
        timestamp: '2020-06-01T12:00:00.000Z'
    },
    {
        displayName:'Anuj',
        userName:'0xfd7cD086bDB6Cd7cCc56eE1F7c6156eB14b7240F',
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
            key={}
            />
        ))}
    </div>
  )
}

export default ProfileTweets