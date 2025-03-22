import SideNav from "../../component/SideNav"
import TikTokEmbed from "../../Video/TikTokEmbed"
import styles from "./home.module.scss"
function Home() {
  return (
    <div className={styles.MainContent}>
        <TikTokEmbed></TikTokEmbed>
    </div>
  )
}

export default Home
