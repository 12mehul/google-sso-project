"use client";
import Sidebar from "../components/Sidebar/page";
import { RootState } from "../redux/store/store";
import styles from "./profile.module.scss";
import { useSelector } from "react-redux";

export default function Home() {
  const { user } = useSelector((state: RootState) => state.auth);
  console.log(user);
  return (
    <div>
      <Sidebar />
      <div className={styles.firstbody}>
        <div className={styles.navbarTop}>
          <div className={styles.title}>
            <h1>Profile</h1>
          </div>
        </div>
        <div className={styles.sidenav}>
          <div className={styles.profile}>
            <img src={user?.picture} alt="" width="100" height="100" />
          </div>

          <div className={styles.sidenavUrl}>
            <div className={styles.url}>
              <a href="#profile" className={styles.active}></a>
              <hr />
            </div>
          </div>
        </div>
        <div className={styles.main}>
          <h2>IDENTITY</h2>
          <div className={styles.card}>
            <div className={styles.cardbody}>
              <table>
                <tbody>
                  <tr>
                    <td>First Name</td>
                    <td>:</td>
                    <td>{user?.given_name}</td>
                  </tr>
                  <tr>
                    <td>Last Name</td>
                    <td>:</td>
                    <td>{user?.family_name}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>:</td>
                    <td>{user?.email}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
