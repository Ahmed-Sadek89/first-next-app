import React from 'react'
import styles from './page.module.css';

const PortfolioLayout = ({children}) => {
  return (
    <>
        <h2 className={styles.portfolio_h2}>Our Works</h2>
        {children}
    </>
  )
}

export default PortfolioLayout