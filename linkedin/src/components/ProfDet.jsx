import { useState, useEffect } from "react";

import ProfileSection from "./ProfileSection";

const ProfDet = ({match}) => {
  const [profileId, setProfileId] = useState(null);

  // 60c89716c193050015871546

  useEffect(() => {
    const getProfiles = async () => {
      let id = match.params.userId
      const apiURL = process.env.REACT_APP_BE_URL
      if (id) {
        let response = await fetch(
          `${apiURL}/profile/${id}`,
          // {
          //   headers: {
          //     Authorization:
          //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM4OTcxNmMxOTMwNTAwMTU4NzE1NDYiLCJpYXQiOjE2MjM3NTg2MTQsImV4cCI6MTYyNDk2ODIxNH0.a8nHWd_m6aYBbyPS4CFTexm_WJ0_K-ZBPC_4QapdJ8c",
          //   },
          // }
        );
        let profiles = await response.json();
        console.log("profiles", profiles);
        setProfileId(profiles);
      }
    };
    getProfiles();
  }, [match.params.userId]);

  return (
    <div>
      {
        <ProfileSection obj={profileId} />
      }
    </div>
  )
};

export default ProfDet;
