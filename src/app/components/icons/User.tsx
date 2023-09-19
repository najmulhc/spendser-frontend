import { IconProps } from "@/types";

const UserIcon: React.FC<IconProps> = ({ width, height, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      className={className}
    >
      <path
        d="M9.99997 13C6.8299 13 4.01077 14.5306 2.21597 16.906C1.82968 17.4172 1.63653 17.6728 1.64285 18.0183C1.64773 18.2852 1.81533 18.6219 2.02534 18.7867C2.29716 19 2.67384 19 3.4272 19H16.5727C17.3261 19 17.7028 19 17.9746 18.7867C18.1846 18.6219 18.3522 18.2852 18.3571 18.0183C18.3634 17.6728 18.1703 17.4172 17.784 16.906C15.9892 14.5306 13.17 13 9.99997 13Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99997 10C12.4853 10 14.5 7.98528 14.5 5.5C14.5 3.01472 12.4853 1 9.99997 1C7.51469 1 5.49997 3.01472 5.49997 5.5C5.49997 7.98528 7.51469 10 9.99997 10Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UserIcon;