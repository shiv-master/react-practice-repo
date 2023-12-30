import { useEffect, useState, useContext } from "react";
import Auth from "./context/Auth";

const Profile = () => {
  const [profileData, setProfileData] = useState([]);
  const { user } = useContext(Auth);
  useEffect(() => {
    //Fetching Api.
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setProfileData(data);
    };
    fetchData();
  }, [setProfileData]);

  return (
    <>
      Hi {user}, these are all user profiles which you are allowed to access.
      {profileData && (
        <div className="center">
          <table className="topBtmSpace">
            <thead>
              <tr>
                <th className="yellowBorder">Name</th>
                <th className="yellowBorder">UserName</th>
                <th className="yellowBorder">Email</th>
              </tr>
            </thead>
            <tbody>
              {profileData.map((user) => (
                <tr key={user.id}>
                  <td className="yellowBorder">{user.name}</td>
                  <td className="yellowBorder">{user.username}</td>
                  <td className="yellowBorder">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Profile;
