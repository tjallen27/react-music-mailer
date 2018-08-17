import React, {Component} from 'react';

export default class Plans extends Component {
  render(){
    return (
      <section>
      <div className="plans-container">
        <div className="plans-tile">
          <h3 className="plans-tile_header">Basic</h3>
          <span className="plans-tile_underline"></span>
          <ul>
            <li>Royalty Free</li>
            <li>No Hidden Fees</li>
            <li>4 Tracks Per Month</li>
            <li>MP3 Only</li>
            <li className="plans-tile_price">£4.99 pcm</li>
            <li>
              <button>Get Plan</button>
            </li>
          </ul>
        </div>
        <div className="plans-tile">
          <h3 className="plans-tile_header">Premium</h3>
          <span className="plans-tile_underline"></span>
          <ul>
            <li>Royalty Free</li>
            <li>No Hidden Fees</li>
            <li><strong>6 Tracks Per Month</strong></li>
            <li><strong>MP3 and Raw Ableton Files</strong></li>
            <li className="plans-tile_price">£8.99 pcm</li>
            <li>
              <button>Get Plan</button>
            </li>
          </ul>
        </div>
      </div>
      </section>
    )
  }
}
