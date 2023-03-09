const LoadingSvg = () => {
  return (
    <>
      <svg
        version="1.1"
        id="L7"
        x="10px"
        y="0px"
        viewBox="0 0 100 100"
        style={{width:"300px", height:"300px"}}
       
      >
        <path
          fill="whiteSmoke"
          width="10px"
          d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3
  c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur="2s"
            from="0 50 50"
            to="360 50 50"
            repeatCount="indefinite"
          />
        </path>
 
        <path
          fill="whiteSmoke"
          d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5
  L82,35.7z"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur="2s"
            from="0 50 50"
            to="-360 50 50"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </>
  );
};

export default LoadingSvg;
