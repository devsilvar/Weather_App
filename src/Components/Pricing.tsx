import React from "react";

const Pricing = () => {
  return (
    <>
      <section>
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-5xl">
              Simple & Affordable Pricing
            </h2>
            <p className="mx-auto mb-8 mt-4 max-w-lg text-[#636262] md:mb-12 lg:mb-16">
              Simple & fixed pricing. 30 days money-back guarantee
            </p>
          </div>
          <div className="hidden text-center md:block">
            <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-4">
              <div className=""></div>
              <div className="">
                <p className="text-sm">Free</p>
                <p className="text-3xl font-bold">$0</p>
                <p className="text-sm font-semibold">Per month</p>
              </div>
              <div className="">
                <p className="text-sm">Starter</p>
                <p className="text-3xl font-bold">$99</p>
                <p className="text-sm font-semibold">Per month</p>
              </div>
              <div className="">
                <p className="text-sm">Agency</p>
                <p className="text-3xl font-bold">$199</p>
                <p className="text-sm font-semibold">Per month</p>
              </div>
              <div className="">
                <p className="text-sm">Enterprise</p>
                <p className="text-3xl font-bold">$299</p>
                <p className="text-sm font-semibold">Per month</p>
              </div>
            </div>
            <div className="grid grid-cols-[1.2fr_1fr_1fr_1fr_1fr] gap-8 py-8 [border-bottom:1px_solid_rgb(233,_240,_241)] lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
              <div className="flex items-center">
                <p className="font-semibold">Website Number</p>
                <div className="ml-2">
                  <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                    ?
                  </div>
                </div>
              </div>
              <p>01</p>
              <p>10</p>
              <p>50</p>
              <p>Unlimited</p>
            </div>
            <div className="grid grid-cols-[1.2fr_1fr_1fr_1fr_1fr] py-8 [border-bottom:1px_solid_rgb(233,_240,_241)] lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
              <div className="flex items-center">
                <p className="font-semibold">Server Storage</p>
                <div className="ml-2">
                  <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                    ?
                  </div>
                </div>
              </div>
              <p>100GB</p>
              <p>200GB</p>
              <p>1TB</p>
              <p>Unlimited</p>
            </div>
            <div className="grid grid-cols-[1.2fr_1fr_1fr_1fr_1fr] py-8 [border-bottom:1px_solid_rgb(233,_240,_241)] lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
              <div className="flex items-center">
                <p className="font-semibold">Team Members</p>
                <div className="ml-2">
                  <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                    ?
                  </div>
                </div>
              </div>
              <p>01</p>
              <p>20</p>
              <p>50</p>
              <p>Unlimited</p>
            </div>
            <div className="grid grid-cols-[1.2fr_1fr_1fr_1fr_1fr] py-8 [border-bottom:1px_solid_rgb(233,_240,_241)] lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
              <div className="flex items-center">
                <p className="font-semibold">Access to Email API</p>
                <div className="ml-2">
                  <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                    ?
                  </div>
                </div>
              </div>
              <p>-</p>
              <p>-</p>
              <div>
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f199a0337f863_Vector (2).svg"
                  alt=""
                  className="inline-block"
                />
              </div>
              <div>
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f199a0337f863_Vector (2).svg"
                  alt=""
                  className="inline-block"
                />
              </div>
            </div>
            <div className="grid grid-cols-[1.2fr_1fr_1fr_1fr_1fr] py-8 [border-bottom:1px_solid_rgb(233,_240,_241)] lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
              <div className="flex items-center">
                <p className="font-semibold">Access to Storage API</p>
                <div className="ml-2">
                  <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                    ?
                  </div>
                </div>
              </div>
              <p>-</p>
              <p>-</p>
              <p>-</p>
              <div>
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f199a0337f863_Vector (2).svg"
                  alt=""
                  className="inline-block"
                />
              </div>
            </div>
            <div className="grid grid-cols-[1.2fr_1fr_1fr_1fr_1fr] gap-8 pt-8 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
              <div></div>
              <div>
                <a
                  href="#"
                  className="inline-block border-2 border-solid border-black px-6 py-4 text-center font-semibold text-black transition [box-shadow:rgb(0,_0,0)-8px_8px] hover:[box-shadow:rgb(0,_0,_0)_0px_0px]"
                >
                  Get Started
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="inline-block border-2 border-solid border-black px-6 py-4 text-center font-semibold text-black transition [box-shadow:rgb(0,_0,0)-8px_8px] hover:[box-shadow:rgb(0,_0,_0)_0px_0px]"
                >
                  Get Started
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="inline-block border-2 border-solid border-black px-6 py-4 text-center font-semibold text-black transition [box-shadow:rgb(0,_0,0)-8px_8px] hover:[box-shadow:rgb(0,_0,_0)_0px_0px]"
                >
                  Get Started
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="inline-block border-2 border-solid border-black px-6 py-4 text-center font-semibold text-black transition [box-shadow:rgb(0,_0,0)-8px_8px] hover:[box-shadow:rgb(0,_0,_0)_0px_0px]"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>

          <div className="block md:hidden">
            <div>
              <div className="pb-4 pt-12 [border-bottom:1px_solid_rgb(233,_240,_241)]">
                <p className="text-sm">Free</p>
                <p className="text-3xl font-bold">$0</p>
                <p className="text-sm font-semibold">per month</p>
              </div>
              <div className="grid gap-8 py-4 [border-bottom:1px_solid_rgb(233,_240,_241)] md:py-8">
                <div className="flex items-center">
                  <p className="font-semibold">Website Number</p>
                  <div className="ml-2">
                    <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                      ?
                    </div>
                  </div>
                </div>
                <p>01</p>
              </div>
              <div className="grid gap-8 py-4 [border-bottom:1px_solid_rgb(233,_240,_241)] md:py-8">
                <div className="flex items-center">
                  <p className="font-semibold">Server Storage</p>
                  <div className="ml-2">
                    <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                      ?
                    </div>
                  </div>
                </div>
                <p>100GB</p>
              </div>
              <div className="grid gap-8 py-4 [border-bottom:1px_solid_rgb(233,_240,_241)] md:py-8">
                <div className="flex items-center">
                  <p className="font-semibold">Team Members</p>
                  <div className="ml-2">
                    <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                      ?
                    </div>
                  </div>
                </div>
                <p>01</p>
              </div>
              <div className="grid gap-8 py-4 [border-bottom:1px_solid_rgb(233,_240,_241)] md:py-8">
                <div className="flex items-center">
                  <p className="font-semibold">Access to Email API</p>
                  <div className="ml-2">
                    <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                      ?
                    </div>
                  </div>
                </div>
                <p>-</p>
              </div>
              <div className="grid gap-8 py-4 [border-bottom:1px_solid_rgb(233,_240,_241)] md:py-8">
                <div className="flex items-center">
                  <p className="font-semibold">Access to Storage API</p>
                  <div className="ml-2">
                    <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                      ?
                    </div>
                  </div>
                </div>
                <p>-</p>
              </div>
              <a
                href="#"
                className="mt-8 inline-block bg-[#276ef1] px-8 py-4 font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]"
              >
                <p className="mr-6">Get Started</p>
              </a>
            </div>

            <div>
              <div className="pb-4 pt-12 [border-bottom:1px_solid_rgb(233,_240,_241)]">
                <p className="text-sm">Starter</p>
                <p className="text-3xl font-bold">$99</p>
                <p className="text-sm font-semibold">per month</p>
              </div>
              <div className="grid gap-8 py-4 [border-bottom:1px_solid_rgb(233,_240,_241)] md:py-8">
                <div className="flex items-center">
                  <p className="font-semibold">Website Number</p>
                  <div className="ml-2">
                    <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                      ?
                    </div>
                  </div>
                </div>
                <p>10</p>
              </div>
              <div className="grid gap-8 py-4 [border-bottom:1px_solid_rgb(233,_240,_241)] md:py-8">
                <div className="flex items-center">
                  <p className="font-semibold">Server Storage</p>
                  <div className="ml-2">
                    <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                      ?
                    </div>
                  </div>
                </div>
                <p>200GB</p>
              </div>
              <div className="grid gap-8 py-4 [border-bottom:1px_solid_rgb(233,_240,_241)] md:py-8">
                <div className="flex items-center">
                  <p className="font-semibold">Team Members</p>
                  <div className="ml-2">
                    <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                      ?
                    </div>
                  </div>
                </div>
                <p>10</p>
              </div>
              <div className="grid gap-8 py-4 [border-bottom:1px_solid_rgb(233,_240,_241)] md:py-8">
                <div className="flex items-center">
                  <p className="font-semibold">Access to Email API</p>
                  <div className="ml-2">
                    <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                      ?
                    </div>
                  </div>
                </div>
                <p>-</p>
              </div>
              <div className="grid gap-8 py-4 [border-bottom:1px_solid_rgb(233,_240,_241)] md:py-8">
                <div className="flex items-center">
                  <p className="font-semibold">Access to Storage API</p>
                  <div className="ml-2">
                    <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                      ?
                    </div>
                  </div>
                </div>
                <p>-</p>
              </div>
              <a
                href="#"
                className="mt-8 inline-block bg-[#276ef1] px-8 py-4 font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]"
              >
                <p className="mr-6">Get Started</p>
              </a>
            </div>

            <div>
              <div className="pb-4 pt-12 [border-bottom:1px_solid_rgb(233,_240,_241)]">
                <p className="text-sm">Agency</p>
                <p className="text-3xl font-bold">$199</p>
                <p className="text-sm font-semibold">per month</p>
              </div>
              <div className="grid gap-8 py-4 [border-bottom:1px_solid_rgb(233,_240,_241)] md:py-8">
                <div className="flex items-center">
                  <p className="font-semibold">Website Number</p>
                  <div className="ml-2">
                    <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                      ?
                    </div>
                  </div>
                </div>
                <p>50</p>
              </div>
              <div className="grid gap-8 py-4 [border-bottom:1px_solid_rgb(233,_240,_241)] md:py-8">
                <div className="flex items-center">
                  <p className="font-semibold">Server Storage</p>
                  <div className="ml-2">
                    <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                      ?
                    </div>
                  </div>
                </div>
                <p>1TB</p>
              </div>
              <div className="grid gap-8 py-4 [border-bottom:1px_solid_rgb(233,_240,_241)] md:py-8">
                <div className="flex items-center">
                  <p className="font-semibold">Team Members</p>
                  <div className="ml-2">
                    <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                      ?
                    </div>
                  </div>
                </div>
                <p>20</p>
              </div>
              <div className="grid gap-8 py-4 [border-bottom:1px_solid_rgb(233,_240,_241)] md:py-8">
                <div className="flex items-center">
                  <p className="font-semibold">Access to Email API</p>
                  <div className="ml-2">
                    <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                      ?
                    </div>
                  </div>
                </div>
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f199a0337f863_Vector (2).svg"
                  alt=""
                  className="inline-block"
                />
              </div>
              <div className="grid gap-8 py-4 [border-bottom:1px_solid_rgb(233,_240,_241)] md:py-8">
                <div className="flex items-center">
                  <p className="font-semibold">Access to Storage API</p>
                  <div className="ml-2">
                    <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                      ?
                    </div>
                  </div>
                </div>
                <p>-</p>
              </div>
              <a
                href="#"
                className="mt-8 inline-block bg-[#276ef1] px-8 py-4 font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]"
              >
                <p className="mr-6">Get Started</p>
              </a>
            </div>

            <div>
              <div className="pb-4 pt-12 [border-bottom:1px_solid_rgb(233,_240,_241)]">
                <p className="text-sm">Enterprise</p>
                <p className="text-3xl font-bold">$299</p>
                <p className="text-sm font-semibold">per month</p>
              </div>
              <div className="grid gap-8 py-4 [border-bottom:1px_solid_rgb(233,_240,_241)] md:py-8">
                <div className="flex items-center">
                  <p className="font-semibold">Website Number</p>
                  <div className="ml-2">
                    <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                      ?
                    </div>
                  </div>
                </div>
                <p>Unlimited</p>
              </div>
              <div className="grid gap-8 py-4 [border-bottom:1px_solid_rgb(233,_240,_241)] md:py-8">
                <div className="flex items-center">
                  <p className="font-semibold">Server Storage</p>
                  <div className="ml-2">
                    <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                      ?
                    </div>
                  </div>
                </div>
                <p>Unlimited</p>
              </div>
              <div className="grid gap-8 py-4 [border-bottom:1px_solid_rgb(233,_240,_241)] md:py-8">
                <div className="flex items-center">
                  <p className="font-semibold">Team Members</p>
                  <div className="ml-2">
                    <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                      ?
                    </div>
                  </div>
                </div>
                <p>Unlimited</p>
              </div>
              <div className="grid gap-8 py-4 [border-bottom:1px_solid_rgb(233,_240,_241)] md:py-8">
                <div className="flex items-center">
                  <p className="font-semibold">Access to Email API</p>
                  <div className="ml-2">
                    <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                      ?
                    </div>
                  </div>
                </div>
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f199a0337f863_Vector (2).svg"
                  alt=""
                  className="inline-block"
                />
              </div>
              <div className="grid gap-8 py-4 [border-bottom:1px_solid_rgb(233,_240,_241)] md:py-8">
                <div className="flex items-center">
                  <p className="font-semibold">Access to Storage API</p>
                  <div className="ml-2">
                    <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                      ?
                    </div>
                  </div>
                </div>
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f199a0337f863_Vector (2).svg"
                  alt=""
                  className="inline-block"
                />
              </div>
              <a
                href="#"
                className="mt-8 inline-block bg-[#276ef1] px-8 py-4 font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]"
              >
                <p className="mr-6">Get Started</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
