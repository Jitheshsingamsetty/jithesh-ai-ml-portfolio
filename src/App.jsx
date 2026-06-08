import "./App.css";

const resumeUrl = "/Jithesh_Singamsetty_Resume.pdf";

function App() {
  const links = {
    email: "Jithesh.singamsetty@outlook.com",
    phone: "469-759-9123",
    location: "Dallas, TX",
    linkedin: "https://www.linkedin.com/in/jithesh-singamsetty-206400172/",
    github: "https://github.com/Jitheshsingamsetty",
  };

  const stats = [
    { value: "4+", label: "Years of AI/ML Experience" },
    { value: "7B", label: "LLM Model Optimization" },
    { value: "$2.1M+", label: "Business Impact Delivered" },
    { value: "2.4K", label: "Concurrent Inference Requests/sec" },
  ];

  const education = {
    university: "University of North Texas",
    degree: "Master's in Computer Science and Engineering",
    location: "TX, USA",
    duration: "Jan 2023 – Dec 2024",
    coursework:
      "Machine Learning, Deep Learning, Artificial Intelligence, Statistical Modeling, Data Mining, Natural Language Processing, Computer Vision, and Big Data Analytics.",
  };

  const experiences = [
    {
      company: "Qualcomm",
      role: "AI/ML Engineer",
      duration: "Dec 2025 – Present",
      link: "https://www.qualcomm.com/",
      summary:
        "Architected on-device neural network inference pipelines, fine-tuned 7B LLMs using QLoRA, applied quantization and pruning, deployed optimized models through Triton, and improved AI accelerator utilization across Snapdragon chipsets.",
      tags: ["QLoRA", "Triton", "Docker", "Kubernetes", "MLflow"],
    },
    {
      company: "HCL Technologies",
      role: "AI/ML Engineer",
      duration: "Feb 2025 – Dec 2025",
      link: "https://www.hcltech.com/",
      summary:
        "Built NLP document classification pipelines, fine-tuned RoBERTa for NER, implemented RLHF and DPO summarization, deployed SageMaker endpoints, and introduced model drift monitoring using Evidently AI.",
      tags: ["RoBERTa", "SageMaker", "Spark", "RLHF", "Evidently AI"],
    },
    {
      company: "JPMorgan Chase & Co.",
      role: "AI/ML Engineer Intern",
      duration: "Aug 2024 – Nov 2024",
      link: "https://www.jpmorganchase.com/",
      summary:
        "Created real-time fraud detection, RAG earnings-call analysis, PySpark feature pipelines, Grafana and Prometheus dashboards, and Agentic AI inventory replenishment workflows.",
      tags: ["XGBoost", "RAG", "LangChain", "Pinecone", "PySpark"],
    },
    {
      company: "Redington",
      role: "Machine Learning Engineer",
      duration: "Nov 2020 – Dec 2022",
      link: "https://redingtongroup.com/",
      summary:
        "Developed demand forecasting models, visual quality inspection systems, production REST model APIs, GCP Vertex AI pipelines, churn prediction models, and Tableau business KPI dashboards.",
      tags: ["LSTM", "ARIMA", "Vertex AI", "XGBoost", "Tableau"],
    },
  ];

  const projects = [
    {
      number: "01",
      type: "Model Compression",
      name: "EdgeLM - On-Device LLM Compression Toolkit",
      stack: "PyTorch, QLoRA, ONNX Runtime, TensorRT, Triton, Weights & Biases",
      description:
        "Compressed a 7B LLaMA-2 model to 940MB using QLoRA, INT4 quantization, and magnitude pruning while retaining 97.1% MMLU score on Snapdragon hardware.",
      github:
      "https://github.com/Jitheshsingamsetty/edgelm-compression-toolkit.git",
    },
    {
      number: "02",
      type: "Legal AI",
      name: "ClauseIQ - Legal Document NER & Clause Classifier",
      stack: "RoBERTa, FastAPI, PostgreSQL, Docker",
      description:
        "Fine-tuned RoBERTa-base on 14,000 annotated legal clauses across 6 contract types, achieving 91.6% macro-F1 and processing 800-page contracts in under 9 seconds.",
      github:
      "https://github.com/Jitheshsingamsetty/clauseiq-legal-ner-classifier.git",
    },
    {
      number: "03",
      type: "Fraud AI",
      name: "TxShield - Streaming Transaction Anomaly Detector",
      stack: "XGBoost, Kafka, Redis, Grafana, PySpark, Pinecone",
      description:
        "Trained an XGBoost ensemble on 22M transactions with SMOTE, reached 93.4% F1 on minority fraud class, and reduced mean alert response time to under 3 minutes.",
      github:
      "https://github.com/Jitheshsingamsetty/txshield-streaming-anomaly-detector.git",
    },
    {
      number: "04",
      type: "Forecasting",
      name: "StockSense - Hybrid Demand Forecasting Engine",
      stack: "LSTM, Prophet, GCP Vertex AI, BigQuery",
      description:
        "Combined Prophet trend decomposition with LSTM residual networks across 220 SKUs, achieving 11.4% MAPE and reducing error by 6.2 points versus ARIMA baseline.",
      github:
      "https://github.com/Jitheshsingamsetty/stocksense-hybrid-demand-forecasting.git",
    },
  ];

  const skillGroups = [
    {
      title: "Generative AI & LLMs",
      skills: ["LLM Fine-tuning", "QLoRA", "LoRA", "DPO", "PPO", "RLHF", "RAG", "Prompt Engineering", "LangChain", "LlamaIndex", "OpenAI API"],
    },
    {
      title: "Machine Learning & Deep Learning",
      skills: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "XGBoost", "LightGBM", "HuggingFace Transformers", "NLP", "Computer Vision", "Anomaly Detection", "Time-Series Forecasting"],
    },
    {
      title: "Model Compression & Serving",
      skills: ["vLLM", "Triton Inference Server", "TensorRT", "ONNX Runtime", "CUDA", "Quantization", "Pruning", "Foundation Models", "LLaMA-2", "Mistral", "GPT-4"],
    },
    {
      title: "Vector Databases & Agentic AI",
      skills: ["Pinecone", "Weaviate", "Qdrant", "pgvector", "LangGraph", "CrewAI", "Agentic AI", "Agentic Systems"],
    },
    {
      title: "Cloud & MLOps",
      skills: ["AWS SageMaker", "GCP Vertex AI", "Azure ML", "Docker", "Kubernetes", "MLflow", "Kubeflow", "Airflow", "CI/CD", "Evidently AI", "Weights & Biases", "DVC"],
    },
    {
      title: "Data Engineering & Tools",
      skills: ["Python", "SQL", "Bash", "Scala", "Apache Spark", "PySpark", "Kafka", "Pandas", "NumPy", "PostgreSQL", "MongoDB", "Snowflake", "Git", "Grafana", "Prometheus", "Tableau", "JIRA"],
    },
  ];

  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#home" className="logo">JS</a>

        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#approach">Approach</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero section">
        <div className="heroContent">
          <p className="eyebrow">AI / ML Engineer · Production LLM Systems</p>

          <h1>Jithesh Singamsetty</h1>
          <h2>I build production-ready AI, LLM, and MLOps systems.</h2>

          <p className="heroSummary">
            AI/ML Engineer with 4 years of experience delivering production LLM,
            Generative AI, RAG, Agentic AI, fraud detection, demand forecasting,
            enterprise NLP, model compression, and cloud-based MLOps systems.
          </p>

          <div className="heroButtons">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="#about" className="btn secondary">About Candidate</a>
          </div>

          <div className="heroStats">
            {stats.map((item) => (
              <div key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="profilePanel">
          <div className="profileTop">
            <div className="avatar">AI</div>
            <div>
              <h3>Production AI Engineer</h3>
              <p>LLMs · RAG · MLOps · Edge AI</p>
            </div>
          </div>

          <div className="panelHighlight">
            <span>Current Focus</span>
            <h4>On-device LLM optimization and scalable AI inference</h4>
          </div>

          <div className="panelGrid">
            <div>
              <strong>940MB</strong>
              <span>Compressed LLaMA-2</span>
            </div>
            <div>
              <strong>58ms</strong>
              <span>Edge latency</span>
            </div>
            <div>
              <strong>97.1%</strong>
              <span>MMLU retained</span>
            </div>
            <div>
              <strong>99.6%</strong>
              <span>SLA uptime</span>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section about">
        <div className="sectionHeader">
          <p className="sectionLabel">About Candidate</p>
          <h2>AI engineer focused on scalable, measurable, production impact.</h2>
        </div>

        <div className="aboutLayout">
          <div className="aboutMain">
            <p className="aboutText">
              Jithesh specializes in LLM fine-tuning, model compression, RAG
              pipelines, Agentic AI workflows, real-time ML systems, NLP,
              forecasting, and production MLOps. His resume shows hands-on work
              across Qualcomm, HCL Technologies, JPMorgan Chase, and Redington,
              where he improved inference latency, automated document workflows,
              built fraud detection systems, and delivered business-focused AI
              solutions.
            </p>

            <div className="metricsGrid">
              {stats.map((item) => (
                <div className="metricCard" key={item.label}>
                  <h3>{item.value}</h3>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="educationCard">
            <p className="educationTag">Education</p>
            <h3>{education.university}</h3>
            <h4>{education.degree}</h4>
            <p>{education.location}</p>
            <p>{education.duration}</p>

            <div className="courseBox">
              <strong>Relevant Coursework</strong>
              <span>{education.coursework}</span>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="sectionHeader">
          <p className="sectionLabel">Professional Experience</p>
          <h2>Experience across edge AI, enterprise NLP, fraud AI, and forecasting.</h2>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timelineItem" key={exp.company}>
              <div className="timelineNumber">{String(index + 1).padStart(2, "0")}</div>

              <div className="experienceCard">
                <div className="experienceTop">
                  <a href={exp.link} target="_blank" rel="noreferrer" className="companyName">
                    {exp.company}
                  </a>
                  <span>{exp.duration}</span>
                </div>

                <h3>{exp.role}</h3>
                <p>{exp.summary}</p>

                <div className="tagRow">
                  {exp.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section projects">
        <div className="sectionHeader">
          <p className="sectionLabel">Featured Projects</p>
          <h2>AI project work aligned with resume-level production experience.</h2>
        </div>

        <div className="projectGrid">
          {projects.map((project) => (
            <div className="projectCard" key={project.name}>
              <div className="projectMeta">
                <span>{project.number}</span>
                <p>{project.type}</p>
              </div>

              <h3>{project.name}</h3>
              <p className="stack">{project.stack}</p>
              <p>{project.description}</p>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="caseButton"
              >
                View Case Study
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <div className="sectionHeader">
          <p className="sectionLabel">Technical Skills</p>
          <h2>Grouped skills for AI engineering, MLOps, and data systems.</h2>
        </div>

        <div className="skillsGrid">
          {skillGroups.map((group) => (
            <div className="skillCard" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skillTags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="approach" className="section approach">
        <div className="sectionHeader">
          <p className="sectionLabel">System Design / Work Approach</p>
          <h2>A practical workflow for building reliable AI systems.</h2>
        </div>

        <div className="approachGrid">
          <div>
            <span>01</span>
            <h3>Problem & Data Understanding</h3>
            <p>
              Start with business goals, data quality, model constraints, target
              users, latency requirements, monitoring needs, and measurable KPIs.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Modeling & Optimization</h3>
            <p>
              Fine-tune models, evaluate baselines, apply compression,
              quantization, pruning, feature engineering, and validation.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Deployment & Monitoring</h3>
            <p>
              Deploy using Docker, Kubernetes, SageMaker, Vertex AI, MLflow,
              Grafana, Prometheus, Evidently AI, and CI/CD pipelines.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="sectionHeader">
          <p className="sectionLabel">Contact</p>
          <h2>Connect with Jithesh.</h2>
        </div>

        <div className="contactCard">
          <div>
            <p><strong>Email:</strong> {links.email}</p>
            <p><strong>Phone:</strong> {links.phone}</p>
            <p><strong>Location:</strong> {links.location}</p>
          </div>

          <div className="contactButtons">
            <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={links.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={resumeUrl} target="_blank" rel="noreferrer">View Resume</a>
            <a href={resumeUrl} download>Download Resume</a>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 Jithesh Singamsetty. Built for AI / ML Engineering Portfolio.</p>
      </footer>
    </div>
  );
}

export default App;