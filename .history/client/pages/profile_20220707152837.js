
//// Profile Page containing the dynamic components of ProfileHeader and ProfileTweets as well as static compoenents
//// such as Sidebar and Widgets 

import React from 'react'
import ProfileHeader from '../components/profile/ProfileHeader'
import ProfileTweets from '../components/profile/ProfileTweets'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'

const style = {
    wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`,
    content: `max-w-[1400px] w-2/3 flex justify-between`,
    mainContent: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
}

const profile = () => {
  return (
    <div className={style.wrapper}>
        <div className={style.content}>
          /// display the static Sidebar with a few functional button
        <Sidebar />
        <div className={style.mainContent}>
            <ProfileHeader />
            <ProfileTweets />
        </div>
        <Widgets />
        </div>
    </div>
  )
}

export default profile