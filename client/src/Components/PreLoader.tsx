import * as React from "react";
import Loader from "react-loader-spinner";

export interface PreLoaderProps {
  className: string;
}

const PreLoader: React.FunctionComponent<PreLoaderProps> = ({ className }) => {
  return (
    <div
      style={{ height: "100vh" }}
      className={
        "w-100 text-center d-flex justify-content-center align-items-center preloader " +
        className
      }
    >
      <Loader type="Plane" color="#aa96ed" height={200} width={200} />
    </div>
  );
};

export default PreLoader;
