import React from "react";

import ProfileWrapper from "../StyledComponents/HomeStyle/ProfileStyle/ProfileWrapper";

import { ProfileImg } from "../StyledComponents/HomeStyle/ProfileStyle/ProfileImg";

const Profile = ({ nickname }) => {
  return (
    <ProfileWrapper>
      <ProfileImg />
      <div>{nickname}</div>
    </ProfileWrapper>
  );
};

export default Profile;
