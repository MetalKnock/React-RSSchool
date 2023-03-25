import React from 'react';

interface BackgroundProps {
  className: string;
}

function Background({ className }: BackgroundProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      height="140"
      className={className}
    >
      <defs>
        <linearGradient id="c" x1="50%" x2="50%" y1=".779%" y2="100%">
          <stop offset="0%" stopColor="#0989B4" stopOpacity="0" />
          <stop offset="99.94%" stopColor="#53FFEE" />
        </linearGradient>
        <linearGradient id="d" x1="50%" x2="50%" y1=".779%" y2="100%">
          <stop offset="0%" stopColor="#0989B4" stopOpacity="0" />
          <stop offset="99.94%" stopColor="#53FFEE" />
        </linearGradient>
        <path id="a" d="M0 0h350v140H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <use fill="#41CBD3" xlinkHref="#a" />
        <g mask="url(#b)" opacity="0.5">
          <g transform="translate(-11 -4)">
            <ellipse
              cx="60.479"
              cy="14.8"
              fill="url(#c)"
              rx="14.8"
              ry="14.834"
              transform="rotate(90 60.479 14.8)"
            />
            <ellipse
              cx="14.834"
              cy="14.8"
              fill="url(#d)"
              rx="14.834"
              ry="14.8"
              transform="rotate(180 14.834 14.8)"
            />
            <ellipse cx="151.767" cy="14.8" fill="url(#d)" rx="14.834" ry="14.8" />
            <ellipse
              cx="106.123"
              cy="14.8"
              fill="url(#c)"
              rx="14.8"
              ry="14.834"
              transform="rotate(-90 106.123 14.8)"
            />
            <ellipse
              cx="243.055"
              cy="14.8"
              fill="url(#c)"
              rx="14.8"
              ry="14.834"
              transform="rotate(90 243.055 14.8)"
            />
            <ellipse
              cx="197.411"
              cy="14.8"
              fill="url(#d)"
              rx="14.834"
              ry="14.8"
              transform="rotate(180 197.411 14.8)"
            />
            <ellipse cx="334.344" cy="14.8" fill="url(#d)" rx="14.834" ry="14.8" />
            <ellipse
              cx="288.699"
              cy="14.8"
              fill="url(#c)"
              rx="14.8"
              ry="14.834"
              transform="rotate(-90 288.7 14.8)"
            />
          </g>
          <g transform="translate(-11 91.63)">
            <ellipse
              cx="60.479"
              cy="14.8"
              fill="url(#c)"
              rx="14.8"
              ry="14.834"
              transform="rotate(90 60.479 14.8)"
            />
            <ellipse
              cx="14.834"
              cy="14.8"
              fill="url(#d)"
              rx="14.834"
              ry="14.8"
              transform="rotate(180 14.834 14.8)"
            />
            <ellipse cx="151.767" cy="14.8" fill="url(#d)" rx="14.834" ry="14.8" />
            <ellipse
              cx="106.123"
              cy="14.8"
              fill="url(#c)"
              rx="14.8"
              ry="14.834"
              transform="rotate(-90 106.123 14.8)"
            />
            <ellipse
              cx="243.055"
              cy="14.8"
              fill="url(#c)"
              rx="14.8"
              ry="14.834"
              transform="rotate(90 243.055 14.8)"
            />
            <ellipse
              cx="197.411"
              cy="14.8"
              fill="url(#d)"
              rx="14.834"
              ry="14.8"
              transform="rotate(180 197.411 14.8)"
            />
            <ellipse cx="334.344" cy="14.8" fill="url(#d)" rx="14.834" ry="14.8" />
            <ellipse
              cx="288.699"
              cy="14.8"
              fill="url(#c)"
              rx="14.8"
              ry="14.834"
              transform="rotate(-90 288.7 14.8)"
            />
          </g>
          <g transform="translate(-11 43.815)">
            <ellipse
              cx="60.479"
              cy="14.8"
              fill="url(#c)"
              rx="14.8"
              ry="14.834"
              transform="rotate(-90 60.479 14.8)"
            />
            <ellipse cx="14.834" cy="14.8" fill="url(#d)" rx="14.834" ry="14.8" />
            <ellipse cx="151.767" cy="14.8" fill="url(#d)" rx="14.834" ry="14.8" />
            <ellipse
              cx="106.123"
              cy="14.8"
              fill="url(#c)"
              rx="14.8"
              ry="14.834"
              transform="rotate(90 106.123 14.8)"
            />
            <ellipse
              cx="243.055"
              cy="14.8"
              fill="url(#c)"
              rx="14.8"
              ry="14.834"
              transform="rotate(-90 243.055 14.8)"
            />
            <ellipse cx="197.411" cy="14.8" fill="url(#d)" rx="14.834" ry="14.8" />
            <ellipse cx="334.344" cy="14.8" fill="url(#d)" rx="14.834" ry="14.8" />
            <ellipse
              cx="288.699"
              cy="14.8"
              fill="url(#c)"
              rx="14.8"
              ry="14.834"
              transform="rotate(90 288.7 14.8)"
            />
          </g>
          <g transform="translate(11.822 18.77)">
            <ellipse
              cx="60.479"
              cy="14.8"
              fill="url(#c)"
              rx="14.8"
              ry="14.834"
              transform="rotate(90 60.479 14.8)"
            />
            <ellipse
              cx="14.834"
              cy="14.8"
              fill="url(#d)"
              rx="14.834"
              ry="14.8"
              transform="rotate(180 14.834 14.8)"
            />
            <ellipse cx="151.767" cy="14.8" fill="url(#d)" rx="14.834" ry="14.8" />
            <ellipse
              cx="106.123"
              cy="14.8"
              fill="url(#c)"
              rx="14.8"
              ry="14.834"
              transform="rotate(-90 106.123 14.8)"
            />
            <ellipse
              cx="243.055"
              cy="14.8"
              fill="url(#c)"
              rx="14.8"
              ry="14.834"
              transform="rotate(90 243.055 14.8)"
            />
            <ellipse
              cx="197.411"
              cy="14.8"
              fill="url(#d)"
              rx="14.834"
              ry="14.8"
              transform="rotate(180 197.411 14.8)"
            />
            <ellipse cx="334.344" cy="14.8" fill="url(#d)" rx="14.834" ry="14.8" />
            <ellipse
              cx="288.699"
              cy="14.8"
              fill="url(#c)"
              rx="14.8"
              ry="14.834"
              transform="rotate(-90 288.7 14.8)"
            />
          </g>
          <g transform="translate(11.822 114.4)">
            <ellipse
              cx="60.479"
              cy="14.8"
              fill="url(#c)"
              rx="14.8"
              ry="14.834"
              transform="rotate(90 60.479 14.8)"
            />
            <ellipse
              cx="14.834"
              cy="14.8"
              fill="url(#d)"
              rx="14.834"
              ry="14.8"
              transform="rotate(180 14.834 14.8)"
            />
            <ellipse cx="151.767" cy="14.8" fill="url(#d)" rx="14.834" ry="14.8" />
            <ellipse
              cx="106.123"
              cy="14.8"
              fill="url(#c)"
              rx="14.8"
              ry="14.834"
              transform="rotate(-90 106.123 14.8)"
            />
            <ellipse
              cx="243.055"
              cy="14.8"
              fill="url(#c)"
              rx="14.8"
              ry="14.834"
              transform="rotate(90 243.055 14.8)"
            />
            <ellipse
              cx="197.411"
              cy="14.8"
              fill="url(#d)"
              rx="14.834"
              ry="14.8"
              transform="rotate(180 197.411 14.8)"
            />
            <ellipse cx="334.344" cy="14.8" fill="url(#d)" rx="14.834" ry="14.8" />
            <ellipse
              cx="288.699"
              cy="14.8"
              fill="url(#c)"
              rx="14.8"
              ry="14.834"
              transform="rotate(-90 288.7 14.8)"
            />
          </g>
          <g transform="translate(11.822 66.585)">
            <ellipse
              cx="60.479"
              cy="14.8"
              fill="url(#c)"
              rx="14.8"
              ry="14.834"
              transform="rotate(-90 60.479 14.8)"
            />
            <ellipse cx="14.834" cy="14.8" fill="url(#d)" rx="14.834" ry="14.8" />
            <ellipse cx="151.767" cy="14.8" fill="url(#d)" rx="14.834" ry="14.8" />
            <ellipse
              cx="106.123"
              cy="14.8"
              fill="url(#c)"
              rx="14.8"
              ry="14.834"
              transform="rotate(90 106.123 14.8)"
            />
            <ellipse
              cx="243.055"
              cy="14.8"
              fill="url(#c)"
              rx="14.8"
              ry="14.834"
              transform="rotate(-90 243.055 14.8)"
            />
            <ellipse cx="197.411" cy="14.8" fill="url(#d)" rx="14.834" ry="14.8" />
            <ellipse cx="334.344" cy="14.8" fill="url(#d)" rx="14.834" ry="14.8" />
            <ellipse
              cx="288.699"
              cy="14.8"
              fill="url(#c)"
              rx="14.8"
              ry="14.834"
              transform="rotate(90 288.7 14.8)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Background;
