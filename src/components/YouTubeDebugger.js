// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

class YouTubeDebugger extends Component {
  constructor() {
    super();

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      },
    }
  }

  handleBitRateChange = () => {
    this.setState({
      settings: {
      ...this.state.settings,
      bitrate: 12
    }
    })
  }

  handleResolutionChange = () => {
    this.setState({
      settings: {
      ...this.state.settings,
      video: {
      ...this.state.settings.video,
      resolution: '720p'
    }
  }
})
  }

  // handleClick = (e) => {
  //   // set bitrate to 12
  //   if (e.target.className === 'bitrate') {
  //     this.setState({
  //       settings: {
  //       ...this.state.settings,
  //       bitrate: 12
  //     }
  //     })
  //   } else if (e.target.className === 'resolution'){
  //     this.setState({
  //       settings: {
  //       ...this.state.settings,
  //       video: {
  //       ...this.state.settings.video,
  //       resolution: '720p'
  //     }
  //   }
  // })
  //   }
  // }

  render() {
    return (
      <div>
        <button onClick={this.handleBitRateChange} className='bitrate'>Bitrate</button>
        <button onClick={this.handleResolutionChange} className='resolution'>Resolution</button>
      </div>
    )
  }
}

export default YouTubeDebugger;