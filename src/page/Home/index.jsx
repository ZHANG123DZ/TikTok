import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Home.module.scss';
import {
  faEllipsis,
  faHeart,
  faPlus,
  faVolumeXmark,
} from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import Button from '../../component/Button';
import CommentTab from '../../component/CommentTab';
import Article from '../../component/Article';
import { getPosts } from '../../services/Posts/Posts.service';
import { useEffect } from 'react';
import { useState } from 'react';

function Home() {
  const [post, setPost] = useState(null);

  useEffect(() => {
  const getData = async () => {
    const data = await getPosts();
    if (data.data.length > 0) {
      const random = data.data[Math.floor(Math.random() * data.data.length)];
      setPost(random);
    }
  };
  
  getData();
}, []);

  return (
    <main className={styles.DivMainContainer}>
      {post && (
        <>
        <div className={styles.DivColumnListContainer}>
        <Article data={post} setPosts={setPost}/>
      </div>
      <CommentTab post_id={post.id}/>
      </>)}
    </main>
  );
}

export default Home;
