import React, { useState } from 'react'

function Filter( {info} ) {
    const [title, setTitle] = useState(" ")
  const [data, setData] = useState(info)

  const filter = (e) => {
    const searchTitle = e.target.value

    if(searchTitle !== " "){

      const results = info.filter((card) => {
        return card.title.toLowerCase().includes(searchTitle.toLowerCase());
      });
      setData(results)

    }else{
      setData(data);
    }

    setTitle(searchTitle);
  }

  console.log(data)

  return (
    <>
      <div className="top-bar">
          <div><h3>PUBLIC</h3></div>
          <div className="search-box">
              <input className="search-input" type="search" name={title} onChange={filter} placeholder="e.g Calculus" />

          </div>
          <div className="search-box">
              <select className="select-input" type="select">
                  <option className="opt">No filter</option>
                  <option className="opt">DSA</option>
                  <option className="opt">FDE</option>
                  <option className="opt">DST</option>
                  <option className="opt">STAT</option>
                  <option className="opt">MICRO ECONOMICS</option>
                  <option className="opt">WOC</option>
                  <option className="opt">LEADERSHIP</option>
                  <option className="opt">CALCULUS</option>
              </select>
          </div>
      </div>
      </>
  )
}

export default Filter
