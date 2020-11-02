import * as React from 'react'
import './styles.scss'

export type IReactScribblerProps = {
  className?: string
}

const App: React.FC<IReactScribblerProps> = ({ className = '' }) => {
  return <div className={className}>hello world!</div>
}

export default App