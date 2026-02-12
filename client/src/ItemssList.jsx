import React from 'react'
import LineItem from './LineItem';

const ItemssList = ({items,handleCheck,handleDelete}) => {
    return (
      <ol>
        {items.map((item) => (
          <LineItem
            item={item}
            key={item.id}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        ))}
      </ol>
    );
}

export default ItemssList;
