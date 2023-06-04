import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";

import { Container, ProfilePicture, ProfileDetails } from "./styles";
import ExternalLink from "../../../../components/ExternalLink";

const Profile: React.FC = () => {
  return (
    <Container>
      <ProfilePicture src="https://github.com/joao911.png" />
      <ProfileDetails>
        <header>
          <h1>João Paulo Duarte</h1>
          <ExternalLink text="GitHub" href="#" />
        </header>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
          eveniet!
        </p>
        <ul>
          <li>
            {" "}
            <FontAwesomeIcon icon={faGithub} /> Joao911
          </li>
          <li>
            {" "}
            <FontAwesomeIcon icon={faBuilding} />
            Sales Journay
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            123 seguidores
          </li>
        </ul>
      </ProfileDetails>
    </Container>
  );
};

export default Profile;
