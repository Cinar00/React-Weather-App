import React from 'react'
import "./content.css"


function Content( {selectedWeather}) {
  return (
    <div>
      <div className='weather-box'>
          <div className="info">
            <h1>{selectedWeather.city} </h1>
          </div>
        

        <ul className="week">
          {selectedWeather.map(single => {
            return ( 
            <li>
              <img src={single.icon} alt="" className='icon' />
              <p className='top-degree'>{Math.round(single.degree)}<sup>o</sup>C</p>
              <p className='top'>{single.description[0].toUpperCase()+single.description.slice(1).toLowerCase()}</p>
              <div className='min-max-deg'>
                <p>Min : {Math.round(single.min)} <sup>o</sup>C</p>
                <p>Max :{Math.round(single.max)} <sup>o</sup>C</p>
              </div>
              <p className='top'>Nem: {Math.round(single.humidity)}% </p>
              <span className='week-days'>{single.day}</span>
              <span className='week-date'>{single.date}</span>
          </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Content