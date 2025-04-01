"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card3D } from "@/components/3d-card";
import { CheckCircle, Loader2 } from "lucide-react";

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: "",
          email: "",
          subject: "",
          budget: "",
          timeline: "",
          message: "",
        });
      }, 3000);
    }, 1500);
  };

  return (
    <Card3D
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
      glareIntensity={0.1}
      rotationIntensity={5}
    >
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
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm text-gray-600 dark:text-gray-400"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <Input
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm text-gray-600 dark:text-gray-400"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <Input
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                type="email"
                placeholder="Your email"
                required
                className="bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="subject"
              className="text-sm text-gray-600 dark:text-gray-400"
            >
              Subject <span className="text-red-500">*</span>
            </label>
            <Input
              id="subject"
              name="subject"
              value={formState.subject}
              onChange={handleChange}
              placeholder="What is this regarding?"
              required
              className="bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                htmlFor="budget"
                className="text-sm text-gray-600 dark:text-gray-400"
              >
                Budget (USD)
              </label>
              <Input
                id="budget"
                name="budget"
                value={formState.budget}
                onChange={handleChange}
                placeholder="Your budget"
                className="bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="timeline"
                className="text-sm text-gray-600 dark:text-gray-400"
              >
                Timeline
              </label>
              <Input
                id="timeline"
                name="timeline"
                value={formState.timeline}
                onChange={handleChange}
                placeholder="Expected timeline"
                className="bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm text-gray-600 dark:text-gray-400"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <Textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              placeholder="Tell me about your project"
              required
              className="bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600 min-h-[150px] focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
            />
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
    </Card3D>
  );
}
