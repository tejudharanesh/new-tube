import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";
export const AuthButton = () => {
  // TODO: add auth functionality
  return (
    <Button
      variant="outline"
      className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-400 border-blue-200 rounded-full shadow-none"
    >
      <UserCircleIcon className="h-4 w-4" />
      sign in
    </Button>
  );
};
