import React from 'react'

import Envelope from '../../components/Envelope/Envelope'
import styles from './HomePage.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const valentinePhotos = [
  { id: 'v1', url: '/images/krasota.jpg' },
  { id: 'v2', url: '/images/loveIs.jpg' },
  { id: 'v3', url: '/images/krugli.jpg' },
  { id: 'v4', url: '/images/krasni.jpg' },
  { id: 'v5', url: '/images/kotik.jpg' },
  { id: 'v6', url: '/images/vau.jpg' },
  { id: 'v7', url: '/images/mimi.jpg' },
]

const HomePage: React.FC = () => {
  const message =
    'С днем влюбленных, любимка! ❤️ Я люблю тебя больше всего, что тольк можно. Самая красивая и прекрасная'
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false)

  return (
    <div className={styles.container}>
      <AnimatePresence mode="wait">
        {!isEnvelopeOpen ? (
          <motion.h1
            key="closed"
            className="page-title"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            С Днём святого Валентина!
          </motion.h1>
        ) : (
          <motion.h1
            key="open"
            className="page-title"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            С Днём святого Валентина! ❤️
          </motion.h1>
        )}
      </AnimatePresence>
      <Envelope
        photos={valentinePhotos}
        message={message}
        onToggle={setIsEnvelopeOpen}
      />
    </div>
  )
}

export default HomePage
