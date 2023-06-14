import React from 'react'
import './features.css'
import { FaPenFancy } from "react-icons/fa";


function Features() {
  return (
    <div className='features'>
      <div className="features-headings">
        <h1>Why We Are The Best From Others</h1>
          <p>
            In aliquet sollicitudin ex, sed gravida eros ultrices eget. 
            Suspendisse posuere nec odio eget laoreet. 
            Nulla congue turpis at neque fringilla rutrum.
            In aliquet sollicitudin ex, sed gravida eros ultrices eget. 
            Suspendisse posuere nec odio eget laoreet. 
          </p>
      </div>
      <div className="feature-cards">
        <div className="feature-left">
          <div className="feature-card">
            <div className="feature-icon">
              <FaPenFancy/>
            </div>
            <div className="card-texts">
              <h1>Deadline Writing</h1>
              <p>
                In aliquet sollicitudin ex, sed gravida eros ultrices eget. 
              Suspendisse posuere nec odio eget laoreet. 
              Nulla congue turpis at neque fringilla rutrum.
              </p>
            </div>
          </div>

           <div className="feature-card">
            <div className="feature-icon">
              <FaPenFancy/>
            </div>
            <div className="card-texts">
              <h1>Deadline Writing</h1>
              <p>
                In aliquet sollicitudin ex, sed gravida eros ultrices eget. 
              Suspendisse posuere nec odio eget laoreet. 
              Nulla congue turpis at neque fringilla rutrum.
              </p>
            </div>
          </div>


        </div>

        <div className="feature-right">
          <div className="feature-card">
            <div className="feature-icon">
              <FaPenFancy/>
            </div>
            <div className="card-texts">
              <h1>Deadline Writing</h1>
              <p>
                In aliquet sollicitudin ex, sed gravida eros ultrices eget. 
              Suspendisse posuere nec odio eget laoreet. 
              Nulla congue turpis at neque fringilla rutrum.
              </p>
            </div>
          </div>

           <div className="feature-card">
            <div className="feature-icon">
              <FaPenFancy/>
            </div>
            <div className="card-texts">
              <h1>Deadline Writing</h1>
              <p>
                In aliquet sollicitudin ex, sed gravida eros ultrices eget. 
              Suspendisse posuere nec odio eget laoreet. 
              Nulla congue turpis at neque fringilla rutrum.
              </p>
            </div>
          </div>


        </div>

      </div>

      
    </div>
  )
}

export default Features