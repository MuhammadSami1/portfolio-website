"use client";
import styled from "styled-components";

interface LoadingProps {
  fullScreen?: boolean;
}

export default function Loading({ fullScreen = true }: LoadingProps) {
  return (
    <StyledWrapper $fullScreen={fullScreen}>
      <div className="spinner">
        <div className="spinner1" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<{ $fullScreen: boolean }>`
  position: ${({ $fullScreen }) => ($fullScreen ? "fixed" : "absolute")};
  top: 0;
  left: 0;
  width: ${({ $fullScreen }) => ($fullScreen ? "100vw" : "100%")};
  height: ${({ $fullScreen }) => ($fullScreen ? "100vh" : "100%")};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;

  .spinner {
    background-image: linear-gradient(rgb(186, 66, 255) 35%, rgb(0, 225, 255));
    width: 100px;
    height: 100px;
    animation: spinning82341 1.7s linear infinite, hue 1s ease-in-out infinite;
    text-align: center;
    border-radius: 50px;
    filter: blur(1px);
    box-shadow: 0px -5px 20px 0px rgb(186, 66, 255),
      0px 5px 20px 0px rgb(0, 225, 255);
    position: relative;
    z-index: 10000;
  }

  .spinner1 {
    background-color: rgb(36, 36, 36);
    width: 100px;
    height: 100px;
    border-radius: 50px;
    filter: blur(10px);
    position: absolute;
    top: 0;
    left: 0;
  }

  @keyframes spinning82341 {
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes hue {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }
`;