import * as React from 'react';
import { type Metadata } from 'next';

import { env } from '@formbase/env';

import { api } from '~/lib/trpc/server';

import { Forms } from './_components/forms';
import { CreateFormDialog } from './_components/new-form-dialog';
import { FormsSkeleton } from './_components/posts-skeleton';

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: 'Forms',
  description: 'Manage your forms here',
};

export default function DashboardPage() {
  const promises = Promise.all([api.form.userForms({})]);

  return (
    <div className="py-2 md:py-8">
      <div className="mb-10 flex w-full items-end justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-medium">Forms</h1>
          <p className="text-sm text-muted-foreground">
            Manage your forms here
          </p>
        </div>
        <CreateFormDialog />
      </div>

      <React.Suspense fallback={<FormsSkeleton />}>
        <Forms promises={promises} />
      </React.Suspense>
    </div>
  );
}
