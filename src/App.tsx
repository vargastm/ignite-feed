import { Header } from "./Components/Header/Header"
import { Sidebar } from "./Components/Sidebar/Sidebar"
import { Post } from "./Components/Post/Post"


import styles from './App.module.css'
import './global.css'

function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
        </main>
      </div>
    </>
  )
}

export default App
