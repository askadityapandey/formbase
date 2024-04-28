"use client";

import { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";

import { ExclamationTriangleIcon } from "src/components/icons";
import { PasswordInput } from "src/components/password-input";
import { SubmitButton } from "src/components/submit-button";
import { Label } from "src/components/ui/label";
import { resetPassword } from "src/lib/auth/actions";

export function ResetPassword({ token }: { token: string }) {
  const [state, formAction] = useFormState(resetPassword, null);

  useEffect(() => {
    if (state?.error) {
      toast(state.error, {
        icon: <ExclamationTriangleIcon className="h-5 w-5 text-destructive" />,
      });
    }
  }, [state?.error]);

  return (
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="token" value={token} />
      <div className="space-y-2">
        <Label>New Password</Label>
        <PasswordInput
          name="password"
          required
          autoComplete="new-password"
          placeholder="********"
        />
      </div>
      <SubmitButton className="w-full">Reset Password</SubmitButton>
    </form>
  );
}
