import { getAccessToken } from "./spotifyAuth";

const BASE_URL = "https://api.spotify.com/v1";

const spotifyFetch = async (endpoint) => {
  const token = await getAccessToken();
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("Spotify API request failed");
  return res.json();
};

// Trending songs — 글로벌 Top 50
export const getTrendingTracks = async () => {
  const data = await spotifyFetch(
    "/playlists/37i9dQZEVXbMDoHDwVN2tF/tracks?limit=6",
  );
  return data.items.map((item) => ({
    id: item.track.id,
    title: item.track.name,
    artist: item.track.artists.map((a) => a.name).join(", "),
    album: item.track.album.name,
    duration: item.track.duration_ms,
    cover: item.track.album.images[0]?.url,
  }));
};

// Popular artists
export const getPopularArtists = async () => {
  const data = await spotifyFetch(
    "/playlists/37i9dQZEVXbMDoHDwVN2tF/tracks?limit=10",
  );
  const seen = new Set();
  const artists = [];
  for (const item of data.items) {
    const artist = item.track.artists[0];
    if (!seen.has(artist.id)) {
      seen.add(artist.id);
      artists.push(artist);
    }
    if (artists.length === 6) break;
  }
  const details = await Promise.all(
    artists.map((a) => spotifyFetch(`/artists/${a.id}`)),
  );
  return details.map((d) => ({
    id: d.id,
    name: d.name,
    type: "Artist",
    image: d.images[0]?.url,
  }));
};

// Popular albums and singles
export const getPopularAlbums = async () => {
  const data = await spotifyFetch(
    "/playlists/37i9dQZEVXbMDoHDwVN2tF/tracks?limit=10",
  );
  const seen = new Set();
  const albums = [];
  for (const item of data.items) {
    const album = item.track.album;
    if (!seen.has(album.id)) {
      seen.add(album.id);
      albums.push(album);
    }
    if (albums.length === 6) break;
  }
  return albums.map((album) => ({
    id: album.id,
    title: album.name,
    artist: album.artists[0]?.name,
    cover: album.images[0]?.url,
  }));
};

// Popular radio — 추천 플레이리스트
export const getPopularRadio = async () => {
  const data = await spotifyFetch("/browse/featured-playlists?limit=6");
  return data.playlists.items.map((item) => ({
    id: item.id,
    title: item.name,
    description: item.description,
    cover: item.images[0]?.url,
  }));
};

// Featured Charts
export const getFeaturedCharts = async () => {
  const data = await spotifyFetch(
    "/browse/categories/toplists/playlists?limit=6",
  );
  return data.playlists.items.map((item) => ({
    id: item.id,
    title: item.name,
    description: item.description,
    cover: item.images[0]?.url,
  }));
};
