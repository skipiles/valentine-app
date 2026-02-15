import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../store'
import { setPage } from '../../store/photosSlice'
import PhotoGrid from '../../components/Gallery/PhotoGrid'
import styles from './PhotosPage.module.scss'
import { motion, AnimatePresence } from 'framer-motion' // добавить импорт

const PhotosPage: React.FC = () => {
  const dispatch = useDispatch()
  const { list, page, perPage } = useSelector(
    (state: RootState) => state.photos,
  )

  const totalPages = Math.ceil(list.length / perPage)
  const start = (page - 1) * perPage
  const currentPhotos = list.slice(start, start + perPage)

  const handlePrev = () => {
    if (page > 1) dispatch(setPage(page - 1))
  }

  const handleNext = () => {
    if (page < totalPages) dispatch(setPage(page + 1))
  }

  return (
    <div className={styles.container}>
      <h2 className="page-title">Наши фотографии</h2>
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <PhotoGrid photos={currentPhotos} />
        </motion.div>
      </AnimatePresence>
      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            onClick={handlePrev}
            disabled={page === 1}
            className="glass-card"
          >
            ←
          </button>
          <span className={`glass-card ${styles.pageIndicator}`}>
            {page} / {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={page === totalPages}
            className="glass-card"
          >
            →
          </button>
        </div>
      )}
    </div>
  )
}

export default PhotosPage
