import React from 'react'
import { ListProps } from '../types/list'

interface Interface {
    list: ListProps[]
}

const List: React.FC<Interface> = ({
    list
}) => {
    if(list.length === 0) {
        return (
            <p>There are no scheduled events.</p>
        )
    }

    return (
        <div>
            <h1>Product List: </h1>
            {list.map((item, index) => {
                return (
                    <div key={index}>
                        <p>id: {item.id}</p>
                        <p>name: {item.name}</p>
                    </div>
                )
            })}
        </div>
  )
}


export default List