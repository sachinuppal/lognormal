import { useState, useEffect } from 'react';
import { Filter } from 'lucide-react';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';
import LeadCaptureModal, { isLeadCaptureCompleted } from '../components/LeadCaptureModal';

interface CaseStudy {
    id: string;
    client: string;
    sector: string;
    sectorTag: string;
    region: string;
    engagement: string;
    headlineMetric: string;
    context: string;
    problem: string;
    solution: string;
    results: string[];
    timeline?: string;
}

const caseStudies: CaseStudy[] = [
    {
        id: 'fortuna',
        client: 'Fortuna Entertainment Group',
        sector: 'iGaming',
        sectorTag: 'iGAMING',
        region: 'Central & Eastern Europe',
        engagement: '6+ Years Continuous',
        headlineMetric: '€45M+',
        context: 'One of the largest iGaming operators in Central & Eastern Europe with multi-market, multi-platform operations.',
        problem: 'Fragmented data across markets, platforms, and product verticals. No unified omni-channel analytics. BI capabilities unable to keep pace with business growth.',
        solution: 'Built full BI & Analytics team from the ground up. Developed comprehensive omni-channel data platform integrating all markets, platforms, and product verticals. Deployed FalconDive for customer lifecycle management and value realization.',
        results: ['€45M+ value generated over 6 years', '2.5x lower development cost vs. in-house', 'Unified data platform across all markets', 'Real-time analytics across all verticals'],
        timeline: 'Year 1: Foundation & team build → Year 2-3: Platform maturity → Year 4-6: AI-driven optimization',
    },
    {
        id: 'tipico',
        client: 'Tipico',
        sector: 'iGaming',
        sectorTag: 'SPORTSBOOK',
        region: 'Germany',
        engagement: '2 Years Continuous',
        headlineMetric: '€600K+',
        context: 'Leading German sportsbook operator with 1200+ retail betting shops and a growing online business.',
        problem: 'Lack of unified management visibility across 32 critical KPIs. Customer service analytics gap across 1200+ shops and online operations.',
        solution: 'Built Management Scorecard tracking 32 KPIs. Developed Customer Services analytics spanning retail and online operations. AI-driven margin optimization.',
        results: ['€600K+ value generated over 2 years', '18% average margin uplift', '32 KPIs tracked in real-time', 'Unified view across 1200+ shops + online'],
        timeline: 'Month 1-3: Discovery & KPI design → Month 4-8: Scorecard build → Month 9-24: Optimization & expansion',
    },
    {
        id: 'bet-at-home',
        client: 'bet-at-home',
        sector: 'iGaming',
        sectorTag: 'iGAMING',
        region: 'Europe',
        engagement: '1+ Year',
        headlineMetric: '€350K+',
        context: 'Major European iGaming operator undergoing critical platform migration.',
        problem: 'Aging data warehouse infrastructure. Needed modernization during live platform migration without business disruption.',
        solution: 'Rebuilt and modernized DWH during platform migration. Implemented AWS S3 tech stack. Ensured seamless transition and cost efficiency.',
        results: ['€350K+ value generated', '€150K+ in development cost saved', 'Seamless migration with zero downtime', 'Modern, scalable data architecture'],
    },
    {
        id: 'superbahis',
        client: 'Superbahis',
        sector: 'iGaming',
        sectorTag: 'iGAMING',
        region: 'Multi-Market',
        engagement: '2+ Years Continuous',
        headlineMetric: '€2M+',
        context: 'Multi-brand iGaming operation requiring granular customer analytics and bonus optimization.',
        problem: 'Limited customer-level analytics across 4 brands. Bonus strategies not optimized. No predictive modeling for player behavior.',
        solution: 'Built FalconDive application providing granular customer analytics and bonus optimization across 4 brands with predictive modeling.',
        results: ['€2M+ value generated', 'Predictive modeling across 4 brands', 'Optimized bonus strategies', 'Enhanced customer lifecycle management'],
    },
    {
        id: 'newcross',
        client: 'Newcross Healthcare',
        sector: 'Healthcare',
        sectorTag: 'HEALTHCARE',
        region: 'United Kingdom',
        engagement: '3+ Years Continuous',
        headlineMetric: '€1M+',
        context: 'Healthcare staffing and services company with complex data across healthcare, finance, and HR systems.',
        problem: 'Siloed data across healthcare operations, finance, and HR. No real-time operational visibility. Manual reporting processes.',
        solution: 'Built centralized data warehouse integrating healthcare, finance, and HR systems. Deployed Power BI dashboards for real-time operational insights.',
        results: ['€1M+ value generated', 'Centralized data warehouse', 'Real-time dashboards', 'Automated reporting across all departments'],
    },
    {
        id: 'dazn',
        client: 'DAZN',
        sector: 'Media',
        sectorTag: 'MEDIA',
        region: 'Global',
        engagement: '2+ Years',
        headlineMetric: '€350K+',
        context: 'Global sports streaming platform needing centralized analytics and modern data infrastructure.',
        problem: 'Decentralized analytics. Legacy data infrastructure. Need to build and transition an in-house analytics team.',
        solution: 'Implemented centralized analytics. Migrated to Snowflake with DBT. Hired and embedded 12-member analytics team, then transitioned in-house.',
        results: ['€350K+ value generated', '€150K+ development cost saved', 'Successful Snowflake migration', '12-person team transitioned to client'],
    },
];

const filters = ['All', 'iGaming', 'Healthcare', 'Media'];

