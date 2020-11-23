// import React from "react"
// import { graphql } from "gatsby"
// import Img from "gatsby-image"

// import PageLayout from "../components/pageLayout/PageLayout"
// import HelmetHeader from "../components/pageLayout/Helmet"
// import Header from "../components/pageLayout/Header"

// import projectStyles from "./projects.module.scss"

// const ProjectsPage = ({ data }) => {
//   return (
//     <PageLayout>
//       <HelmetHeader
//         title="Projects"
//         description="Website and illustration projects using HTML, CSS, JavaScript, React, and more for Benjamin Yeung's resume portfolio website."
//         keyWords="benjamin,yeung,resume,portfolio,projects,html,css,javascript,react,adobe,website,illustration"
//       />
//       <div>
//         <Header title="Websites &#128376;" />
//         <div className={projectStyles.originalWebsites}>
//           <h3 className={projectStyles.subheading}>Original Websites</h3>
//           <div>
//             <a
//               href="https://photos.app.goo.gl/iPDgf3AXrgeu5NWS7"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Img
//                 className={projectStyles.image}
//                 fixed={data.imageOne.childImageSharp.fixed}
//               />
//             </a>
//             <a
//               href="https://photos.app.goo.gl/NeM47gUJftVmZBV36"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Img
//                 className={projectStyles.image}
//                 fixed={data.imageTwo.childImageSharp.fixed}
//               />
//             </a>
//             <a
//               href="https://photos.app.goo.gl/kPbHJuMfYXVF29di7"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Img
//                 className={projectStyles.image}
//                 fixed={data.imageThree.childImageSharp.fixed}
//               />
//             </a>
//             <a
//               href="https://photos.app.goo.gl/fZWZKDukvzxB9i6T9"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Img
//                 className={projectStyles.image}
//                 fixed={data.imageFour.childImageSharp.fixed}
//               />
//             </a>
//             <a
//               href="https://photos.app.goo.gl/JeeprLLze49nfPNVA"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Img
//                 className={projectStyles.image}
//                 fixed={data.imageFive.childImageSharp.fixed}
//               />
//             </a>
//             <a
//               href="https://photos.app.goo.gl/DvAkWoEihJJFko887"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Img
//                 className={projectStyles.image}
//                 fixed={data.imageSix.childImageSharp.fixed}
//               />
//             </a>
//           </div>
//         </div>

//         <div>
//           <h3 className={projectStyles.subheading}>
//             Website coded based on existing designs. All credit goes to{" "}
//             <a
//               href="https://www.udemy.com/advanced-css-and-sass/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Jonas Schmedtmann.
//             </a>
//           </h3>
//           <div>
//             <a
//               href="https://photos.app.goo.gl/SvxCHr68u1BZYLht7"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Img
//                 className={projectStyles.image}
//                 fixed={data.natours.childImageSharp.fixed}
//               />
//             </a>
//             <a
//               href="https://photos.app.goo.gl/XTmuXzMnD6MX6e5K9"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Img
//                 className={projectStyles.image}
//                 fixed={data.nexter.childImageSharp.fixed}
//               />
//             </a>
//             <a
//               href="https://photos.app.goo.gl/H5KMh39zySR576BAA"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Img
//                 className={projectStyles.image}
//                 fixed={data.trillo.childImageSharp.fixed}
//               />
//             </a>
//           </div>
//         </div>
//       </div>

