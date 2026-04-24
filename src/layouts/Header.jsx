import IconButton from "../components/IconButton";
import TextButton from "../components/TextButton";
import "../styles/Header.css";

import logo from "../assets/Spotify_Primary_Logo_RGB_White.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <img src={logo} alt="logo" width={32} height={32} />
        <IconButton variant="functional" size="md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="var(--color-white)"
            width={30}
            height={30}
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </IconButton>
      </div>

      <div className="header__search">
        <IconButton variant="functional-embed" size="md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="var(--color-gray)"
            width={30}
            height={30}
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </IconButton>
        <input
          className="header__search-input"
          type="text"
          placeholder="What do you want to play?"
        />
        <div className="header__search-divider" />
        <IconButton variant="functional-embed" size="md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
            width={30}
            height={30}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
            />
          </svg>
        </IconButton>
      </div>

      <div className="header__right">
        <TextButton variant="ghost-header" size="md" fontWeight="bold">
          Premium
        </TextButton>
        <TextButton variant="ghost-header" size="md" fontWeight="bold">
          Support
        </TextButton>
        <TextButton variant="ghost-header" size="md" fontWeight="bold">
          Download
        </TextButton>
        <div className="header__right-divider" />
        <TextButton variant="ghost-header" size="sm" fontWeight="bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="var(--color-gray)"
            width="20"
            height="20"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          Install App
        </TextButton>
        <TextButton variant="ghost-header" size="sm" fontWeight="bold">
          Sign up
        </TextButton>
        <TextButton variant="filled" size="sm" fontWeight="bold">
          Log in
        </TextButton>
      </div>
    </header>
  );
};

export default Header;
