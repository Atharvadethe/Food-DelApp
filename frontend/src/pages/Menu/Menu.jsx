import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import './Menu.css'

const Menu = () => {
  const { food_list, addToCart } = useContext(StoreContext);

  return (
    <div className='menu'>
      <h2>Our Menu</h2>
      <div className='menu-list'>
        {food_list.map((item) => (
          <div key={item._id} className='menu-item'>
            <img src={item.image} alt={item.name} />
            <div className='menu-item-info'>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className='menu-item-price'>
                <span>₹{item.price}</span>
                <button onClick={() => addToCart(item._id)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu 