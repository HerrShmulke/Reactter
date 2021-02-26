import { FunctionComponent } from 'react';
import { User } from '../../lib/user';

export interface IHeaderUserProfileProps {
  user: User;
}

export default function HeaderUserProfile(props: IHeaderUserProfileProps): FunctionComponent;
