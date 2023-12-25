import { Check, Share, X } from "lucide-react";
import { useState } from "react";
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"
import { Button } from "@/components/ui/button";
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
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
const formSchema = z.object({
    prompt: z.string().min(5, {
        message: "Prompt must be at least 10 characters long.",
    }),
    category: z.string().min(3, {
        message: "Category must be at least 3 characters long.",
    }),
    description: z.string().min(5, {
        message: "Description must be at least 10 characters long.",
    }),
    expected: z.string().min(5, {
        message: "Expected Answer must be at least 10 characters long.",
    }),
})


function Results() {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: "",
            category: "",
            description: "",
            expected: "",
        }
    })

    function onSubmit(values) {
        // fetch to /api/add-prompt

        fetch("/api/add-prompt", {
            method: "POST",
            body: JSON.stringify(values)
        }).then((res) => res.json()).then((data) => {
            if (data.success) {
                toast.success("Submitted",{
                    description:"Your prompt has been submitted successfully."
                })
                form.reset()
            } else {
                toast.error("Error",{
                    description:"An error occurred while submitting your prompt."
                })
            }
        }).catch((err) => {
            toast.error("Error",{
                description:"An error occurred while submitting your prompt."
            })
        })
    }


    return (
        <div className="container mx-auto mt-4">
            <Toaster />
            <div className="flex justify-between items-center">
                <div className="space-y-1">
                    <h2 className="text-2xl font-semibold tracking-tight">
                        Add Prompt
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Add a prompt to the benchmark database.
                    </p>
                </div>
            </div>
            <div className="mt-4">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="prompt"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Prompt</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Write a prompt..."
                                            className="resize-none"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Category</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select the prompt category" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="Reasoning">Reasoning</SelectItem>
                                            <SelectItem value="Medicine">Medicine</SelectItem>
                                            <SelectItem value="Law">Law</SelectItem>
                                            <SelectItem value="Engineering">Engineering</SelectItem>
                                            <SelectItem value="Programming">Programming</SelectItem>
                                            <SelectItem value="Mathematics">Mathematics</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormDescription>
                                        The prompt category is used to sort the prompts, and to evaluate the specific model performance on the prompt.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Describe the prompt..."
                                            className="resize-none"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="expected"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Expected</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Write the expected prompt result..."
                                            className="resize-none"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full">Submit</Button>
                    </form>
                </Form>
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
                Do you want to add your model to the benchmark? <Link href="/contact" className="text-primary hover:underline hover:underline-offset-4" >Contact Us</Link>
            </div>
        </div>
    );
}

export default Results;
