import styled from "@emotion/styled";
import { Autocomplete } from "@mantine/core";
import { transientConfig } from "../../utils/styled-transient-config";

export const StyledSearch = styled(Autocomplete, transientConfig)`
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}px) {
    display: ${({ $hiddenSeach }) => ($hiddenSeach !== true ? "none" : "block")};
  }
`;