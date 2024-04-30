import type { User } from "@formbase/db/schema";
import { logout } from "@formbase/lib/auth/actions";
import { validateRequest } from "@formbase/lib/auth/validate-request";
import { redirects } from "@formbase/lib/constants";
import { SubmitButton } from "@formbase/ui/components/submit-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@formbase/ui/primitives/card";
import { redirect } from "next/navigation";

export default async function AccountPage() {
  const { user } = (await validateRequest()) as { user: User | null };
  if (!user) redirect(redirects.toLogin);

  return (
    <main className="container mx-auto min-h-screen p-4">
      <Card className="max-w-sm">
        <CardHeader>
          <CardTitle> {user.email}!</CardTitle>
          <CardDescription>You've successfully logged in!</CardDescription>
        </CardHeader>
        <CardContent>This is a private page.</CardContent>
        <CardFooter>
          <form action={logout}>
            <SubmitButton variant="outline">Logout</SubmitButton>
          </form>
        </CardFooter>
      </Card>
    </main>
  );
}
