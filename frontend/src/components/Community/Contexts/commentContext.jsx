import axios from 'axios'
import {React, createContext, useState} from 'react'
import { useParams } from 'react-router-dom'

export const commentContext = createContext()

const commentProvider = ({children}) => {

  return (
    <commentContext.Provider value={{comments, setComments}}>
        {children}
    </commentContext.Provider>
  )
}

export default commentProvider