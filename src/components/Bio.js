import React from 'react'
import styles from './Bio.module.css'
import { getGravatarURL } from '../utils/getGravatarURL'

function Bio(props) {
  let photoURL = getGravatarURL({
    email: "test1@example.com",
    size: 56,
  })

  return (
    <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      <img src={photoURL} alt="Me" />
      <p>
        Personal Blog by <a href="https://www.linkedin.com/in/vineet-sagar-76b10628/">Vineet</a>
        <div>Connecting the gap between technologies... </div>
      </p>
    </div>
  )
}

export default Bio
