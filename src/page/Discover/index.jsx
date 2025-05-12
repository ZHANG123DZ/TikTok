import styles from './Discover.module.scss';

function Discover() {
  return (
    <div className={styles['StyledShareLayoutV2-ExploreLayout']}>
      <div className={styles.DivShareLayoutContentV2}>
        {/* DivCategoryListWrapper */}
        <div className={styles.DivCategoryListWrapper}></div>
        {/* DivThreeColumnContainer */}
        <div className={styles.DivThreeColumnContainer}>
          <div className={styles.DivVideoFeedV2}>
            <div className={styles.DivItemContainerV2}>
              <div className={styles['DivContainer-StyledDivContainerV2']}>
                <div style={{ paddingTop: '133.333%' }}>
                  {/* <div className={styles.DivWrapper}>
                    <a href="" className={styles.AVideoContainer}>
                      <canvas className={styles.CanvasPlaceholder}></canvas>
                      <div className={styles.DivPlayerContainer}>
                        <div className={styles.DivContainer}>
                          <div></div>
                        </div>
                      </div>
                    </a>
                  </div> */}
                </div>
              </div>
              <div className={styles.DivVideoExploreCardDesc}>
                <div className={styles.DivCardBottomInfo}>
                  <div className={styles.DivPlayLine}>
                    <div className={styles.DivUserInfo}>
                      <a href="#">
                        <span
                          className={styles.SpanAvatarContainer}
                          style={{ width: '24px', height: '24px' }}
                        >
                          <img src="#" alt="" className={styles.ImgAvatar} />
                        </span>
                      </a>
                      <a href="" style={{ overflow: 'hidden' }}>
                        <p className={styles.PUniqueId}>Acc TikTok</p>
                      </a>
                    </div>
                    <div className={styles.DivExploreCardText}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discover;
