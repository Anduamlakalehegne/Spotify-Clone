const albums = [
  { name: "GNX", artist: "Kendrick Lamar", cover: "/albums/gnx.png" },
  { name: "For All The Dogs", artist: "Drake", cover: "/albums/dogs.png" },
  {
    name: "Get Rich Or Die Tryin'",
    artist: "50 Cent",
    cover: "/albums/get.png",
  },
  {
    name: "Ready to Die",
    artist: "The Notorious B.I.G",
    cover: "/albums/ready.png",
  },
];

const artists = [
  { name: "A$AP Rocky", picture: "/artists/asap.png" },
  { name: "The Notorious B.I.G", picture: "/artists/biggie.png" },
  { name: "BigXthaPlug", picture: "/artists/bigxthaplug.png" },
  { name: "Drake", picture: "/artists/drake.png" },
  { name: "Eazy-e", picture: "/artists/eazye.png" },
  { name: "Future", picture: "/artists/future.png" },
  { name: "J-Cole", picture: "/artists/jcole.png" },
  { name: "Kendrick", picture: "/artists/kendrick.png" },
];

const song = {
  name: "tv off (feat. lefty gunplay)",
  artists: "Kendrick Lamar, Lefty Gunplay",
  cover: "/albums/gnx.png",
  album: "GNX",
  artistInfo: {
    name: "Kendrick Lamar",
    listners: 77032159,
    aboutImage: "/song.png",
    description:
      "One of the most acclaimed artists of his generation, hip-hop or otherwise, Kendrick Lamar is known for his top-tier lyricism, virtuosic microphone command, and sharp...",
  },
  duration: "3:40",
};

const data = {
  albums,
  artists,
  song,
};
export default data;
