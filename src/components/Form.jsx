import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";

// Define the validation schema using Zod
const formSchema = z.object({
  Name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  address: z.string().min(6, {
    message: "Address must be at least 6 characters.",
  }),
});

export function ProfileForm({ setDetails }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const [info, setInfo] = useState([]);

  // Log the state whenever `info` changes
  useEffect(() => {
    if (info.length > 0) {
      window.console.log(info); // Use window.console.log instead of console.log
      setDetails(info); // Update the details in the parent component
    }
  }, [info, setDetails]); // Runs when `info` changes

  const onSubmit = (data) => {
    window.console.log(data); // Log the form data using window.console.log
    
    // Use functional form of setInfo to get the latest state value
    setInfo((prevInfo) => [...prevInfo, data]); // Add new data to the state

    form.reset(); // Reset the form
  };

  return (
    <div className="min-h-screen bg-black flex justify-center items-center">
      {/* Card with black inside and reasonable size */}
      <Card className="space-y-6 p-8 border border-white text-white max-w-3xl w-full bg-black">
        <CardHeader>
          <CardTitle className="text-2xl">Boss Settings</CardTitle>
          <CardDescription className="text-lg">Update information of your employers </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Username Field */}
              <FormField
                control={form.control}
                name="Name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl">Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="enter employer's name"
                        {...field}
                        className="bg-black text-white border-white focus:ring-white text-lg p-3"
                      />
                    </FormControl>
                    <FormDescription className="text-md">
                      This is employer's name.
                    </FormDescription>
                    <FormMessage className="text-red-500">
                      {form.formState.errors.Name?.message}
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
                        placeholder="employeremail@example.com"
                        {...field}
                        className="bg-black text-white border-white focus:ring-white text-lg p-3"
                      />
                    </FormControl>
                    <FormDescription className="text-md">
                      This is employer's email address.
                    </FormDescription>
                    <FormMessage className="text-red-500">
                      {form.formState.errors.email?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />

              {/* Address Field */}
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl">Address</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="address"
                        {...field}
                        className="bg-black text-white border-white focus:ring-white text-lg p-3"
                      />
                    </FormControl>
                    <FormDescription className="text-md">
                      This is employer's address.
                    </FormDescription>
                    <FormMessage className="text-red-500">
                      {form.formState.errors.address?.message}
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
  );
}



