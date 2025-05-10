import React from 'react'
import {data} from '../restApi.json'
const Menu = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">POPULAR DISHES</h1>
                <p>One of our most-loved dishes is the Spicy Butter Chicken—a rich, creamy curry cooked with tender pieces of chicken simmered in a flavorful tomato-based gravy, perfectly balanced with aromatic spices and a hint of sweetness. Served with warm naan or fragrant basmati rice, this dish has become a favorite among our customers for its bold taste and comforting texture. Whether you're a long-time fan of Indian cuisine or trying it for the first time, our butter chicken is a must-try that keeps people coming back for more!</p>
            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element => (
                        <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                        </div>
                    ))
                }   
            </div>
        </div>
      </section>
    </>
  )
}

export default Menu
