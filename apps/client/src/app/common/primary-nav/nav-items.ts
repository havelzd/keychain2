import {
  heroCog6ToothSolid,
  heroInformationCircleSolid,
  heroLockClosedSolid,
  heroSquares2x2Solid,
} from '@ng-icons/heroicons/solid';

export default [
  {
    label: 'Home',
    url: '/dashboard',
    icon: { heroSquares2x2Solid },
    iconName: 'heroSquares2x2Solid',
  },
  {
    label: 'Vault',
    url: '/vault',
    icon: { heroLockClosedSolid },
    iconName: 'heroLockClosedSolid',
  },
  {
    label: 'About',
    url: '/about',
    icon: { heroInformationCircleSolid },
    iconName: 'heroInformationCircleSolid',
  },
  {
    label: 'Settings',
    url: '/settings',
    icon: { heroCog6ToothSolid },
    iconName: 'heroCog6ToothSolid',
  },
] as const;
