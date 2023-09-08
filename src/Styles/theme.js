const COLORS = {
  black: "#040D12",
  darker: "#141A26",
  dark: "#242D40",
  medium: "#3C5E73",
  light: "#547C8C",
  lighter: "#8D9FA6",
  lightest: "#BEE5F2",
  theme: "#F8A300",
};

export const theme = {
  colors: {
    black: COLORS.black,
    darker: COLORS.darker,
    dark: COLORS.dark,
    medium: COLORS.medium,
    light: COLORS.light,
    lighter: COLORS.lighter,
    lightest: COLORS.lightest,
    theme: COLORS.theme
  },
  sizes: {
    xsl: "8px",
    sl: "12px",
    md: "16px",
    lg: "24px",
    xlg: "34px",
  },
  sectionPadding: "1rem 2rem",
  borders: {
    sharp: "3px",
    roundedSl: "5px",
    roundedMd: "10px",
    roundedLg: "18px",
    circular: "50%",
  },
  transitions: {
    main: "filter 0.2s ease, transform 0.2s ease, opacity 0.2s ease",
  },
  boxShadows: {
    neumorphism: {
      convex: {
        boxShadow: `1px 1px 3px ${COLORS.medium},-1px -1px 3px ${COLORS.dark}`,
        background: `linear-gradient(145deg, ${COLORS.dark}, ${COLORS.medium})`,
      },
      concave: {
        boxShadow: `1px 1px 3px ${COLORS.medium},-1px -1px 3px ${COLORS.dark}`,
        background: `linear-gradient(145deg, ${COLORS.medium}, ${COLORS.dark})`,
      },
    },
  },
  framerAnimations: {
    pageTransition: {
      initial: {
        opacity: 0,
        y: -100,
        transform: "scale(0.7)",
        filter: "blur(6px)",
      },
      animate: {
        opacity: 1,
        y: 0,
        transform: "scale(1)",
        filter: "blur(0)",
      },
      exit: {
        opacity: 0,
        y: -100,
        transform: "scale(0.7)",
        filter: "blur(6px)",
      },
      transition: {
        duration: 0.7,
        ease: [0.2, 1, 0.2, 1],
      },
    },
    navTransition: {
      visible: {
        opacity: 1,
        y: 0,
      },
      hidden: {
        opacity: 0,
        y: -50,
      },
      exit: {
        opacity: 0,
        y: -50,
      },
      transition: { ease: [0.5, 1, 0.5, 1], duration: 0.5 },
    },
  },
};
