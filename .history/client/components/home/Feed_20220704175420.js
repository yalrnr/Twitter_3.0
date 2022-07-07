import {BsStars} from 'react-icons/bs'
import TweetBox from './TweetBox'
import Post from './Post'

const style = {
    wrapper: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
  }

const tweets = [
    {
        displayName:'Anuj',
        username:'0xfd...240F',
        avatar:'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
        text:'Hola!!! It\'s Blockchain Based Twitter!!',
        isProfileImageNft:false,
        timestamp: '2020-06-01T12:00:000Z'
    },
    {
        displayName:'Anuj',
        username:'0xfd...240F',
        avatar:'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
        text:'Hola!!! It\'s Blockchain Based Twitter!!',
        isProfileImageNft:false,
        timestamp: '2020-06-01T12:00:000Z'
    },
    {
        displayName:'Anuj',
        username:'0xfd...240F',
        avatar:'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
        text:'Hola!!! It\'s Blockchain Based Twitter!!',
        isProfileImageNft:false,
        timestamp: '2020-06-01T12:00:000Z'
    },
    {
        displayName:'Anuj',
        username:'0xfd...240F',
        avatar:'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
        text:'Hola!!! It\'s Blockchain Based Twitter!!',
        isProfileImageNft:false,
        timestamp: '2020-06-01T12:00:000Z'
    },
]

function Feed() {
    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <div className={style.headerTitle}>Home</div>
                <BsStars />
            </div>
            <TweetBox />
            {
                tweets.map((tweet,index) => (
                    <Post 
                    key={index}
                    displayName={tweet.displayName}
                    username={tweet.username}
                    avatar={tweet.avatar}
                    text={tweet.text}
                    isProfileImageNft={tweet.isProfileImageNft}
                    timestamp={tweet.timestamp}
                    />
                ))
            }
        </div>
    )
}

export default Feed