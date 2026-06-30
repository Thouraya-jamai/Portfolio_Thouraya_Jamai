'use client'
import { use } from 'react'
import { useState,useEffect } from 'react'
import Image from 'next/image'
import { GithubIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { AnimatePresence, motion } from 'framer-motion'

const projectDetails = {
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
      "/images/cvbir_KF_ALL_results.png",
      "/images/cvbir_extractedFeats_I3D.png",
      "/images/cvbir_ALL_results_pipeline3.png",
      "/images/cvbir_hit@5_faiss+annoy.png",
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

  return (
    <section className="bg-olive">
  <div className="mx-auto max-w-7xl px-6 py-20">
    

  {/* HERO */}


   <Reveal className="flex flex-col items-start gap-3">
            <h2 className="mb-8 font-heading text-3xl font-semibold  sm:text-4xl md:text-5xl text-white/90">
                {project.title}
            </h2>
            <p className=" mb-12 ml-8 max-w-3xl text-pretty leading-relaxed text-primary-foreground/85">
                {project.description}
             </p>
      </Reveal>

  {/* TOP SECTION: IMAGE + CONTENT */}

<div className="grid gap-8 lg:grid-cols-[1.8fr_1fr] items-stretch">
  {/* LEFT SIDE → IMAGE */}
  <div className="space-y-6">
    <div>
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#F5E9D3]  h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <Image
        src={images[index]}
        alt="project screenshot"
        width={1200}
        height={700}
        className="h-[500px] w-[765px] "
      />

      <button
        onClick={() =>
          setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
        }
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-olive-soft px-3 py-1 text-white"
      >
        ←
      </button>

      <button
        onClick={() =>
          setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
        }
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-olive-soft px-3 py-1 text-white"
      >
        →
      </button>
    </div>
</div>
    
  </div>

  {/* RIGHT SIDE → STACKED CARDS */}
  <div className="space-y-6">

    {/* PROBLEM CARD */}
    
  <Reveal delay={0.4}>
      <div className="rounded-3xl border border-white/10 bg-[#F5E9D3] p-6">
           <h2 className="mb-4 text-xl font-semibold text-brown">Problem</h2>
           <p className="text-sm text-[#5A4A42]">
                 {project.problem}
           </p>
       </div>
</Reveal>
    {/* METHODOLOGY CARD */}
   <Reveal delay={0.2}>
     <div className="rounded-3xl border border-white/10 bg-[#F5E9D3]  p-6">
      <h2 className="mb-4 text-xl font-semibold text-brown">Methodology</h2>

      <ul className="mt-3 grid gap-2">
        {project.methodology.map((m, i) => (
          <li
            key={`${m}-${i}`}
            
            className="flex items-start gap-2 text-sm text-[#5A4A42]"
            
          >
            <span className="mt-2 size-1.5 rounded-full bg-olive" />
            
            {m}
          </li>
        ))}
      </ul>
    </div>
       </Reveal> 

  </div>
</div>

<div className="mt-8 grid gap-8 lg:grid-cols-[1.8fr_1fr]">

  {/* RESULTS */}
  <Reveal delay={0.3}>
  <div className="rounded-3xl border border-white/10 bg-[#F5E9D3] p-6" >
    <h2 className="mb-4 text-xl font-semibold text-brown">
      Results
    </h2>

    <p className="text-sm text-[#5A4A42]">
      {project.results}
    </p>
  </div>
</Reveal>
<Reveal delay={0.4}>
  {/* TOOLS */}
  <div className="rounded-3xl border bg-[#F5E9D3] p-6 ">
    <div className="flex flex-wrap gap-2 ">
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
</div>

  {/* GITHUB */}
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

</div>
</section>
)
}