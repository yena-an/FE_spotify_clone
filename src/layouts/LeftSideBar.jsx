import IconButton from "../components/IconButton";
import TextButton from "../components/TextButton";
import "../styles/LeftSideBar.css";

const LeftBar = () => {
  return (
    <aside className="leftbar">
      <div className="leftbar__header">
        <div className="leftbar__title">Your Library</div>
        <div className="leftbar__create">
          <TextButton variant="filledTwo" size="sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              width="20"
              height="20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Create
          </TextButton>
        </div>
      </div>

      <div className="leftbar__card">
        <p className="leftbar__card-title">Create your first playlist</p>
        <p className="leftbar__card-desc">It's easy, we'll help you</p>
        <TextButton variant="filled" size="sm" fontWeight="medium">
          Create playlist
        </TextButton>
      </div>

      <div className="leftbar__card">
        <p className="leftbar__card-title">
          Let's find some podcasts to follow
        </p>
        <p className="leftbar__card-desc">
          We'll keep you updated on new episodes
        </p>
        <TextButton variant="filled" size="sm" fontWeight="medium">
          Browse podcasts
        </TextButton>
      </div>

      <div className="leftbar__footer">
        <div className="leftbar__footer-links">
          <TextButton variant="ghost" size="xs" fontWeight="regular">
            Legal
          </TextButton>
          <TextButton variant="ghost" size="xs" fontWeight="regular">
            Safety & Privacy Center
          </TextButton>
          <TextButton variant="ghost" size="xs" fontWeight="regular">
            Privacy Policy
          </TextButton>
          <TextButton variant="ghost" size="xs" fontWeight="regular">
            Cookies
          </TextButton>
          <TextButton variant="ghost" size="xs" fontWeight="regular">
            About Ads
          </TextButton>
          <TextButton variant="ghost" size="xs" fontWeight="regular">
            Accessibility
          </TextButton>
          <TextButton variant="ghost" size="xs" fontWeight="regular">
            Notice at Collection
          </TextButton>
          <TextButton variant="ghost" size="xs" fontWeight="regular">
            Your Privacy Choices
          </TextButton>
          <TextButton variant="ghost" size="xs" fontWeight="regular">
            Cookies
          </TextButton>
        </div>
        <TextButton variant="text-outline" size="sm" fontWeight="regular">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
            width="16"
            height="16"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>
          English
        </TextButton>
      </div>
    </aside>
  );
};

export default LeftBar;
