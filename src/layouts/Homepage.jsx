import Section from "../components/Section";
import Card from "../components/Card";
import useSection from "../hooks/useSection";
import usePlayer from "../hooks/usePlayer";
import {
  getTrendingTracks,
  getPopularArtists,
  getPopularAlbums,
  getPopularRadio,
  getFeaturedCharts,
} from "../utils/spotifyApi";
import "../styles/HomePage.css";
import Footer from "../components/Footer";

const HomePage = () => {
  const tracks = useSection(getTrendingTracks);
  const artists = useSection(getPopularArtists);
  const albums = useSection(getPopularAlbums);
  const radio = useSection(getPopularRadio);
  const charts = useSection(getFeaturedCharts);

  return (
    <main className="home">
      {/* Trending songs */}
      <Section
        title="Trending songs"
        loading={tracks.loading}
        error={tracks.error}
      >
        {tracks.data.map((track) => (
          <Card
            key={track.id}
            cover={track.cover}
            title={track.title}
            artist={track.artist}
            shape="square"
            onClick={() => play(track, index, tracks.data)}
          />
        ))}
      </Section>

      {/* Popular artists */}
      <Section
        title="Popular artists"
        loading={artists.loading}
        error={artists.error}
      >
        {artists.data.map((artist) => (
          <Card
            key={artist.id}
            cover={artist.image}
            title={artist.name}
            artist={artist.type}
            shape="circle"
            onClick={() =>
              play(
                {
                  id: artist.id,
                  title: artist.name,
                  artist: artist.type,
                  cover: artist.image,
                },
                index,
                artists.data,
              )
            }
          />
        ))}
      </Section>

      {/* Popular albums */}
      <Section
        title="Popular albums and singles"
        loading={albums.loading}
        error={albums.error}
      >
        {albums.data.map((album) => (
          <Card
            key={album.id}
            cover={album.cover}
            title={album.title}
            artist={album.artist}
            shape="square"
            onClick={() =>
              play(
                {
                  id: album.id,
                  title: album.title,
                  artist: album.artist,
                  cover: album.cover,
                },
                index,
                albums.data,
              )
            }
          />
        ))}
      </Section>

      {/* Popular radio */}
      <Section
        title="Popular radio"
        loading={radio.loading}
        error={radio.error}
      >
        {radio.data.map((item) => (
          <Card
            key={item.id}
            cover={item.cover}
            title={item.title}
            artist={item.description}
            shape="square"
            onClick={() =>
              play(
                {
                  id: item.id,
                  title: item.title,
                  artist: item.description,
                  cover: item.cover,
                },
                index,
                radio.data,
              )
            }
          />
        ))}
      </Section>

      {/* Featured charts */}
      <Section
        title="Featured charts"
        loading={charts.loading}
        error={charts.error}
      >
        {charts.data.map((item) => (
          <Card
            key={item.id}
            cover={item.cover}
            title={item.title}
            artist={item.description}
            shape="square"
            onClick={() =>
              play(
                {
                  id: item.id,
                  title: item.title,
                  artist: item.description,
                  cover: item.cover,
                },
                index,
                charts.data,
              )
            }
          />
        ))}
      </Section>
      <Footer />
    </main>
  );
};

export default HomePage;
