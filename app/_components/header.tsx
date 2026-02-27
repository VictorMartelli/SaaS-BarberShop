"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { LogInIcon, MenuIcon, LogOutIcon } from "lucide-react";
import { authClient } from "@/lib/auth-client";

const Header = () => {
  const { data: session } = authClient.useSession();
  const handleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <header className="flex items-center justify-between px-5 py-6">
      <Image src="/logo.svg" alt="Aparatus" width={100} height={26.09} />
      <div className="flex items-center gap-2">
        {session ? (
          <div>
            <h1>{session.user?.name}</h1>
            <Button
              variant="outline"
              size="icon"
              onClick={() => authClient.signOut()}
            >
              <LogOutIcon />
            </Button>
          </div>
        ) : (
          <Button variant="outline" size="icon" onClick={handleLogin}>
            <LogInIcon />
          </Button>
        )}
        <Button variant="outline" size="icon">
          <MenuIcon />
        </Button>
      </div>
    </header>
  );
};

export default Header;
