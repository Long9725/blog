import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./profile.box.module.css"

const ProfileBox = () => (
  <div className={styles.container}>
    <StaticImage
      src="../images/profile.png"
      width={200}
      height={200}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="My profile image"
      className={styles.item}
    />
    <div className={styles.item}>
      <h1>장성호</h1>
      <h4>개발자를 꿈꾸는 학생입니다.</h4>
      <div className={styles.item}>
        <a href="https://instagram.com/sh_z_1119">
          <StaticImage
            src="../images/icons/icon-instagram.png"
            width={20}
            height={20}
            quality={95}
            alt="Instagram icon"
            style={{ margin: `0.3rem` }}
          />
          sh_z_1119
        </a>
        <br />
        <a href="mailto://develop9725@gmail.com">
          <StaticImage
            src="../images/icons/icon-gmail.png"
            width={27}
            height={20}
            quality={95}
            alt="Gmail icon"
            style={{ margin: `0.3rem` }}
          />
          develop9725@gmail.com
        </a>
        <br />
        <a href="https://github.com/Long9725">
          <StaticImage
            src="../images/icons/icon-github.png"
            width={21}
            height={21}
            quality={95}
            alt="Github icon"
            style={{ margin: `0.3rem` }}
          />
          Long9725
        </a>
      </div>
    </div>
  </div>
)

export default ProfileBox
