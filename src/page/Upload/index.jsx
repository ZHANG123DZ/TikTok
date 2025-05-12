import { createPost } from "../../services/Posts/Posts.service";
import styles from "./styles.module.scss"

function Upload() {

    const fetchPosts = async (event) => {
        event.preventDefault();
        const form = event.target;

        const data = {
            title: form.title.value,
            content: form.content.value,
            image: form.image.value,
        };
        try {
          const newPost = await createPost(data);
        }
        catch(error) {
          console.log(error);
        } finally {
            form.reset();
        }
    }

  return (
    <div className={styles['form-container']}>
        <h2>Đăng Bài Mới</h2>
        <form onSubmit={(event) => fetchPosts(event)}>
            <label htmlFor="title" className={styles.labelUpload}>Tiêu đề</label>
            <input type="text" id="title" name="title" placeholder="Nhập tiêu đề..." className={styles.labelUpload}/>

            <label htmlFor="content" className={styles.labelUpload}>Nội dung</label>
            <textarea id="content" name="content" rows="5" placeholder="Viết nội dung..." className={styles.textareaUpload}></textarea>

            <label htmlFor="image" className={styles.labelUpload}>Hình ảnh</label>
            <textarea id="image" name="image" className={styles.textareaUpload} placeholder="Nhập url của ảnh"/>
            <button type="submit">Đăng bài</button>
        </form>
    </div>
  )
}

export default Upload;
