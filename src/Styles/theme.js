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
  framerAnimations: {
    pageTransition: {
      initial: {
        opacity: 0,
        y: -200,
      },
      animate: {
        opacity: 1,
        y: 0,
      },
      exit: {
        opacity: 0,
        y: -200,
      },
      transition: {
        duration: 0.5, // dependent on setTimeout in ScrollToTop hook
        ease: [0.5, 1, 0.5, 1],
      },
    },
    navTransition: {
      visible: {
        opacity: 1,
      },
      hidden: {
        opacity: 0,
      },
      exit: {
        opacity: 0,
      },
      transition: { ease: [0.5, 1, 0.5, 1], duration: 0.5 },
    },
  },
};
