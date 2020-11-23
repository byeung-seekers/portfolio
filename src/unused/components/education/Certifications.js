import React from "react"

import certificationsStyle from "./certifications.module.scss"

const Cerifications = () => {
  return (
    <ul className={certificationsStyle.container}>
      <li>
        Bloomberg LP
        <span className={certificationsStyle.certificate}>
          Bloomberg Market Concepts
        </span>
      </li>
      <li>
        Centre for Social Impact
        <span className={certificationsStyle.certificate}>
          Certificate in Responsible Leadership
        </span>
      </li>
      <li>
        Breaking Into Wall Street
        <span className={certificationsStyle.certificate}>
          Financial Modelling Fundamentals, Excellence with Excel
        </span>
      </li>
      <li>
        Vocational Training Council
        <span className={certificationsStyle.certificate}>
          Insurance Intermediaries Qualifying Examination: Paper I, III, IV
        </span>
      </li>
    </ul>
  )
}

export default Cerifications
