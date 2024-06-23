import React from "react";

interface MessageSquareIconProps {
  className?: string;
}

const MessageSquareIcon = ({className} : MessageSquareIconProps) => {
  return (
    <svg
      className={className}
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 6.3C1 4.61984 1 3.77976 1.32698 3.13803C1.6146 2.57354 2.07354 2.1146 2.63803 1.82698C3.27976 1.5 4.11984 1.5 5.8 1.5H14.2C15.8802 1.5 16.7202 1.5 17.362 1.82698C17.9265 2.1146 18.3854 2.57354 18.673 3.13803C19 3.77976 19 4.61984 19 6.3V11.7C19 13.3802 19 14.2202 18.673 14.862C18.3854 15.4265 17.9265 15.8854 17.362 16.173C16.7202 16.5 15.8802 16.5 14.2 16.5H7.68375C7.0597 16.5 6.74767 16.5 6.44921 16.5613C6.18443 16.6156 5.9282 16.7055 5.68749 16.8285C5.41617 16.9671 5.17252 17.162 4.68521 17.5518L2.29976 19.4602C1.88367 19.7931 1.67563 19.9595 1.50054 19.9597C1.34827 19.9599 1.20422 19.8906 1.10923 19.7716C1 19.6348 1 19.3684 1 18.8355V6.3Z"
        stroke="#B0B0B0"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default MessageSquareIcon;