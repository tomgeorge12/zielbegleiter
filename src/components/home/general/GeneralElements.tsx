import { Paper } from "@mui/material";
import styled from "styled-components";

// export const Container = styled(Paper)`
//   min-height: 100vh;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   font-size: calc(10px + 2vmin);
// `;
export const Img = styled.img`
  @media (min-width: 0px) {
    width: 100%;
    float: initial;
  }
  @media (min-width: 900px) {
    width: 88%;
    float: right;
  },
`;
export const DetailsContainer = styled.div`
  // padding: 40px;
  @media (min-width: 0px) {
    margin-inline-start: 0px;
    padding: 20px;
  }
  @media (min-width: 900px) {
    margin-inline-start: -50px;
    max-width: 500px;
    padding: 40px;
  }
  position: relative;
  background-color: white;
  border-style: solid;
  border-width: 1px;
  border-radius: 1px;
  border-color: rgb(204 204 204);
`;
