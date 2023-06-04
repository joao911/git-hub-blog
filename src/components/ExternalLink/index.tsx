import React, { ComponentProps, ReactNode } from "react";

import { Container } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

type IExternalLinkProps = ComponentProps<typeof Container> & {
  text: string;
  icon?: ReactNode;
  variant?: "iconLeft";
};

const ExternalLink: React.FC<IExternalLinkProps> = ({
  text,
  icon,
  ...rest
}) => {
  return (
    <Container {...rest}>
      {text}
      {icon ?? <FontAwesomeIcon icon={faUpRightFromSquare} />}
    </Container>
  );
};

export default ExternalLink;
