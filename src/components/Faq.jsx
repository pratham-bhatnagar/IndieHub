import { useState } from "react";
import Faqtile from "./faqTile";
export default function Faq() {
  return (
    <div className="relative z-0">
      <div>
        <img src="/Ellipse 4.svg" className="w-[100vw] h-[100vh]" />
      </div>
      {/* TODO     
change faq questions */}
      <div className="absolute inset-0 flex justify-center z-10 ">
        <div className="grid grid-cols-2 gap-x-20">
          <Faqtile
            question="What info can I change on my item?"
            answer="Copyright transfer and resellable. You can only edit the information of the item if it's listed for sale."
          />
          <Faqtile
            question="What info can I not change on my item?"
            answer="Token ID, contract address, name, title, image, additional metadata such as adding of unlocked /bonus content and royalities percentage or smart contract associated with the NFT."
          />
          <Faqtile
            question="What is Gas Fees?"
            answer="It is the reward given to miners for putting transactions in the blockchain or executing them."
          />
          <Faqtile
            question="Why is metadata important?"
            answer="Metadata ensures that we will be able find data, use data, and preserve and re-use data in the future. It gives a unique identity to the art piece and makes it a NFT"
          />
          <Faqtile
            question="How to upload your metadata?"
            answer="Metadata can be uploaded in json file format"
          />
        </div>
      </div>
    </div>
  );
}
