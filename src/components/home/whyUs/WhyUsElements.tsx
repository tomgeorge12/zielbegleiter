import styled from "styled-components";

export const Img = styled.img`
  @media (min-width: 0px) {
    width: 100%;
    float: initial;
  }
  @media (min-width: 900px) {
    width: 65%;
    // float: right;
  }
  // height: 80%;
  // margin-inline-start: 20px;
`;
export const DetailsContainer = styled.div`
  padding: 40px;
  @media (min-width: 0px) {
    padding: 20px;
  }
  @media (min-width: 900px) {
    margin-right: 20px;
    // margin-inline-start: 20px;
    margin-inline-start: 40px;
    padding: 40px;
    width: 65%;
    float: right;
  }
  position: relative;
  background-color: white;
  border-style: solid;
  border-color: rgb(204 204 204) !important;
  border-width: 1px;
  border-radius: 1px;
`;
