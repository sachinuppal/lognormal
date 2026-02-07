import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Database, Layers, Cpu, Eye, MessageSquare, Shield, TrendingUp, ArrowRight,
  Server, Cloud, Lock, Zap, BarChart3, Users, Clock, CheckCircle, AlertTriangle,
  Code, Brain, Workflow, PieChart, Target
} from 'lucide-react';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';
import CalendlyModal from '../components/CalendlyModal';

gsap.registerPlugin(ScrollTrigger);

const Architecture = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    triggersRef.current.forEach(st => st.kill());
    triggersRef.current = [];

    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo('.hero-content',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );

      // Animation helper function
      const createAnimation = (selector: string, trigger: string, stagger = 0.1) => {
        const elements = gsap.utils.toArray<HTMLElement>(selector);
        elements.forEach((el) => gsap.set(el, { opacity: 1, y: 0 }));

        const triggerInstance = ScrollTrigger.create({
          trigger,
          start: 'top 90%',
          once: true,
          onEnter: () => {
            gsap.fromTo(elements,
              { opacity: 0, y: 50 },
              { opacity: 1, y: 0, duration: 0.7, stagger, ease: 'power3.out' }
            );
          }
        });
        triggersRef.current.push(triggerInstance);
      };

      createAnimation('.layer-card', '.layers-section', 0.12);
      createAnimation('.feature-card', '.features-section', 0.1);
      createAnimation('.benefit-card', '.benefits-section', 0.08);
      createAnimation('.workflow-step', '.workflow-section', 0.15);
      createAnimation('.solution-card', '.solution-section', 0.1);
      createAnimation('.use-case-card', '.use-cases-section', 0.1);
      createAnimation('.roi-item', '.roi-section', 0.1);
      createAnimation('.impl-card', '.impl-section', 0.1);
    }, sectionRef);

    return () => {
      triggersRef.current.forEach(st => st.kill());
      triggersRef.current = [];
      ctx.revert();
    };
  }, []);

  const layers = [
    {
      title: 'Source Data Layer',
      icon: Database,
      color: 'cyan',
      desc: 'This layer enables seamless integration with structured, semi-structured, and unstructured data sources. It supports batch ingestion, real-time streams, and third-party connectors through APIs.',
      items: ['Batch ingestion', 'Real-time streams', 'Third-party connectors', 'API integrations'],
    },
    {
      title: 'Ingestion & Processing Layer',
      icon: Layers,
      color: 'purple',
      desc: 'FalconAI operates extensively within this layer. The Data Governance Agent monitors and enforces standards, validating that transformed datasets maintain consistency.',
      items: ['Data validation', 'Schema enforcement', 'Anomaly detection', 'Quality monitoring'],
    },
    {
      title: 'Value Layer',
      icon: Cpu,
      color: 'green',
      desc: 'The Value Layer is where FalconAI delivers its core intelligence—transforming prepared data into decisions, forecasts, and system-wide optimization.',
      items: ['Amazon Athena queries', 'Amazon SageMaker ML', 'Predictive analytics', 'Prescriptive logic'],
    },
    {
      title: 'Data Visualization Layer',
      icon: Eye,
      color: 'amber',
      desc: 'The final layer focuses on delivering actionable insights and supporting operational decisions through visualization tools.',
      items: ['Dashboards & Reports', 'Power BI / Tableau', 'Operational systems', 'Workflow integration'],
    },
  ];

  const agenticFeatures = [
    {
      title: 'FalconAI Chat',
      icon: MessageSquare,
      desc: 'A dedicated agent within the FalconAI system that allows users to query data using natural language and receive contextual, actionable answers. It supports use cases such as explaining metric movements, retrieving top-level KPIs, or identifying outliers.',
    },
    {
      title: 'FalconOmnis',
      icon: Shield,
      desc: 'The orchestration layer within FalconAI that enables agents to work together in real time—monitoring trends, detecting anomalies, and surfacing explanations. It facilitates coordinated agent-to-agent interaction.',
    },
  ];

  const workflowSteps = [
    { num: '01', title: 'Business User', desc: 'Submits natural language questions about business data', icon: Users },
    { num: '02', title: 'LangChain SQL Agent', desc: 'Orchestrates query processing and routing', icon: Workflow },
    { num: '03', title: 'Anthropic LLM', desc: 'Converts natural language to optimized SQL queries', icon: Brain },
    { num: '04', title: 'LangChain Executor', desc: 'Handles database connections and query execution', icon: Code },
    { num: '05', title: 'Local LLM', desc: 'Transforms results into business-friendly insights', icon: Zap },
  ];

  const solutionComponents = [
    {
      title: 'Natural Language Interface',
      desc: 'Business users interact with the system using plain English questions like "What were our top-performing products last quarter?" or "Show me customer churn trends by region." No technical expertise required.',
      icon: MessageSquare,
    },
    {
      title: 'Intelligent Query Orchestration',
      desc: 'The LangChain SQL Agent acts as the central conductor, managing the entire query lifecycle. It understands context, handles query complexity, and ensures optimal routing.',
      icon: Workflow,
    },
    {
      title: 'AI-Powered SQL Generation',
      desc: 'Anthropic\'s Large Language Model translates natural language into optimized SQL queries. This sophisticated AI understands business terminology and database schemas.',
      icon: Code,
    },
    {
      title: 'Automated Execution Layer',
      desc: 'The LangChain Executor handles the technical complexity of database connections, query execution, and error handling with secure, efficient access.',
      icon: Server,
    },
    {
      title: 'Smart Results Processing',
      desc: 'A Local LLM transforms raw database results into meaningful business insights. Users get contextual analysis and actionable recommendations.',
      icon: BarChart3,
    },
  ];

  const useCases = [
    { title: 'Executive Dashboards', question: '"How is our revenue trending compared to last year?"', icon: PieChart, color: 'blue' },
    { title: 'Sales Analytics', question: '"Which territories are underperforming this month?"', icon: TrendingUp, color: 'green' },
    { title: 'Operations Monitoring', question: '"What\'s causing delays in our supply chain?"', icon: Target, color: 'orange' },
    { title: 'Customer Insights', question: '"What are the characteristics of our most valuable customers?"', icon: Users, color: 'purple' },
  ];

  const roiMetrics = [
    { value: '70%', label: 'reduction in time-to-insight', icon: Clock },
    { value: '3x', label: 'increase in data-driven decisions', icon: TrendingUp },
    { value: '50%', label: 'decrease in analytical backlog', icon: BarChart3 },
    { value: 'High', label: 'improved employee satisfaction', icon: Users },
  ];

  const implConsiderations = [
    { title: 'Security & Governance', items: ['Maintains existing database security protocols', 'Audit trail of all queries and access', 'Role-based access control integration'], icon: Lock },
    { title: 'Scalability', items: ['Handles concurrent users efficiently', 'Adapts to growing data volumes', 'Cloud-native architecture supports elastic scaling'], icon: Server },
    { title: 'Integration', items: ['Compatible with existing database infrastructure', 'API-first design for easy integration', 'Supports multiple database types and formats'], icon: Layers },
  ];

  const colorMap: Record<string, { text: string; border: string; bg: string }> = {
    cyan: { text: 'text-cyan-400', border: 'border-cyan-500/50', bg: 'bg-cyan-500/10' },
    purple: { text: 'text-purple-400', border: 'border-purple-500/50', bg: 'bg-purple-500/10' },
    green: { text: 'text-green-400', border: 'border-green-500/50', bg: 'bg-green-500/10' },
    amber: { text: 'text-amber-400', border: 'border-amber-500/50', bg: 'bg-amber-500/10' },
    blue: { text: 'text-blue-400', border: 'border-blue-500/50', bg: 'bg-blue-500/10' },
    orange: { text: 'text-orange-400', border: 'border-orange-500/50', bg: 'bg-orange-500/10' },
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <Navigation />

      <main ref={sectionRef} className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f]" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center hero-content">
            <span className="font-mono text-sm text-[#00f0ff] tracking-widest mb-4 block">
              [ARCHITECTURE] SYSTEM_DESIGN
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              FalconDive <span className="text-[#00f0ff]">Architecture</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              FalconDive is an AI-native BI platform built for scalable, real-time decision-making.
              At its core, FalconAI powers every layer through intelligent agents that validate,
              transform, analyze, and explain data—ensuring seamless flow from ingestion to insight.
            </p>
          </div>
        </section>

        {/* Architecture Diagram Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl font-bold text-center mb-12">
              Platform <span className="text-[#00f0ff]">Architecture</span>
            </h2>

            <div className="bg-[#1a1a24] border border-gray-800 rounded-2xl p-8 overflow-x-auto">
              <div className="min-w-[800px]">
                {/* Architecture Flow Diagram */}
                <div className="flex items-stretch gap-4">
                  {/* Data Sources Column */}
                  <div className="flex-1 flex flex-col">
                    <div className="text-center mb-4">
                      <span className="text-sm text-gray-400 font-mono">Data from any Source</span>
                    </div>
                    <div className="bg-[#0a0a0f] border border-gray-700 rounded-xl p-4 flex-1">
                      <div className="space-y-3">
                        {['AWS', 'Amazon Redshift', 'Snowflake', 'Kafka', 'PostgreSQL', 'Google BigQuery', 'MongoDB', 'Salesforce'].map((source, i) => (
                          <div key={i} className="bg-[#1a1a24] border border-gray-700 rounded-lg px-3 py-2 text-xs text-gray-300 text-center">
                            {source}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center">
                    <ArrowRight className="w-6 h-6 text-[#00f0ff]" />
                  </div>

                  {/* AWS Cloud Column */}
                  <div className="flex-[2] flex flex-col">
                    <div className="text-center mb-4">
                      <span className="text-sm text-gray-400 font-mono">Store, Ingest & Backup on AWS Cloud</span>
                    </div>
                    <div className="bg-[#0a0a0f] border border-gray-700 rounded-xl p-4 flex-1">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="col-span-2 bg-[#1a1a24] border border-cyan-500/30 rounded-lg p-3">
                          <div className="text-xs text-cyan-400 font-mono mb-2">AWS S3 Data Lake</div>
                          <div className="flex gap-2">
                            <div className="flex-1 bg-[#0a0a0f] rounded px-2 py-1 text-[10px] text-gray-400 text-center">Raw Data</div>
                            <div className="flex-1 bg-[#0a0a0f] rounded px-2 py-1 text-[10px] text-gray-400 text-center">Transform</div>
                            <div className="flex-1 bg-[#0a0a0f] rounded px-2 py-1 text-[10px] text-gray-400 text-center">Processed</div>
                          </div>
                        </div>
                        {['AWS Glue (ETL)', 'Amazon Athena', 'Amazon CloudWatch', 'Amazon EC2', 'AWS Lambda', 'AWS App Runner'].map((service, i) => (
                          <div key={i} className="bg-[#1a1a24] border border-gray-700 rounded-lg px-2 py-2 text-[10px] text-gray-300 text-center">
                            {service}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center">
                    <ArrowRight className="w-6 h-6 text-[#00f0ff]" />
                  </div>

                  {/* Value Layer Column */}
                  <div className="flex-1 flex flex-col">
                    <div className="text-center mb-4">
                      <span className="text-sm text-gray-400 font-mono">Value Layer</span>
                    </div>
                    <div className="bg-[#0a0a0f] border border-gray-700 rounded-xl p-4 flex-1">
                      <div className="space-y-3">
                        <div className="bg-[#1a1a24] border border-purple-500/30 rounded-lg p-3 text-center">
                          <div className="text-[10px] text-purple-400 font-mono">Amazon Athena</div>
                          <div className="text-[9px] text-gray-500">Interactive Query</div>
                        </div>
                        <div className="bg-[#1a1a24] border border-purple-500/30 rounded-lg p-3 text-center">
                          <div className="text-[10px] text-purple-400 font-mono">API Access Layer</div>
                        </div>
                        <div className="bg-[#1a1a24] border border-purple-500/30 rounded-lg p-3 text-center">
                          <div className="text-[10px] text-purple-400 font-mono">Amazon S3 File System</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center">
                    <ArrowRight className="w-6 h-6 text-[#00f0ff]" />
                  </div>

                  {/* Output Column */}
                  <div className="flex-1 flex flex-col">
                    <div className="text-center mb-4">
                      <span className="text-sm text-gray-400 font-mono">Data Visualization & Analytics</span>
                    </div>
                    <div className="bg-[#0a0a0f] border border-gray-700 rounded-xl p-4 flex-1">
                      <div className="space-y-3">
                        <div className="bg-[#1a1a24] border border-green-500/30 rounded-lg p-3 text-center">
                          <div className="text-[10px] text-green-400 font-mono">Insights & Reports</div>
                        </div>
                        <div className="bg-[#1a1a24] border border-green-500/30 rounded-lg p-3 text-center">
                          <div className="text-[10px] text-green-400 font-mono">Operational Systems</div>
                        </div>
                        <div className="bg-[#1a1a24] border border-green-500/30 rounded-lg p-3 text-center">
                          <div className="text-[10px] text-green-400 font-mono">AI Chatbot, FalconOmnis</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Layers Section */}
        <section className="layers-section py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl font-bold text-center mb-12">
              Platform <span className="text-[#00f0ff]">Layers</span>
            </h2>

            <div className="space-y-6">
              {layers.map((layer, i) => {
                const colors = colorMap[layer.color];
                return (
                  <div key={i} className={`layer-card bg-[#1a1a24] border border-gray-800 ${colors.border} p-6 rounded-xl hover:-translate-y-1 transition-all`} style={{ opacity: 1 }}>
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <layer.icon className={`w-6 h-6 ${colors.text}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display text-xl font-bold mb-2">{layer.title}</h3>
                        <p className="text-gray-400 text-sm mb-4">{layer.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {layer.items.map((item, j) => (
                            <span key={j} className={`text-[10px] font-mono ${colors.bg} ${colors.text} px-2 py-1 rounded`}>
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Agentic AI Features Section */}
        <section className="features-section py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl font-bold text-center mb-4">
              Agentic AI <span className="text-[#00f0ff]">Features</span>
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
              In addition to traditional BI capabilities, FalconDive integrates agentic AI features
              that elevate how users interact with data:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {agenticFeatures.map((feature, i) => (
                <div key={i} className="feature-card bg-[#1a1a24] border border-gray-800 p-6 rounded-xl hover:border-[#00f0ff]/30 transition-all" style={{ opacity: 1 }}>
                  <feature.icon className="w-10 h-10 text-[#00f0ff] mb-4" />
                  <h3 className="font-display text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* Additional Agentic AI Info */}
            <div className="mt-8 bg-[#1a1a24] border border-gray-800 p-6 rounded-xl">
              <p className="text-gray-400 text-sm mb-4">
                This integration of conversational AI and agentic collaboration ensures that business users
                receive not just data, but answers, context, and proactive guidance—when and where they need it most.
              </p>
              <p className="text-gray-400 text-sm mb-4">
                FalconAI agents also proactively generate alerts and notifications based on business-defined thresholds,
                AI-detected risks, or unexpected shifts in key performance metrics. These alerts are surfaced contextually
                within dashboards or delivered to relevant stakeholders via integrated channels such as email, Slack, or in-app messages.
              </p>
              <p className="text-gray-400 text-sm">
                Each day, FalconOmnis monitors anomalies detected across all datasets, maintaining a live view of what changed,
                why it changed, and how it was addressed. Business users can view a summary of unresolved anomalies from the
                previous day, alongside agent-generated explanations and recommended next steps.
              </p>
            </div>
          </div>
        </section>

        {/* Query Processing Workflow Section */}
        <section className="workflow-section py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl font-bold text-center mb-4">
              Business Intelligence <span className="text-[#00f0ff]">Query Processing Workflow</span>
            </h2>

            {/* Workflow Visual */}
            <div className="mt-12 bg-[#1a1a24] border border-gray-800 rounded-2xl p-8">
              <div className="flex flex-wrap justify-center items-stretch gap-4">
                {workflowSteps.map((step, i) => (
                  <div key={i} className="workflow-step flex flex-col items-center" style={{ opacity: 1 }}>
                    <div className="bg-gradient-to-br from-[#00f0ff]/20 to-purple-500/20 border border-[#00f0ff]/30 rounded-xl p-4 w-40 text-center hover:scale-105 transition-transform">
                      <span className="text-[#00f0ff] font-mono text-xs block mb-2">{step.num}</span>
                      <step.icon className="w-6 h-6 text-[#00f0ff] mx-auto mb-2" />
                      <h4 className="font-display font-bold text-sm mb-1">{step.title}</h4>
                      <p className="text-[10px] text-gray-400">{step.desc}</p>
                    </div>
                    {i < workflowSteps.length - 1 && (
                      <div className="hidden md:block absolute translate-x-[88px] mt-8">
                        <ArrowRight className="w-4 h-4 text-[#00f0ff]" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display text-3xl font-bold text-center mb-6">
              <span className="text-[#00f0ff]">Overview</span>
            </h2>
            <p className="text-gray-400 text-center">
              The Business Intelligence Query Processing Workflow represents a modern, AI-powered approach to data analytics
              that bridges the gap between business users and complex databases. This system transforms natural language
              questions into actionable insights without requiring technical SQL knowledge from end users.
            </p>
          </div>
        </section>

        {/* The Challenge Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display text-3xl font-bold text-center mb-6">
              The <span className="text-red-400">Challenge</span>
            </h2>
            <div className="bg-red-500/5 border border-red-500/30 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
                <p className="text-gray-400">
                  Traditional business intelligence systems require users to either understand SQL or rely heavily on
                  technical teams to extract insights from data. This creates bottlenecks, delays decision-making,
                  and limits data accessibility across the organization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Architecture Section */}
        <section className="solution-section py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl font-bold text-center mb-4">
              The Solution <span className="text-[#00f0ff]">Architecture</span>
            </h2>
            <p className="text-gray-400 text-center mb-12 font-mono text-sm">
              Workflow Components
            </p>

            <div className="space-y-4">
              {solutionComponents.map((comp, i) => (
                <div key={i} className="solution-card bg-[#1a1a24] border border-gray-800 p-5 rounded-xl hover:border-[#00f0ff]/30 transition-all" style={{ opacity: 1 }}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#00f0ff]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <comp.icon className="w-5 h-5 text-[#00f0ff]" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-lg mb-1 text-[#00f0ff]">{i + 1}. {comp.title}</h4>
                      <p className="text-gray-400 text-sm">{comp.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Considerations */}
        <section className="impl-section py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl font-bold text-center mb-12">
              Implementation <span className="text-[#00f0ff]">Considerations</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {implConsiderations.map((impl, i) => (
                <div key={i} className="impl-card bg-[#1a1a24] border border-gray-800 p-5 rounded-xl" style={{ opacity: 1 }}>
                  <impl.icon className="w-8 h-8 text-[#00f0ff] mb-3" />
                  <h4 className="font-display font-bold mb-3">{impl.title}</h4>
                  <ul className="space-y-2">
                    {impl.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-[#00f0ff] flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="use-cases-section py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl font-bold text-center mb-12">
              Use <span className="text-[#00f0ff]">Cases</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {useCases.map((useCase, i) => {
                const colors = colorMap[useCase.color];
                return (
                  <div key={i} className={`use-case-card ${colors.bg} border ${colors.border} p-6 rounded-xl`} style={{ opacity: 1 }}>
                    <div className="flex items-center gap-3 mb-3">
                      <useCase.icon className={`w-6 h-6 ${colors.text}`} />
                      <h4 className={`font-display font-bold ${colors.text}`}>{useCase.title}:</h4>
                    </div>
                    <p className="text-gray-300 italic">{useCase.question}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ROI Expectations Section */}
        <section className="roi-section py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl font-bold text-center mb-4">
              ROI <span className="text-[#00f0ff]">Expectations</span>
            </h2>
            <p className="text-gray-400 text-center mb-12">
              Organizations implementing this workflow typically see:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {roiMetrics.map((roi, i) => (
                <div key={i} className="roi-item bg-[#1a1a24] border border-gray-800 p-6 rounded-xl text-center hover:border-[#00f0ff]/30 transition-all" style={{ opacity: 1 }}>
                  <roi.icon className="w-8 h-8 text-[#00f0ff] mx-auto mb-3" />
                  <div className="text-3xl font-display font-bold text-[#00f0ff] mb-2">{roi.value}</div>
                  <div className="text-sm text-gray-400">{roi.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conclusion Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display text-3xl font-bold text-center mb-6">
              <span className="text-[#00f0ff]">Conclusion</span>
            </h2>
            <div className="bg-gradient-to-r from-[#00f0ff]/10 via-[#00f0ff]/5 to-[#00f0ff]/10 border border-[#00f0ff]/20 p-8 rounded-2xl">
              <p className="text-gray-300 mb-4">
                The Business Intelligence Query Processing Workflow represents a paradigm shift in how organizations
                interact with their data. By combining the power of Large Language Models with robust data infrastructure,
                it creates a seamless bridge between business questions and data-driven answers.
              </p>
              <p className="text-gray-300 mb-4">
                This isn't just about making data accessible—it's about transforming every employee into a data analyst
                and accelerating the pace of informed decision-making across the enterprise.
              </p>
              <p className="text-xl font-display italic text-[#00f0ff] text-center">
                "The future of business intelligence isn't about learning to speak the language of databases;
                it's about teaching databases to understand the language of business."
              </p>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="benefits-section py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl font-bold text-center mb-4">
              Key <span className="text-[#00f0ff]">Benefits</span>
            </h2>
            <p className="text-gray-400 text-center mb-12">
              This architecture provides several critical advantages:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: TrendingUp, title: 'Scalability', desc: 'S3 Data Lake and AWS Glue allow organizations to handle growing data volumes with ease.' },
                { icon: Layers, title: 'Flexibility', desc: 'Support for diverse data sources, including relational, streaming, and cloud-based platforms.' },
                { icon: Database, title: 'Cost-Effectiveness', desc: 'S3\'s pay-as-you-go model and transient Redshift usage minimize operational costs.' },
                { icon: Server, title: 'Real-Time Analytics', desc: 'Tools like Kafka and Athena enable real-time data ingestion and analysis.' },
                { icon: Cpu, title: 'Advanced Analytics & ML', desc: 'SageMaker and Redshift provide capabilities for predictive modeling and data science.' },
                { icon: Cloud, title: 'Operational Visibility', desc: 'CloudWatch ensures continuous monitoring, logging, and error resolution.' },
              ].map((benefit, i) => (
                <div key={i} className="benefit-card bg-[#1a1a24] border border-gray-800 p-5 rounded-xl hover:border-[#00f0ff]/30 transition-all" style={{ opacity: 1 }}>
                  <benefit.icon className="w-8 h-8 text-[#00f0ff] mb-3" />
                  <h3 className="font-display font-bold mb-1">{benefit.title}</h3>
                  <p className="text-gray-400 text-xs">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience FalconDive's Architecture in Action?
            </h2>
            <p className="text-gray-400 mb-8">
              See how our AI-native platform transforms your data infrastructure and accelerates decision-making.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative px-8 py-4 bg-[#00f0ff] text-black font-mono font-bold tracking-wider rounded-lg hover:scale-105 transition-transform flex items-center gap-2 mx-auto"
            >
              <span>Request Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>
      </main>

      <Footer />
      <CalendlyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Architecture;
