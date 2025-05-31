import { useMemo, useState } from 'react';

import type { Group } from '../types/group';

export function useAddGroup() {
  const initialState: Group = useMemo(
    () => ({
      type: 'cube',
      width: 1,
      height: 1,
      length: 1,
      number: 1,
    }),
    [],
  );

  const [group, setGroup] = useState<Group>(initialState);

  return { group, setGroup, initialState };
}
