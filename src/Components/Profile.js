import React from "react";

import ProfileImg from "../StyledComponents/HomeStyle/ProfileStyle/ProfileImg";
import ProfileWrapper from "../StyledComponents/HomeStyle/ProfileStyle/ProfileWrapper";

const Profile = ({ nickname }) => {
  return (
    <ProfileWrapper>
      <ProfileImg />
      <div>{nickname}</div>
    </ProfileWrapper>
  );
};

export default Profile;
