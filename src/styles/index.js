import React from "react";

import { Reset, Typography } from "./defaults";
import { color } from "./variables/colors";
import { spacing } from "./variables/spacings";
import { breakpoint } from "./variables/breakpoints";

export const Defaults = () => (
  <>
    <Reset />
    <Typography />
  </>
);

export const theme = {
  color,
  spacing,
  breakpoint,
};
