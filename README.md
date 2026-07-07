# Beacon
As a submission Assistive Innovation Challenge 2026, beacon is a project wholeheartedly aimed to propagate and amplify the support system of someone suffering through Anorexia Nervosa.

## Features
| Feature | Description |
| ------- | ----------- |
| **Create a support system** | Therapists, dietitians, family, and friends can see a patient's wellbeing, and can jump in anytime to reach out |
| **Calendar** | Contains information about scheduled therapy sessions, meals, and progress |
| **Support Groups** | Acts as a platform where people who face the same condition can have a safe space together to discuss |

## Tech Stack
* **Frontend:** React Native, Nativewind, Expo
* **Backend:** Supabase
* **Database:** PostgreSQL
* **APIs/External Tools:** 
 - Figma (UI Mockup Platform)
 - Git and GitHub (Version Control)

## Research backing

<img width="1594" height="600" alt="image" src="https://github.com/user-attachments/assets/15e5501a-c199-494e-9290-1cc40df2686a" />
*Figure adapted from [Journal of Eating Disorders (2025)](https://link.springer.com/article/10.1186/s40337-025-01432-6/figures/1)*


**Feature 1: Create a Support System**
*Therapists, dietitians, family, and friends can see a patient's well-being and reach out anytime*

- Theme 3 directly supports this: one account credits family support as the single most important factor in recovery, alongside positive recovery-oriented content that helped shift mindset.
- The Mayo Clinic/PMC material notes that effective care requires a coordinated multidisciplinary team — dietician, psychologist, child psychiatrist, and primary care physician — with the physician acting as care coordinator. An app that lets these roles view wellbeing data in one place reflects this need for coordination.
- Caveat: Theme 3 also shows loved ones can hinder recovery (e.g., physique-focused feedback that becomes toxic). This is a legitimate design consideration — the app should support monitoring/reaching out without enabling weight- or appearance-focused commentary from supporters, since that risks reinforcing the weight overvaluation flagged in Theme 2.

**Feature 2: Calendar**
*Scheduled therapy sessions, meals, and progress*

- Matches the clinical management principles directly: weight restoration (tracked via weight diary), psychological intervention, and long-term follow-up are the core pillars of treatment — a calendar operationalizes this.
- The follow-up schedule research (weekly → fortnightly → monthly → quarterly as the patient stabilizes) gives a concrete, evidence-based model for how the calendar's session frequency could adapt over time.
- Nuance: weight/progress tracking is clinically important but can be demoralizing, and an overemphasis on weight numbers may reinforce the exact overvaluation that maintains anorexia. If the calendar surfaces "progress," it's worth tracking behavioral/psychological markers alongside or instead of weight-only metrics.

**Feature 3: Support Groups**
*Safe space for people with the same condition to discuss*

- Theme 3's "need for intrinsic motivators" point is the strongest anchor here — the Springer study notes a gap in preparing wider support networks and sustaining motivation post-discharge; peer support groups can help fill that gap by giving ongoing, relatable reinforcement.
- The personal account that credits following positive recovery accounts as part of what helped shift her mindset is direct evidence that peer-modeled recovery narratives are motivating.
- Ties back to Theme 1 ("recovery as an ongoing process," "the need for aftercare") — support groups address the post-discharge gap where one account felt invalidated for not being "sick enough," since peer spaces can validate a wider range of experiences than clinical criteria do.

## Sources

- [Mayo Clinic — Anorexia Nervosa: Symptoms & Causes](https://www.mayoclinic.org/diseases-conditions/anorexia-nervosa/symptoms-causes/syc-20353591)
- [PMC — Management of Anorexia Nervosa](https://pmc.ncbi.nlm.nih.gov/articles/PMC4170427/)
- [Rethink — "Anorexia Nervosa is a Silent Killer: Anjola's Story"](https://www.rethink.org/news-and-stories/blogs/2024/02/anorexia-nervosa-is-a-silent-killer-anjolas-story/)
- [Seattle Children's — One Patient's Journey with an Eating Disorder](https://www.seattlechildrens.org/healthy-tides/one-patients-journey-with-an-eating-disorder/)
- [Journal of Eating Disorders (Springer, 2025)](https://link.springer.com/article/10.1186/s40337-025-01432-6)
