import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import style from '@/styles/instagramGallery.module.scss'

// InstagramPost = ({ id, caption, media_url, media_type, timestamp, permalink }) => {
//   id: string;
//   caption: string;
//   media_url: string;
//   media_type: string;
//   timestamp: string;
//   permalink: string;
// }

export default function InstagramGallery() {
  const [instagramFeed, setInstagramFeed] = useState(null);
  const [error, setError] = useState(null);

  async function getInstagramFeed() {
    try {
      const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,timestamp,permalink&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN}`;
      const data = await fetch(url);
      // console.log("data", data);
      if (!data.ok) {
        throw new Error("Failed to fetch Instagram feed");
      }
      setInstagramFeed(await data.json());
      console.log("Instagram feed:", instagramFeed);
    } catch (err) {
      console.error("Error fetching Instagram feed:", err.message);
      setError(err.message);
    }
  }

  useEffect(() => {
    getInstagramFeed();
  }, []);

  return (
    <>
      {error && <p className={style.error}>{error}</p>}

      {instagramFeed && (
        <section className={style.instagramGalleryContainer}>
            {instagramFeed.data.slice(
              0,
              10
            ).map((post) => (
              <div key={post.id} className={style.InstagramGalleryCard}>
                <Link
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative"
                >
                  {post.media_type === "VIDEO" ? (
                    <video
                      src={post.media_url}
                      controls={false}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Image
                      src={post.media_url}
                      alt={post.caption}
                      className="w-full h-full object-cover"
                      width={300}
                      height={300}
                      priority
                    />
                  )}
                </Link>
              </div>
            ))}
        </section>
      )}
    </>
  );
}
