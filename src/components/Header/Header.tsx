import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import nachalo from '../../assets/images/nachalo.jpg'
import fotografi from '../../assets/images/fotografi.jpg'
import vospominani from '../../assets/images/vospominani.jpg'
import istori2 from '../../assets/images/istori2.jpg'

const catIcons = [nachalo, fotografi, vospominani, istori2]

const Header: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <header className={styles.header}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? styles.active : '')}
        onMouseEnter={() => setHoveredIndex(0)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <motion.img
          src={catIcons[0]}
          alt="cat"
          className={styles.catIcon}
          animate={
            hoveredIndex === 0
              ? {
                  scale: [1, 0.8, 1],
                  filter: ['brightness(1)', 'brightness(1.5)', 'brightness(1)'],
                }
              : {}
          }
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
        Начало
      </NavLink>

      <NavLink
        to="/photos"
        className={({ isActive }) => (isActive ? styles.active : '')}
        onMouseEnter={() => setHoveredIndex(1)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <motion.img
          src={catIcons[1]}
          alt="cat"
          className={styles.catIcon}
          animate={
            hoveredIndex === 1
              ? {
                  scale: [1, 0.8, 1],
                  filter: ['brightness(1)', 'brightness(1.5)', 'brightness(1)'],
                }
              : {}
          }
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
        Наши фотографии
      </NavLink>

      <NavLink
        to="/memories"
        className={({ isActive }) => (isActive ? styles.active : '')}
        onMouseEnter={() => setHoveredIndex(2)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <motion.img
          src={catIcons[2]}
          alt="cat"
          className={styles.catIcon}
          animate={
            hoveredIndex === 2
              ? {
                  scale: [1, 0.8, 1],
                  filter: ['brightness(1)', 'brightness(1.5)', 'brightness(1)'],
                }
              : {}
          }
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
        Воспоминания
      </NavLink>

      <NavLink
        to="/story"
        className={({ isActive }) => (isActive ? styles.active : '')}
        onMouseEnter={() => setHoveredIndex(3)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <motion.img
          src={catIcons[3]}
          alt="cat"
          className={styles.catIcon}
          animate={
            hoveredIndex === 3
              ? {
                  scale: [1, 0.8, 1],
                  filter: ['brightness(1)', 'brightness(1.5)', 'brightness(1)'],
                }
              : {}
          }
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
        История
      </NavLink>
    </header>
  )
}

export default Header
