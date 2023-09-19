import React from "react";
import {
  Buttons,
  Content,
  Date,
  Description,
  Features,
  Text,
  Title,
  Wrapper,
} from "./Project.styles";
import ButtonLink from "../Buttons/ButtonLink/ButtonLink";
import { iconList } from "../../globalStyle";
import { useState } from "react";

export default function Project({
  image,
  title,
  description,
  features,
  githubLink,
  liveDemoLink,
  textdark,
}) {
  const [textDark, setTextDark] = useState(textdark);

  return (
    <Wrapper
      style={{
        backgroundImage: `url(${image})`,
      }}
      textdark={textdark}
      onMouseEnter={() => setTextDark(textdark ? !textDark : null)}
      onMouseLeave={() => setTextDark(textdark ? !textDark : null)}
      className="project"
    >
      <Description textdark={textdark} className="project__description">
        <Content>
          <Date>2023</Date>
          <Title>{title}</Title>
          <Features>
            {features.map((item, key) => (
              <li key={key}>{item}</li>
            ))}
          </Features>
        </Content>
        <Buttons>
          <ButtonLink btnlight={textDark ? false : true} to={githubLink}>
            Code {iconList.github}
          </ButtonLink>
          <ButtonLink btnlight={textDark ? false : true} to={liveDemoLink}>
            Live Demo {iconList.share}
          </ButtonLink>
        </Buttons>
      </Description>
    </Wrapper>
  );
}
