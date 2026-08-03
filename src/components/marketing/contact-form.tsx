"use client";

import { useState } from "react";
import Link from "next/link";
import { Button, Form, Input, Select } from "antd";
import { HiArrowRight, HiCheckCircle } from "react-icons/hi2";

import { companySizes, enquiryTopics } from "@/data/pages";

type Values = {
  name: string;
  email: string;
  company: string;
  size: string;
  topic: string;
  message: string;
};

/**
 * Demo enquiry form. There is no backend yet — a submit resolves locally and
 * shows the confirmation state, so the flow is complete for a visitor.
 */
export function ContactForm() {
  const [form] = Form.useForm<Values>();
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="border-ink-200/70 shadow-soft rounded-2xl border bg-white p-8 text-center sm:p-10">
        <span className="bg-mint-500/15 text-mint-600 mx-auto grid h-14 w-14 place-items-center rounded-full text-2xl">
          <HiCheckCircle />
        </span>
        <h2 className="font-display text-ink-900 mt-6 text-xl font-bold">
          Thanks — that reached us
        </h2>
        <p className="text-ink-500 mx-auto mt-3 max-w-sm text-sm leading-relaxed">
          A solutions engineer will reply within one business day, usually with a
          couple of questions about your pay components so the demo runs on rules
          that look like yours.
        </p>
        <Button
          className="mt-7"
          onClick={() => {
            form.resetFields();
            setSent(false);
          }}
        >
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <div className="border-ink-200/70 shadow-soft rounded-2xl border bg-white p-6 sm:p-8">
      <h2 className="font-display text-ink-900 text-xl font-bold">
        Tell us what you need
      </h2>
      <p className="text-ink-500 mt-1.5 text-sm">
        The more we know up front, the less of the call is discovery.
      </p>

      <Form<Values>
        form={form}
        layout="vertical"
        requiredMark={false}
        className="mt-7"
        onFinish={() => setSent(true)}
        initialValues={{ topic: enquiryTopics[0], size: companySizes[1] }}
      >
        <div className="grid gap-x-4 sm:grid-cols-2">
          <Form.Item
            name="name"
            label="Full name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input size="large" placeholder="Ayesha Karim" autoComplete="name" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Work email"
            rules={[
              { required: true, message: "Please enter your work email" },
              { type: "email", message: "That does not look like an email" },
            ]}
          >
            <Input size="large" placeholder="you@company.com" autoComplete="email" />
          </Form.Item>

          <Form.Item
            name="company"
            label="Company"
            rules={[{ required: true, message: "Please enter your company" }]}
          >
            <Input size="large" placeholder="Meridian Textiles" autoComplete="organization" />
          </Form.Item>

          <Form.Item name="size" label="Employees">
            <Select
              size="large"
              options={companySizes.map((value) => ({ label: value, value }))}
            />
          </Form.Item>
        </div>

        <Form.Item name="topic" label="What is this about?">
          <Select
            size="large"
            options={enquiryTopics.map((value) => ({ label: value, value }))}
          />
        </Form.Item>

        <Form.Item
          name="message"
          label="Anything we should know?"
          rules={[{ required: true, message: "A line or two is enough" }]}
        >
          <Input.TextArea
            rows={4}
            placeholder="We run payroll for 380 people across two entities and close on the 27th…"
          />
        </Form.Item>

        <Button
          type="primary"
          size="large"
          htmlType="submit"
          icon={<HiArrowRight />}
          iconPlacement="end"
          block
        >
          Send enquiry
        </Button>

        <p className="text-ink-400 mt-4 text-xs">
          By sending this you agree to us contacting you about KormoPay. We do not
          share your details — see our{" "}
          <Link href="/privacy" className="text-ink-600 hover:text-brand-600 underline">
            privacy policy
          </Link>
          .
        </p>
      </Form>
    </div>
  );
}
