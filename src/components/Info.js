import React, {Component} from 'react';

export default class Info extends Component {
  render(){
    return (
      <section>
        <div className="info-container">
          <ul className="info-tiles">
            <li>
              <img src="https://image.flaticon.com/icons/svg/576/576644.svg" alt="" width="150" />
              <h4>We Make Music</h4>
              <p>We use premium audio production software to make our music, ensuring everything we make is as good as it can be</p>
            </li>
            <li>
              <img src="https://image.flaticon.com/icons/svg/576/576637.svg" alt="" width="150" />
              <h4>We Send The Music</h4>
              <p>Each month we send you the best beats we have made that month</p>
            </li>
            <li>
              <img src="https://image.flaticon.com/icons/svg/576/576652.svg" alt="" width="150" />
              <h4>You Make It Your Own</h4>
              <p>As the music we produce is roylaty free, you can do whatever you want with it!</p>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}
