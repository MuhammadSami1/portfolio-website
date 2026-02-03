"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card3D } from "@/components/3d-card";
import { CheckCircle, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formType } from "@/types/formType";
import { formSchema } from "@/lib/validation";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formType>({
    resolver: yupResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const sendEmail = async (params: {
    to_name: string;
    from_name: string;
    reply_to: string;
    message: string;
    subject: string;
  }) => {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        {
          name: params.to_name, // This will be "MuhammadSami" in your email
          form_name: params.from_name, // Sender's name
          to_reply: params.reply_to, // Sender's email
          message: params.message, // The message content
          subject: params.subject, // Email subject
          time: new Date().toLocaleString(), // Add timestamp
        },
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
          limitRate: {
            throttle: 5000, // 1 email per 5 seconds
          },
        },
      );
      toast.success("Email sent successfully!");
    } catch (error) {
      console.error("Failed to send email:", error);
      toast.error("Failed to send email. Please try again later.");
      throw error; // Re-throw to handle in onSubmit
    }
  };

  const onSubmit = (data: formType) => {
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(async () => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        reset();
      }, 3000);
      const params = {
        to_name: "MuhammadSami",
        from_name: data.name,
        reply_to: data.email,
        subject: data.subject,
        message: data.message,
      };

      await sendEmail(params);
    }, 1500);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2 gradient-text">
            Message Sent Successfully!
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-md">
            Thank you for reaching out. I'll get back to you as soon as
            possible, usually within 24-48 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* name */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm text-gray-600 dark:text-gray-400"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <Input
                id="name"
                placeholder="Your name"
                {...register("name", { required: true })}
                className="bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.name.message}
                </p>
              )}
            </div>
            {/* email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm text-gray-600 dark:text-gray-400"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Your email"
                {...register("email", { required: true })}
                className="bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
          {/* subject */}
          <div className="space-y-2">
            <label
              htmlFor="subject"
              className="text-sm text-gray-600 dark:text-gray-400"
            >
              Subject <span className="text-red-500">*</span>
            </label>
            <Input
              id="subject"
              placeholder="What is this regarding?"
              {...register("subject", { required: true })}
              className="bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
            />
            {errors.subject && (
              <p className="mt-1 text-sm text-red-600">
                {errors.subject.message}
              </p>
            )}
          </div>
          {/* Message */}
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm text-gray-600 dark:text-gray-400"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <Textarea
              id="message"
              placeholder="Tell me about your project"
              {...register("message", { required: true })}
              className="bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600 min-h-[150px] focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">
                {errors.message.message}
              </p>
            )}
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending Message...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
            By submitting this form, you agree to my privacy policy and terms of
            service.
          </p>
        </form>
      )}
    </div>
  );
}
