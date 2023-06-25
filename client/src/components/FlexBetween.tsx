//need to reuse flex between css properties very often. hence this file is required

import { Box } from "@mui/material";
import { styled } from "@mui/system";

const FlexBetween = styled(Box)({
    display:'flex',
    justifyContent: 'space-between',
    alignItems:'center',
})

export default FlexBetween