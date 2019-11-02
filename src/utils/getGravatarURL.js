import md5 from 'blueimp-md5'
import vineetImage from './vineet.jpg';

export function getGravatarURL({ email, size, defaultURL = 'identicon' }) {
  let hash = md5(email.toLowerCase().trim())
  return vineetImage
}
