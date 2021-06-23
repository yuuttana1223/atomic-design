import { Header } from "../atoms/layout/Header";

export const HeaderOnly = ({ children }) => {
  return (
    <>
      <Header></Header>
      {children}
    </>
  );
};
