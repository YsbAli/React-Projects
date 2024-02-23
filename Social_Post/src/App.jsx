import React from "react";
// import Post from "./components/Post/Post";
// import Posts from "./components/Post/Posts";
import SocialPost from "./components/SP/SocialPost";

import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  gap: 20px;
  flex-wrap: wrap;
`;

const App = () => {
  return (
    <>
      <MainContainer>
        {/* <p>This is just for practice</p> */}
        {/* <Post /> */}
        {/* <Posts/> */}
        <SocialPost
          // image={}
          content={
            <p>
              This is best bike in the world, Everyone Love this model,This is
              best bike in the world, Everyone Love this model
            </p>
          }
        />
        {/* <SocialPost
          content={
            <p>
              This is best bike in the world, Everyone Love this model,This is
              best bike in the world, Everyone Love this model
            </p>
          }
        />
        <SocialPost
          content={
            <p>
              This is best bike in the world, Everyone Love this model,This is
              best bike in the world, Everyone Love this model
            </p>
          }
        />
        <SocialPost
          content={
            <p>
              This is best bike in the world, Everyone Love this model,This is
              best bike in the world, Everyone Love this model
            </p>
          }
        />
        <SocialPost
          content={
            <p>
              This is best bike in the world, Everyone Love this model,This is
              best bike in the world, Everyone Love this model
            </p>
          }
        />
        <SocialPost
          content={
            <p>
              This is best bike in the world, Everyone Love this model,This is
              best bike in the world, Everyone Love this model
            </p>
          }
        />
        <SocialPost
          content={
            <p>
              This is best bike in the world, Everyone Love this model,This is
              best bike in the world, Everyone Love this model
            </p>
          }
        /> */}
      </MainContainer>
    </>
  );
};

export default App;
