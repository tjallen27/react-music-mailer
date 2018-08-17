import React, { Component } from 'react'
import MusicPlayer from 'react-responsive-music-player'

const playlist = [
 {
   url: 'path/to/mp3',
   title: 'Track 1',
   artist: [
     'Light Up Lexi'
   ]
 },
 {
   url: 'path/to/mp3',
   title: 'Track 2',
   artist: [
     'Light Up Lexi'
   ]
 }
]

export default class Player extends Component {
  render() {
    return (
      <section>
        <div>
          <MusicPlayer playlist={playlist} />
        </div>
      </section>
    )
  }
}
