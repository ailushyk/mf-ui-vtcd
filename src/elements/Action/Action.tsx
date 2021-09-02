import { ActionBase } from './ActionBase';
import { ActionLink } from './ActionLink';
import { As } from '@chakra-ui/system/dist/types/system.types';

export interface ActionProps {
  variant?: 'solid' | 'ghost' | 'outline' | 'link';
  disabled?: boolean;
  onClick?: (event: any) => void;
}

export interface ActionLinkProps extends Omit<ActionProps, 'onClick'> {
  as: As;
  to: string;
}

export const Action = Object.assign(ActionBase, {
  Link: ActionLink,
});
