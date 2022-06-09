import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'

export function Sidebar() {
  return(
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src="https://images.pexels.com/photos/5327045/pexels-photo-5327045.jpeg" 
      />
      <div className={styles.profile}>
        <img 
          className={styles.avatar}
          src="https://github.com/vargastm.png" 
        />
        <strong>Tiago Martins Vargas</strong>
        <span>Web Developer</span>

        <footer>
          <a href="#">
            <PencilLine size={20}/>
            Editar seu perfil
          </a>
        </footer>
      </div>
    </aside>
  )
}