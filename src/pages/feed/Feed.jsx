import React from "react";
import "./feed.css";
import VideoCard from "../../components/videoCard/VideoCard";

const Feed = () => {
  const [videoFromBackend, setVideoFromBackend] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3001/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setVideoFromBackend(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });

    // setInterval(() => {
    //   fetch("http://localhost:3001/", {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: "Bearer " + localStorage.getItem("token"),
    //     },
    //   })
    //     .then((response) => {
    //       if (!response.ok) {
    //         throw new Error(`HTTP error! Status: ${response.status}`);
    //       }
    //       return response.json();
    //     })
    //     .then((data) => {
    //       console.log(data);
    //       setVideoFromBackend(data);
    //     })
    //     .catch((error) => {
    //       console.error("Fetch error:", error);
    //     });
    // }, 1000);
  }, []);

  return (
    <div className="feed">
      {videoFromBackend.map((video, _id) => (
        <div key={_id} className="videoo">
          <VideoCard video={video} />
        </div>
      ))}
    </div>
  );
};

export default Feed;
