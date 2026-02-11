import { Box, useMediaQuery, useTheme } from "@mui/material";
import StatBox from "./StatBox";
import { tokens } from "../Theme";

const BoxComponent = ({ title, subtitle, progress, increase, Icon }) => {
  const isMobile = useMediaQuery("(max-width:599px)");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      gridColumn={isMobile ? "span 2" : "span 3"}
      backgroundColor={colors.primary[400]}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <StatBox
        title={title}
        subtitle={subtitle}
        progress={progress}
        increase={increase}
        isMobile={isMobile}
        icon={
          <Icon sx={{ color: colors.greenAccent[600], fontSize: "26px", }} />
        }
      />
    </Box>
  );
};

export default BoxComponent;
