import ListItemText from "@mui/material/ListItemText";
import styled from "styled-components";

export const Img = styled.img`
  @media (min-width: 0px) {
    width: 100%;
    float: initial;
  }
  @media (min-width: 900px) {
    width: 95%;
    float: right;
  }
`;
export const DetailsContainer = styled.div`
  // padding: 20px 40px;
  @media (min-width: 0px) {
    margin-inline-start: 0px;
    padding: 0px 20px;
  }
  @media (min-width: 900px) {
    max-width: 500px;
    margin-inline-start: 20px;
    padding: 40px;
  }
  margin-inline-start: 20px;
  position: relative;
  border-style: solid;
  border-color: rgb(204 204 204) !important;
  border-width: 1px;
  border-radius: 1px;
  background-color: white;
  color: black;
`;

export const StyledListItemText = styled(ListItemText)`
  > span {
    font-family: "Poppins" !important;
  }
  padding: 5px;
`;
