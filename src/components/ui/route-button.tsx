"use client";

import type { MouseEvent } from "react";
import { useRouter } from "next/navigation";
import { Button, type ButtonProps } from "antd";

type Props = Omit<ButtonProps, "href"> & { href: string };

/**
 * antd's Button renders a plain `<a>` when given `href`, which means a full
 * document load. It also cannot be wrapped in `next/link` (an anchor inside an
 * anchor). So we keep the real anchor — crawlable, middle-clickable — and hand
 * plain left clicks to the router instead.
 */
export function RouteButton({ href, onClick, onMouseEnter, ...rest }: Props) {
  const router = useRouter();

  return (
    <Button
      {...rest}
      href={href}
      onMouseEnter={(e) => {
        onMouseEnter?.(e);
        router.prefetch(href);
      }}
      onClick={(e: MouseEvent<HTMLElement>) => {
        onClick?.(e as Parameters<NonNullable<ButtonProps["onClick"]>>[0]);

        // Let the browser own modified clicks: new tab, new window, download.
        if (
          e.defaultPrevented ||
          e.button !== 0 ||
          e.metaKey ||
          e.ctrlKey ||
          e.shiftKey ||
          e.altKey
        ) {
          return;
        }

        e.preventDefault();
        router.push(href);
      }}
    />
  );
}
