import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'

import logoWhiteMyseat from '@/images/clients/myseat/logo-white-myseat-3x.png'
import logoWhiteLCS from '@/images/clients/laochangsha/logo-lcs-white.png'
import logoLokyo from '@/images/clients/lokyo/lokyo-white.png'
import logoJuanXinCai from '@/images/clients/juanxincai/juanxincai.png'
import logoGeMeiNa from '@/images/clients/gemeina/gemeina-white.png'
import logoFreePath from '@/images/clients/freepath/logo-freepath.png'
import logoStk from '@/images/clients/stkauto/stklogo.png'
import { loadMDXMetadata } from '@/lib/loadMDXMetadata'

const clients = [
  ['Lokyo', logoLokyo],
  ['Myseat', logoWhiteMyseat],
  ['GeMeiNa', logoGeMeiNa],
  ['FreePath', logoFreePath],
  ['JuanXinCai', logoJuanXinCai],
  ['LaoChangSha', logoWhiteLCS],
  ['STK', logoStk],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl border-[3px] border-[#2b65cb] bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8 ">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            The partners we have collaborated with.
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <div className="flex items-center justify-center">
            <ul
              role="list"
              className="mt-10 grid grid-cols-1 items-center justify-center gap-x-20 gap-y-10 lg:grid-cols-4 lg:gap-x-36"
            >
              {clients.map(([client, logo]) => (
                <li key={client}>
                  <FadeIn>
                    <Image
                      className="max-w-[12em]"
                      src={logo}
                      alt={client}
                      unoptimized
                    />
                  </FadeIn>
                </li>
              ))}
            </ul>
          </div>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Client Case Studies"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We have selected several typical cases that require digitization for
          your reference.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="max-w-[200px]"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time dateTime={caseStudy.year} className="font-semibold">
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>{caseStudy.tag}</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="IT Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          As long as those opportunities involve giving us money to re-purpose
          old projects — we can come up with an endless number of those.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Web development">
              We specialise in crafting beautiful, high quality marketing pages.
              The rest of the website will be a shell that uses lorem ipsum
              everywhere.
            </ListItem>
            <ListItem title="Application development">
              We have a team of skilled developers who are experts in the latest
              app frameworks, like Angular 1 and Google Web Toolkit.
            </ListItem>
            <ListItem title="E-commerce">
              We are at the forefront of modern e-commerce development. Which
              mainly means adding your logo to the Shopify store template we’ve
              used for the past six years.
            </ListItem>
            <ListItem title="Custom content management">
              At Studio we understand the importance of having a robust and
              customised CMS. That’s why we run all of our client projects out
              of a single, enormous Joomla instance.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'We are developer studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadMDXMetadata('work')).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Business
            <br />
            Go Digital
            <br />
            Grow Manage
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            The core mission of our team is to assist local companies in
            Singapore through their digital transformation journey. <br></br>Our
            range of services encompass:
          </p>
          <div className="mt-6 grid gap-4 text-xl text-neutral-600 md:grid-cols-2">
            <div className="rounded-2xl border-[3px] border-[#2b65cb] bg-neutral-950 p-8 text-neutral-300 shadow">
              {/* icon */}
              <div>
                <svg
                  width="48"
                  height="auto"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 0H0V24H24V0Z" />
                  <path
                    d="M14.32 8.09998C14.67 7.90998 14.97 7.64998 15.22 7.34998C15.72 6.77998 16.01 6.01999 16.01 5.20999C16.01 3.37999 14.52 1.88998 12.69 1.88998C11.36 1.88998 10.22 2.66999 9.69001 3.79999C9.16001 2.66999 8.02001 1.88998 6.69001 1.88998C4.86001 1.88998 3.38001 3.37999 3.38001 5.20999C3.38001 6.01999 3.67001 6.77998 4.17001 7.34998C4.41001 7.64998 4.72001 7.89998 5.06001 8.09998C3.30001 8.59998 2.01001 10.22 2.01001 12.15V15.61C2.01001 17.94 3.90001 19.83 6.22001 19.83H13.16C14.94 19.83 16.47 18.72 17.08 17.16C17.27 16.7 17.37 16.2 17.38 15.67V12.09C17.37 11.56 17.27 11.06 17.08 10.6C16.61 9.38998 15.59 8.44998 14.32 8.09998Z"
                    fill="white"
                  />
                  <path
                    d="M21.19 9.92998C20.67 9.57998 20.01 9.49996 19.43 9.71996L18.02 10.25C18.2 10.71 18.32 11.2 18.36 11.72C18.37 11.86 18.38 12 18.38 12.15V15.61C18.38 15.76 18.37 15.9 18.36 16.04C18.32 16.56 18.2 17.05 18.02 17.51L19.43 18.04C19.65 18.12 19.87 18.16 20.1 18.16C20.48 18.16 20.86 18.05 21.19 17.82C21.7 17.47 22.01 16.88 22.01 16.26V11.5C22.01 10.88 21.7 10.29 21.19 9.92998Z"
                    fill="white"
                  />
                </svg>
              </div>
              <strong className="block font-display text-white">
                Product Shooting:
              </strong>
              Our professional team of photographers and models work together to
              create high-quality images and videos of your products. Use the
              assets on websites and social media to expand your brand.
            </div>

            <div className="rounded-2xl border-[3px] border-[#2b65cb] bg-neutral-950 p-8 text-neutral-300 shadow">
              {/* icon */}
              <div>
                <svg
                  width="48"
                  height="auto"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.12 10.58C19.16 9.78 17.98 9.38 16.81 9.48C16.54 5.9 13.67 4.06 10.91 4.06H10.78C8.06 4.11 5.08999 5.96 5.00999 9.86C2.82999 10.86 1.60999 13.36 2.11999 15.82C2.41999 17.32 3.37999 18.64 4.67999 19.36C5.52999 19.83 6.36001 19.95 6.96001 19.95C7.08001 19.95 7.2 19.94 7.31 19.93L17.48 19.89C20.07 19.88 22 17.13 22.01 14.68C22.01 12.22 20.31 10.74 20.12 10.58Z"
                    fill="white"
                  />
                </svg>
              </div>
              <strong className="block font-display text-white">
                Website Development:
              </strong>
              We have expertise in building and maintaining websites on major
              platforms like WooCommerce and Shopify.
            </div>

            <div className="rounded-2xl border-[3px] border-[#2b65cb] bg-neutral-950 p-8 text-neutral-300 shadow">
              {/* icon */}
              <div>
                <svg
                  width="48"
                  height="auto"
                  viewBox="0 0 24 24"
                  fill="#FFFFFF"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5 17.09C14.4975 17.2881 14.4176 17.4774 14.2775 17.6175C14.1374 17.7576 13.9482 17.8374 13.75 17.84H8.92004C8.72113 17.84 8.53037 17.761 8.38972 17.6203C8.24906 17.4797 8.17004 17.2889 8.17004 17.09C8.17004 16.8911 8.24906 16.7003 8.38972 16.5597C8.53037 16.419 8.72113 16.34 8.92004 16.34H13.75C13.949 16.34 14.1397 16.419 14.2804 16.5597C14.421 16.7003 14.5 16.8911 14.5 17.09Z"
                    fill="white"
                  />
                  <path
                    d="M5.54999 17.08V17.13C5.53974 17.3193 5.45728 17.4973 5.3196 17.6276C5.18192 17.7578 4.99951 17.8303 4.80999 17.83H4.75999C4.54717 17.8178 4.33612 17.7843 4.12999 17.73C4.07822 17.5206 4.05137 17.3057 4.04999 17.09C4.04692 16.7762 4.10114 16.4644 4.20999 16.17C4.41121 16.2651 4.62809 16.3227 4.84999 16.34C5.03923 16.3502 5.21734 16.4327 5.34758 16.5704C5.47782 16.7081 5.55027 16.8905 5.54999 17.08Z"
                    fill="white"
                  />
                  <path
                    d="M15.83 7.22V15.03C15.83 15.2289 15.7509 15.4197 15.6103 15.5603C15.4696 15.701 15.2789 15.78 15.08 15.78C14.881 15.78 14.6903 15.701 14.5496 15.5603C14.409 15.4197 14.33 15.2289 14.33 15.03V9.09999C14.3423 8.66634 14.4952 8.24845 14.7658 7.90933C15.0364 7.57022 15.4099 7.32828 15.83 7.22Z"
                    fill="white"
                  />
                  <path
                    d="M22 11.24V15.83C21.9564 16.3969 21.692 16.9241 21.2638 17.2981C20.8355 17.6721 20.2776 17.8631 19.71 17.83H18.17C17.971 17.83 17.7803 17.751 17.6396 17.6103C17.499 17.4697 17.42 17.2789 17.42 17.08C17.42 16.8811 17.499 16.6903 17.6396 16.5497C17.7803 16.409 17.971 16.33 18.17 16.33H19.71C20.17 16.33 20.5 16.06 20.5 15.82V11.23C20.4907 11.1251 20.4404 11.028 20.36 10.96L19.82 10.44L18.11 8.80999C17.9302 8.65376 17.6979 8.57156 17.46 8.58H16.62C16.16 8.58 15.83 8.84999 15.83 9.08999V15.26C15.83 15.4589 15.7509 15.6497 15.6103 15.7903C15.4696 15.931 15.2789 16.01 15.08 16.01C14.881 16.01 14.6903 15.931 14.5496 15.7903C14.409 15.6497 14.33 15.4589 14.33 15.26V9.08999C14.3423 8.65634 14.4952 8.23844 14.7658 7.89933C15.0364 7.56022 15.4099 7.31827 15.83 7.20999C16.0837 7.1208 16.351 7.07681 16.62 7.08H17.46C18.0806 7.07374 18.6808 7.30235 19.14 7.71999L21.4 9.88C21.5867 10.0544 21.7361 10.2648 21.8393 10.4985C21.9424 10.7323 21.9971 10.9845 22 11.24Z"
                    fill="white"
                  />
                  <path
                    d="M20.97 11.2C20.9716 11.3493 20.9274 11.4954 20.8434 11.6188C20.7594 11.7422 20.6395 11.8368 20.5 11.89C20.4121 11.9299 20.3166 11.9504 20.22 11.95H15.29C15.0911 11.95 14.9004 11.871 14.7597 11.7303C14.6191 11.5897 14.54 11.3989 14.54 11.2C14.54 11.0011 14.6191 10.8103 14.7597 10.6697C14.9004 10.529 15.0911 10.45 15.29 10.45H20.29C20.4757 10.4696 20.6477 10.557 20.7731 10.6953C20.8985 10.8336 20.9686 11.0133 20.97 11.2Z"
                    fill="white"
                  />
                  <path
                    d="M9.55999 16.34C9.40225 15.7622 9.06342 15.2503 8.59326 14.8793C8.12309 14.5084 7.54637 14.2979 6.94778 14.2789C6.34919 14.2599 5.76027 14.4333 5.2675 14.7736C4.77474 15.114 4.40409 15.6034 4.20999 16.17C4.10114 16.4644 4.04692 16.7762 4.04999 17.09C4.05137 17.3057 4.07822 17.5206 4.12999 17.73C4.26976 18.338 4.60857 18.8819 5.09265 19.2754C5.57674 19.6689 6.17838 19.8895 6.8021 19.9021C7.42582 19.9147 8.0359 19.7187 8.53553 19.3451C9.03515 18.9716 9.39571 18.4418 9.55999 17.84C9.70676 17.3508 9.70676 16.8292 9.55999 16.34ZM6.85999 18.39C6.5203 18.3928 6.19302 18.2625 5.94819 18.027C5.70336 17.7915 5.56043 17.4695 5.54999 17.13V17.08C5.54999 16.8209 5.62682 16.5676 5.77076 16.3522C5.91471 16.1368 6.1193 15.9689 6.35867 15.8697C6.59805 15.7706 6.86144 15.7446 7.11556 15.7952C7.36967 15.8457 7.60309 15.9705 7.7863 16.1537C7.9695 16.3369 8.09427 16.5703 8.14482 16.8244C8.19536 17.0785 8.16942 17.3419 8.07027 17.5813C7.97112 17.8207 7.80321 18.0253 7.58779 18.1692C7.37236 18.3132 7.11908 18.39 6.85999 18.39Z"
                    fill="white"
                  />
                  <path
                    d="M18.82 16.34C18.6559 15.7474 18.302 15.225 17.8124 14.8529C17.3229 14.4808 16.7249 14.2796 16.11 14.28H15.83C15.2803 14.3363 14.7591 14.5518 14.33 14.9C13.8832 15.2722 13.5591 15.7706 13.4 16.33C13.2666 16.8211 13.2666 17.3389 13.4 17.83C13.5692 18.418 13.9251 18.935 14.414 19.303C14.9028 19.671 15.4981 19.8701 16.11 19.8701C16.7219 19.8701 17.3172 19.671 17.806 19.303C18.2949 18.935 18.6508 18.418 18.82 17.83C18.9535 17.3389 18.9535 16.8211 18.82 16.33V16.34ZM16.11 18.39C15.8505 18.39 15.5968 18.3129 15.3812 18.1685C15.1656 18.0241 14.9977 17.8189 14.8988 17.579C14.8 17.339 14.7746 17.0751 14.826 16.8207C14.8773 16.5663 15.0031 16.3329 15.1873 16.1501C15.3715 15.9673 15.6059 15.8434 15.8606 15.794C16.1154 15.7445 16.3791 15.7719 16.6183 15.8726C16.8575 15.9733 17.0614 16.1428 17.2041 16.3595C17.3469 16.5762 17.422 16.8305 17.42 17.09C17.4174 17.4357 17.2782 17.7663 17.0328 18.0099C16.7874 18.2534 16.4557 18.39 16.11 18.39Z"
                    fill="white"
                  />
                  <path
                    d="M15.83 6.67V7.23C15.4099 7.33828 15.0364 7.58023 14.7658 7.91934C14.4953 8.25846 14.3423 8.67635 14.33 9.11V14.92C13.8832 15.2922 13.5591 15.7906 13.4 16.35H9.56C9.40226 15.7722 9.06343 15.2603 8.59327 14.8893C8.12311 14.5184 7.54639 14.3079 6.94779 14.2889C6.3492 14.2699 5.76028 14.4433 5.26752 14.7836C4.77475 15.124 4.4041 15.6134 4.21 16.18C4.10115 16.4744 4.04693 16.7861 4.05 17.1C4.05138 17.3157 4.07823 17.5306 4.13 17.74C3.54469 17.6105 3.01855 17.2913 2.63336 16.832C2.24818 16.3726 2.02552 15.7989 2 15.2V6.67C2.02167 6.29813 2.11653 5.9342 2.27916 5.59908C2.44179 5.26395 2.66897 4.96422 2.94769 4.71709C3.22641 4.46996 3.55117 4.28029 3.90335 4.15895C4.25554 4.03761 4.62821 3.98699 5 4.01H12.89C13.6308 3.97987 14.3539 4.24169 14.9037 4.73912C15.4534 5.23655 15.7861 5.92988 15.83 6.67Z"
                    fill="white"
                  />
                  <path
                    d="M21.4 9.88999L19.14 7.72999C18.6808 7.31234 18.0807 7.08373 17.46 7.08999H16.62C16.3511 7.0868 16.0837 7.13082 15.83 7.22C15.4099 7.32828 15.0364 7.57022 14.7658 7.90933C14.4952 8.24845 14.3423 8.66634 14.33 9.09999L14.33 14.91C13.8832 15.2822 13.559 15.7806 13.4 16.34L9.55999 16.34C9.40225 15.7622 9.06342 15.2503 8.59326 14.8793C8.12309 14.5084 7.54637 14.2979 6.94778 14.2789C6.34919 14.2599 5.76027 14.4333 5.2675 14.7736C4.77474 15.114 4.40409 15.6034 4.20999 16.17C4.10114 16.4644 4.04692 16.7762 4.04999 17.09C4.05137 17.3057 4.07822 17.5206 4.12999 17.73C4.26976 18.338 4.60857 18.8819 5.09265 19.2754C5.57674 19.6689 6.17838 19.8895 6.8021 19.9021C7.42582 19.9147 8.0359 19.7187 8.53553 19.3451C9.03515 18.9716 9.39571 18.4418 9.55999 17.84L13.4 17.84C13.5692 18.428 13.9251 18.945 14.414 19.313C14.9028 19.681 15.4981 19.8801 16.11 19.8801C16.7219 19.8801 17.3172 19.681 17.806 19.313C18.2949 18.945 18.6508 18.428 18.82 17.84H19.71C20.2776 17.8731 20.8356 17.6821 21.2638 17.3081C21.6921 16.9341 21.9564 16.4069 22 15.84V11.25C21.9971 10.9945 21.9424 10.7423 21.8393 10.5085C21.7362 10.2748 21.5867 10.0644 21.4 9.88999ZM15.83 9.09998C15.83 8.85998 16.16 8.58999 16.62 8.58999H17.46C17.698 8.58156 17.9303 8.66375 18.11 8.81999L19.82 10.45H15.82L15.83 9.09998ZM6.82999 18.39C6.4903 18.3928 6.16302 18.2625 5.91819 18.027C5.67336 17.7915 5.53043 17.4695 5.51999 17.13V17.08C5.51999 16.8209 5.59682 16.5676 5.74076 16.3522C5.88471 16.1368 6.0893 15.9689 6.32867 15.8697C6.56805 15.7706 6.83144 15.7446 7.08556 15.7952C7.33967 15.8457 7.57309 15.9705 7.7563 16.1537C7.93951 16.3369 8.06427 16.5703 8.11482 16.8244C8.16536 17.0785 8.13942 17.3419 8.04027 17.5813C7.94112 17.8207 7.77321 18.0253 7.55779 18.1692C7.34236 18.3132 7.08908 18.39 6.82999 18.39ZM16.08 18.39C15.8205 18.39 15.5668 18.3129 15.3512 18.1685C15.1355 18.0241 14.9676 17.8189 14.8688 17.579C14.7699 17.339 14.7446 17.0751 14.7959 16.8207C14.8473 16.5663 14.9731 16.3329 15.1573 16.1501C15.3415 15.9673 15.5758 15.8434 15.8306 15.794C16.0854 15.7445 16.3491 15.7719 16.5883 15.8726C16.8275 15.9733 17.0314 16.1428 17.1741 16.3595C17.3168 16.5762 17.392 16.8305 17.39 17.09C17.3875 17.4306 17.2524 17.7567 17.0135 17.9994C16.7745 18.2421 16.4505 18.3822 16.11 18.39L16.08 18.39Z"
                    fill="white"
                  />
                </svg>
              </div>
              <strong className="block font-display text-white">
                ERP Construction for Manufacturing Businesses:
              </strong>
              Our integrated system covers all aspects, from sales and factory
              operations to delivery.
            </div>

            <div className="rounded-2xl border-[3px] border-[#2b65cb] bg-neutral-950 p-8 text-neutral-300 shadow">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.84 10.56C21.78 10.19 21.47 9.92001 21.1 9.92001H12.15C11.74 9.92001 11.4 10.26 11.4 10.67V13.9C11.4 14.31 11.74 14.65 12.15 14.65H16.47C15.98 15.81 14.72 17.2 12.15 17.2C9.34999 17.2 7.06 14.87 7.06 12C7.06 9.47001 8.68 7.88001 10.2 7.24001C12.04 6.46001 14.01 6.78001 15.35 8.07001C15.64 8.35001 16.09 8.35001 16.39 8.07001L18.96 5.60001C19.11 5.46001 19.2 5.26001 19.2 5.06001C19.19 4.85001 19.11 4.65001 18.96 4.51001C17.08 2.77001 14.73 1.85001 12.15 1.85001C6.54999 1.85001 2 6.40001 2 12C2 17.69 6.45999 22.15 12.15 22.15C17.95 22.15 22 18.07 22 12.23C22 11.6 21.93 11.11 21.84 10.56Z"
                  fill="white"
                />
              </svg>
              <strong className="block font-display text-white">
                Digital Operations:
              </strong>
              We perform all types of digital operations like website SEO and
              Google ad placements to maximize your online reach.
            </div>
          </div>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <FadeIn>
        <Container className="mt-24 sm:mt-32 lg:mt-40">
          <SectionIntro
            eyebrow="Photography Services"
            title="Exquisite product photos or videos."
            className="mt-24 sm:mt-32 lg:mt-40"
          >
            <p>
              We have a dedicated photography studio to help you shoot exquisite
              product photos or videos.
            </p>
          </SectionIntro>
          <div className="mt-10 flex items-center justify-center rounded-2xl border-[3px] border-[#2b65cb] bg-neutral-950 p-4">
            <video
              controls
              src="https://res.cloudinary.com/damn4egye/video/upload/v1698977712/video_poxxf8.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </Container>
      </FadeIn>

      <Services />

      <ContactSection />
    </>
  )
}
