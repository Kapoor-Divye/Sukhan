import React from 'react'
import appwriteService from "../appwrite/config"


function Test() {
    const test = () => {
        appwriteService.getFilePreview(featuredImage)
    }

  return (
    <div>Test
        <img src={appwriteService.getFilePreview()} alt="Preview" />
    </div>
  )
}

export default Test