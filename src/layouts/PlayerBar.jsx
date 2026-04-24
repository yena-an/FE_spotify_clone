import usePlayer from "../hooks/usePlayer";
import "../styles//PlayerBar.css";
import IconButton from "../components/IconButton";

const PlayerBar = () => {
  const {
    currentTrack,
    isPlaying,
    volume,
    toggle,
    next,
    prev,
    hasPrev,
    hasNext,
    changeVolume,
  } = usePlayer();

  const isEmpty = !currentTrack;

  return (
    <div className="player-bar">
      {/* 왼쪽 — 현재 곡 정보 */}
      <div className="player-bar__track">
        {isEmpty ? (
          <div className="player-bar__empty">
            <p>No song selected</p>
          </div>
        ) : (
          <>
            <img
              className="player-bar__cover"
              src={currentTrack.cover}
              alt={currentTrack.title}
            />
            <div className="player-bar__info">
              <p className="player-bar__title">{currentTrack.title}</p>
              <p className="player-bar__artist">{currentTrack.artist}</p>
            </div>
          </>
        )}
      </div>

      {/* 가운데 — 컨트롤 버튼 */}
      <div className="player-bar__controls">
        <button
          className={`player-bar__btn ${!hasPrev ? "player-bar__btn--disabled" : ""}`}
          onClick={prev}
          disabled={!hasPrev}
          type="button"
        >
          {/* 이전 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z"
            />
          </svg>
        </button>

        <button
          className="player-bar__btn player-bar__btn--play"
          onClick={toggle}
          type="button"
        >
          {isPlaying ? (
            // 일시정지
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 5.25v13.5m-7.5-13.5v13.5"
              />
            </svg>
          ) : (
            // 재생
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
              />
            </svg>
          )}
        </button>

        <button
          className={`player-bar__btn ${!hasNext ? "player-bar__btn--disabled" : ""}`}
          onClick={next}
          disabled={!hasNext}
          type="button"
        >
          {/* 다음 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"
            />
          </svg>
        </button>
      </div>

      <div className="player-bar__volume">
        <button
          className="player-bar__btn"
          onClick={() => changeVolume(volume === 0 ? 0.8 : 0)}
          type="button"
        >
          {volume === 0 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              width="18"
              height="18"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 9.75 21 6m0 0-3.75-3.75M21 6h-9m-4.5 4.5H4.5A1.5 1.5 0 0 0 3 12v0a1.5 1.5 0 0 0 1.5 1.5h3l4.5 4.5v-12l-4.5 4.5Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              width="18"
              height="18"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.287a5.25 5.25 0 0 1 0 7.426M7.5 9H4.75A1.25 1.25 0 0 0 3.5 10.25v3.5A1.25 1.25 0 0 0 4.75 15H7.5l4 4V5l-4 4Z"
              />
            </svg>
          )}
        </button>

        <input
          className="player-bar__volume-slider"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => changeVolume(Number(e.target.value))}
        />
      </div>
    </div>
  );
};

export default PlayerBar;
