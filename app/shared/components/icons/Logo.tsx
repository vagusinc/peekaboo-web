import { IconProps } from "./types";

export const Logo = (props: IconProps) => {
  const { fill = "currentColor", style } = props;

  return (
    <svg width="74" height="101" viewBox="0 0 74 101" fill="none" style={style}>
      <path
        d="M17.3955 5.41374C-0.418659 16.3576 -5.32895 39.632 6.30092 56.6602C6.48671 56.9358 6.68578 57.1982 6.88484 57.465L6.86273 57.4781L36.5855 101C40.1377 96.4903 40.35 90.2354 37.1163 85.4983L14.2149 51.9712C6.23456 40.2837 8.64547 23.3036 19.9613 14.7217C32.6749 5.08131 50.7766 8.13002 59.6107 21.0641C66.6665 31.3956 65.2731 45.4364 57.4166 54.7356C54.5456 58.1342 54.466 63.0507 57.3502 66.4406C74.5716 54.9412 78.8095 31.5356 66.4188 14.8048C55.1517 -0.403761 33.5906 -4.53724 17.3955 5.41374Z"
        fill={fill}
      />
      <path
        d="M37.3328 19.6862C25.5304 19.2969 17.727 31.6842 23.2831 41.9851L36.8152 60.9554L49.8385 42.8643C56.0803 32.9527 49.1352 20.0755 37.3328 19.6862ZM42.7429 39.0808L36.8108 47.3215L30.6442 38.6784C28.1138 33.985 31.666 28.3425 37.0452 28.5174L37.4655 28.5305C42.8491 28.7099 45.8616 34.7373 42.7429 39.0764V39.0808Z"
        fill={fill}
      />
    </svg>
  );
};