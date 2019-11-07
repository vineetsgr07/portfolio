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
        Personal Blog by <a href="http://www.vineetsagar.space/about">Vineet</a>
        <div>Connecting the gap between technologies... </div>
      </p>
    </div>
  )
}

export default Bio
