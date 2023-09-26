import React, { useState } from "react";

import {
  HowlZone,
  HowlPost,
  HowlPostButton,
  HowlPostInput,
  HowlPostWrapper,
  HowlPosts,
} from "../../StyledComponents/HomeStyle/Section2/HowlZone";

const HowlZoneSection = () => {
  const [holwContent, setHowlContent] = useState("");
  return (
    <HowlZone>
      <HowlPostWrapper>
        <HowlPostInput
          value={holwContent}
          onChange={(e) => {
            setHowlContent(e.target.value);
          }}
          placeholder="what's your plan?"
        ></HowlPostInput>
        {holwContent && <HowlPostButton>게시</HowlPostButton>}
      </HowlPostWrapper>
      <HowlPosts>
        <HowlPost>
          dqdoqwkdoqwkdwodkqwodkwqodwqkdowqkdoqdkqodkqodwqkdoqk
        </HowlPost>
        <HowlPost>
          dqdoqwkdoqwkdwodkqwodkwqodwqkdowqkdoqdkqodkqodwqkdoqk
        </HowlPost>
        <HowlPost>
          dqdoqwkdoqwkdwodkqwodkwqodwqkdowqkdoqdkqodkqodwqkdoqk
        </HowlPost>
        <HowlPost>
          dqdoqwkdoqwkdwodkqwodkwqodwqkdowqkdoqdkqodkqodwqkdoqk
        </HowlPost>
        <HowlPost>
          dqdoqwkdoqwkdwodkqwodkwqodwqkdowqkdoqdkqodkqodwqkdoqk
        </HowlPost>
        <HowlPost>
          dqdoqwkdoqwkdwodkqwodkwqodwqkdowqkdoqdkqodkqodwqkdoqk
        </HowlPost>
        <HowlPost>
          dqdoqwkdoqwkdwodkqwodkwqodwqkdowqkdoqdkqodkqodwqkdoqk
        </HowlPost>
        <HowlPost>
          dqdoqwkdoqwkdwodkqwodkwqodwqkdowqkdoqdkqodkqodwqkdoqk
        </HowlPost>
        <HowlPost>
          dqdoqwkdoqwkdwodkqwodkwqodwqkdowqkdoqdkqodkqodwqkdoqk
        </HowlPost>
        <HowlPost>
          dqdoqwkdoqwkdwodkqwodkwqodwqkdowqkdoqdkqodkqodwqkdoqk
        </HowlPost>
        <HowlPost>
          dqdoqwkdoqwkdwodkqwodkwqodwqkdowqkdoqdkqodkqodwqkdoqk
        </HowlPost>
        <HowlPost>
          dqdoqwkdoqwkdwodkqwodkwqodwqkdowqkdoqdkqodkqodwqkdoqk
        </HowlPost>
        <HowlPost>
          dqdoqwkdoqwkdwodkqwodkwqodwqkdowqkdoqdkqodkqodwqkdoqk
        </HowlPost>
        <HowlPost>
          dqdoqwkdoqwkdwodkqwodkwqodwqkdowqkdoqdkqodkqodwqkdoqk
        </HowlPost>
        <div>dqdoqwkdoqwkdwodkqwodkwqodwqkdowqkdoqdkqodkqodwqkdoqk</div>
        <div>dqdoqwkdoqwkdwodkqwodkwqodwqkdowqkdoqdkqodkqodwqkdoqk</div>
        <div>dqdoqwkdoqwkdwodkqwodkwqodwqkdowqkdoqdkqodkqodwqkdoqk</div>
        <div>dqdoqwkdoqwkdwodkqwodkwqodwqkdowqkdoqdkqodkqodwqkdoqk</div>
        <div>dqdoqwkdoqwkdwodkqwodkwqodwqkdowqkdoqdkqodkqodwqkdoqk</div>
        <div>dqdoqwkdoqwkdwodkqwodkwqodwqkdowqkdoqdkqodkqodwqkdoqk</div>
        <div>dqdoqwkdoqwkdwodkqwodkwqodwqkdowqkdoqdkqodkqodwqkdoqk</div>
        <div>dqdoqwkdoqwkdwodkqwodkwqodwqkdowqkdoqdkqodkqodwqkdoqk</div>
      </HowlPosts>
    </HowlZone>
  );
};

export default HowlZoneSection;
