import type { StackScreenProps } from '@react-navigation/stack';

import { RootsPath } from '@/navigation/pathsProducts';

export type RootStackParamList = {
  [RootsPath.MAIN]: undefined;
  [RootsPath.PROFILE]: undefined;
};

export type RootScreenProps<
  S extends keyof RootStackParamList = keyof RootStackParamList,
> = StackScreenProps<RootStackParamList, S>;
