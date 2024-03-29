import { Video } from "../types";
import axios from "axios";

import NoResults from "../components/NoResults";
import VideoCard from "../components/VideoCard";

interface IProps {
  videos: Video[];
}

const Home = ({ videos }: IProps) => {
  return (
    <div className="flex flex-col gap-10 videos h-full">
      {videos.length ? (
        videos.map((video: Video) => <VideoCard post={video} key={video._id} />)
      ) : (
        <NoResults text={"No Videos"} />
      )}
    </div>
  );
};

export const getServerSideProps = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLICK_BASE_URL}/api/post`
  );

  return {
    props: {
      videos: data,
    },
  };
};

export default Home;
