/**
 * v0 by Vercel.
 * @see https://v0.dev/t/MLsEuwxC8EV
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function Auth() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="mx-auto w-full max-w-md rounded-lg bg-card p-6 shadow-lg">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Welcome back</h1>
            <p className="text-muted-foreground">Enter your email and password to sign in</p>
          </div>
          <form className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>
            <Button type="submit" className="w-full lg:w-52">
              Sign In
            </Button>
          </form>
          <div className="flex items-center justify-between">
            <Link to="#" className="text-sm font-medium underline underline-offset-4">
              Sign Up
            </Link>
            <Link to="#" className="text-sm font-medium underline underline-offset-4">
              Forgot Password
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}