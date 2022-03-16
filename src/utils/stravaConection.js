const CLIENT_ID = 78962;
const SECRET_CLIENT = "3a6ea96e3bdfa288f9ff4bf1a428ef2dc5b77dc2";
let REFRESH_TOKEN = "57895aaa7835defa7e417fbba4e8d7ba107c9874";
// ###################
// UTIL API INFO
// 1 ) onetime link TO get OAUTH CODE
//      : https://www.strava.com/oauth/authorize?client_id=78962&redirect_uri=http://localhost&response_type=code&scope=activity:read_all`; // one time step
//          -> OAuth CODE = "34626bc1c9a2e51a7def34593eaff9494bbc7c15"
// 2 ) POST newAcces and refresh tokes TAKE THE REFRESH ONE TIME
//   : https://www.strava.com/oauth/token?client_id=78962&client_secret=3a6ea96e3bdfa288f9ff4bf1a428ef2dc5b77dc2&code=253d87bcf086cbc2e523b616a1ceeffcb21e0751&grant_type=authorization_code";
//      -> xxx xxx xxxx
// 3r INIT WITH THE REFRESH ONE TIME AND ACCTUALIZATE WITH THE REFRESH IN RESPONSE
// ###################
const reAuthLINK = `https://www.strava.com/oauth/token?client_id=${CLIENT_ID}&client_secret=${SECRET_CLIENT}&refresh_token=${REFRESH_TOKEN}&grant_type=refresh_token`;

const getActivities = async (res) => {
  const activitiesLink = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`;
  return await fetch(activitiesLink).then(async (res) => res.json());
};
const fetchData = async () => {
  let reauthorizeResponse = await fetch(reAuthLINK, {
    method: "post",
  });
  const reAuth = await reauthorizeResponse.json();
  REFRESH_TOKEN = reAuth.refresh_token;
  let response = await getActivities(reAuth);
  return response;
};

export default fetchData;
