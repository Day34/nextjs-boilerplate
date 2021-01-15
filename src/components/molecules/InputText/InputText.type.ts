import { TextFieldProps as OriginTextFieldProps } from '@material-ui/core/TextField';
import { InputFrameProps } from '@molecules/InputFrame/InputFrame.type';

export interface InputTextProps extends InputFrameProps, Omit<OriginTextFieldProps, 'children'> {}

export interface InputTextViewProps extends InputTextProps {}
