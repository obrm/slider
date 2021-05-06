import React, { useState, useEffect } from 'react'

import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaAngleDoubleRight, FaQuoteRight } from 'react-icons/fa'
import data from './data'

const App = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const lastIndex = data.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
    const slider = setInterval(() => {
      setIndex(index + 1)
    }, 5000)
    return () => clearInterval(slider)
  }, [index])

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className='section-center'>
        {data.map((person, i) => {
          const { id, name, image, title, quote } = person
          const position =
            i === index
              ? `activeSlide`
              : i === index - 1 || (index === 0 && i === data.length - 1)
              ? `lastSlide`
              : `nextSlide`

          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          )
        })}
        <button className='prev' onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default App
