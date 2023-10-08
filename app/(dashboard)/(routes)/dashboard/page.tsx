import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <div>
      <p>DashBoard (Protected)</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
