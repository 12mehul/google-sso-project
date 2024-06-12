import React from 'react'
import styles from '../../page.module.scss'

function Sidebar() {
  return (
        <div className={styles.container}>
        <div className={styles.navigation}>
            <ul>
                <li>
                    <a href="#">
                        <span className={styles.title}>Charts</span>
                    </a>
                </li>

                <li>
                    <a href="/">
                        <span className={styles.title}>Dashboard</span>
                    </a>
                </li>

                <li>
                    <a href="/profile">
                        <span className={styles.title}>Profile</span>
                    </a>
                </li>

            </ul>
        </div>
        </div>
  )
}

export default Sidebar