import React from 'react'
import styles from './page.module.scss'
import MyChartComponent from './components/Chart/page'
import Sidebar from './components/Sidebar/page'

function page() {
  return (
    <body>
    <div className={styles.container}>
      <Sidebar />
        <div className={styles.main}>
            <div className={styles.topbar}>
                <div className={styles.toggle}></div>
                <div className={styles.user}>
                    <img src="/customer01.jpg" alt=""/>
                </div>
            </div>
            <MyChartComponent />
        </div>
    </div>
    </body>
  )
}

export default page