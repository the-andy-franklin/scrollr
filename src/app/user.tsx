'use client';

import { useSession } from "next-auth/react";

export const User = () => {
  const { data: session, status } = useSession();

  return <pre>{JSON.stringify(session, null, 2)}</pre>
}

