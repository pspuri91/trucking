"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { DatePicker } from "@/components/ui/date-picker"
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const formSchema = z.object({
  source: z.string().min(2, {
    message: "Source must be at least 2 characters.",
  }),
  destination: z.string().min(2, {
    message: "Destination must be at least 2 characters.",
  }),
  date: z.date({
    required_error: "A date of shipment is required.",
  }),
  goodsDetails: z.string().min(10, {
    message: "Goods details must be at least 10 characters.",
  }),
  weight: z.string().min(1, {
    message: "Weight is required.",
  }),
  dimensions: z.string().min(1, {
    message: "Dimensions are required.",
  }),
  specialInstructions: z.string().optional(),
})

export default function GetAQuote() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      source: "",
      destination: "",
      goodsDetails: "",
      weight: "",
      dimensions: "",
      specialInstructions: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    setIsSubmitted(true);
    // Here you would typically send the form data to your server
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        <motion.section 
          className="py-20 bg-white"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="container mx-auto px-6">
            <motion.h1 
              className="text-4xl font-bold text-center mb-16 text-blue-900"
              variants={itemVariants}
            >
              Get a Quote
            </motion.h1>
            {isSubmitted ? (
              <motion.div 
                className="max-w-4xl mx-auto bg-green-100 p-10 rounded-2xl shadow-xl text-center"
                variants={itemVariants}
              >
                <h2 className="text-2xl font-semibold text-green-800 mb-4">Thank You!</h2>
                <p className="text-green-700">Your quote request has been submitted. We'll get back to you shortly with an estimate.</p>
              </motion.div>
            ) : (
              <motion.div 
                className="max-w-4xl mx-auto bg-blue-50 p-10 rounded-2xl shadow-xl"
                variants={itemVariants}
              >
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                      control={form.control}
                      name="source"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Source Location</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Toronto, ON" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="destination"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Destination</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Vancouver, BC" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Date of Shipment</FormLabel>
                          <DatePicker
                            date={field.value}
                            setDate={field.onChange}
                          />
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="goodsDetails"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Goods Details</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Describe the goods you need to transport" 
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
                      name="weight"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Estimated Weight (kg)</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="dimensions"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Dimensions (L x W x H in cm)</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., 100 x 50 x 75" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="specialInstructions"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Special Instructions (Optional)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Any special handling or delivery instructions" 
                              className="resize-none" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit">Request Quote</Button>
                  </form>
                </Form>
              </motion.div>
            )}
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}