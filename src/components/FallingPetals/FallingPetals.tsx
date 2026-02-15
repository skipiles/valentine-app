import React from 'react'
import { motion } from 'framer-motion'
import styles from './FallingPetals.module.scss'

// Генерируем массив лепестков со случайными параметрами
const usePetals = (count: number) => {
  return React.useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      // eslint-disable-next-line react-hooks/purity
      left: Math.random() * 100, // позиция по горизонтали (в %)
      // eslint-disable-next-line react-hooks/purity
      size: 12 + Math.random() * 20, // размер (px)
      // eslint-disable-next-line react-hooks/purity
      duration: 10 + Math.random() * 15, // время падения (сек)
      // eslint-disable-next-line react-hooks/purity
      delay: Math.random() * -20, // задержка (отрицательная, чтобы сразу начали с разных точек)
      // eslint-disable-next-line react-hooks/purity
      rotation: Math.random() * 360, // начальный поворот
      // eslint-disable-next-line react-hooks/purity
      xOffset: (Math.random() - 0.5) * 60, // смещение по горизонтали при падении
      // eslint-disable-next-line react-hooks/purity
      opacity: 0.5 + Math.random() * 0.3, // прозрачность
    }))
  }, [count])
}

const FallingPetals: React.FC = () => {
  const petals = usePetals(35) // количество лепестков

  return (
    <div className={styles.container}>
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className={styles.petal}
          style={{
            left: `${petal.left}%`,
            width: petal.size,
            height: petal.size * 0.9,
            borderRadius: '50% 50% 0 50%',
            background: 'radial-gradient(circle at 30% 30%, #ffb7c5, #ff8a9f)',
            opacity: petal.opacity,
            rotate: petal.rotation,
            filter: 'blur(0.6px)',
            boxShadow: '0 0 8px rgba(255, 138, 159, 0.3)',
          }}
          initial={{ y: '-10vh', x: 0 }}
          animate={{
            y: ['-10vh', '110vh'],
            x: [0, petal.xOffset, -petal.xOffset, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: 'linear',
            times: [0, 0.3, 0.7, 1],
          }}
        />
      ))}
    </div>
  )
}

export default FallingPetals
