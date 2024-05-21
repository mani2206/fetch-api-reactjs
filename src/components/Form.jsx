import React from 'react'
import Button from './Button'

export default function Form({reqType,setReqType}) {
  return (
    <>
      <form onSubmit={(e)=>e.preventDefault()}>
        <Button 
           buttontext ="users"
           reqType={reqType}
           setReqType={setReqType}
        />
         <Button 
           buttontext ="Posts"
           reqType={reqType}
           setReqType={setReqType}
        />
         <Button 
           buttontext ="Comments"
           reqType={reqType}
           setReqType={setReqType}
        />

      </form>
    </>
  )
}
