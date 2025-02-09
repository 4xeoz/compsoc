"use client";

import { useState } from "react";
import { createMember } from "@/app/actions/Members";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";

export default function MemberCreateFrom() {
  const form = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const onSubmit = async (values: any) => {
    setLoading(true);

    if (!values.image || !values.name || !values.position || !values.year) {
      setError("All fields are required");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("position", values.position);
    formData.append("image", values.image[0]);
    formData.append("year", values.year);
    formData.append("website", values.website);
    formData.append("linkedin", values.linkedin);
    formData.append("instagram", values.instagram);

    const response = await createMember(formData);

    if (response?.success) {
      setSuccess(response.success);
      form.reset();
    } else {
      setError(response.error || "Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 rounded-lg">
      <h1 className="text-xl font-bold mb-4">Add New Member</h1>
      {error && <p className="text-red-300 text-center bg-red-900 p-4 rounded-md my-4">{error}</p>}
      {success && <p className="text-green-300 text-center bg-green-900 p-4 rounded-md my-4">{success}</p>}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <Label>Name</Label>
                <FormControl>
                  <Input placeholder="Enter name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="position"
            render={({ field }) => (
              <FormItem>
                <Label>Position</Label>
                <FormControl>
                  <Input placeholder="Enter position" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <Label>Image</Label>
                <FormControl>
                  <Input type="file" accept="image/*" onChange={(e) => field.onChange(e.target.files)} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="year"
            render={({ field }) => (
              <FormItem>
                <Label>year</Label>
                <FormControl>
                  <Input placeholder="Enter year" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <Label>Website link</Label>
                <FormControl>
                  <Input placeholder="Enter website link" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="linkedin"
            render={({ field }) => (
              <FormItem>
                <Label>Linkedin Link</Label>
                <FormControl>
                  <Input placeholder="Enter Linkedin link" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="instagram"
            render={({ field }) => (
              <FormItem>
                <Label>Instagram Link</Label>
                <FormControl>
                  <Input placeholder="Enter Instagram link" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" variant="secondary" disabled={loading} className="w-full">
            <p>{loading ? "Uploading..." : "Add Member"}</p>
          </Button>
        </form>
      </Form>
    </div>
  );
}
