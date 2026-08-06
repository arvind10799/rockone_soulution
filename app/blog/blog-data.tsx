export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  /** ISO date — formatted at render time. */
  date: string;
  author: string;
  body: BlogBlock[];
};

/* Newest first. The homepage teaser reads the first three. */
export const blogPosts: BlogPost[] = [
  {
    slug: "designing-for-trust-before-traffic",
    title: "Designing for trust before traffic",
    excerpt:
      "Most sites chase visitors before they have earned belief. Fix the credibility layer first and the same traffic converts harder.",
    category: "Web Design",
    readTime: "4 min read",
    date: "2026-07-28",
    author: "Rock One Solutions",
    body: [
      {
        type: "p",
        text: "Every website brief we receive asks the same thing first: how do we get more traffic? It is almost never the binding constraint. If a hundred people land on a page and two believe you enough to enquire, doubling the traffic does not fix the problem — it doubles the number of people who decide you are not credible."
      },
      { type: "h2", text: "What visitors are actually checking" },
      {
        type: "p",
        text: "In the first few seconds, a visitor is running an unconscious checklist. Not about your services — about whether you are a real, competent business that will still exist in six months."
      },
      {
        type: "ul",
        items: [
          "Is it obvious what this company does, in plain language?",
          "Has anyone else trusted them, and can I see who?",
          "Do the details look maintained, or abandoned two years ago?",
          "If I wanted to talk to a human right now, could I?"
        ]
      },
      {
        type: "p",
        text: "None of that is a design flourish. It is evidence. A site that answers all four beats a prettier one that answers none."
      },
      { type: "h2", text: "Order the work correctly" },
      {
        type: "p",
        text: "Fix the credibility layer before you spend on acquisition. That usually means a clear positioning line above the fold, real client names, real work with real outcomes, and a contact path that takes one click rather than three."
      },
      {
        type: "quote",
        text: "Traffic is a multiplier. If the thing you are multiplying is a low conversion rate, you are buying a bigger version of the same problem."
      },
      {
        type: "p",
        text: "Once the page earns belief, every channel you turn on afterwards performs better — because you fixed the denominator instead of inflating the numerator."
      }
    ]
  },
  {
    slug: "turning-campaigns-into-measurable-handoffs",
    title: "Turning campaigns into measurable hand-offs",
    excerpt:
      "The gap between a click and a salesperson picking up the phone is where most marketing budgets quietly disappear.",
    category: "Automation",
    readTime: "5 min read",
    date: "2026-07-14",
    author: "Rock One Solutions",
    body: [
      {
        type: "p",
        text: "Marketing reports impressions and clicks. Sales reports closed deals. Between those two numbers sits an unmeasured stretch where a form submission becomes — or fails to become — a conversation. That stretch is where budget goes missing."
      },
      { type: "h2", text: "The hand-off is a system, not an intention" },
      {
        type: "p",
        text: "A lead arriving in an inbox is not a hand-off. It is a hope that someone checks the inbox. A real hand-off has an owner, a timestamp, and a state that someone can query later."
      },
      {
        type: "ul",
        items: [
          "Every lead lands in the CRM with its source attached, not just the message",
          "An owner is assigned automatically, not by whoever notices first",
          "A follow-up task exists with a due time, so silence is visible",
          "Outcome is written back, so the channel can be judged on revenue"
        ]
      },
      { type: "h2", text: "Attribution only works if the loop closes" },
      {
        type: "p",
        text: "You cannot decide where to spend next quarter without knowing which campaign produced deals, not just enquiries. That requires the closing outcome to travel back to the source record. Without the write-back, attribution reporting is guesswork with a chart attached."
      },
      {
        type: "quote",
        text: "If nobody can answer 'which campaign did this customer come from' six months later, the campaign was never really measured."
      },
      {
        type: "p",
        text: "Build the hand-off once and every channel you run afterwards reports honestly. Skip it and you will keep optimising against numbers that describe activity rather than income."
      }
    ]
  },
  {
    slug: "using-automation-where-it-actually-helps",
    title: "Using automation where it actually helps",
    excerpt:
      "Automating a broken process gives you a broken process that runs faster. Here is how to choose what to automate first.",
    category: "Growth",
    readTime: "3 min read",
    date: "2026-06-30",
    author: "Rock One Solutions",
    body: [
      {
        type: "p",
        text: "Automation is sold as a way to do more. Used well, it is a way to do less — specifically, less of the repetitive, low-judgement work that quietly consumes a team's week."
      },
      { type: "h2", text: "A simple filter" },
      {
        type: "p",
        text: "Before automating any step, ask three questions. If the answer to all three is yes, automate it. If not, fix the process first."
      },
      {
        type: "ul",
        items: [
          "Does this task happen the same way every time?",
          "Does a human add no judgement when doing it?",
          "Would a delay in doing it cost money or trust?"
        ]
      },
      { type: "h2", text: "Where teams usually get it wrong" },
      {
        type: "p",
        text: "The common failure is automating the visible task rather than the expensive one. Sending an automatic acknowledgement email feels productive. Ensuring the enquiry reaches an owner with a deadline is what actually protects the sale."
      },
      {
        type: "quote",
        text: "Automate the hand-off, not the pleasantry."
      },
      {
        type: "p",
        text: "Start with one workflow that leaks money today. Prove it, measure it, then move to the next. A small automation that runs reliably beats an ambitious one nobody trusts."
      }
    ]
  },
  {
    slug: "what-ai-agents-are-actually-good-at",
    title: "What AI agents are actually good at in a business workflow",
    excerpt:
      "Beyond the demos: the narrow, boring places where an AI agent earns its keep — and the places it will cost you.",
    category: "AI",
    readTime: "6 min read",
    date: "2026-06-16",
    author: "Rock One Solutions",
    body: [
      {
        type: "p",
        text: "The demo always looks the same: someone types a sentence and a complete deliverable appears. Real workflows are less theatrical. The value shows up in narrow places where the task is repetitive, the input is messy, and a near-right answer reviewed by a human beats a perfect answer that takes three days."
      },
      { type: "h2", text: "Where agents genuinely help" },
      {
        type: "ul",
        items: [
          "Turning unstructured input — call notes, emails, forms — into structured records",
          "Drafting the first version of routine replies for a human to approve",
          "Summarising long threads so whoever picks up the account has context",
          "Flagging records that look wrong, rather than deciding what to do about them"
        ]
      },
      { type: "h2", text: "Where they cost you" },
      {
        type: "p",
        text: "Any step where being confidently wrong is expensive. Pricing, contractual commitments, compliance answers, and anything a customer will treat as a promise. In those places an agent should prepare the work, never publish it."
      },
      {
        type: "quote",
        text: "Use AI where review is cheap and error is recoverable. Keep humans where being wrong has a cost you cannot claw back."
      },
      { type: "h2", text: "The practical shape" },
      {
        type: "p",
        text: "The systems that work in production tend to look boring: an agent that reads incoming enquiries, extracts the fields, writes a CRM record, drafts a reply, and stops. A person spends fifteen seconds approving rather than four minutes typing. Multiply that across a week and the return is obvious — without betting the customer relationship on a model's confidence."
      }
    ]
  },
  {
    slug: "crm-handoffs-that-do-not-drop-the-lead",
    title: "CRM hand-offs that do not drop the lead",
    excerpt:
      "Most CRMs are not underused because the software is bad. They are underused because the hand-offs around them were never designed.",
    category: "CRM",
    readTime: "5 min read",
    date: "2026-05-29",
    author: "Rock One Solutions",
    body: [
      {
        type: "p",
        text: "Companies rarely abandon a CRM in a single decision. It decays. One person stops logging calls because it is faster to remember. Another keeps a private spreadsheet because the fields do not fit. Within a quarter the system holds a partial truth, and partial truth is worse than none — because people still quote from it."
      },
      { type: "h2", text: "Design the moments, not the database" },
      {
        type: "p",
        text: "A CRM succeeds or fails at four moments: when a lead arrives, when it changes hands, when it goes quiet, and when it closes. Get those right and the record stays accurate almost by accident."
      },
      {
        type: "ul",
        items: [
          "Arrival: the record is created by the system, not typed by a person",
          "Hand-off: ownership changes explicitly, with context carried across",
          "Silence: an untouched lead surfaces itself instead of waiting to be found",
          "Close: the outcome and the reason are both captured, including the losses"
        ]
      },
      { type: "h2", text: "Capture the losses honestly" },
      {
        type: "p",
        text: "Teams instinctively record wins in detail and losses as a shrug. But the loss reasons are the more useful dataset — they tell you whether you are losing on price, on timing, or on something you could actually fix."
      },
      {
        type: "quote",
        text: "A pipeline that only reflects optimism is a forecast of nothing."
      },
      {
        type: "p",
        text: "When the four moments are designed, adoption stops being a training problem. People use the system because it is the shortest path to doing their job, not because they were told to."
      }
    ]
  },
  {
    slug: "performance-marketing-measured-against-pipeline",
    title: "Performance marketing, measured against pipeline",
    excerpt:
      "Cost per lead is a comfortable number. Cost per qualified opportunity is the one that decides whether the channel survives.",
    category: "Performance",
    readTime: "5 min read",
    date: "2026-05-12",
    author: "Rock One Solutions",
    body: [
      {
        type: "p",
        text: "Every paid channel can be made to look good if you pick a shallow enough metric. Impressions flatter reach. Clicks flatter creative. Cost per lead flatters the form. None of them tell you whether the money produced revenue."
      },
      { type: "h2", text: "Move the measurement one step deeper" },
      {
        type: "p",
        text: "The useful question is not what a lead costs, but what a lead that a salesperson would actually want costs. Those two numbers can differ by an order of magnitude across channels that look identical on a cost-per-lead report."
      },
      {
        type: "ul",
        items: [
          "Tag every lead with its channel, campaign, and creative at capture",
          "Let sales mark qualification honestly, including the fast rejections",
          "Report cost per qualified opportunity, not cost per form fill",
          "Review at a cadence slow enough to be statistically real"
        ]
      },
      { type: "h2", text: "Expect the ranking to change" },
      {
        type: "p",
        text: "The first time a team sees spend ranked by qualified pipeline instead of lead volume, the ordering usually inverts. The cheapest leads are frequently the least serious, and the channel that looked expensive turns out to be the one producing customers."
      },
      {
        type: "quote",
        text: "You cannot optimise toward revenue using a metric that stops at the form."
      },
      {
        type: "p",
        text: "The tracking work is unglamorous and takes a fortnight. It is also the difference between a marketing budget you can defend and one you can only describe."
      }
    ]
  }
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function relatedPosts(slug: string, category: string) {
  const sameCategory = blogPosts.filter(
    (post) => post.slug !== slug && post.category === category
  );
  const others = blogPosts.filter(
    (post) => post.slug !== slug && post.category !== category
  );
  return [...sameCategory, ...others].slice(0, 3);
}

export function formatPostDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}
