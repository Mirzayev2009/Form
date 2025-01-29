"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"

// Define the validation schema using Zod
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
})

export function ProfileForm() {
  // Initialize the form with react-hook-form and Zod schema validation
  const form = useForm({
    resolver: zodResolver(formSchema),
  })

  const [info, setInfo] = useState([])

  // Define the onSubmit handler
  const onSubmit = (data) => {
    console.log(data) // Replace this with your submit logic
    
    // Use functional form of setInfo to get the latest state value
    setInfo(prevInfo => [...prevInfo, data])
    
    console.log(info); // You'll see the updated state value after the re-render

    form.reset() // Reset the form
  }

  return (
    <div className="min-h-screen bg-black flex justify-center items-center">
      {/* Card with black inside and reasonable size */}
      <Card className="space-y-6 p-8 border border-white text-white max-w-3xl w-full bg-black">
        <CardHeader>
          <CardTitle className="text-2xl">Profile Settings</CardTitle>
          <CardDescription className="text-lg">Update your information</CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Username Field */}
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl">Username</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="enter your username"
                        {...field}
                        className="bg-black text-white border-white focus:ring-white text-lg p-3"
                      />
                    </FormControl>
                    <FormDescription className="text-md">
                      This is your public display name.
                    </FormDescription>
                    <FormMessage className="text-red-500">
                      {form.formState.errors.username?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />
              
              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl">Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="youremail@example.com"
                        {...field}
                        className="bg-black text-white border-white focus:ring-white text-lg p-3"
                      />
                    </FormControl>
                    <FormDescription className="text-md">
                      This is your email address.
                    </FormDescription>
                    <FormMessage className="text-red-500">
                      {form.formState.errors.email?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />
              
              {/* Password Field */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl">Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••"
                        {...field}
                        className="bg-black text-white border-white focus:ring-white text-lg p-3"
                      />
                    </FormControl>
                    <FormDescription className="text-md">
                      This is your secure password.
                    </FormDescription>
                    <FormMessage className="text-red-500">
                      {form.formState.errors.password?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />
              
              <Button type="submit" className="bg-white text-black hover:bg-gray-200 text-lg py-3 px-6">
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>

        <CardFooter>
          <p className="text-sm">Make sure your information is correct.</p>
        </CardFooter>
      </Card>
    </div>
  )
}


