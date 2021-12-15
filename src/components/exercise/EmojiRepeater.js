import React from 'react'

export default function EmojiRepeater({ emoji, howMany }) {
  return (
    <div>
      {[...Array(howMany)].map((_, index) => (
        <span
          key={index}
          role="img"
          aria-label="emoji"
          style={{ fontSize: '50px' }}
        >
          {emoji}{' '}
        </span>
      ))}
    </div>
  )
}
