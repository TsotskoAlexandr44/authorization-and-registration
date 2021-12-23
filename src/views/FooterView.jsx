import styled from 'styled-components';

const FooterTag = styled.footer`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  min-height: 70px;
  padding-left: 20px;
  padding-right: 20px;
  height: 56px;
  background-color: #03032e;
  border-top: 1px solid #e2e3e5;
  font-family: 'Montserrat', sans-serif;
  color: rgba(255, 255, 255, 0.4);
  font-size: 12px;
  line-height: 14px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Chip = styled.span`
  margin-left: 10px;
  position: relative;
`;

const FooterСopyright = styled.span`
  font-size: 18px;
`;

export const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <FooterTag>
      <FooterСopyright> &copy; </FooterСopyright>
      <Chip> {year} All Rights Reserved</Chip>
    </FooterTag>
  );
};
