import React from 'react'
import { useState } from 'react'
import InitialState from './InitialState'
import LoadingState from './LoadingState'
import FinishedState from './FinishedState'

const ProfileImageMinter = () => {
    const [status,setStatus] = useState('initial')
    const [profileImage, setProfileImage] = useState()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const modalChildren = (modalStatus = status) => {
        switch (modalStatus) {
            case 'initial':
              return (
                <InitialState
                  profileImage={profileImage}
                  setProfileImage={setProfileImage}
                  name={name}
                  setName={setName}
                  description={description}
                  setDescription={setDescription}
                  mint={mint}
                />
              )
      
            case 'loading':
              return <LoadingState />
      
            case 'finished':
              return <FinishedState />
      
            default:
              router.push('/')
              setAppStatus('error')
              break
          }
    }

  return <>{modalChildren(status)}</>
}

export default ProfileImageMinter