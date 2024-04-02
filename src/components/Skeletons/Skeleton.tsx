import "./Skeleton.css";

const Skeleton = ({ classes }): JSX.Element => {
  const classNames = `skeleton ${classes} animate-pulse`;

  return <div className={classNames}></div>;
};

export default Skeleton;
