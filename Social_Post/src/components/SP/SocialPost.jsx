import React, { useState } from "react";
import styled from "styled-components";
import { AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { MdContentCopy } from "react-icons/md";

const MainContainer = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PostContainer = styled.div`
  width: 400px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`;

const PostImage = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 12px;
`;

const PostContent = styled.p`
  margin-bottom: 12px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  :hover {
    background-color: rgb(218, 213, 213);
  }
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  color: #040404;
  font-size: 1rem;
`;

// const ShareIcon = styled.i`
//   color: #c6e0fc;
//   cursor: pointer;
// `;

const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8px;
  padding: 10px;
  font-size: 1.5rem;
  gap: 10px;
  :hover {
    /* background-color: rgb(218, 213, 213); */
    transform: scale(1.2);
  }
`;

// const SocialMediaIcon = styled.i`
//   font-size: 24px;
//   margin: 0 8px;
//   color: #007bff;
//   cursor: pointer;
// `;

const SocialPost = ({ image, content, link }) => {
  const [showShareIcons, setShowShareIcons] = useState(false);

  const handleShareClick = () => {
    setShowShareIcons(!showShareIcons);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(link);
    alert("Link Copied!");
  };

  return (
    <MainContainer>
      <PostContainer>
        {/* <PostImage src={image} alt="Post Image" /> */}
        <PostImage
          src="https://source.unsplash.com/600x600?bike"
          alt="Post Image"
        />
        <PostContent>{content}</PostContent>
        <ButtonContainer>
          <Button>
            <AiFillLike /> Like
          </Button>
          <Button>
            <FaComment /> Comment
            {/* <FaRegComment/> Comment */}
          </Button>
          <Button onClick={handleShareClick}>
            <FaShareAlt /> Share
          </Button>
        </ButtonContainer>
        {showShareIcons && (
          <SocialMediaIcons>
            <FaWhatsapp />
            <FaFacebookF />
            <FaXTwitter />
            <IoLogoInstagram />
            <MdContentCopy onClick={handleCopyClick} />
          </SocialMediaIcons>
        )}
      </PostContainer>
    </MainContainer>
  );
};

export default SocialPost;