//       <div>
//         <Header title="Illustrations &#128396;" />
//         <div className={projectStyles.originalIllustrations}>
//           <h3 className={projectStyles.subheading}>Original Illustrations</h3>
//           <a
//             href="https://photos.app.goo.gl/cwGq46P1zmFjVSuK6"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Img
//               className={projectStyles.image}
//               fixed={data.imageSeven.childImageSharp.fixed}
//             />
//           </a>
//           <a
//             href="https://photos.app.goo.gl/BkPg1VXDwp1W9E7x6"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Img
//               className={projectStyles.image}
//               fixed={data.imageEight.childImageSharp.fixed}
//             />
//           </a>
//         </div>
//         <div>
//           <h3 className={projectStyles.subheading}>
//             Illustrations based on existing designs. All credit goes to its
//             respective creator.
//           </h3>
//           <a
//             href="https://photos.app.goo.gl/PkX53ebasT9UXyBSA"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Img
//               className={projectStyles.image}
//               fixed={data.imageNine.childImageSharp.fixed}
//             />
//           </a>
//           <a
//             href="https://photos.app.goo.gl/jHiXbRZwqbAQz9cm8"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Img
//               className={projectStyles.image}
//               fixed={data.imageTen.childImageSharp.fixed}
//             />
//           </a>
//           <a
//             href="https://photos.app.goo.gl/uzExG3HYWQC4XFmF9"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Img
//               className={projectStyles.image}
//               fixed={data.imageEleven.childImageSharp.fixed}
//             />
//           </a>
//           <a
//             href="https://photos.app.goo.gl/3kA8CwqJzzAfmRd69"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Img
//               className={projectStyles.image}
//               fixed={data.imageTwelve.childImageSharp.fixed}
//             />
//           </a>
//           <a
//             href="https://photos.app.goo.gl/38riKtuAT5zH1Zmc8"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Img
//               className={projectStyles.image}
//               fixed={data.imageThirteen.childImageSharp.fixed}
//             />
//           </a>
//           <a
//             href="https://photos.app.goo.gl/PMpFQUo2ZqzR8DtF8"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Img
//               className={projectStyles.image}
//               fixed={data.imageFourteen.childImageSharp.fixed}
//             />
//           </a>
//           <a
//             href="https://photos.app.goo.gl/JAyAgV9cwJ1pHEuz8"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Img
//               className={projectStyles.image}
//               fixed={data.imageFiftheen.childImageSharp.fixed}
//             />
//           </a>
//           <a
//             href="https://photos.app.goo.gl/VUnJ9iBcBn5P65YM6"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Img
//               className={projectStyles.image}
//               fixed={data.imageSixteen.childImageSharp.fixed}
//             />
//           </a>
//           <a
//             href="https://photos.app.goo.gl/SH2LFgbcUNAMxdSL6"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Img
//               className={projectStyles.image}
//               fixed={data.imageSeventeen.childImageSharp.fixed}
//             />
//           </a>
//           <a
//             href="https://photos.app.goo.gl/tWe4MGLFt4FD6qpt8"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Img
//               className={projectStyles.image}
//               fixed={data.imageEighteen.childImageSharp.fixed}
//             />
//           </a>
//         </div>
//       </div>
//     </PageLayout>
//   )
// }

// export const fixedImage = graphql`
//   fragment fixedImage on File {
//     childImageSharp {
//       fixed(width: 380, quality: 100) {
//         ...GatsbyImageSharpFixed
//       }
//     }
//   }
// `

// export const pageQuery = graphql`
//   query {
//     imageOne: file(relativePath: { eq: "MIQS.jpg" }) {
//       ...fixedImage
//     }
//     imageTwo: file(relativePath: { eq: "WWE.jpg" }) {
//       ...fixedImage
//     }
//     imageThree: file(relativePath: { eq: "Xiangbala.jpg" }) {
//       ...fixedImage
//     }
//     imageFour: file(relativePath: { eq: "XiangbalaMobile.png" }) {
//       ...fixedImage
//     }
//     imageFive: file(relativePath: { eq: "Sealife.jpg" }) {
//       ...fixedImage
//     }
//     imageSix: file(relativePath: { eq: "PIVOT.jpg" }) {
//       ...fixedImage
//     }
//     natours: file(relativePath: { eq: "Natours.png" }) {
//       ...fixedImage
//     }
//     trillo: file(relativePath: { eq: "Trillo.png" }) {
//       ...fixedImage
//     }
//     nexter: file(relativePath: { eq: "Nexter.png" }) {
//       ...fixedImage
//     }
//     imageSeven: file(relativePath: { eq: "Studying.jpg" }) {
//       ...fixedImage
//     }
//     imageEight: file(relativePath: { eq: "Lockheed.jpg" }) {
//       ...fixedImage
//     }
//     imageNine: file(relativePath: { eq: "Planet.jpg" }) {
//       ...fixedImage
//     }
//     imageTen: file(relativePath: { eq: "Fire.jpg" }) {
//       ...fixedImage
//     }
//     imageEleven: file(relativePath: { eq: "Igloo.jpg" }) {
//       ...fixedImage
//     }
//     imageTwelve: file(relativePath: { eq: "Deer.jpg" }) {
//       ...fixedImage
//     }
//     imageThirteen: file(relativePath: { eq: "Stock.jpg" }) {
//       ...fixedImage
//     }
//     imageFourteen: file(relativePath: { eq: "Cat.jpg" }) {
//       ...fixedImage
//     }
//     imageFiftheen: file(relativePath: { eq: "Human.jpg" }) {
//       ...fixedImage
//     }
//     imageSixteen: file(relativePath: { eq: "Cube.png" }) {
//       ...fixedImage
//     }
//     imageSeventeen: file(relativePath: { eq: "Swamp.png" }) {
//       ...fixedImage
//     }
//     imageEighteen: file(relativePath: { eq: "RetroLowPoly.jpg" }) {
//       ...fixedImage
//     }
//   }
// `

// export default ProjectsPage
