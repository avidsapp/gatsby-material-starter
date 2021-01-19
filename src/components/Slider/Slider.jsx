import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import BackgroundSlider from 'gatsby-image-background-slider';
import Button from 'react-md/lib/Buttons/Button';

const Slider = () => (
  <BackgroundSlider
    query={useStaticQuery(graphql`
      query {
        backgrounds: allFile (filter: {sourceInstanceName: {eq: "backgrounds"}}){
          nodes {
            relativePath
            childImageSharp {
              fluid (maxWidth: 4000, quality: 100){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `)}
    initDelay={2} // delay before the first transition (if left at 0, the first image will be skipped initially)
    transition={1} // transition duration between images
    duration={8} // how long an image is shown
    // specify images to include (and their order) according to `relativePath`
    images={["masthead-1.jpg", "masthead-2.jpg", "masthead-3.jpg", "masthead-4.jpg"]}

    // pass down standard element props
    style={{
      // transform: "rotate(-2deg) scale(.9)",
    }}
  >
    <div className="caption">
      <h4>Slider banner title 1</h4>
      <Button raised primary href="/about">Learn More</Button>
    </div>
    <div className="caption">
      <h4>Slider banner title 2</h4>
      <Button raised primary href="/about">Learn More</Button>
    </div>
    <div className="caption">
      <h4>Slider banner title 3</h4>
      <Button raised primary href="/about">Learn More</Button>
    </div>
    <div className="caption">
      <h4>Slider banner title 4</h4>
      <Button raised primary href="/about">Learn More</Button>
    </div>
  </BackgroundSlider>
);

export default Slider;
