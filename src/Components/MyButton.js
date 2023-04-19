import React from 'react'
import { Button } from 'react-bootstrap'


function MyButton({Title,onClick,className}) {
  return (
    <>
    <Button onClick={onClick} className={className}>{Title}</Button>
    </>
  )
}

export default MyButton