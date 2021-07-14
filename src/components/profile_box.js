import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const ProfileBox = ({ siteTitle }) => (
  <div>
    <StaticImage
      src="../images/profile.png"
      width={200}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="My profile image"
      style={{ marginBottom: `1.45rem`, borderRadius: "100%" }}
    />
    <h1>장성호</h1>
    <h4>개발자입니다</h4>
    <a href="https://instagram.com/sh_z_1119">
      <StaticImage
        src="../images/icons/icon-instagram.png"
        width={20}
        height={20}
        quality={95}
        alt="Instagram icon"
        style={{ margin: `0.3rem` }}
      />
    </a>
    <a href="mailto://develop9725@gmail.com">
      <StaticImage
        src="../images/icons/icon-gmail.png"
        width={27}
        height={20}
        quality={95}
        alt="Gmail icon"
        style={{ margin: `0.3rem` }}
      />
    </a>
    <a href="https://github.com/Long9725">
      <StaticImage
        src="../images/icons/icon-github.png"
        width={21}
        height={21}
        quality={95}
        alt="Github icon"
        style={{ margin: `0.3rem` }}
      />
    </a>
  </div>
)

export default ProfileBox
