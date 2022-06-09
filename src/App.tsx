import React from 'react'
import List from './components/List';
import { ListProps } from './types/list';

const App = () => {
  const list: ListProps[] = [
    {
      id: 1,
      name: 'kim'
    },
    {
      id: 2,
      name: 'park'
    }
  ]
  return (
    <div>
      <List 
        list={list}
      />
    </div>
  )
}

export default App