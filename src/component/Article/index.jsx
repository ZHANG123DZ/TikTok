import { faEllipsis, faHeart, faPlus, faVolumeXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"

import styles from "./styles.module.scss"
import Button from "../Button"
import { useState } from "react"
import PopoverArticle from "../PopArticle"

function Article({data, setPosts}) {
  const [isActive, setActive] = useState(false)
  return (
    <article className={styles.ArticleItemContainer}>
          <div className={styles.DivContentFlexLayout}>
            <section className={styles.SectionMediaCardContainer}>
              <canvas className={styles.CanvasMediaCardPlaceholder}></canvas>
              <div
                className={
                  styles['BasePlayerContainer-DivVideoPlayerContainer']
                }
              >
                <div
                  className={styles.DivContainer}
                  style={{ borderRadius: '16px' }}
                >
                  <div className={styles.thumbnailVideo}>
                    <span className={styles.thumbnailVideoContainer}>
                      <picture>
                        <img
                          src="#"
                          alt="error"
                          className={styles.thumbnailImg}
                        />
                      </picture>
                    </span>
                  </div>
                  <div className={styles.DivBasicPlayerWrapper}>
                    <div
                      className={clsx(
                        styles.DivBasicPlayerWrapper,
                        styles['tiktok-web']
                      )}
                    >
                      <img src={`${data.image}`} alt={data.title} />
                    </div>
                  </div>
                </div>
                <div className={styles.DivActionBGMask}></div>
                <div className={styles.DivMediaCardTop}>
                  <div className={styles.DivMediaControlsTop}>
                    <div className={styles.DivFlexCenter}>
                      <div className={styles.DivAudioControlContainer}>
                        <div className={styles.DivMuteIconContainer}>
                          <FontAwesomeIcon icon={faVolumeXmark} />
                        </div>
                      </div>
                    </div>
                    <div className={styles.DivFlexCenter}>
                      <div className={styles.moreActionSetting}>
                        <Button icon={<FontAwesomeIcon icon={faEllipsis} onClick={() => setActive(true)}/>} />
                        {isActive && (<PopoverArticle data={data} active={isActive} setActive={setActive}/>)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.DivMediaCardBottom}>
                  <div className={styles.CaptionContainer}></div>
                  <div className={styles.DivANchorTagContainer}>
                    <div className={styles.DivAnchorTagWrapper}></div>
                  </div>
                  <div className={styles.DivInlineMusicAndIconContainer}>
                    <div className={styles.DivFlexColumn}>
                      <div className={styles.DivAuthorContentWrapper}>
                        <div className={styles.DivAuthorContainer}>
                          <a href="#" className={styles.StyledAuthorAnchor}>
                            <h3 className={styles.H3AuthorTitle}>
                              {data.author}
                            </h3>
                          </a>
                        </div>
                      </div>
                      <div className={styles.DivDescriptionWrapper}>
                        <div className={styles.DivMultilineTextContainer}>
                          <div className={styles.DivMultilineText}>
                            <div
                              className={styles.DivDescriptionContentContainer}
                            >{data.content}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.DivPlayerControlsRight}></div>
                  </div>
                </div>
                <div className={styles.DivVideoProgressContainer}>
                  <p></p>
                  <div className={styles.DivProgressBar}>
                    <div className={styles.DivProgressBarScrubHead}></div>
                    <div className={styles.DivProgressBarContainer}>
                      <div className={styles.DivProgressBarElapsed}></div>
                      <div className={styles.DivProgressBarBounds}></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles.SectionActionBarContainer}>
              <div className={styles.DivAvatarActionItemContainer}>
                <a href="#" className={styles.AvatarLink}>
                  <div
                    className={styles.DivAvatarActionItemContainer}
                    style={{ width: '48px', height: '48px' }}
                  >
                    <div className={styles.DivAvatarWrapper}>
                      <span
                        className={styles.DivAvatarActionItemContainer}
                        shape="circle"
                        style={{ width: '48px', height: '48px' }}
                      >
                        <img src="#" alt="" className={styles.ImgAvatar} />
                      </span>
                    </div>
                  </div>
                </a>
                <button className={styles['Button-StyledAvatarFollowButton']}>
                  <div className={styles.ButtonContent}>
                    <FontAwesomeIcon icon={faPlus} />
                  </div>
                </button>
              </div>
              <button className={styles.ButtonActionItem}>
                <span
                  className={styles.SpanIconWrapper}
                  style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </span>
                <strong className={styles.StrongText}>Lượt thích</strong>
              </button>
              <button className={styles.ButtonActionItem}>
                <span className={styles.SpanIconWrapper}>
                  <FontAwesomeIcon icon={faHeart} />
                </span>
                <strong className={styles.StrongText}>Lượt thích</strong>
              </button>
              <button className={styles.ButtonActionItem}>
                <span className={styles.SpanIconWrapper}>
                  <FontAwesomeIcon icon={faHeart} />
                </span>
                <strong className={styles.StrongText}>Lượt thích</strong>
              </button>
              <a href="#">
                <div className={styles.MusicCoverDisc}></div>
              </a>
            </section>
          </div>
        </article>
  )
}

export default Article
