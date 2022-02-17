import React from 'react'
import YouTube from 'react-youtube'

export default function Media() {

    const videoId = {1:"M5bTLk09el0",2:"PIK3vLCo7Ow",3:"g8nLFwneMRY",4:"yGzPfI6oIfE",5:"eY4yWn7WD3Y",6:"iyOfJkV_42w",
7:"Wg3udI94bfc",8:"UBe345gGdVM",9:"oNyZlikbDSY"}

    const screenWidth = window.innerWidth;

    const opts = {
        height: '180',
        width: '320',
    }

    const mobile = {
        height: '100',
        width: '180'
    }

    return (
        <div className="media-content">
            <h1 id="yt-text">YouTube</h1>
            <div className="yt-content">
                <YouTube videoId={videoId[9]} opts={opts}id="yt-video" />
                <YouTube videoId={videoId[8]} opts={opts}id="yt-video" />
                <YouTube videoId={videoId[7]} opts={opts}id="yt-video" />
                <YouTube videoId={videoId[1]} opts={opts}id="yt-video" />
                <YouTube videoId={videoId[2]} opts={opts}id="yt-video" />
                <YouTube videoId={videoId[3]} opts={opts}id="yt-video" />
                <YouTube videoId={videoId[4]} opts={opts}id="yt-video" />
                <YouTube videoId={videoId[5]} opts={opts}id="yt-video" />
                <YouTube videoId={videoId[6]} opts={opts}id="yt-video" />
            </div>
        </div>
    )
}
