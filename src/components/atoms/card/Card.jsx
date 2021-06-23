import styled from "styled-components";

export const Card = ({ children }) => {
  return <SCard>{children}</SCard>;
};

const SCard = styled.div`
  background-color: #fff;
  box-shadow: #ddd 0 0 4px 2px;
  border-radius: 8px;
  padding: 16px;
`;
