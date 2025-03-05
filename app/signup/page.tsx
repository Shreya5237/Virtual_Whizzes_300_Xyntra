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

export default function SignupPage() {
  const [institutionName, setInstitutionName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast({
        title: "Passwords do not match",
        description: "Please make sure your passwords match.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    // Simulate registration
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Registration successful",
        description: "Your account has been created. You can now log in.",
      })
      router.push("/login")
    }, 1500)
  }

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-5rem)] px-4 bg-gradient-to-br from-teal-light/30 via-purple-light/20 to-pink-light/30">
      <div className="bubble bubble-1"></div>
      <div className="bubble bubble-4"></div>
      <div className="bubble bubble-5"></div>

      <Card className="w-full max-w-md bg-white/80 backdrop-blur-md shadow-xl border-none rounded-3xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-bold text-center gradient-text">Sign Up</CardTitle>
          <CardDescription className="text-center text-base">Create an account for your institution</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="institution-name" className="text-base">
                Institution Name
              </Label>
              <Input
                id="institution-name"
                placeholder="Enter your institution name"
                value={institutionName}
                onChange={(e) => setInstitutionName(e.target.value)}
                required
                className="rounded-xl h-12 bg-white/70 backdrop-blur-sm border-teal/20 focus:border-teal"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-base">
                Institution Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your institution email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-xl h-12 bg-white/70 backdrop-blur-sm border-teal/20 focus:border-teal"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-base">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="rounded-xl h-12 bg-white/70 backdrop-blur-sm border-teal/20 focus:border-teal"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password" className="text-base">
                Confirm Password
              </Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="rounded-xl h-12 bg-white/70 backdrop-blur-sm border-teal/20 focus:border-teal"
              />
            </div>
            <Button
              type="submit"
              className="w-full h-12 rounded-xl bg-gradient-to-r from-teal to-purple hover:from-purple hover:to-teal transition-all duration-500 text-lg"
              disabled={isLoading}
            >
              {isLoading ? "Creating account..." : "Sign Up"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-base">
            Already have an account?{" "}
            <Link href="/login" className="text-teal font-medium hover:text-teal-dark hover:underline">
              Login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

