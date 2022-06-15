import styles from './Avatar.module.css'

interface PropsAvatar {
  src: string
  hasBorder?: boolean
}

export function Avatar({src, hasBorder = true}:PropsAvatar) {
  return(
    <img 
      className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
      src={src}
    />
  )
}