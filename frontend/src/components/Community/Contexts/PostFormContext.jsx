import {React, createContext, useContext, useState} from 'react'

export const formContext = createContext()

const PostFormProvider = ({children}) => {
  const [postFormIsOpen, setPostFormOpen] = useState(false)
  const [communityFormIsOpen, setCommunityFormOpen] = useState(false)

  return (
    <formContext.Provider value={{postFormIsOpen, setPostFormOpen, communityFormIsOpen, setCommunityFormOpen}}>
        {children}
    </formContext.Provider>
  )
}

export default PostFormProvider