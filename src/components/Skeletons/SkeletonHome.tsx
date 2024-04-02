import Skeleton from "./Skeleton";

const SkeletonHome = () => {
  return (
    <div className="post">
      <Skeleton classes="title width-50" />
      <Skeleton classes="text width-30" />
      <Skeleton classes="button width-15" />
    </div>
  );
};

export default SkeletonHome;
