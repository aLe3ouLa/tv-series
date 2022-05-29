const Star: React.FC<{ width: number; height: number; }> = ({ width = 25, height = 25}) => {
  return (
    <svg viewBox="0 0 512 512" width={width} height={height} role="img">
      <title>Rating star</title>
      <path
        d="M500 188.3l-166-15.4-65.8-153a13.3 13.3 0 00-24.4 0l-65.9 153-165.8 15.4a13.3 13.3 0 00-7.6 23.2l125.2 109.9L93 483.9a13.3 13.3 0 0019.8 14.3l143.2-85 143.2 85c10 6 22.3-3 19.8-14.3l-36.7-162.5 125.2-110c8.7-7.6 4-22-7.6-23.1z"
        fill="#ffdc64"
      />
      <path
        d="M268.2 20a13.3 13.3 0 00-24.4 0l-65.9 152.9-165.8 15.4a13.3 13.3 0 00-7.6 23.2l125.2 109.9L93 483.9a13.3 13.3 0 0019.8 14.3l32-19c4.4-182 89-310.3 156-383.7L268.2 20z"
        fill="#ffc850"
      />
    </svg>
  );
};

export default Star;
