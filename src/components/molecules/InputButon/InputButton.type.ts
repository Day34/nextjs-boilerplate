import { ButtonProps as OriginButtonProps } from '@material-ui/core/Button';
import { InputFrameProps } from '@molecules/InputFrame/InputFrame.type';

export interface InputButtonProps extends InputFrameProps, Omit<OriginButtonProps, 'children'> {
  buttonText: string;
}

export type InputButtonViewProps = InputButtonProps;
