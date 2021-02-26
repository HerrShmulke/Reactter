import { DetailedHTMLProps, FunctionComponent, HTMLAttributes } from 'react';
import { User } from '../../lib/user';

export interface IHeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  user?: User;
}

export default function Header(props: IHeaderProps): FunctionComponent;
