export interface NavigationProps {
  direction: 'vertical' | 'horizontal';
  items: { title: string; url: string; icon: string }[];
}
