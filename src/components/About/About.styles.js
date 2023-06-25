import styled from "styled-components";
import { clr, fSize, padding } from "../../globalStyle";

export const Wrapper = styled.div `
  ${padding.section}
  background-color: ${clr.bodyBgGray};
`

export const Description = styled.div `
  text-align: center;
  margin-bottom: 2rem;
  p {
    margin-top: 1rem;
    bottom: 1rem;
  }
`

export const MainText = styled.p `
  font-size: ${fSize.titleXLg};
  font-weight: 600;
  line-height: ${`calc(${fSize.titleXLg} + .5rem)`};
  margin-bottom: 2rem;
`

export const SkillsList = styled.ul `
  display: flex;
  justify-content: space-between;
  gap: .5rem;
`

export const SkillCard = styled.li `
  background-color: ${clr.bodyBg};
  border: 1px solid ${clr.borderGray};
  width: 26%;
  padding: 2rem;
  ul
  {
    display: flex;
    flex-wrap: wrap;
    li {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: .5rem;
      font-size: 500;
      width: 50%;
      margin-bottom: .75rem;
      font-weight: 500;
      &{
        padding-bottom: .5rem;
      }

      p {
        font-size: ${fSize.xsmall};
        font-weight: 600;
        color: ${clr.textLight};
        text-transform: uppercase;
        display: block;
        padding-left: 1.5rem;
        width: 100%;
      }
    }
  }
`

export const SkillHeader = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2.5rem;
  font-size: ${fSize.title};

  h3 {
    font-weight: 500;
  }
`
