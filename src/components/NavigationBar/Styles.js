import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

export const StyledIconButton = styled(IconButton)`
  border-radius: 2px;
  padding: ${props => (props.padding ? props.padding : '0.2rem 0.5rem')};
`;