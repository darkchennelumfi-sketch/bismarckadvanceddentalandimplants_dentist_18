import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import type { Post } from "@/data/posts";

export function PostCard({ post, index }: { post: Post; index: number }) {
  return (
    <article className="group">
      <a
        href={post.href}
        target="_blank"
        rel="noreferrer"
        className="block focus-visible:outline-none"
        aria-label={`${post.title} — read the full article`}
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem] bg-sand">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
          />
          <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-ink backdrop-blur">
            {post.category}
          </span>
        </div>
      </a>

      <div className="mt-6 flex items-start gap-4">
        <span className="font-display text-sm italic text-ink/65">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div>
          <h3 className="font-display text-[1.5rem] leading-snug text-ink">
            <a
              href={post.href}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-copper"
            >
              {post.title}
            </a>
          </h3>
          <p className="mt-3 line-clamp-3 text-[13px] leading-6 text-ink/65">
            {post.excerpt}
          </p>
          <a
            href={post.href}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-copper transition-colors hover:text-copper-dark"
          >
            Read the article
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
}
