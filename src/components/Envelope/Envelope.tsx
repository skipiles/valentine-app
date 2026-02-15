import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './Envelope.module.scss'

interface EnvelopeProps {
  photos: { id: string; url: string }[]
  message: string
  onToggle?: (isOpen: boolean) => void
}

const Envelope: React.FC<EnvelopeProps> = ({ photos, message, onToggle }) => {
  const [isOpen, setIsOpen] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  const handleClick = () => {
    const newState = !isOpen
    setIsOpen(newState)
    onToggle?.(newState)
  }

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 200 // можно настроить
      const newScrollLeft =
        carouselRef.current.scrollLeft +
        (direction === 'left' ? -scrollAmount : scrollAmount)
      carouselRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' })
    }
  }

  return (
    <div className={styles.envelope} onClick={handleClick}>
      <motion.div
        className={`${styles.envelopeInner} ${isOpen ? styles.open : ''}`}
        initial={false}
        animate={{ rotateY: isOpen ? 180 : 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        {/* Лицевая сторона */}
        <div className={styles.front}>
          <motion.div
            className={styles.heartIcon}
            whileHover={{
              scale: [1, 0.8, 1],
              filter: ['brightness(1)', 'brightness(1.5)', 'brightness(1)'],
              transition: { duration: 0.5, ease: 'easeInOut' },
            }}
          >
            <FaHeart />
          </motion.div>
          <span>Открыть валентинку</span>
        </div>

        {/* Внутренняя сторона */}
        <div className={styles.back}>
          <div className={styles.carouselContainer}>
            <button
              className={styles.scrollButton}
              onClick={(e) => {
                e.stopPropagation()
                scroll('left')
              }}
              aria-label="Предыдущие фото"
            >
              ←
            </button>
            <div className={styles.carousel} ref={carouselRef}>
              {photos.map((photo) => (
                <div key={photo.id} className={styles.carouselItem}>
                  <img src={photo.url} alt="valentine" />
                </div>
              ))}
            </div>
            <button
              className={styles.scrollButton}
              onClick={(e) => {
                e.stopPropagation()
                scroll('right')
              }}
              aria-label="Следующие фото"
            >
              →
            </button>
          </div>
          <p className={styles.message}>{message}</p>
        </div>
      </motion.div>
    </div>
  )
}

export default Envelope
