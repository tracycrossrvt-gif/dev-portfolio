import { projects } from '../../content/projects'
import assistanceIntakeSchema from '../../assets/media/mmac-assistance-intake-schema.png'
import targetSystemErd from '../../assets/media/mmac-target-system-erd.png'
import coreWorkflowsMvp from '../../assets/media/mmac-core-workflows-mvp.png'

function MmacCaseStudyPage() {
  const project = projects.find((item) => item.slug === 'mmac-hub')

  if (!project) {
    return null
  }

  return (
    <section className="page-section">
      <div className="container narrow-container">
        <article>
          <p className="eyebrow">MMAC HUB / PRODUCT ENGINEERING CASE STUDY</p>
          <h1>Turning a growing animal-welfare operation into a system that can scale.</h1>
          <p className="lead">
            MMAC is a community animal-care nonprofit coordinating access to veterinary care
            and related resources across a growing network of people, programs, and partner
            organizations.
          </p>
          <p className="lead">
            Macon Moves Animal Care began as a young nonprofit solving an enormous
            community need. As the organization grew across counties, partner hospitals,
            volunteers, clinics, and assistance programs, the operational complexity grew
            with it.
          </p>
          <p className="lead">
            What initially looked like a website project quickly revealed a much larger
            product problem: <strong>the organization didn't just need a better website.
            It needed a system for coordinating the work behind it.</strong>
          </p>

          <div className="info-block">
            <p>
              <strong>
                Product discovery · Systems architecture · Data modeling · Frontend
                development
              </strong>
            </p>
            <p>
              <strong>React · JavaScript · Supabase · PostgreSQL</strong>
            </p>
            <p>
              <strong>Status: In active development</strong>
            </p>
          </div>

          <div className="info-block">
            <h2>01 — The problem wasn't the website</h2>
            <p>
              MMAC had grown quickly, and much of the work required to deliver care
              depended on people coordinating information across requests, animals,
              counties, partner hospitals, schedules, services, volunteers, clinics, and
              financial programs.
            </p>
            <p>
              The challenge wasn't simply putting those processes online. It was
              understanding <strong>how the operation actually worked</strong>—who needed
              what information, who was allowed to make which decisions, where bottlenecks
              occurred, and what downstream reporting the organization would eventually
              need.
            </p>
            <p>
              My veterinary operations background gave me an unusual advantage here. I
              understood many of the workflows from the inside, but I still had to resist
              designing around assumptions. I treated the organization's real processes,
              constraints, and users as the source of truth and began turning that
              operational knowledge into explicit product rules.
            </p>
            <p>
              <strong>
                Instead of redesigning a website, I began designing the operational system
                behind it.
              </strong>
            </p>
          </div>

          <div className="info-block">
            <h2>02 — One system, very different users</h2>
            <p>
              A community member requesting help does not need the same interface—or the
              same information—as the person managing MMAC's capacity.
            </p>
            <p>
              A hospital scheduler needs enough access to move an approved request forward
              without being given administrative control over the entire system. Volunteers
              need resources and clear expectations. Partner hospitals need workflows that
              respect how their teams already operate. And MMAC's administrator needs
              visibility across all of it.
            </p>
            <p>So the system began with people and responsibilities, not screens.</p>

            <div className="info-block">
              <p>
                <strong>Public / Requestors</strong> Ask for assistance without needing to
                understand veterinary classifications or MMAC's internal processes.
              </p>
            </div>

            <div className="info-block">
              <p>
                <strong>MMAC's administrator</strong> Controls availability, reviews
                requests, manages exceptions, and maintains operational oversight.
              </p>
            </div>

            <div className="info-block">
              <p>
                <strong>Authorized Hospital Staff</strong> Work from appropriate queues and
                schedule approved cases without exposing information or controls they do not
                need.
              </p>
            </div>

            <div className="info-block">
              <p>
                <strong>Volunteers</strong> Access resources, expectations, and
                participation workflows without administrative access.
              </p>
            </div>

            <p>
              <strong>
                Permissions weren't an authentication problem to solve later. They were
                part of the product model from the beginning.
              </strong>
            </p>
          </div>

          <div className="info-block">
            <h2>03 — Turning workflows into product rules</h2>
            <p>
              Real-world operations are full of knowledge that rarely appears in a
              requirements document. People know which exceptions matter, which decisions
              require oversight, which information another team actually needs, and which
              seemingly small choices can create problems downstream.
            </p>
            <p>
              Building MMAC Hub meant turning that implicit knowledge into explicit rules
              the software could support—without asking the people using it to understand
              the complexity underneath.
            </p>

            <div className="info-block">
              <h3>Ask people what they need—not what they think the veterinary classification is</h3>
              <p>
                Someone asking MMAC for help knows what problem they are trying to solve.
                They should not need veterinary knowledge to navigate the system correctly.
              </p>
              <p>
                Services therefore describe the <strong>help being requested</strong>.
                Clinical classifications and species-specific requirements belong deeper in
                the workflow, where they can be handled appropriately.
              </p>
              <p>
                That principle also shaped prescreening. Diagnostic requirements can
                respond to species—for example, heartworm screening for dogs and FeLV/FIV
                screening for cats—without forcing the person requesting assistance to make
                those distinctions themselves.
              </p>
              <p>
                <strong>Product principle:</strong>{' '}
                <em>
                  Keep complexity with the system and the people equipped to handle it.
                </em>
              </p>
            </div>

            <div className="info-block">
              <h3>Model capacity the way the organization actually controls it</h3>
              <p>
                Availability isn't simply a calendar of open appointments. MMAC needs to
                control how much capacity is offered while coordinating that capacity with
                partner hospitals and changing real-world circumstances.
              </p>
              <p>
                The availability model therefore gives the administrator direct control over
                what can be offered. Weekdays are the operational default, while weekends
                can be deliberately enabled when appropriate.
              </p>
              <p>
                The public sees the availability relevant to requesting help—not the internal
                mechanics or partner-hospital information behind it.
              </p>
              <p>
                <strong>Product principle:</strong>{' '}
                <em>
                  Expose what the user needs without exposing the machinery required to
                  provide it.
                </em>
              </p>
            </div>

            <div className="info-block">
              <h3>Give each person enough access to do their job—and no more</h3>
              <p>
                MMAC Hub has users with very different responsibilities.
              </p>
              <p>
                Authorized hospital staff need to work with appropriate requests and move
                cases through scheduling. Volunteers need resources and participation
                information. The public needs a straightforward way to request help. MMAC's
                administrator needs oversight and the ability to manage exceptions.
              </p>
              <p>
                Those differences shaped the permissions model before they became interface
                decisions.
              </p>
              <p>
                <strong>Product principle:</strong>{' '}
                <em>
                  Permissions are part of workflow design, not a security layer added at the
                  end.
                </em>
              </p>
            </div>

            <div className="info-block">
              <h3>Design today's data for tomorrow's questions</h3>
              <p>
                MMAC doesn't only need to know that money was spent or an animal received
                care. As a nonprofit, it will eventually need to understand how resources
                connect to programs, funding sources, geography, and measurable activity.
              </p>
              <p>
                That requirement affects the architecture now.
              </p>
              <p>
                The goal is to capture operational information as the work happens so that
                future reporting can answer meaningful questions without reconstructing the
                organization's history from disconnected records.
              </p>
              <p>
                <strong>Product principle:</strong>{' '}
                <em>
                  If the organization will need to prove it later, think about how to
                  capture it now.
                </em>
              </p>
            </div>
          </div>

          <div className="info-block">
            <h2>04 — Designing the foundation</h2>
            <p>
              Once the workflows and product rules became clearer, the next challenge was
              giving them a data model that could grow with the organization.
            </p>
            <p>
              Rather than building each feature as an isolated workflow, I began with the
              relationships underneath them: requests involve people and animals; animals
              require species-aware prescreening; requests connect animals to services;
              availability constrains what can be scheduled; and those activities
              eventually need to support operational and financial reporting.
            </p>
            <p>
              That led to the first implemented foundation of MMAC Hub: the{' '}
              <strong>Assistance Intake data model.</strong>
            </p>

            <div className="info-block">
              <h3>Intake is the gate to the system</h3>
              <p>
                Assistance Intake came first because nearly everything MMAC does depends on
                it. Before the organization can coordinate care, identify appropriate
                services, evaluate availability, work with a provider, or eventually report
                an outcome, it needs a reliable picture of <strong>who is asking for help,
                which animals are involved, and what they need.</strong>
              </p>
              <p>
                That made intake more than a form. It became the entry point into the
                larger data model.
              </p>
              <p>
                The implemented schema separates people, households, animals, assistance
                requests, requested services, and prescreening rather than collapsing them
                into a single record. Those relationships allow the system to represent the
                operation more accurately while leaving room for later workflows to build on
                the same foundation.
              </p>
            </div>

            <figure className="case-study-figure">
              <img
                src={assistanceIntakeSchema}
                alt="Implemented MMAC Hub Assistance Intake relational schema showing relationships between people, households, animals, assistance requests, requested services, and prescreening."
              />
              <figcaption>
                <strong>IMPLEMENTED / ASSISTANCE INTAKE FOUNDATION</strong> The relational
                model separates people, households, animals, requests, services, and
                prescreening so later workflows can build on shared operational data.
              </figcaption>
            </figure>

            <div className="info-block">
              <h3>Designed for more than the first screen</h3>
              <p>
                The implemented schema represents the first slice of a larger system. I
                modeled future relationships early enough to avoid making today's intake
                decisions incompatible with tomorrow's scheduling, care, reporting, clinic,
                and resource workflows.
              </p>
            </div>

            <figure className="case-study-figure">
              <img
                src={targetSystemErd}
                alt="Target system model for MMAC Hub showing the broader relational architecture for care, scheduling, clinics, resources, community programs, and reporting beyond the currently implemented Assistance Intake foundation."
              />
              <figcaption>
                <strong>TARGET SYSTEM MODEL / DESIGNED</strong> The broader relational
                architecture for MMAC Hub. This model extends beyond the currently
                implemented Assistance Intake foundation and maps how future care,
                scheduling, clinics, resources, community programs, and reporting can
                connect.
              </figcaption>
            </figure>
          </div>

          <div className="info-block">
            <h2>05 — Cutting the MVP</h2>
            <p>
              Once the larger system became visible, the biggest risk was trying to build
              all of it at once.
            </p>
            <p>
              Discovery had uncovered interconnected workflows for assistance, TNR,
              community vaccine clinics, volunteers, partner hospitals, scheduling,
              resources, records, financial activity, and administration. They matter—but
              they do not all need to ship at the same time.
            </p>
            <p>
              I narrowed the first product phase around four core areas:
            </p>
            <p>
              <strong>
                Get Help / Assistance Intake · Vaccine Clinics · Volunteer / Donate ·
                Administrator Portal
              </strong>
            </p>
            <p>
              The Assistance Intake data model became the first implemented slice because it
              establishes information the rest of the system can eventually act on.
            </p>
            <p>
              Other capabilities can be designed into the foundation without being forced
              into the first release.
            </p>

            <div className="info-block">
              <h3>Build for scheduling now. Ship it when it's ready.</h3>
              <p>
                Access to care happens dynamically. Provider availability changes. Location
                matters. Pricing matters. The services an animal needs matter. Those layers
                have to line up before an appointment is genuinely useful.
              </p>
              <p>
                I don't want to bolt scheduling onto MMAC Hub after the rest of the system
                is built. The underlying data model needs to anticipate those relationships
                now, while the full dynamic scheduling experience can ship in a later
                product phase.
              </p>
              <p>
                <strong>
                  The MVP isn't the smallest version of every idea. It's the smallest
                  coherent system that establishes the foundation for the workflows that
                  matter most.
                </strong>
              </p>
            </div>

            <figure className="case-study-figure">
              <img
                src={coreWorkflowsMvp}
                alt="Designed MMAC Hub product model showing the core user paths and shared operational data required underneath assistance intake, vaccine clinics, volunteer and donation workflows, and the administrator portal."
              />
              <figcaption>
                <strong>PRODUCT MODEL / MVP WORKFLOWS</strong> This artifact maps the core
                user paths and the shared operational data required underneath them.
              </figcaption>
            </figure>
          </div>

          <div className="info-block">
            <h2>06 — The hardest problem so far: availability</h2>
            <p>
              Availability sounds simple until the system has to represent how care actually
              becomes available.
            </p>
            <p>
              A usable opening can depend on several things aligning at once: <strong>
                provider availability, location, pricing, the services needed, and MMAC's
                current capacity.</strong> Any one of those can change whether a case can move
              forward.
            </p>
            <p>
              The challenge was designing that complexity without transferring it to the
              administrator.
            </p>
            <p>
              MMAC's administrator needs to remain firmly in control of availability, but
              managing it cannot become another administrative burden. The administrator
              needs to be able to make quick decisions across multiple touch points, often
              while moving between responsibilities and sometimes from a phone.
            </p>
            <p>
              That created a product constraint I care about deeply:
            </p>
            <p>
              <strong>
                The system can be complex underneath. The administrator's experience cannot
                be.
              </strong>
            </p>
            <p>
              The current foundation models availability as operational data rather than
              treating it as a decorative calendar feature. The longer-term scheduling
              experience can build on that foundation by coordinating the variables required
              to make an appointment workable while keeping final control with the person
              who actually understands MMAC's capacity.
            </p>
            <p>
              For the administrator experience, the goal is lightweight, fast, and
              mobile-friendly: enough information to make a decision without requiring the
              administrator to manage the machinery behind that decision.
            </p>
            <p>
              That product constraint is part of why I kept the administrator experience
              lightweight, fast, and mobile-friendly.
            </p>
            <p>
              <strong>
                Expose what the user needs without exposing the machinery required to
                provide it.
              </strong>
            </p>
          </div>

          <div className="info-block">
            <h2>07 — From architecture to working software</h2>
            <p>
              The first database implementation established the Assistance Intake
              foundation in Supabase/PostgreSQL, including the relationships supporting
              animals, assistance requests, prescreens, species-aware diagnostics, requested
              services, and request availability.
            </p>
            <p>
              Rather than treating a successful migration as proof that the model worked, I
              seeded and inspected test data to verify that the relationships behaved as
              intended.
            </p>

            <p>
              <strong>IMPLEMENTED &amp; VERIFIED</strong>
            </p>
            <ul className="list-plain">
              <li>Assistance Intake relational foundation</li>
              <li>Species-aware prescreening structure</li>
              <li>Services and per-animal service relationships</li>
              <li>Request availability foundation</li>
              <li>Seed/test data and relationship verification</li>
            </ul>

            <p>
              <strong>
                This isn't the finished MMAC Hub. It's the point where discovery became
                architecture—and architecture became working software.
              </strong>
            </p>
          </div>

          <div className="info-block">
            <h2>08 — What I owned</h2>
            <p>
              I owned the product thinking behind MMAC Hub: discovery, requirements
              translation, workflow modeling, MVP definition, data architecture,
              implementation planning, and validation.
            </p>
            <p>
              My veterinary operations background helped me recognize the operational
              consequences behind seemingly small decisions, but I treated MMAC's actual
              workflows and constraints as the source of truth rather than designing from
              assumptions.
            </p>
            <p>
              I used AI-assisted development tools to accelerate implementation and
              exploration, while retaining responsibility for product decisions,
              architecture, review, testing, and validation.
            </p>
          </div>

          <div className="info-block">
            <h2>09 — Validating the model</h2>
            <p>
              The architecture was reviewed with MMAC's administrator, who works closest to
              the organization’s day-to-day operational complexity.
            </p>
            <p>
              The proposed workflows and system model remained largely intact after review,
              giving me confidence that the product direction reflected how MMAC actually
              operates rather than how I imagined it should operate.
            </p>
            <p>
              That validation matters to me because a technically elegant system is only
              useful if it fits the people who have to use it.
            </p>
          </div>

          <div className="info-block">
            <h2>10 — What I learned</h2>
            <p>
              MMAC Hub reinforced something I already knew from operations: the hardest
              problems usually aren’t isolated features. They’re the relationships between
              people, information, timing, responsibility, and exceptions.
            </p>
            <p>
              I learned that good product architecture often means making those
              relationships explicit before writing much software.
            </p>
            <p>
              I also learned to separate <strong>what needs to be understood now</strong>{' '}
              from <strong>what needs to be built now</strong>. Modeling future requirements
              early can prevent expensive dead ends, but that doesn’t mean every future
              capability belongs in the MVP.
            </p>
            <p>
              The goal is not to remove complexity from the real world. It is to keep that
              complexity from becoming unnecessary friction for the people using the
              product.
            </p>
          </div>

          <div className="info-block">
            <h2>11 — What’s next</h2>
            <p>
              The next major product phase is dynamic scheduling.
            </p>
            <p>
              The foundation already anticipates the variables that make access to care
              possible: provider availability, location, services needed, pricing, and
              organizational capacity. The next challenge is turning those relationships
              into a scheduling experience that remains lightweight and fast for the
              administrator while preserving appropriate control.
            </p>
            <p>
              Future phases can continue building outward from the same foundation into
              partner-hospital workflows, notifications, clinic operations, reporting,
              forms and signatures, resources, and other MMAC programs.
            </p>
            <p>
              MMAC Hub is still evolving, but the direction is clear: <strong>build the
              operational infrastructure that allows MMAC to spend less time coordinating
              the system and more time helping animals and people.</strong>
            </p>
          </div>

          <div className="info-block">
            <h2>Project links</h2>
            <div className="project-links">
              <a href={project.liveUrl}>Live project</a>
              <a href={project.repoUrl}>Repository</a>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default MmacCaseStudyPage
