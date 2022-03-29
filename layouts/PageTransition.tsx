import { motion, useReducedMotion } from 'framer-motion'

type Props = {
  children: React.ReactNode
}

const pageVariants = {
  initial: {
    opacity: 0,
    x: 0,
    scale: 0.8
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    x: '100vw',
    scale: 1.2
  }
}

const transisitionStyle = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.8
}

const PageTransition = ({ children, ...props }: Props): JSX.Element => {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) return <>{children}</>

  return (
    <motion.div
      initial='initial'
      animate='in'
      exit='out'
      variants={pageVariants}
      transition={transisitionStyle}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default PageTransition
