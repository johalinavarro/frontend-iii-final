import React from 'react'

const MessageBox = ({ display = false, isError = false, message }) => {
    if(display) {
        return (
          <div>
              {isError ? '❌' : '✅'}{message}
          </div>
        )
    }
}

export default MessageBox