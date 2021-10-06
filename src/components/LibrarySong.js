import React from "react";
const LibrarySong = ({
  id,
  isPlaying,
  song,
  songs,
  setSongs,
  setCurrentSong,
  audioRef,
}) => {
  const songSelectHandler = async () => {
    setCurrentSong(song);
    // setCurrentSong(song);
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    await setSongs(newSongs);
    if (isPlaying) audioRef.current.play();
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt={song.title} />
      <div className="song-description">
        <h3>{song.title}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
