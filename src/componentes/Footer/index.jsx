import styled from "styled-components";

const FooterDiv = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px;
  margin-top: 74px;
  background-color: #04244f;
  color: #ffffff;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;

const IconsDiv = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    li {
        display: inline-block;
        margin-right: 32px;
    }
`;

const TextFooter = styled.p`
    font-size: 16px;
    color: white;
    margin: 0;
`;

const Footer = () => {
  return (
    <>
      <FooterDiv>
        <IconsDiv>
          <li>
            <a href="">
              <img src="/public/icones/facebook.svg" alt="icone do facebook" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="/public/icones/twitter.svg" alt="icone do twitter" />
            </a>
          </li>
          <li>
            <a href="">
              <img
                src="/public/icones/instagram.svg"
                alt="icone do instagram"
              />
            </a>
          </li>
        </IconsDiv>
        <TextFooter>
            Desenvolvido por Ilky André.
        </TextFooter>
      </FooterDiv>
    </>
  );
};

export default Footer;
