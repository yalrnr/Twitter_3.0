import { useState } from 'react'
import { BsCardImage, BsEmojiSmile } from 'react-icons/bs'
import { RiFileGifLine, RiBarChartHorizontalFill } from 'react-icons/ri'
import { IoMdCalendar } from 'react-icons/io'
import { MdOutlineLocationOn } from 'react-icons/md'
import { client } from '../../lib/client'
import { useContext } from 'react'
imoprt { Twitt }

const style = {
    wrapper: `px-4 flex flex-row border-b border-[#38444d] pb-4`,
    tweetBoxLeft: `mr-4`,
    tweetBoxRight: `flex-1`,
    profileImage: `height-12 w-12 rounded-full`,
    inputField: `w-full h-full outline-none bg-transparent text-lg`,
    formLowerContainer: `flex`,
    iconsContainer: `text-[#1d9bf0] flex flex-1 items-center`,
    icon: `mr-2`,
    submitGeneral: `px-6 py-2 rounded-3xl font-bold`,
    inactiveSubmit: `bg-[#196195] text-[#95999e]`,
    activeSubmit: `bg-[#1d9bf0] text-white`,
  }

const TweetBox = () => {
    const [tweetMessage,setTweetMessage] = useState('')
    
    const PostTweet = (event) => {
        event.preventDefault()
        if(!tweetMessage) return

        const tweetId = `$`
    }
  return (
    <div className={style.wrapper}>
        <div className={style.tweetBoxLeft}>
            <img 
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" 
            alt="profile" 
            className={style.profileImage} 
            />
        </div>
        <div className={style.tweetBoxRight}>
            <form>
                <textarea 
                className={style.inputField}
                placeholder="What's on your mind? Tweet it!"
                value={tweetMessage}
                onChange={(e) =>setTweetMessage(e.target.value)}
                />
                <div className={style.formLowerContainer}>
                    <div className={style.iconsContainer}>
                    <BsCardImage className={style.icon} />
                    <RiFileGifLine className={style.icon} />
                    <RiBarChartHorizontalFill className={style.icon} />
                    <BsEmojiSmile className={style.icon} />
                    <IoMdCalendar className={style.icon} />
                    <MdOutlineLocationOn className={style.icon} />
                    </div>
                    <button 
                    type="submit" 
                    className={`${style.submitGeneral} ${
                        tweetMessage ? style.activeSubmit : style.inactiveSubmit
                      }`}
                    >
                        Tweet
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default TweetBox