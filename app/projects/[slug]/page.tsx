'use client'
import { use } from 'react'
import { useState,useEffect } from 'react'
import Image from 'next/image'
import { GithubIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { AnimatePresence, motion } from 'framer-motion'


type TechnicalArchitecture = {
  api: string
  ingestion: string[]
  retrieval: string[]
  storage: string
}


type UserSystemWorkflow = {
  employee: string[]
  client: string[]
}

type ProjectDetails = {
  title: string
  github?: string
  description: string
  problem: string
  tools: string[]
  screenshots?: string[]
  methodology: string[]
  results?: string
  keyLearnings: string[]
  status?: string
  keyConcepts?: string[]
  engineeringWorkflow?: string[]

  technicalArchitecture?: TechnicalArchitecture
  userSystemWorkflow?: UserSystemWorkflow
}
function TechnicalArchitectureCard({
  architecture,
}: {
  architecture: TechnicalArchitecture
}) {
  return (
    <Reveal delay={0.3}>
      <div className="h-full rounded-3xl border border-white/10 bg-[#F5E9D3] p-5">

        {/* HEADER */}
        <div className="mb-5">
          <h2 className="text-xl font-semibold text-brown">
            Technical Architecture
          </h2>

          <p className="mt-1 text-xs text-[#5A4A42]/70">
            Technical components and data flow used to build the AI assistant.
          </p>
        </div>

        {/* FASTAPI */}
        <div className="flex flex-col items-center">

          <div className="w-full max-w-[210px] rounded-lg bg-brown px-3 py-2 text-center text-xs font-semibold text-white">
            FastAPI
            <div className="mt-0.5 text-[10px] font-normal text-white/70">
              API Layer
            </div>
          </div>

          {/* BRANCH */}
          <div className="relative h-6 w-full max-w-[400px]">

            <div className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-olive/40" />

            <div className="absolute left-1/4 right-1/4 top-3 h-px bg-olive/40" />

            <div className="absolute left-1/4 top-3 -translate-x-1/2 text-[10px] text-olive">
              ↓
            </div>

            <div className="absolute right-1/4 top-3 translate-x-1/2 text-[10px] text-olive">
              ↓
            </div>

          </div>

          {/* INGESTION + RETRIEVAL */}
          <div className="grid w-full max-w-[400px] grid-cols-2 gap-3">

            {/* INGESTION */}
            <div className="rounded-xl border border-brown/10 bg-white/30 px-2.5 py-2">

              <h3 className="mb-2 text-center text-[10px] font-semibold uppercase tracking-wider text-brown">
                Ingestion
              </h3>

              <div className="flex flex-col items-center gap-0.5">

                {architecture.ingestion.map((step, i) => (
                  <div key={step} className="flex w-full flex-col items-center">

                    <span className="flex min-h-7 w-full items-center justify-center rounded-md bg-[#F5E9D3] px-1.5 py-1 text-center text-[10px] text-[#5A4A42]">
                      {step}
                    </span>

                    {i < architecture.ingestion.length - 1 && (
                      <span className="text-[10px] leading-none text-olive">
                        ↓
                      </span>
                    )}

                  </div>
                ))}

              </div>

            </div>

            {/* RETRIEVAL */}
            <div className="rounded-xl border border-brown/10 bg-white/30 px-2.5 py-2">

              <h3 className="mb-2 text-center text-[10px] font-semibold uppercase tracking-wider text-brown">
                Retrieval
              </h3>

              <div className="flex flex-col items-center gap-0.5">

                {architecture.retrieval.map((step, i) => (
                  <div key={step} className="flex w-full flex-col items-center">

                    <span className="flex min-h-7 w-full items-center justify-center rounded-md bg-[#F5E9D3] px-1.5 py-1 text-center text-[10px] text-[#5A4A42]">
                      {step}
                    </span>

                    {i < architecture.retrieval.length - 1 && (
                      <span className="text-[10px] leading-none text-olive">
                        ↓
                      </span>
                    )}

                  </div>
                ))}

              </div>

            </div>

          </div>

          {/* PIPELINES → STORAGE */}
          <div className="relative h-6 w-full max-w-[400px]">

            <div className="absolute left-1/4 top-0 h-3 w-px bg-olive/40" />

            <div className="absolute right-1/4 top-0 h-3 w-px bg-olive/40" />

            <div className="absolute left-1/4 right-1/4 top-3 h-px bg-olive/40" />

            <div className="absolute left-1/2 top-3 h-3 w-px bg-olive/40" />

            <div className="absolute left-1/2 top-3 -translate-x-1/2 text-[10px] text-olive">
              ↓
            </div>

          </div>

          {/* VECTOR STORAGE */}
          <div className="w-full max-w-[240px] rounded-lg border border-olive/30 bg-olive/10 px-3 py-2 text-center">

            <div className="text-[9px] font-medium uppercase tracking-wider text-olive">
              Vector Storage
            </div>

            <div className="text-xs font-semibold text-brown">
              {architecture.storage}
            </div>

          </div>

          {/* GENERATION */}
          <div className="mt-2 flex flex-col items-center">

            <div className="text-[10px] text-olive">
              ↓
            </div>

            <div className="flex min-h-8 items-center justify-center rounded-md border border-brown/10 bg-white/30 px-3 py-1.5 text-center text-[10px] text-[#5A4A42]">
              Context + Query
            </div>

            <div className="text-[10px] text-olive">
              ↓
            </div>

            <div className="flex min-h-8 items-center justify-center rounded-md bg-olive px-4 py-1.5 text-[10px] font-semibold text-white">
              LLM
            </div>

            <div className="text-[10px] text-olive">
              ↓
            </div>

            <div className="flex min-h-8 items-center justify-center rounded-md border border-brown/10 bg-white/30 px-4 py-1.5 text-[10px] font-semibold text-brown">
              Answer
            </div>

          </div>

        </div>

      </div>
    </Reveal>
  )
}
function TechnologyStackCard({
  tools,
}: {
  tools: string[]
}) {
  return (
    <Reveal delay={0.4}>
      <div className="rounded-3xl border border-white/10 bg-[#F5E9D3] p-6">

        <h2 className="mb-4 text-xl font-semibold text-brown">
          Technology Stack
        </h2>

        <div className="flex flex-wrap gap-2">
          {tools.map((tool, i) => (
            <span
              key={`${tool}-${i}`}
              className="rounded-full border border-brown/30 bg-brown/90 px-3 py-1.5 text-xs text-white/80"
            >
              {tool}
            </span>
          ))}
        </div>

      </div>
    </Reveal>
  )
}
function UserSystemWorkflowCard({
  workflow,
}: {
  workflow: UserSystemWorkflow
}) {
  return (
    <Reveal delay={0.4}>
      <div className="rounded-3xl border border-white/10 bg-[#F5E9D3] p-5">

        {/* HEADER */}
        <div className="mb-5">
          <h2 className="text-xl font-semibold text-brown">
            User / System Workflow
          </h2>

          <p className="mt-1 text-xs text-[#5A4A42]/70">
            How employees provide company knowledge and how clients interact
            with the assistant.
          </p>
        </div>


        {/* TWO FLOWS SIDE BY SIDE */}
        <div className="grid gap-4 lg:grid-cols-2">

          {/* KNOWLEDGE SETUP */}
          <div className="rounded-xl border border-brown/10 bg-white/30 p-4">

            <div className="mb-4 text-center text-xs font-semibold uppercase tracking-wider text-olive">
              Knowledge Setup
            </div>

            <div className="space-y-1.5">

              {workflow.employee.map((step, i) => (
                <div key={step}>

                  <div
                    className={`flex min-h-9 items-center justify-center rounded-lg px-3 py-2 text-center text-xs ${
                      step === "Knowledge Base"
                        ? "bg-olive font-semibold text-white"
                        : "bg-[#F5E9D3] text-[#5A4A42]"
                    }`}
                  >
                    {step}
                  </div>

                  {i < workflow.employee.length - 1 && (
                    <div className="text-center text-xs text-olive">
                      ↓
                    </div>
                  )}

                </div>
              ))}

            </div>

          </div>


          {/* CUSTOMER INTERACTION */}
          <div className="rounded-xl border border-brown/10 bg-white/30 p-4">

            <div className="mb-4 text-center text-xs font-semibold uppercase tracking-wider text-olive">
              Customer Interaction
            </div>

            <div className="space-y-1.5">

              {workflow.client.map((step, i) => (
                <div key={step}>

                  <div
                    className={`flex min-h-9 items-center justify-center rounded-lg px-3 py-2 text-center text-xs ${
                      step === "Client receives answer"
                        ? "bg-olive font-semibold text-white"
                        : "bg-[#F5E9D3] text-[#5A4A42]"
                    }`}
                  >
                    {step}
                  </div>

                  {i < workflow.client.length - 1 && (
                    <div className="text-center text-xs text-olive">
                      ↓
                    </div>
                  )}

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </Reveal>
  )
}
const projectDetails: Record<string, ProjectDetails> = {
"ai_customer_support_assistant": {
  title: "AI Customer Support Assistant",
  github: "https://github.com/Thouraya-jamai/ai-customer-support-assistant",
  status: "In Progress",

  description:
    "An AI-powered customer support assistant that uses Retrieval-Augmented Generation (RAG) to answer customer questions based on a company's internal knowledge base.",

  problem:
    "Customer support teams often spend significant time searching through company documents to answer repetitive questions. This project explores how an AI assistant can retrieve relevant information from a company's knowledge base and provide fast, context-aware responses.",

  tools: [
    "Python",
    "LLM",
    "RAG",
    "Embeddings",
    "Document Processing",
    "Prompt Engineering",
    "Semantic Search",
    "Vector Search",
    "FastAPI",
    "REST APIs",
     "SQLAlchemy",
    "Alembic",
    "PostgreSQL",
    "pgvector",
    
  ],


technicalArchitecture: {
  api: "FastAPI",

  ingestion: [
    "Parsing",
    "Cleaning",
    "Chunking",
    "Embeddings",
  ],

  retrieval: [
    "Query Embedding",
    "Similarity Search",
    "Context Retrieval",
  ],

  storage: "PostgreSQL + pgvector",

},

userSystemWorkflow: {
  employee: [
    "Employee",
    "Upload Company Knowledge",
    "System Indexes Knowledge",
    "Knowledge Base",
  ],

  client: [
    "Client asks question",
    "System finds relevant information",
    "AI generates contextual answer",
    "Client receives answer",
  ],
},

  methodology: [
    "Backend API development with FastAPI",
    "Document ingestion and text extraction",
    "Text cleaning and preprocessing",
    "Word-based document chunking",
    "Embedding generation",
    "Semantic similarity search",
    "Context retrieval",
    "LLM response generation",
    "RAG pipeline integration",
  ],

  keyLearnings: [
    "Understanding how RAG systems work end-to-end",
    "Building AI-focused REST APIs with FastAPI",
    "Designing document ingestion pipelines",
    "Working with embeddings and semantic search",
    "Connecting LLMs with external knowledge",
    "Thinking about AI systems from an engineering perspective",
  ],

  screenshots: ["/images/ai_assistant.png",],
},
  "cbvir": {
    title: "Content-Based Video Indexing & Retrieval System",
    github:'https://github.com/Thouraya-jamai/Content-Based-Video-Indexing-and-Retrieval-System-CBVIR-',
    description: " A deep-learning pipeline (CBVIR) that indexes large video collections and retrieves visually similar content using learned embeddings and approximate nearest-neighbor search.",
    problem:
      
    "Traditional text-based and metadata search often fails when videos lack accurate tags or descriptions. The challenge is to retrieve visually similar videos directly from their content.",

    tools: [
      "Python",
      "PyTorch",
      "CNN",
      "ConvLSTM",
      "I3D",
      "FAISS",
      "Annoy",
      "OpenCV", 
      "Scikit-learn", 
      "NumPy",
      "Pandas", 
      "Matplotlib",
      "Katna"
    ],

    screenshots: [

      "/images/cvbir_I3D_golf (1).png",
      "/images/cvbir_I3D_golf (2).png",
      "/images/cvbir_hit@5_faiss+annoy.png",
      "/images/cvbir_ALL_results_pipeline3.png",
      "/images/cvbir_KF_ALL_results.png",
      "/images/cvbir_extractedFeats_I3D.png",
      "/images/cvbir_extractedFeats_Resnet50_ConvLSTM.png",
      
     
      
    ],

    methodology: [
   
      "Video preprocessing",
      "Keyframe extraction",
      "Spatial Feature extraction using CNN models",
      "Spatio-temporal feature learning with ConvLSTM and I3D",
      "Embedding generation",
      "FAISS and annoy indexing",
      "Similarity search and retrieval",
      "Evaluation and comparaison"
    ],

    results:
      "Best-performing pipeline: I3D + Annoy (Angular Distance, 10 Trees), achieving an F1-score of 0.95, an NDCG of 0.95, and 277 correct Hit@5 retrievals, while maintaining the lowest memory usage and outperforming all other retrieval architectures.",

    keyLearnings: [
      "Worked with large-scale multimedia data",
      "Learned video feature extraction techniques",
      "Applied vector databases and similarity search",
      "Strengthened deep learning and information retrieval expertise"
    ]
  },
  "worldcupnlp": {
    title: "Analyzing World Cup Social Media Trends with NLP",
    github:'https://github.com/Thouraya-jamai/worldcup-social-media-behavior-analysis_NLP',
    description: 'Applied natural language processing techniques for topic modeling , including TF-IDF, NMF, and BERTopic, to uncover discussion themes, fan reactions, and emerging trends from FIFA World Cup social media conversations.',
    problem:
      "Millions of social media posts are generated during major sporting events, making it difficult to manually identify dominant discussion topics, fan interests, and emerging trends. The challenge is to automatically extract meaningful insights from large volumes of unstructured text data.",

    tools: [
      "Python",
      "NLTK",
      "BERTopic",
      "KeyBERT",
      "NMF",
      "TF-IDF",
      "Pandas",
      "Scikit-learn",
      "Matplotlib",
      "numpy",
      "Seaborn"
    ],

    screenshots: [
      
      "/images/worldcuppd.png",
      "/images/bertopic2018.png",
      "/images/bertopic2022.png",
      "/images/birt13.png",
      "/images/birt15.png",
      "/images/birt17.png",
      "/images/2.1BERT.png",
      "/images/1.1BERT.png",
      "/images/1BERTopic.png",
      "/images/birt16.png",
      "/images/birt20.png",
       "/images/birt23.png",
        "/images/birt24.png",
      
      
      
      
    ],

    methodology: [
      "Exploratory Data Analysis (EDA)",
      "Data Cleaning & Preprocessing",
      "TF-IDF vectorization",
      "Topic modeling with NMF",
      "Topic modeling with BERTopic",
      "Topic interpretation and comparison",
      "Topic labeling using KeyBERT",
      "Behavioral Analysis and Visualization",


    ],

    results:
     "Identified main topics, hashtags, and locations across both tournaments, analyzed engagement (likes and retweets) per topic, studied sentiment and controversial discussions, and compared main topics across different places.",

    keyLearnings: [
      "Developed practical NLP preprocessing skills",
      "Compared traditional and transformer-based topic modeling",
      "Learned topic interpretation techniques",
      "Strengthened text analytics and visualization skills"
    ]
  },



  "arsl": {
    title: "Arabic Sign Language Recognition Using CNN",
    github:'https://github.com/Thouraya-jamai/Arabic-Sign-Language-using-CNN',
    description: 'Built a convolutional neural network from scratch for Arabic sign language classification, achieving high recognition accuracy through image preprocessing and deep learning techniques.',
    problem:
     "Communication barriers exist between Arabic Sign Language users and non-signers. The challenge is to automatically recognize sign gestures from images.",
    tools: [
      "Python",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "CNN",
      "Scikit-Learn",

    ],

    screenshots: [
      "/images/arsl1.png",
      "/images/arsl2.png",
      "/images/arsl3.png"
    ],

    methodology: [
     
      "Data preprocessing",
      "Data augmentation",
      "CNN architecture design",
      "Class balancing",
      "Model training & validation",
      "Performance evaluation",
    ],

    results:
      "Achieved a training accuracy of 94.06% (loss: 0.2830) and a test accuracy of 94.56%, demonstrating strong and stable performance in Arabic Sign Language gesture classification.",

    keyLearnings: [
      "Built and trained deep learning models",
      "Learned image preprocessing techniques",
      "Improved understanding of CNN architectures",
      "Gained practical experience in computer vision"
    ]
  },



  "diabetespredict": {
    title: "Diabetes Prediction Among Pima Indian Women",
    github:'https://github.com/Thouraya-jamai/Diabetes-Prediction-project',
    description: "Analyzed the Pima Indians Diabetes dataset through exploratory data analysis, data preprocessing, visualization, and clustering techniques to uncover patterns associated with diabetes risk.",
        problem: "Healthcare datasets often contain hidden patterns that are difficult to identify using traditional analysis. The objective was to explore diabetes-related health indicators and discover meaningful patient groups through unsupervised learning techniques.",
        tools: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Scikit-Learn",
      "K-Means",
      "K-Medoids",
      "Fuzzy C-Means"
    ],

    screenshots: [
      "/images/dbp10.png",
      "/images/dbp4.png",
      "/images/dbp5.png",
      "/images/dbp6.png",
      "/images/dbp7.png",
      "/images/dbp8.png",
      "/images/dbp9.png",
      "/images/dbp2.png",
      "/images/dbp3.png",
      "/images/dbp1.png",
    ],

    methodology: [
      "Data exploration and descriptive statistics",
      "Data visualization and correlation analysis",
      "Missing value treatment and data cleaning",
      "Data standardization and normalization",
      "K-Means clustering",
      "K-Medoids clustering",
      "Fuzzy C-Means clustering",
      "Cluster interpretation and comparison"
    ],

    results:
     "Revealed meaningful relationships between health indicators and diabetes status while comparing K-Means, K-Medoids, and Fuzzy C-Means clustering approaches to identify patient segments with similar characteristics.",
    keyLearnings: [
      "Applied end-to-end data mining workflow",
      "Improved understanding of clustering algorithms",
      "Learned the impact of preprocessing on unsupervised learning",
      "Strengthened data visualization and exploratory analysis skills"
    ]
  },

  

  
}
export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
const [index, setIndex] = useState(0)
useEffect(() => {
  setIndex(0)
}, [slug])


const project = projectDetails[slug as keyof typeof projectDetails]
  
if (!project) return <div>Project not found</div>
  
const images = project?.screenshots ?? []
const technicalArchitecture = project.technicalArchitecture
const userSystemWorkflow = project.userSystemWorkflow

  return (
    <section className="bg-olive">
  <div className="mx-auto max-w-8xl px-10 py-10">
    

  {/* HERO */}


   <Reveal className="flex flex-col items-start ">
              {project.status && (
    <span className="rounded-full border border-white/20 bg-brown px-4 py-2 text-sm font-medium text-white/90 backdrop-blur">
      {project.status}
    </span>
  )}
            <h2 className="mb-4 font-heading text-3xl font-semibold  sm:text-4xl md:text-5xl text-white/90">
                {project.title}
            </h2>
            <p className=" mb-8 ml-8 max-w-3xl text-pretty leading-relaxed text-primary-foreground/85">
                {project.description}
             </p>
      </Reveal>

 {/* TOP SECTION: IMAGE + CONTENT */}

<div className="grid items-stretch gap-8 lg:grid-cols-[57fr_43fr]">

  {/* LEFT SIDE → IMAGE */}
  <div className="h-full">

    <div className="relative flex h-full min-h-[550px] items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-[#F5E9D3] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

      <Image
        src={images[index]}
        alt="project screenshot"
        width={1200}
  height={700}
  className="h-[560px] w-[790px] shrink-0 object-contain"
      />

      {/* PREVIOUS */}
      <button
        onClick={() =>
          setIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
          )
        }
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-olive-soft px-3 py-1 text-white"
      >
        ←
      </button>

      {/* NEXT */}
      <button
        onClick={() =>
          setIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
          )
        }
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-olive-soft px-3 py-1 text-white"
      >
        →
      </button>

    </div>

  </div>


  {/* RIGHT SIDE → STACKED CARDS */}
  <div
  className={`flex h-full flex-col gap-6 ${
    slug === "ai_customer_support_assistant"
      ? "justify-start"
      : "justify-between"
  }`}
>

    {/* PROBLEM CARD */}
    <Reveal delay={0.4}>
      <div className="rounded-3xl border border-white/10 bg-[#F5E9D3] p-6">

        <h2 className="mb-4 text-xl font-semibold text-brown">
          Problem
        </h2>

        <p className="text-sm text-[#5A4A42]">
          {project.problem}
        </p>

      </div>
    </Reveal>

      {/* AI ASSISTANT → USER / SYSTEM WORKFLOW */}
    {slug === "ai_customer_support_assistant" && userSystemWorkflow ? (

      <UserSystemWorkflowCard
        workflow={userSystemWorkflow}
      />

    ) : (

      /* OTHER PROJECTS → METHODOLOGY */
      <Reveal delay={0.2}>
        <div className="rounded-3xl border border-white/10 bg-[#F5E9D3] p-6">

          <h2 className="mb-4 text-xl font-semibold text-brown">
            Methodology
          </h2>

          <ul className="mt-3 grid gap-2">
            {project.methodology.map((m, i) => (
              <li
                key={`${m}-${i}`}
                className="flex items-start gap-2 text-sm text-[#5A4A42]"
              >
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-olive" />
                {m}
              </li>
            ))}
          </ul>

        </div>
      </Reveal>

    )}
  </div>

</div>

{/* AI ASSISTANT → ARCHITECTURE + TECHNOLOGY STACK */}

{slug === "ai_customer_support_assistant" &&
  technicalArchitecture && (
    <div className="mt-8 grid items-start gap-8 lg:grid-cols-[57fr_43fr]">

      {/* LEFT → TECHNICAL ARCHITECTURE */}
      <TechnicalArchitectureCard
        architecture={technicalArchitecture}
      />

      {/* RIGHT → TECHNOLOGY STACK */}
      <TechnologyStackCard
        tools={project.tools}
      />

    </div>
)}



<div className="mt-8 grid gap-8 lg:grid-cols-[3fr_2fr]">
  

  {/* RESULTS */}
  {slug !== "ai_customer_support_assistant" && (
  <Reveal delay={0.3}>
    <div className="rounded-3xl border border-white/10 bg-[#F5E9D3] p-6">
    
      <h2 className="mb-4 text-xl font-semibold text-brown">
        Results
      </h2>

      <p className="text-sm text-[#5A4A42]">
        {project.results}
      </p>
    </div>
  </Reveal>
)}

  {/* TOOLS ONLY FOR OTHER PROJECTS */}
  {slug !== "ai_customer_support_assistant" && (
    <Reveal delay={0.4}>
      <div className="rounded-3xl border bg-[#F5E9D3] p-6">
        <h2 className="mb-4 text-xl font-semibold text-brown">
          Technology Stack
        </h2>

        <div className="flex flex-wrap gap-2">
          {project.tools.map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="rounded-full border border-brown/30 bg-brown/90 px-3 py-1 text-xs text-white/80"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  )}

</div>

  {/* GITHUB */}
{project.github && (
  <Reveal delay={0.4}>
    <div className="mt-10 flex justify-center">
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="rounded-xl bg-brown px-6 py-3 text-white transition hover:bg-olive"
      >
        <GithubIcon className="inline size-4 mr-2" />
        View on GitHub
      </a>
    </div>
  </Reveal>
)}
</div>

</section>
)
}