import React from 'react'

const Footer = ({length}) => {

  return (
        <footer> {length} List {length>1?"items":"item"}  </footer>
  )
}

export default Footer
