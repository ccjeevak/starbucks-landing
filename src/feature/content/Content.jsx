import facebook from "../../assets/images/facebook.png";
import tw from "../../assets/images/twitter.png";
import insta from "../../assets/images/instagram.png";
import THUMBNAILS from "../../common/utils/thumbnails";
import { ClippedCircle } from "../../common/components";
import { useState } from "react";
import "./style.css";
const Content = () => {
  const [thumbIndex, setThumbIndex] = useState(0)
  return (
    <>
    <ClippedCircle thumbIndex={thumbIndex}/>
    <div className="content">
      <div className="text-box">
        <h2>
          It's not just coffee <br></br>It's <span>Starbucks</span>
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <a href="/">Learn More</a>
      </div>
      <div className="img-box">
        <img src={THUMBNAILS[thumbIndex]?.image} />
      </div>
      <div className="thumb">
        <ul>
          {THUMBNAILS.map(({ id, thumb }, index) => (
            <li key={id} onClick={() => setThumbIndex(index)}>
              <img src={thumb} />
            </li>
          ))}
        </ul>
      </div>
      <div className="social-links">
        <ul>
          <li>
            <img src={facebook} />
          </li>
          <li>
            <img src={tw} />
          </li>
          <li>
            <img src={insta} />
          </li>
        </ul>
      </div>
    </div>
    </>
  );
};
export default Content;
