"use client";

import { useState } from "react";
import { createEvent } from "@/app/actions/Event";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";

export default function EventCreateForm() {
  const form = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const onSubmit = async (values: any) => {
    setLoading(true);

    if (!values.image || !values.title || !values.date || !values.location) {
      setError("All fields are required");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    
    const formattedDate = new Date(values.date);
    formData.append("date", formattedDate.toISOString());
    formData.append("location", values.location);
    formData.append("image", values.image[0]);

    const response = await createEvent(formData);

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
      <h1 className="text-xl font-bold mb-4">Create New Event</h1>
      {error && <p className="text-red-300 text-center bg-red-900 p-4 rounded-md my-4">{error}</p>}
      {success && <p className="text-green-300 text-center bg-green-900 p-4 rounded-md my-4">{success}</p>}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <Label>Title</Label>
                <FormControl>
                  <Input placeholder="Enter event title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <Label>Description</Label>
                <FormControl>
                  <Textarea placeholder="Enter event description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <Label>Date & Time</Label>
                <FormControl>
                <Input
                    type="datetime-local"
                    onChange={(e) => field.onChange(e.target.value)}
                />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <Label>Location</Label>
                <FormControl>
                  <Input placeholder="Enter event location" {...field} />
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
          <Button type="submit" variant="secondary" disabled={loading} className="w-full">
            <p>{loading ? "Uploading..." : "Create Event"}</p>
          </Button>
        </form>
      </Form>
    </div>
  );
}
