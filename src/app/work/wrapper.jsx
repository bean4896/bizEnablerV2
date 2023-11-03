import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GrayscaleTransitionImage } from '@/components/GrayscaleTransitionImage'
import { MDXComponents } from '@/components/MDXComponents'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { loadMDXMetadata } from '@/lib/loadMDXMetadata'

export default async function CaseStudyLayout({ children, _segments }) {
  let id = _segments.at(-2)
  let allCaseStudies = await loadMDXMetadata('work')
  let caseStudy = allCaseStudies.find((caseStudy) => caseStudy.id === id)
  let moreCaseStudies = allCaseStudies
    .filter((caseStudy) => caseStudy.id !== id)
    .slice(0, 2)

  return (
    <>
      <article className="mt-24 sm:mt-32 lg:mt-40">

        <header>
          <PageIntro eyebrow="Case Study" title={caseStudy.title} centered>
            <p>{caseStudy.summary}</p>
            {/* Button to client's webpage */}
            <div className="text-center mt-6">
              <a
                href={caseStudy.clientWebsiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-3 border border-transparent text-base font-medium rounded-4xl text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Visit Website
              </a>
            </div>
          </PageIntro>

          <FadeIn>
            <div className="mt-24 border-t border-neutral-200 bg-white/50 sm:mt-32 lg:mt-40">
              <Container>
                <div className="mx-auto max-w-5xl">
                  {/* existing dl */}
                </div>
              </Container>
            </div>

            <div className="border-y border-neutral-200 bg-neutral-100">
              <div className="-my-px mx-auto max-w-[76rem] bg-neutral-200">
                <GrayscaleTransitionImage
                  {...caseStudy.image}
                  quality={90}
                  className="w-full"
                  sizes="(min-width: 1216px) 76rem, 100vw"
                  priority
                />
              </div>
            </div>
          </FadeIn>
        </header>


        <Container className="mt-24 sm:mt-32 lg:mt-40">
          <FadeIn>
            <MDXComponents.wrapper>{children}</MDXComponents.wrapper>
          </FadeIn>
        </Container>


      </article>

      {moreCaseStudies.length > 0 && (
        <PageLinks
          className="mt-24 sm:mt-32 lg:mt-40"
          title="More case studies"
          pages={moreCaseStudies}
        />
      )}

      <ContactSection />
    </>
  )
}
