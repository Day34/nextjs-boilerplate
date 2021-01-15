export interface SupportTabsProps {
  tabs: { [k: string]: any }[];
  onPropChange: (value: number) => void;
}

export interface SupportTabsViewProps {
  tabs: { [k: string]: any }[];
  value: number;
  onPropChange: (value: number) => void;
}
