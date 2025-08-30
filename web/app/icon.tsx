import { ImageResponse } from 'next/server';

export const size = {
  width: 16,
  height: 16,
};

export const contentType = 'image/svg+xml';

export default function Icon() {
  return new ImageResponse(
    (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
        <rect width="16" height="16" rx="3" fill="#4A90E2" />
        <path d="M4 4h8v2H6v2h4v2H6v2H4V4z" fill="#fff" />
      </svg>
    ),
    {
      ...size,
    }
  );
}
