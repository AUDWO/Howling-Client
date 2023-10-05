import React from "react";
import Section1 from "../Components/Section1/Section1";
import HomeWraper from "../StyledComponents/HomeStyle/HomeWrapper";

import ProfileCp from "../Components/Profile/ProfileCp";

const Profile = () => {
  return (
    <HomeWraper>
      <Section1 />
      <ProfileCp />
    </HomeWraper>
  );
};

export default Profile;

/**
 * 
 *  <HomeWraper>
      <Section1 />
      <div>안녕</div>
    </HomeWraper>
 */
