
////////// Index Page for the Website, Page is delivered to the user based upon the availability 
////////// of metamask in the browser and its connectivity using the status and context from TwitterContext

import { useContext } from 'react'
import { TwitterContext } from '../context/TwitterContext'
import Sidebar from '../components/Sidebar'
import Feed from '../components/home/Feed'
import Widgets from '../components/Widgets'
import Image from 'next/image'
import metamaskLogo from '../assets/metamask.png'
import errorImg from '../assets/error.png'

const style = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`,
  content: `max-w-[1400px] w-2/3 flex justify-between`,
  loginContainer: `w-full h-full flex flex-col justify-center items-center pb-48`,
  walletConnectButton: `text-2xl text-black bg-white font-bold mb-[-3rem] mt-[3rem] px-6 py-4 rounded-full cursor-pointer hover:bg-[#d7dbdc]`,
  loginContent: `text-3xl font-bold text-center mt-24`,
}

export default function Home() {

  const {appStatus, connectToWallet} = useContext(TwitterContext)
  
  ///// function to deliver the page to the user
  const app = (status = appStatus) => {

    //// Different Cases of the pages
    switch (status) {
      //// if the user is conneted deliver him the page using userLoggedIn function
      case 'connected':
        return userLoggedIn

      //// If the user is not connected, deliver him using noUserFound
      case 'notConnected':
        return noUserFound
      
      //// Incase Metamask is not installed, guide him/her to download it using noMetaMaskFound
      case 'noMetaMask':
        return noMetaMaskFound

      //// In case of any errors like cancelling , run this function
      case 'error':
        return error

      //// In all the other cases run the loading function
      default:
        return loading
    }
  }


  //// Incase the User is logged in, deliver him/her the Twitter3.0 homepage
  const userLoggedIn = (
    <div className={style.content}>
      <Sidebar initialSelectedIcon={'Home'}/>
      <Feed />
      <Widgets />
    </div>
  )
  /////// If the user is not connected to the page, ask him for this using connectToWallet function upon click
  const noUserFound = (
    <div className={style.loginContainer}>
      <Image src={metamaskLogo} width={200} height={200} />
      <div
        className={style.walletConnectButton}
        onClick={() => connectToWallet()}
      >
        Connect Wallet
      </div>
      <div className={style.loginContent}>Connect to Metamask.</div>
    </div>
  )
   
  /// if metamask is not installed, ask the user to download it
  const noMetaMaskFound = (
    <div className={style.loginContainer}>
      <Image src={metamaskLogo} width={200} height={200} />
      <div className={style.loginContent}>
        <a
          target='_blank'
          rel='noreferrer'
          href={`https://metamask.io/download.html`}
        >
          You must install Metamask, a <br /> virtual Ethereum wallet, in your
          browser.
        </a>
      </div>
    </div>
  )

  const error = (
    <div className={style.loginContainer}>
      <Image src={errorImg} width={250} height={250} />
      <div className={style.loginContent}>
        An error occurred. Please try again later or from another browser.
      </div>
    </div>
  )

  const loading = (
    <div className={style.loginContainer}>
      <div className={style.loginContent}>Loading...</div>
    </div>
  )

  return (
    <div className={style.wrapper}>{app(appStatus)}</div>
  )
}