import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './StoryPage.module.scss'

const StoryPage: React.FC = () => {
  const story = useSelector((state: RootState) => state.story)

  return (
    <div className={styles.container}>
      <h2 className="page-title">{story.title}</h2>
      <div className={styles.content}>
        {story.content.map((paragraph, index) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
          return (
            <motion.div
              key={index}
              ref={ref}
              className={`${styles.storyCard} glass-card`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p>{paragraph}</p>
            </motion.div>
          )
        })}
        <div className={styles.storyPhotos}>
          {story.photos.map((photo, idx) => (
            <motion.img
              key={photo.id}
              src={photo.url}
              alt={photo.description}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default StoryPage
