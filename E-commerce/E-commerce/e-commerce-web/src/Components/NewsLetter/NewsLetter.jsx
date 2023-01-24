import React from 'react'
import "./NewsLetter.css"
const NewsLetter = () => {
  return (
    <section className='newsletter' >
           <h1>newsletter</h1>
           <p>get in touch latest discounts and updates</p>
           <form action="">
                <input type="email" placeholder="enter your email"></input>
                <input type="submit" className="btn"></input>
           </form>
    </section>
  )
}

export default NewsLetter
