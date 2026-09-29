import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

// ---------- Validation rules ----------
const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name (at least 2 characters).")
    .max(80, "Name must be under 80 characters."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .email("That doesn't look like a valid email address.")
    .max(120, "Email must be under 120 characters."),
  subject: z
    .string()
    .trim()
    .min(3, "Please add a short subject (at least 3 characters).")
    .max(120, "Subject must be under 120 characters."),
  message: z
    .string()
    .trim()
    .min(10, "Your message should be at least 10 characters.")
    .max(1500, "Message must be under 1500 characters."),
  // Honeypot: real people never see or fill this field, bots do.
  botcheck: z.string().max(0).optional(),
});

type ContactValues = z.infer<typeof contactSchema>;

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string;

const fieldClass =
  "w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground " +
  "placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring " +
  "aria-[invalid=true]:border-destructive";

const ContactForm = () => {
  const [sending, setSending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched", // validate after a field is left, then live
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      botcheck: "",
    },
  });

  const messageLength = watch("message")?.length ?? 0;

  const onSubmit = async (values: ContactValues) => {
    if (values.botcheck) return; // silently drop bot submissions

    if (!ACCESS_KEY) {
      toast.error(
        "Contact form isn't configured yet. Please email me directly.",
      );
      return;
    }

    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: values.name,
          email: values.email, // becomes the reply-to address
          subject: `Portfolio: ${values.subject}`,
          message: values.message,
          from_name: "Portfolio Contact Form",
        }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        toast.success("Message sent. I'll get back to you soon.");
        reset();
      } else {
        throw new Error(data.message || "Request failed");
      }
    } catch (err) {
      toast.error("Message not sent. Please try again in a moment.");
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Honeypot (hidden from people and screen readers) */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        {...register("botcheck")}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={!!errors.name}
            className={fieldClass}
            {...register("name")}
          />
          {errors.name && (
            <p role="alert" className="mt-1.5 text-sm text-destructive">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            className={fieldClass}
            {...register("email")}
          />
          {errors.email && (
            <p role="alert" className="mt-1.5 text-sm text-destructive">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-sm font-medium">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          placeholder="What is this about?"
          aria-invalid={!!errors.subject}
          className={fieldClass}
          {...register("subject")}
        />
        {errors.subject && (
          <p role="alert" className="mt-1.5 text-sm text-destructive">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          rows={6}
          placeholder="Tell me about your project or idea"
          aria-invalid={!!errors.message}
          className={`${fieldClass} resize-y`}
          {...register("message")}
        />
        <div className="mt-1.5 flex justify-between gap-4 text-sm">
          {errors.message ? (
            <p role="alert" className="text-destructive">
              {errors.message.message}
            </p>
          ) : (
            <span />
          )}
          <span className="text-muted-foreground">{messageLength}/1500</span>
        </div>
      </div>

      <button
        type="submit"
        disabled={sending}
        className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {sending && <Loader2 className="h-4 w-4 animate-spin" />}
        {sending ? "Sending..." : "Send message"}
      </button>
    </form>
  );
};

export default ContactForm;
