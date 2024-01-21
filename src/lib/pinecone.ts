/* import { Pinecone } from "@pinecone-database/pinecone";

export const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY!,
});
 */

import { Pinecone } from "@pinecone-database/pinecone";

export const getPinecone = async () => {
  const pinecone = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY!,
  });

  // If there are any asynchronous operations to be performed with `pinecone`,
  // you can await them here.

  return pinecone;
};
