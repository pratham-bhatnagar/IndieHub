import { useState } from "react";
export default function Faq() {
  const [faq, setFaq] = useState(true);
  return (
    <div className="relative z-0">
      <div>
        <img src="/Ellipse 4.svg" className="w-[100vw] h-[100vh]" />
      </div>
      <div className="absolute inset-0 flex z-10">
        <section id="faq">
          <div className="my-[150px]   grid justify-items-center">
            <p className="text-5xl font-semibold ml-[49vw] 2xl:ml-[53vw] text-white">
              Frequently Asked Questions
            </p>
            <div className=" grid grid-cols-2 gap-x-[10vw] gap-y-[10vh] mt-[10vh]">
              <div
                className="mb-[20px]"
                onClick={() => {
                  setFaq(!faq);
                }}
              >
                {faq ? (
                  <div>
                    <label className="flex w-[500px] rounded-[10px] text-left text-[#ffffff50] hover:font-bold hover:text-[#ffffff]">
                      <p className=" grid  py-[15px] text-left text-2xl  ">
                        How to view my NFTs in MetaMask?
                      </p>
                      <br />
                    </label>
                    <hr className="w-[500px]" />
                  </div>
                ) : (
                  <div>
                    <label className="flex w-[500px] rounded-[10px] ">
                      <p className="  grid  py-[15px] text-2xl text-white">
                        Enter the NFT address and collectible ID and your NFT
                        will appear under the Collectibles tab on your MetaMask
                        wallet
                      </p>
                    </label>
                    <hr className="w-[500px]" />
                  </div>
                )}
              </div>

              <div
                className="mb-[20px]"
                onClick={() => {
                  setFaq(!faq);
                }}
              >
                {faq ? (
                  <div>
                    <label className="flex w-[500px] rounded-[10px] text-left text-[#ffffff50] hover:font-bold hover:text-[#ffffff]">
                      <p className=" grid  py-[15px] text-left text-2xl  ">
                        How to view my NFTs in MetaMask?
                      </p>
                      <br />
                    </label>
                    <hr className="w-[500px]" />
                  </div>
                ) : (
                  <div>
                    <label className="flex w-[500px] rounded-[10px] ">
                      <p className="  grid  py-[15px] text-2xl text-white">
                        Enter the NFT address and collectible ID and your NFT
                        will appear under the Collectibles tab on your MetaMask
                        wallet
                      </p>
                    </label>
                    <hr className="w-[500px]" />
                  </div>
                )}
              </div>

              <div
                className="mb-[20px]"
                onClick={() => {
                  setFaq(!faq);
                }}
              >
                {faq ? (
                  <div>
                    <label className="flex w-[500px] rounded-[10px] text-left text-[#ffffff50] hover:font-bold hover:text-[#ffffff]">
                      <p className=" grid  py-[15px] text-left text-2xl  ">
                        How to view my NFTs in MetaMask?
                      </p>
                      <br />
                    </label>
                    <hr className="w-[500px]" />
                  </div>
                ) : (
                  <div>
                    <label className="flex w-[500px] rounded-[10px] ">
                      <p className="  grid  py-[15px] text-2xl text-white">
                        Enter the NFT address and collectible ID and your NFT
                        will appear under the Collectibles tab on your MetaMask
                        wallet
                      </p>
                    </label>
                    <hr className="w-[500px]" />
                  </div>
                )}
              </div>

              <div
                className="mb-[20px]"
                onClick={() => {
                  setFaq(!faq);
                }}
              >
                {faq ? (
                  <div>
                    <label className="flex w-[500px] rounded-[10px] text-left text-[#ffffff50] hover:font-bold hover:text-[#ffffff]">
                      <p className=" grid  py-[15px] text-left text-2xl  ">
                        How to view my NFTs in MetaMask?
                      </p>
                      <br />
                    </label>
                    <hr className="w-[500px]" />
                  </div>
                ) : (
                  <div>
                    <label className="flex w-[500px] rounded-[10px] ">
                      <p className="  grid  py-[15px] text-2xl text-white">
                        Enter the NFT address and collectible ID and your NFT
                        will appear under the Collectibles tab on your MetaMask
                        wallet
                      </p>
                    </label>
                    <hr className="w-[500px]" />
                  </div>
                )}
              </div>
              {/* <Faqtile
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
              /> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
