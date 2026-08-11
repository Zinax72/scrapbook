import {useState, useRef } from 'react'

function MusicPlayer() {

    const playlistId = "5OepSGW8v08HtJx27mNlLd"
    return (
    <div className="bg-card-bg rounded-xl p-3 max-w-xs border border-mid-purple">
      <iframe
        src={`https://open.spotify.com/embed/playlist/${playlistId}?`}
        width="100%"
        height="352"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        title="Our playlist"
        className="rounded-xl"
      />
    </div>
  );
}
export default MusicPlayer;