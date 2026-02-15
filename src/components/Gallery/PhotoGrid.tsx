import React from 'react'
import type { Photo } from '../../types'
import styles from './PhotoGrid.module.scss'

interface PhotoGridProps {
  photos: Photo[]
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ photos }) => {
  return (
    <div className={styles.grid}>
      {photos.map((photo) => (
        <div key={photo.id} className={styles.item}>
          <img src={photo.url} alt={photo.description || 'photo'} />
          {photo.description && (
            <p className={styles.description}>{photo.description}</p>
          )}
        </div>
      ))}
    </div>
  )
}

export default PhotoGrid
