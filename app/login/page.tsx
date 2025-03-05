"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"

export default function LoginPage() {
  const [institution, setInstitution] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Login successful",
        description: "Welcome back to Easy Skill Enhancer!",
      })
      router.push("/")
    }, 1500)
  }

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-5rem)] px-4 bg-gradient-to-br from-purple-light/30 via-teal-light/20 to-orange-light/30">
      <div className="bubble bubble-1"></div>
      <div className="bubble bubble-2"></div>
      <div className="bubble bubble-3"></div>

      <Card className="w-full max-w-md bg-white/80 backdrop-blur-md shadow-xl border-none rounded-3xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-bold text-center gradient-text">Login</CardTitle>
          <CardDescription className="text-center text-base">
            Enter your institution credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="institution" className="text-base">
                Institution Name
              </Label>
              <Input
                id="institution"
                placeholder="Enter your institution name"
                value={institution}
                onChange={(e) => setInstitution(e.target.value)}
                required
                className="rounded-xl h-12 bg-white/70 backdrop-blur-sm border-purple/20 focus:border-purple"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-base">
                  Password
                </Label>
                <Link href="#" className="text-sm text-purple hover:text-purple-dark hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="rounded-xl h-12 bg-white/70 backdrop-blur-sm border-purple/20 focus:border-purple"
              />
            </div>
            <Button
              type="submit"
              className="w-full h-12 rounded-xl bg-gradient-to-r from-purple to-teal hover:from-teal hover:to-purple transition-all duration-500 text-lg"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-base">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-purple font-medium hover:text-purple-dark hover:underline">
              Sign up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