const CaseStudies = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTrigger, setModalTrigger] = useState('');
    const [expandedStudies, setExpandedStudies] = useState<Set<string>>(new Set());

    // Auto-expand all case studies if lead capture already completed
    useEffect(() => {
        if (isLeadCaptureCompleted()) {
            setExpandedStudies(new Set(caseStudies.map(cs => cs.id)));
        }
    }, []);

    const filtered = activeFilter === 'All'
        ? caseStudies
        : caseStudies.filter(cs => cs.sector === activeFilter);

    const toggleStudy = (studyId: string) => {
        setExpandedStudies(prev => {
            const next = new Set(prev);
            if (next.has(studyId)) {
                next.delete(studyId);
            } else {
                next.add(studyId);
            }
            return next;
        });
    };

    const handleViewStudy = (study: CaseStudy) => {
        if (isLeadCaptureCompleted()) {
            toggleStudy(study.id);
        } else {
            setModalTrigger(`Requested ${study.client} Case Study`);
            setIsModalOpen(true);
            setExpandedStudies(prev => new Set(prev).add(study.id));
        }
    };

    return (
        <div className="relative min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
            <Navigation />

            <main className="pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <span className="font-mono text-xs tracking-[0.2em] text-[#00f0ff]/60 mb-4 block">
                            [CASE_STUDIES] VALUE_JOURNEYS
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                            Value <span className="text-[#00f0ff]">Journeys</span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Real results from real engagements. Every case study represents measurable outcomes
                            delivered for enterprise clients.
                        </p>
                    </div>

                    {/* Filter Bar */}
                    <div className="flex items-center justify-center gap-3 mb-12">
                        <Filter className="w-4 h-4 text-gray-600" />
                        {filters.map((f) => (
                            <button
                                key={f}
                                onClick={() => setActiveFilter(f)}
                                className={`px-4 py-2 rounded-lg font-mono text-xs tracking-wider transition-all duration-200 ${activeFilter === f
                                    ? 'bg-[#00e5ff] text-black font-bold'
                                    : 'bg-[#0f1724]/60 text-gray-400 border border-gray-800 hover:border-gray-700'
                                    }`}
                            >
                                {f.toUpperCase()}
                            </button>
                        ))}
                    </div>

                    {/* Case Study Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filtered.map((study) => (
                            <div
                                key={study.id}
                                className="group p-6 bg-[#0f1724]/80 border border-[#00e5ff]/10 rounded-2xl hover:border-[#00e5ff]/30 transition-all duration-300"
                            >
                                {/* Sector badge */}
                                <span className="inline-block bg-[#00e5ff]/10 border border-[#00e5ff]/20 px-3 py-1 rounded font-mono text-[10px] text-[#00f0ff] tracking-wider mb-4">
                                    [{study.sectorTag}]
                                </span>

                                {/* Client & metric */}
                                <h3 className="font-display text-xl font-bold text-white mb-2">{study.client}</h3>
                                <div className="font-display text-3xl font-bold text-[#00f0ff] mb-3">
                                    {study.headlineMetric}
                                    <span className="text-sm text-gray-500 ml-2 font-mono font-normal">value generated</span>
                                </div>

                                {/* Context */}
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{study.context}</p>

                                {/* Meta */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="text-[10px] font-mono text-gray-600 bg-gray-800/50 px-2 py-0.5 rounded">{study.region}</span>
                                    {study.engagement && (
                                        <span className="text-[10px] font-mono text-gray-600 bg-gray-800/50 px-2 py-0.5 rounded">{study.engagement}</span>
                                    )}
                                </div>

                                {/* Expanded details */}
                                {expandedStudies.has(study.id) && (
                                    <div className="mt-4 pt-4 border-t border-gray-800/50 space-y-3">
                                        <div>
                                            <span className="font-mono text-[10px] text-[#00f0ff]/60 tracking-wider">PROBLEM</span>
                                            <p className="text-gray-400 text-xs mt-1">{study.problem}</p>
                                        </div>
                                        <div>
                                            <span className="font-mono text-[10px] text-[#00f0ff]/60 tracking-wider">SOLUTION</span>
                                            <p className="text-gray-400 text-xs mt-1">{study.solution}</p>
                                        </div>
                                        <div>
                                            <span className="font-mono text-[10px] text-[#00f0ff]/60 tracking-wider">RESULTS</span>
                                            <ul className="mt-1 space-y-1">
                                                {study.results.map((r, ri) => (
                                                    <li key={ri} className="text-gray-400 text-xs flex items-center gap-2">
                                                        <span className="text-[#00f0ff]">▸</span> {r}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        {study.timeline && (
                                            <div>
                                                <span className="font-mono text-[10px] text-[#00f0ff]/60 tracking-wider">TIMELINE</span>
                                                <p className="text-gray-400 text-xs mt-1">{study.timeline}</p>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* CTA */}
                                <button
                                    onClick={() => handleViewStudy(study)}
                                    className="mt-4 text-[#00f0ff] font-mono text-xs tracking-wider hover:text-white transition-colors"
                                >
                                    {expandedStudies.has(study.id) ? 'COLLAPSE ↑' : 'SEE VALUE JOURNEY →'}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />

            {/* Lead Capture Modal */}
            <LeadCaptureModal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                }}
                triggerAction={modalTrigger}
                triggerPage={window.location.href}
                caseStudyName={expandedStudies.size > 0 ? caseStudies.find(cs => expandedStudies.has(cs.id))?.client : undefined}
            />
        </div>
    );
};

export default CaseStudies;
