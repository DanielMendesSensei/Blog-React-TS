import "./Skeleton.css";

interface SkeletonProps {
  classes: string | string[];
}

const Skeleton = ({ classes }: SkeletonProps): JSX.Element => {
  const classNames = `skeleton ${
    Array.isArray(classes) ? classes.join(" ") : classes
  } animate-pulse`;

  return <div className={classNames}></div>;
};

export default Skeleton;
