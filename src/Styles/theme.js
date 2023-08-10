export const theme = {
  colors: {
    primary: "#000000",
    secondary: "##EBFDFF",
    alternative: "#97CAEF",
    theme: "#FC4445",
    themeSecondary: "#3FEEE6",
  },
  sizes: {
    xsl: "8px",
    sl: "12px",
    md: "16px",
    lg: "24px",
    xlg: "34px",
  },
  transitions: {
    main: "filter 0.2s ease, transform 0.2s ease, opacity 0.2s ease",
  },
  boxShadows: {
    neumorphism:{
      convex:{
        boxShadow:  "4px 4px 5px #d6d6d6,-4px -4px 5px #ffffff",
        background: "linear-gradient(145deg, #ffffff, #e6e6e6)",
      },
      concave:{
        boxShadow:  "4px 4px 5px #d6d6d6,-4px -4px 5px #ffffff",
        background: "linear-gradient(145deg, #e6e6e6, #ffffff)",
      }
    }
  },
  framerAnimations: {
    pageTransition: {
      initial: {
        opacity: 0,
        y: -100,
        transform: "scale(0.7)",
        filter: "blur(6px)"
      },
      animate: {
        opacity: 1,
        y: 0,
        transform: "scale(1)",
        filter: "blur(0)"
      },
      exit: {
        opacity: 0,
        y: -100,
        transform: "scale(0.7)",
        filter: "blur(6px)"
      },
      transition: {
        duration: 0.7,
        ease: [0.2, 1, 0.2, 1],
      },
    },
    navTransition: {
      visible: {
        opacity: 1,
        y:0
      },
      hidden: {
        opacity: 0,
        y:-50,
      },
      exit: {
        opacity: 0,
        y:-50
      },
      transition: { ease: [0.5, 1, 0.5, 1], duration: 0.5 },
    },
  },
};
