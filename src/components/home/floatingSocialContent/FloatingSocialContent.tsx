import styled from "styled-components";
import Fb from "../../../assets/logo/fb.png";
import Insta from "../../../assets/logo/insta.png";
import Mail from "../../../assets/logo/mail.png";

const FloatingSection = styled.div`
  @media (min-width: 0px) {
    display: block;
    margin-top: 10px;
  }
  @media (min-width: 900px) {
    position: fixed;
    margin: 0;
    right: 0px;
    top: auto;
    left: 10px;
    bottom: 8px;
    display: inline-grid;
  }
  cursor: pointer;
`;

const Icon = styled.img`
  width: 30px;
  margin: 2px;
  &:hover {
    width: 32px;
  }
`;

const Links = {
  fb: "https://www.facebook.com/profile.php?id=100089271255318",
  mail: "mailto:info@zielbegleiter.org",
  insta: "https://instagram.com/zielbegleiterofficial?igshid=YmMyMTA2M2Y=",
};

export default function FloatingSocialContent() {
  const handleClick = (link: string) => {
    window.open(link);
  };

  return (
    <FloatingSection>
      <Icon
        src={Insta}
        onClick={() => {
          handleClick(Links.insta);
        }}
      />
      <Icon
        src={Mail}
        onClick={() => {
          handleClick(Links.mail);
        }}
      />
      <Icon
        src={Fb}
        onClick={() => {
          handleClick(Links.fb);
        }}
      />
    </FloatingSection>
  );
}
