import styled from 'styled-components';
import {Link} from "react-router-dom";

export const SectionStyle = styled.section`
padding: 20px;
display: flex;
flex-direction: column;
gap: 20px;
`

export const StyledLink = styled(Link)`
  color: red;
  font-weight: 700;
  padding: 6px;
  border: 1px solid red;
width: 100px;
  &.active {
    color: orange;
  }
`;

export const WrapStyle = styled.div`
display: flex;
gap: 20px;
`;

export const CardStyle = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
width: 400px;
`;

export const AddListStyle = styled.ul`
display: flex;
flex-direction: column;
gap: 10px;
font-weight: 500;
text-decoration: underline;
`;

export const FooterStyle = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background: rgba(6, 71, 80, 0.959);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;