import { SelectProps as OriginSelectProps } from '@material-ui/core/Select';
import { InputFrameProps } from '@molecules/InputFrame/InputFrame.type';

export interface InputSelectProps extends InputFrameProps, Omit<OriginSelectProps, 'children'> {
  options: { [k: string]: any }[];
}

export interface InputSelectViewProps extends InputSelectProps {}
