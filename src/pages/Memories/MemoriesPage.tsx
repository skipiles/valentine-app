import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import styles from './MemoriesPage.module.scss'

const MemoriesPage: React.FC = () => {
  const memories = useSelector((state: RootState) => state.memories)

  return (
    <div className={styles.container}>
      <h2 className="page-title">Воспоминания</h2>
      <div className={styles.timeline}>
        {memories.map((memory, index) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
          return (
            <motion.div
              key={memory.id}
              ref={ref}
              className={styles.memoryItem}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {memory.photoUrl && (
                <div className={styles.photo}>
                  <img src={memory.photoUrl} alt={memory.title} />
                </div>
              )}
              <div className={styles.content}>
                <h3>{memory.title}</h3>
                <p>{memory.description}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default MemoriesPage
