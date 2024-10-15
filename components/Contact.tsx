"use client"

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
import { supabase } from '../lib/supabaseClient'; // Adjust the path if necessary
import { useState } from 'react'; // Import useState
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

const Contact = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // State for error messages
  const [openSnackbar, setOpenSnackbar] = useState(false); // State for Snackbar visibility
  const [isLoading, setIsLoading] = useState(false); // State for loading
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setErrorMessage(null); // Clear previous error messages
    setIsLoading(true); // Set loading state to true

    const { data: leadData, error: leadError } = await supabase
      .from('leads')
      .insert([
        {
          creation_date: new Date(),
          name: values.name,
          email: values.email,
          phone_no: values.phone || null,
          status: 'New',
          channel: 'Web',
          source: 'Contact Form',
        },
      ]);

    setIsLoading(false); // Set loading state to false after the request completes

    if (leadError) {
      console.error('Error inserting lead:', leadError); // Log the error for debugging
      if (leadError.code === '23505') { // Check for unique constraint violation
        setErrorMessage("The email id you entered is already available in our records. Our team would get back to you as soon as possible if you raised a request earlier. Or you could try with a different email id.");
      } else {
        setErrorMessage("An unexpected error occurred. Please try again later.");
      }
      setOpenSnackbar(true); // Open the Snackbar
      return; // Stop further execution
    }

    console.log('Lead submitted successfully:', leadData);
    setErrorMessage(null); // Clear any previous error messages
    // Optionally, reset the form or show a success message
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
    <motion.section 
      id="contact" 
      className="py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-blue-900"
          variants={itemVariants}
        >
          Contact Us
        </motion.h2>
        <motion.div 
          className="max-w-4xl mx-auto bg-blue-50 p-10 rounded-2xl shadow-xl"
          variants={itemVariants}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="+1 (555) 123-4567" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us about your shipping needs" 
                        className="resize-none" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading}>Send Message</Button>
            </form>
          </Form>
          <Snackbar 
            open={openSnackbar} 
            autoHideDuration={6000} 
            onClose={() => setOpenSnackbar(false)} 
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Positioning the Snackbar at the top center
          >
            <Alert onClose={() => setOpenSnackbar(false)} severity="error" sx={{ width: '100%' }}>
              {errorMessage}
            </Alert>
          </Snackbar>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;