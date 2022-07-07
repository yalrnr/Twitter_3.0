import React from 'react'
import Sidebar from '../components/Sidebar'
const style = {
    wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`,
    content: `max-w-[1400px] w-2/3 flex justify-between`,
    mainContent: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
}

const profile = () => {
  return (
    <div className={style.wrapper}>
        <div className={style.content}></div>
    </div>
  )
}

export default profile