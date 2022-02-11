import React, { useContext, useState, useEffect } from 'react'
import io from 'socket.io-client'

const SocketContext = React.createContext()

export function useSocket() {
  return useContext(SocketContext)
}

export function SocketProvider({ children }) {
  const [socket, setSocket] = useState()

  useEffect(() => {
    const newSocket = io('https://neon-reactor.herokuapp.com')
    setSocket(newSocket)
    return () => newSocket.close()
  }, [])

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  )
}
