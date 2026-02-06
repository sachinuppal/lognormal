import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';

const DataProcessingAgreement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <Navigation />
      
      <main className="pt-24 pb-20">
        {/* Header */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f]" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00f0ff] transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              <span className="font-mono text-sm">Back</span>
            </Link>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">
              Data Processing <span className="text-[#00f0ff]">Agreement</span>
            </h1>
            
            <div className="text-center text-gray-400 font-mono text-sm space-y-1">
              <p><span className="text-gray-500">Effective Date:</span> 4 December, 2024</p>
              <p><span className="text-gray-500">Last Updated:</span> 4 December, 2025</p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-8">
          <div className="max-w-3xl mx-auto px-6">
            <div className="prose prose-invert prose-gray max-w-none">
              
              {/* Section 1 - Definitions */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-[#00f0ff] mb-4">1. Definitions</h2>
                <p className="text-gray-400 mb-4">For the purposes of this Data Processing Agreement, the following terms shall have the meaning provided below:</p>
                <ul className="space-y-3 text-gray-400">
                  <li>
                    <span className="text-white font-semibold">Data Controller, Data Processor, Data Protection Officer, Data Subject, Personal Data, Personal Data Breach, Processing and Supervisory Authority</span> shall have the same meaning as found in the GDPR.
                  </li>
                  <li>
                    <span className="text-white font-semibold">Data Protection Legislation</span> shall mean the GDPR, and any other applicable national implementing law as amended from time to time, as well as any other applicable law concerning the processing of personal data and privacy.
                  </li>
                  <li>
                    <span className="text-white font-semibold">Data Subject Request</span> shall mean a request by, or on behalf of, a Data Subject in accordance with rights granted pursuant to the Data Protection Legislation regarding their Personal Data.
                  </li>
                  <li>
                    <span className="text-white font-semibold">GDPR</span> shall mean the General Data Protection Regulation (Regulation (EU) 2016/679).
                  </li>
                  <li>
                    <span className="text-white font-semibold">Protective Measures</span> shall mean appropriate technical and organisation measures to ensure a level of security appropriate to the risk, which may include, but are not limited to, the pseudonymisation and encrypting of Personal Data, ensuring the ongoing confidentiality, integrity, availability and resilience of systems and services, ensuring that availability of and access to Personal Data can be restored in a timely manner in the event of an incident and regularly testing, assessing and evaluating the effectiveness of the measures adopted.
                  </li>
                  <li>
                    <span className="text-white font-semibold">Sub-processor</span> shall mean any vendor appointed to process Personal Data on behalf of FalconDive related to this Agreement.
                  </li>
                </ul>
                <p className="text-gray-400 mt-4">All other capitalised terms shall have the same meaning provided in the Agreement.</p>
              </div>

              {/* Section 2 - Processing of Personal Data */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-[#00f0ff] mb-4">2. Processing of Personal Data</h2>
                <p className="text-gray-400 mb-4">The Parties acknowledge that, for the purposes of the Data Protection Legislation, the Client is the Data Controller and FalconDive is the Data Processor. The processing of Personal Data that FalconDive is authorised to perform is exhaustively listed in Schedule A and may not be determined or amended by FalconDive at any time. FalconDive may only process the Personal Data, including in respect of international transfers, in line with the written instructions of the Client and may not use the Personal Data for its own purposes unless FalconDive is required to do otherwise by Law.</p>
                <p className="text-gray-400 mb-4">Provided that if so required and permissible at law, FalconDive shall notify the Client, without delay, prior to processing such data.</p>
                <p className="text-gray-400 mb-4">The Client agrees to share the personal data detailed in Schedule A with FalconDive in order for the agreed processing to take place, as required for the provision of the services as detailed in the Main Agreement.</p>
                <p className="text-gray-400 mb-4">FalconDive shall comply with all applicable Data Protection Legislation in the processing of the Client's Personal Data.</p>
                <p className="text-gray-400 mb-4">FalconDive shall notify the Client immediately if it considers that any of the instructions infringe Data Protection Legislation.</p>
                <p className="text-gray-400 mb-4">The Client shall be responsible for notifying Data Subjects of a data breach or for a request from the Data Subject themselves or from a corresponding provision of an otherwise applicable national data protection law.</p>
                <p className="text-gray-400">The Client agrees and warrants that it shall comply fully with the terms of the GDPR and shall ensure that the Personal Data that it supplies or discloses to FalconDive has been obtained fairly and lawfully and in accordance with the provisions of the Data Protection Legislation.</p>
              </div>

              {/* Section 3 - Protective Measures */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-[#00f0ff] mb-4">3. Protective Measures</h2>
                <p className="text-gray-400 mb-4">FalconDive shall ensure that Protective Measures, which are in line with the requirements of Article 32 of the GDPR and detailed in Schedule C are in place to appropriately protect against a Personal Data Breach, having taken into account the:</p>
                <ul className="space-y-2 text-gray-400 list-disc list-inside">
                  <li>nature of the data to be protected.</li>
                  <li>harm that might result from a Personal Data Breach;</li>
                  <li>state of technological development; and</li>
                  <li>cost of implementing any measures.</li>
                </ul>
                <p className="text-gray-400 mt-4">In determining the appropriate level of Protective Measures, FalconDive shall take into account the risks that are presented by the Processing taking place and in particular from a Personal Data Breach.</p>
              </div>

              {/* Section 4 - FalconDive Personnel */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-[#00f0ff] mb-4">4. FalconDive Personnel</h2>
                <p className="text-gray-400 mb-4">FalconDive shall ensure that FalconDive personnel do not process Personal Data except in accordance with this Agreement and that all reasonable steps are taken to ensure the reliability and integrity of any FalconDive personnel who have access to the Personal Data, particularly that they:</p>
                <ul className="space-y-2 text-gray-400 list-disc list-inside">
                  <li>are aware of and comply with FalconDive's duties under this Agreement;</li>
                  <li>are subject to appropriate confidentiality undertakings, or professional or statutory obligations of confidentiality with FalconDive;</li>
                  <li>are informed of the confidential nature of the Personal Data and do not publish, disclose or divulge any of the Personal Data to any third Party unless directed in writing to do so by the Client or as otherwise permitted by this Agreement; and</li>
                  <li>have undergone adequate training in the use, care, protection and handling of Personal Data.</li>
                </ul>
                <p className="text-gray-400 mt-4">FalconDive shall limit access to the Client's Personal Data to those employees that need to know or access the Personal Data as is strictly necessary for the purposes of the main Agreement between the Parties.</p>
              </div>

              {/* Section 5 - International Data Transfers */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-[#00f0ff] mb-4">5. International Data Transfers</h2>
                <p className="text-gray-400 mb-4">FalconDive shall not transfer Personal Data outside of the EEA unless the prior written consent of the Client has been obtained and the following conditions are fulfilled:</p>
                <ul className="space-y-2 text-gray-400 list-disc list-inside">
                  <li>FalconDive complies with the general conditions laid down in relation to such transfers (in accordance with GDPR Article 44);</li>
                  <li>FalconDive complies with its obligation to provide appropriate safeguards, which safeguards shall ensure the availability of enforceable Data Subject rights and of effective legal remedies (in accordance with GDPR Article 46);</li>
                  <li>All transfers take place with appropriate security measures in place to protect the personal data; and</li>
                  <li>FalconDive complies with any reasonable instructions notified to it in advance by the Client with respect to the transfer of the Personal Data.</li>
                </ul>
              </div>

              {/* Section 6 - Sub-Processing */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-[#00f0ff] mb-4">6. Sub-Processing</h2>
                <p className="text-gray-400 mb-4">The sub-processors which FalconDive uses for the processing of Personal Data in accordance with this Agreement are listed in Schedule B of this Agreement, as may be amended or updated from time to time upon notification to the Client.</p>
                <p className="text-gray-400 mb-4">Pursuant to Article 28 (2) of the GDPR, the Client grants to FalconDive a general authorization to use Sub-processors to provide processing activities on Client's data in accordance with this chapter 6. FalconDive website shall list the Sub-Processors used by FalconDive. At least 15 days before engaging with a Sub-processor, FalconDive shall update its website and notify the Client via email. The Client can object to such Sub-processor by (i) ceasing to use the Services for which FalconDive has appointed the respective Sub-processor or (ii) request to have the data stored in a data center/server which is not provided by the respective Sub-processor.</p>
                <p className="text-gray-400 mb-4">Prior to FalconDive engaging a Sub-processor to process any Personal Data related to this Agreement, FalconDive must:</p>
                <ul className="space-y-2 text-gray-400 list-disc list-inside">
                  <li>carry out adequate due diligence to ensure that the Sub-processor is capable of providing the level of protection for Personal Data required by the Data Protection Legislation.</li>
                  <li>notify the Client of the intended Sub-processor, processing and any international data transfers, in accordance with this chapter 6;</li>
                  <li>enter into a written agreement with the Sub-processor, applying the same data protection obligations set out in this Agreement, in particular providing sufficient guarantees to meet the security requirements of Article 32 of the GDPR; and</li>
                  <li>incorporate the European Commission Standard Contractual Clauses into any agreement with a sub-processor when an international transfer is taking place to a country not providing adequate safeguards</li>
                  <li>provide the Client with such information, regarding the Sub-processor, as it may reasonably require.</li>
                </ul>
                <p className="text-gray-400 mt-4">FalconDive shall remain fully liable for all acts or omissions of any Sub-processor.</p>
              </div>

              {/* Section 7 - Notification */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-[#00f0ff] mb-4">7. Notification</h2>
                <p className="text-gray-400 mb-4">FalconDive shall notify the Client without delay if it:</p>
                <ul className="space-y-2 text-gray-400 list-disc list-inside">
                  <li>becomes aware of a Personal Data Breach;</li>
                  <li>receives a Data Subject Request;</li>
                  <li>receives any other request, complaint or communication relating to the Parties' obligations under Data Protection Legislation;</li>
                  <li>receives any communication from any Supervisory Authority or any other regulatory authority in connection with Personal Data processed under this Agreement; or</li>
                  <li>receives a request from any third party for the disclosure of Personal Data.</li>
                </ul>
                <p className="text-gray-400 mt-4">Provided that the obligation to notify shall include the prompt provision of further information to the Client, upon the Client's request.</p>
                <p className="text-gray-400">FalconDive shall not respond to any such requests, except on the documented instructions of the Client, unless FalconDive is obliged to respond by law, in which case FalconDive shall notify the Client of that obligation before responding to the request.</p>
              </div>

              {/* Section 8 - Assistance */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-[#00f0ff] mb-4">8. Assistance</h2>
                <p className="text-gray-400 mb-4">FalconDive shall, taking into account the nature of the processing, provide the Client with reasonable assistance in relation to the Client's obligations under Data Protection Legislation to respond to requests for exercising Data Subject rights and to security, breach notifications, and consultations with supervisory authorities, insofar as possible and as may reasonably be required by the Client and applicable Data Protection Legislation, including by promptly providing:</p>
                <ul className="space-y-2 text-gray-400 list-disc list-inside">
                  <li>the Client with full details and copies of the complaint, communication or request;</li>
                  <li>such assistance as is reasonably requested by the Client to comply with any request made by a Data Subject exercising their rights within the relevant timescales set out in the Data Protection Legislation, including but not limited to access, rectification, or deletion of data;</li>
                  <li>the Client, at its request, any Personal Data it holds in relation to a Data Subject;</li>
                  <li>full assistance to the Client in ensuring compliance with Articles 32-36 of the GDPR regarding security of personal data and data breaches;</li>
                  <li>assistance as requested by the Client with respect to any request from any Supervisory Authority, or any consultation between the Client and any Data Protection Supervisory Authority.</li>
                </ul>
                <p className="text-gray-400 mt-4">FalconDive shall, in accordance with its legal obligations as Data Processor and at no additional charge, expense or fee to the Client, provide all reasonable assistance to the Client in the preparation of any privacy impact assessment prior to the commencement of any processing activities. Such assistance may, at the Client's discretion, include but may not be limited to:</p>
                <ul className="space-y-2 text-gray-400 list-disc list-inside">
                  <li>a systematic description of the envisaged processing operations and the purpose of the processing;</li>
                  <li>an assessment of the necessity and proportionality of the processing operations in relation to the services;</li>
                  <li>an assessment of the risks posed to the rights and freedoms of the Data Subjects;</li>
                  <li>the measures envisaged to address the risks and ensure the protection of Personal Data, including safeguards, security measures and mechanisms.</li>
                </ul>
              </div>

              {/* Section 9 - Record Keeping */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-[#00f0ff] mb-4">9. Record Keeping</h2>
                <p className="text-gray-400">In line with their legal obligations as a Data Processor, FalconDive shall maintain complete and accurate records and information to meet the requirements of Article 30(2) of the GDPR and as evidence of meeting the requirements of Article 28 of the GDPR. FalconDive shall also provide these records to the Client upon request.</p>
              </div>

              {/* Section 10 - Audits */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-[#00f0ff] mb-4">10. Audits</h2>
                <p className="text-gray-400 mb-4">FalconDive shall allow for and contribute to audits of its Processing activity by the Client or the Client's designated auditor.</p>
                <p className="text-gray-400 mb-4">The Client shall give FalconDive reasonable notice of any audit and shall reasonably avoid causing any disruption to FalconDive's operations, equipment, premises, and personnel while the audit is being carried out.</p>
                <p className="text-gray-400 mb-4">FalconDive need not give access to its premises for the carrying out of such an audit:</p>
                <ul className="space-y-2 text-gray-400 list-disc list-inside">
                  <li>Outside normal business hours at those premises, unless the audit needs to be conducted on an emergency basis and the Client has given notice to FalconDive that this is the case prior to the commencement of the audit outside normal business hours;</li>
                  <li>For the purposes of more than one audit, in respect of FalconDive, in any calendar year, except for any additional audits which:</li>
                  <li className="ml-4">the Client reasonably considers necessary because of genuine concerns as to FalconDive's compliance with this Agreement; or</li>
                  <li className="ml-4">the Client is required or requested to carry out by Data Protection Legislation, a Supervisory Authority or any similar regulatory authority responsible for the enforcement of Data Protection Legislation in any country or territory, or</li>
                  <li className="ml-4">where the Client has identified its concerns or the relevant requirement or request in its notice to FalconDive of the audit.</li>
                </ul>
              </div>

              {/* Section 11 - Deletion and Return of Data */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-[#00f0ff] mb-4">11. Deletion and Return of Data</h2>
                <p className="text-gray-400 mb-4">Within ten (10) days of the termination date of this Agreement the Client may, in its absolute discretion and by written notice, request FalconDive to:</p>
                <ul className="space-y-2 text-gray-400 list-disc list-inside">
                  <li>return a complete copy of all Client Personal Data to the Client by secure file transfer in such format as is reasonably notified by the Client; and/or</li>
                  <li>delete and procure the deletion of all other copies of Personal Data processed by FalconDive and any other contracted Sub-processor.</li>
                </ul>
                <p className="text-gray-400 mt-4">If the Client does not request the return or retention of their data within thirty (30) days of the termination date of this Agreement, FalconDive will, without further notice, delete the Client's data and provide a certificate of destruction to confirm the deletion. Silence or failure to act within this period will be considered acceptance of data deletion. FalconDive is also required to ensure that any Sub-processor that is engaged deletes or returns Personal Data.</p>
                <p className="text-gray-400 mt-4">FalconDive and each contracted Sub-processor may nonetheless retain Personal Data to the extent required by Data Protection Legislation and any other applicable law to the extent and for such period as required by virtue of such laws and always ensuring the confidentiality of such data. FalconDive will notify the Client if this clause applies on receipt of a written notice as detailed under 11.1.</p>
              </div>

              {/* Section 12 - Agreement */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-[#00f0ff] mb-4">12. Agreement</h2>
                <p className="text-gray-400">This Agreement expressly replaces and supersedes any and all other agreements, oral or written, between the Parties hereto with respect to the subject matter hereof.</p>
              </div>

              {/* Section 13 - Amendments */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-[#00f0ff] mb-4">13. Amendments</h2>
                <p className="text-gray-400">The Client may, at any time, with no less than thirty (30) working days' notice, revise this addendum by replacing the terms with applicable controller to processor standard clauses or similar terms forming part of an applicable certification scheme or those set by a relevant Supervisory Authority.</p>
              </div>

              {/* Section 14 - Data Protection Officer */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-[#00f0ff] mb-4">14. Data Protection Officer</h2>
                <p className="text-gray-400 mb-4">FalconDive shall, where required, appoint a Data Protection Officer (DPO) and provide the Client the contact details of such person. The transmission of any communication between the Parties related to the Personal Data should be performed by e-mail.</p>
                <p className="text-gray-400 mb-4">If FalconDive is not required to appoint a Data Protection Officer, FalconDive will still provide details for a contact person for data protection issues.</p>
                <p className="text-gray-400 mb-4">The Client must appoint a DPO and forward contact details to FalconDive</p>
                <p className="text-gray-400">FalconDive has appointed a DPO/responsible person for Data Protection matters – Rakesh Manne, who may be contacted on rakesh.manne@lognormal.io.</p>
              </div>

              {/* Section 15 - Term and Termination */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-[#00f0ff] mb-4">15. Term and Termination</h2>
                <p className="text-gray-400">This Agreement shall enter into force concurrently with the Agreement and shall thereafter remain in force as long as the Agreement remains in force. This Agreement shall terminate, without notice, concurrently with the Agreement, regardless of the reason, save for those clauses which have been expressly stipulated to survive termination.</p>
              </div>

              {/* Section 16 - Liability */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-[#00f0ff] mb-4">16. Liability</h2>
                <p className="text-gray-400 mb-4">The Parties liability for damages as a result of breaches of this Agreement is, unless otherwise expressly stated, subject to the same limitations of liability as set forth in the Agreement. In case of multiple claims for damages under this Agreement and the Service Agreement, such liability shall be cumulative in relation to the maximum liability.</p>
                <p className="text-gray-400">Nothing contained within this Agreement relieves FalconDive of their own direct responsibilities and liabilities as a Data Processor under Data Protection Legislation.</p>
              </div>

              {/* Section 17 - Costs */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-[#00f0ff] mb-4">17. Costs</h2>
                <p className="text-gray-400 mb-4">Each Party is responsible for its own costs in relation to the preparation and performance of this Agreement, including but not limited to fees and costs for its own representatives, advisors, brokers and other intermediaries and authorities.</p>
                <p className="text-gray-400">Any additional performance or speed enhancements beyond what has been agreed upon in this Agreement or its Schedules will be provided by FalconDive only at an additional cost. Such costs will be communicated and agreed upon with the Client prior to implementation.</p>
              </div>

              {/* Section 18 - Severability */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-[#00f0ff] mb-4">18. Severability</h2>
                <p className="text-gray-400">If any provision, in whole or in part, of this Agreement shall be held by a court of competent jurisdiction to be illegal, invalid or unenforceable, then the provision in question shall be deemed null and void whilst remaining provisions shall continue in full force and effect.</p>
              </div>

              {/* Section 19 - Disputes and Governing Law */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-[#00f0ff] mb-4">19. Disputes and Governing Law</h2>
                <p className="text-gray-400">The parties to this Agreement hereby submit to the choice of law and jurisdiction stipulated in the Agreement with respect to any disputes or claims arising under this Agreement.</p>
              </div>

              {/* Miscellaneous */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-[#00f0ff] mb-4">Miscellaneous</h2>
                <p className="text-gray-400 mb-4">In the event of any conflict between the terms of this DPA and any provision of the Services Agreement and any other agreement between the Parties, this DPA shall prevail solely with respect to any data protection matters.</p>
                <p className="text-gray-400 mb-4">Amendments to this agreement shall be made exclusively in writing. This shall also apply to this requirement of written form.</p>
                <p className="text-gray-400">Should any provision of this agreement be invalid or ineffective, it shall, to the extent permitted by law, be replaced by that provision which comes closest in economic terms to the invalid or ineffective provision.</p>
              </div>

              {/* Schedule A */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-[#00f0ff] mb-4">Schedule A – Instructions</h2>
                <p className="text-gray-400 mb-4">Processing, Personal Data and Data Subjects</p>
                <p className="text-gray-400 mb-4">The Contractor shall comply with any further written instructions with respect to processing by the Customer.</p>
                <p className="text-gray-400 mb-4">Any such further instructions shall be incorporated into this Schedule.</p>
                
                <div className="bg-[#1a1a24] border border-gray-800 p-6 rounded-xl overflow-x-auto">
                  <table className="w-full text-sm text-gray-400">
                    <tbody>
                      <tr className="border-b border-gray-700">
                        <td className="py-3 font-semibold text-white">Subject matter of the processing</td>
                        <td className="py-3">FalconDive provides a platform to the Client which provides access, in real time, to data concerning registration, deposit, log in, player bets, the result of a bet and other transactional data on its end users, to allow the Client to efficiently manage, segment and perform analytics on such end users.</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-3 font-semibold text-white">Duration of the processing</td>
                        <td className="py-3">For the Term of the Agreement.</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-3 font-semibold text-white">Nature and purposes of the processing</td>
                        <td className="py-3">
                          New transactions and events will be transferred to FalconDive in real time or agreed data refresh cycle.<br/><br/>
                          Historical data (transactions such as deposits, withdrawals, bets placed) may be migrated from time to time and will be transferred via secure FTP upload, imported once to FalconDive and then the source file will be destroyed.<br/><br/>
                          FalconDive will not be collecting any data on their own and will solely depend on the data provided by the Client.<br/><br/>
                          The Client will be using FalconDive platform to orchestrate various reporting and analytical activities.<br/><br/>
                          FalconDive platform will process transactional data and the Client may act, based on such data engage the customer, and/or notify internal teams.<br/><br/>
                          FalconDive will not process, store, transmit, or access any sensitive personal data of the Client's customers.
                        </td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-3 font-semibold text-white">Type of Personal Data</td>
                        <td className="py-3">Marketing consent, age, birthday, country, transactional data (deposits, withdrawals), transactional data relating to spins or bets made, bonus and rewards information, blocked / self-exclusion statuses, registration date, affiliate reference, dates of transactions, device usage, current balance which in no way includes sensitive personal data of the client's customers such as name, last name and address.</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-3 font-semibold text-white">Categories of Data Subject</td>
                        <td className="py-3">Customers of the Client (not including any personal or sensitive specific data of the customers of the client).</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-semibold text-white">Plan for return and destruction of the Personal Data once the processing is complete</td>
                        <td className="py-3">
                          In accordance with Clause 11 of this Agreement, FalconDive shall comply with a request to return and/or delete any and all copies of Client Personal Data within 40 days of such request, ensuring the same with regard to each Sub-processor.<br/><br/>
                          Nonetheless, Client Personal Data may be retained to the extent required by applicable Data Protection Legislation for as long as required by such laws, always ensuring the confidentiality of such data and upon notice to the Client.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Schedule B */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-[#00f0ff] mb-4">Schedule B – Approved Sub-processors</h2>
                <div className="bg-[#1a1a24] border border-gray-800 p-6 rounded-xl overflow-x-auto">
                  <table className="w-full text-sm text-gray-400">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-3 text-white">Full Name and Details of Sub-processor</th>
                        <th className="text-left py-3 text-white">Location of Processing</th>
                        <th className="text-left py-3 text-white">Nature and Purpose of Processing</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-4">Amazon Web Services EMEA SARL, 38 Avenue John F. Kennedy, L-1855, Luxembourg</td>
                        <td className="py-4">London</td>
                        <td className="py-4">
                          FalconDive may use the technical infrastructure provided by Amazon Web Services (AWS) in order to perform the Services stipulated in the Agreement with the Client.<br/><br/>
                          AWS is used for the following main purposes:<br/>
                          – Store the personal and transactional data of the Client's customers on AWS servers and databases.<br/>
                          – Enable the performance of the Services rendered by FalconDive, including the launch of marketing campaigns by the Client in relation to the Client's customers or data modelling/science activities.<br/>
                          – Enable segmentation processes of the data transferred by the Client to FalconDive, in accordance with the instructions of the Client.<br/><br/>
                          AWS is SOC 1, SOC 2, SOC 3, ISO 27001, ISO 27017 and ISO 27018 certified.<br/><br/>
                          FalconDive uses AWS data center from London, England. However, in case the Client stores data on servers located outside Europe, for technical performance purposes, FalconDive may rely on other data center of AWS and shall inform the Client accordingly about the location of such data center.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Schedule C */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-[#00f0ff] mb-4">Schedule C – Technical and Organisational Security Measures</h2>
                
                <h3 className="font-display text-lg font-bold text-white mb-4">General Measures</h3>
                <div className="bg-[#1a1a24] border border-gray-800 p-6 rounded-xl overflow-x-auto mb-8">
                  <table className="w-full text-sm text-gray-400">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-3 text-white w-24">Control ID</th>
                        <th className="text-left py-3 text-white">Requirements</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-800"><td className="py-2">5.1.1. a</td><td className="py-2">A set of policies for information security shall be defined, approved by management, published and communicated to employees and relevant external parties.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">5.1.1. b</td><td className="py-2">The Contractor shall ensure that their Personnel agree to terms and conditions concerning information security.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">15.1.1 b</td><td className="py-2">A formal information security risk assessment process shall be defined and implemented</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">15.1.1 c</td><td className="py-2">An information security risk treatment process shall be implemented to select appropriate information security risk treatment options.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">15.1.3 e</td><td className="py-2">Contractor of cloud services should include requirements to address the information security risks associated with information and communications technology services through its product supply chain.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">15.1.3 f</td><td className="py-2">All structured and unstructured data shall be available to the customer and provided to them upon request in an industry-standard format</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">6.1.1</td><td className="py-2">All information security responsibilities shall be defined and allocated</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">6.1.2</td><td className="py-2">Conflicting duties and areas of responsibility shall be segregated to reduce opportunities for unauthorized or unintentional modification or misuse of the organization's assets.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">6.1.3</td><td className="py-2">A policy and supporting security measures shall be implemented to protect information accessed, processed or stored when using mobile computing and teleworking.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">7.1.1</td><td className="py-2">Background verification checks on all candidates for employment shall be carried out in accordance with relevant laws, regulations and ethics and shall be proportional to the business requirements, the classification of the information to be accessed and the perceived risks.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">7.2.2</td><td className="py-2">All employees of the organisation and, where relevant, contractors shall receive appropriate awareness education and training and regular updates in organisational policies and procedures as relevant for their jobs</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">8.1.2</td><td className="py-2">Ownership of an asset shall be assigned and managed during the asset's lifecycle.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">8.1.3</td><td className="py-2">All employees and external party users shall in a timely manner return all of Operator's assets in their possession upon termination of their employment, contract or agreement.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">8.2.1</td><td className="py-2">Information shall be classified in terms of legal requirements, value, criticality and sensitivity to unauthorised disclosure or modification</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">8.2.2</td><td className="py-2">An appropriate set of procedures for information labelling shall be developed and implemented in accordance with the information classification scheme adopted by the organization</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">8.2.3</td><td className="py-2">Sensitive and removable storage media (e.g. CDs, DVDs and USB memory sticks) shall be protected against unauthorized access, misuse or corruption during transportation.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">8.3.3</td><td className="py-2">Media containing confidential information shall be protected against unauthorised access, misuse or corruption during transportation.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">9.2.1 a</td><td className="py-2">The Contractor shall protect Client's information from its other cloud customers' or unauthorized persons' access.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">9.1.2 b</td><td className="py-2">A formal user registration and de-registration process shall be implemented to assign or revoke access rights for all user types to all systems and services</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">9.2.1 b</td><td className="py-2">The use of individual user identities shall be enforced.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">9.2.3</td><td className="py-2">The allocation and use of privileged access rights should be restricted and controlled.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">9.2.4 a</td><td className="py-2">Default and temporary passwords and cryptographic keys shall be kept confidential and be changed from defaults prior to use.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">9.2.4 b</td><td className="py-2">The allocation of secret authentication information should be controlled through a formal management process.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">9.2.4.c</td><td className="py-2">Passwords shall be stored and transmitted in a safe way to avoid being compromised.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">9.4.2 d</td><td className="py-2">A secure password reset process shall be implemented.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">9.2.5</td><td className="py-2">Access rights shall be reviewed and documented at regular intervals.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">9.2.6</td><td className="py-2">The access rights of all employees and external party users to information and information processing facilities shall be removed upon termination of their employment, contract or agreement, or adjusted upon change.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">9.3.1</td><td className="py-2">Users should be required to follow the organization's practices in the use of secret authentication information.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">9.4.3</td><td className="py-2">The use of quality passwords shall be enforced</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">9.4.4</td><td className="py-2">The use of utility programs that might be capable of overriding system and application controls shall be restricted and tightly controlled</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">9.4.2 a</td><td className="py-2">Where required by the access control policy, access to systems and applications should be controlled by a secure log-on procedure.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">11.1.1</td><td className="py-2">Security perimeters shall be defined and used to protect areas that contain either sensitive or critical information and information processing facilities</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">11.1.2</td><td className="py-2">Secure areas shall be protected by appropriate entry controls to ensure that only authorized personnel are allowed access</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">11.1.4</td><td className="py-2">Physical protection against natural disasters, malicious attack or accidents shall be designed and applied.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">11.1.5</td><td className="py-2">Equipment shall be sited and protected to reduce the risks from environmental threats and hazards, and opportunities for unauthorized access.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">11.1.6</td><td className="py-2">Equipment shall be protected from power failures and other disruptions caused by failures in supporting utilities</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">11.1.7</td><td className="py-2">Security shall be applied to off-site assets taking into account the different risks of working outside the organisation's premises.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">12.1.1</td><td className="py-2">Operating procedures shall be documented and made available to all users who need them.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">12.1.2 b</td><td className="py-2">Changes in system and services shall be authorized, approved and communicated by and to appropriate stakeholders according to defined rules.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">12.1.2 c</td><td className="py-2">A fallback procedure shall be defined and tested prior a change is performed.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">12.1.2 d</td><td className="py-2">The Contractor shall implement emergency changes when available and approved, unless such implementation introduces higher business risks.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">12.1.4 a</td><td className="py-2">Development, testing and operational environments shall be separated to reduce the risks of unauthorized access or changes to the operational environment.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">12.1.4 b</td><td className="py-2">Activities and decision points in the change process shall be logged.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">12.1.4 c</td><td className="py-2">Rules for the transfer of software from development to operational status shall be defined and documented.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">12.1.5</td><td className="py-2">Procedures for administrative operations of a cloud computing environment should be defined, documented and monitored.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">12.2.1</td><td className="py-2">Detection, prevention and recovery controls to protect against malware shall be implemented, combined with appropriate user awareness.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">12.3.1 a</td><td className="py-2">Backups of information, software and system images shall be taken according to business requirements for recovery point objective and recovery time objective.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">12.3.1 b</td><td className="py-2">Backups shall be regularly tested to ensure data integrity and that business requirements for recovery point objective and recovery time objective can be met.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">12.3.1 c</td><td className="py-2">Backups shall have a defined retention period, after which data can be disposed.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">12.4.1 a</td><td className="py-2">Event logs recording user activities, exceptions, faults and information security events shall be produced, kept and regularly monitored.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">12.4.1 b</td><td className="py-2">Logging shall be enabled on all firewalls and firewall logs shall be centrally retained and appropriately protected.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">12.4.2</td><td className="py-2">Logging facilities and log information shall be protected against tampering and unauthorized access.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">12.4.4</td><td className="py-2">The clocks of all relevant information processing systems within an organisation or security domain shall be synchronized to a single reference time source.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">12.5.1 a</td><td className="py-2">Procedures shall be implemented to control that only supported and documented software are installed on operational systems.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">12.5.1 b</td><td className="py-2">Physical and virtual machines shall be hardened according to Contractor recommendations.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">12.6.1 a</td><td className="py-2">Vulnerabilities in systems and services shall be identified.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">12.6.1 b</td><td className="py-2">Vulnerabilities in system and services shall be managed.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">13.1.1. a</td><td className="py-2">Networks shall be managed and controlled to protect information in systems and applications</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">13.1.1 b</td><td className="py-2">Special controls shall be enabled to protect confidentiality and integrity of data in transit according to best practice and industry standards, e.g. TLS encryption, WPA2 encryption, managed firewall etc.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">13.1.3</td><td className="py-2">Web application firewalls shall be in place in front of public facing web application and services.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">13.2.4</td><td className="py-2">Requirements for confidentiality or non-disclosure agreements reflecting the organisation's needs for the protection of information shall be identified, regularly reviewed and documented.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">14.2.1</td><td className="py-2">Rules for the development of software and systems should be established and applied to developments within the organization.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">14.2.5</td><td className="py-2">Principles for engineering secure systems should be established, documented, maintained and applied to any information systems implementation efforts.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">14.2.9</td><td className="py-2">Acceptance testing programs and related criteria should be established for new information systems, upgrades and new versions.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">14.2.8 a</td><td className="py-2">Contractor shall, at least annually, and after any significant infrastructure or application upgrade or modification offer penetration testing.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">14.2.8 b</td><td className="py-2">Applications and programming interfaces (APIs) shall be designed, developed, deployed, and tested in accordance with leading industry standards (e.g., OWASP for web applications) and adhere to applicable legal, statutory, or regulatory compliance obligations.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">14.2.8 c</td><td className="py-2">The Contractor shall regularly perform manual and automated security testing of the application to assure that the application is reasonable free of application security defects.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">14.3.1</td><td className="py-2">Confidential or sensitive information, including but not limited to Personal Data and any information that is defined as Confidential information shall never be used for testing purposes.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">16.1.1 a</td><td className="py-2">Management responsibilities and procedures shall be established to ensure a quick, effective and orderly response to information security incident.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">16.1.1 b</td><td className="py-2">Information security events shall be reported in a standardized fashion through appropriate management channels as quickly as possible.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">16.1.4</td><td className="py-2">Information security events shall be assessed, and it shall be decided if they are to be classified as information security incidents</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">16.1.5 a</td><td className="py-2">Specific Incident Response Plans (IRP) for identified and agreed Information security Incidents shall be documented to meet legal, regulatory and business demands.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">16.1.5 b</td><td className="py-2">There shall be yearly exercises to train, test and improve the overall process and specific incident response plans based on an agreed and documented test plan.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">17.1.1</td><td className="py-2">All IT systems shall have a documented restore and recovery procedure to meet recovery time objectives.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">17.1.2</td><td className="py-2">All IT system disaster recovery plans and recovery procedures shall be verified and tested at regular intervals.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">18.1.1 a</td><td className="py-2">Financial data shall be archived in accordance with applicable legislation.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">18.1.1 b</td><td className="py-2">Segregation of duties when processing financial data shall be defined and implemented.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">18.1.1 c</td><td className="py-2">Contractor shall maintain an SSL Labs rating of at least "A" for any external website used to store or access Client's data.</td></tr>
                      <tr className="border-b border-gray-800"><td className="py-2">18.2.1 a</td><td className="py-2">The Contractor shall provide support for compliance of external and internal audits that Client is subject to from time to time. All occurrences of technical audits (i.e. vulnerability and penetration testing of infrastructure and applications in scope) are subject to a joint assessment led by the Client.</td></tr>
                      <tr><td className="py-2">18.2.1 b</td><td className="py-2">Information systems shall be regularly reviewed for compliance with the organization's information security policies and standards.</td></tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-4">Specific Measures</h3>
                
                <h4 className="font-display text-base font-bold text-white mb-2">Data Accuracy</h4>
                <p className="text-gray-400 mb-4">To ensure that data is accurate and correct at all times, three main measures have been put in place to achieve the highest possible integrity.</p>
                <ol className="space-y-2 text-gray-400 list-decimal list-inside mb-6">
                  <li>The Client must ensure to capture and manage any and all errors from FalconDive integration API. Every transmission must be verified as received by FalconDive with an OK.</li>
                  <li>Client shall assume that upon receiving such verification through an OK, FalconDive is responsible to ensure that this data is processed and reflected in the FalconDive platform.</li>
                  <li>For avoidance of doubt, Client is responsible to provision the necessary monitoring to manage any failures in transmission of data, as well as any supplementary remedy of the failed data transmission. FalconDive is responsible for provisioning the necessary monitoring to manage any failures in the processing of such data inside FalconDive platform. FalconDive will provide a dashboard providing transparency of data recon and any related issue to Client that is updated after the refresh takes place.</li>
                </ol>

                <h4 className="font-display text-base font-bold text-white mb-2">Data Access and Data Security</h4>
                <ul className="space-y-2 text-gray-400 list-disc list-inside mb-4">
                  <li>Historical transactional data, or specific data corrections of data points of non-sensitive nature (anything but contact details) may in some cases not be available in API and must then be transferred in bulk. In such a case, the file including such transactions will be transferred securely using FTP (SFTP). Such files will be destroyed immediately after being processed in FalconDive's systems.</li>
                </ul>

                <h4 className="font-display text-base font-bold text-white mb-2">API Security</h4>
                <ul className="space-y-2 text-gray-400 list-disc list-inside mb-4">
                  <li>Client will provide FalconDive with an API key. This key is required when using the API.</li>
                  <li>All communication should be made over an encrypted channel using https.</li>
                  <li>Whitelisting of specific IPs used by FalconDive platform to access the Client's API.</li>
                </ul>

                <h4 className="font-display text-base font-bold text-white mb-2">Encryption of User Data</h4>
                <ul className="space-y-2 text-gray-400 list-disc list-inside mb-4">
                  <li>Outside of whatever encryption FalconDive platform already provides, the Client may suggest further encryption of fields or customer data and FalconDive may propose a solution to support this within a reasonable timeframe.</li>
                </ul>

                <h4 className="font-display text-base font-bold text-white mb-2">Penetration Testing / System Audit</h4>
                <ul className="space-y-2 text-gray-400 list-disc list-inside mb-4">
                  <li>FalconDive has not undergone or scheduled any penetration testing to date.</li>
                  <li>The Client can, at its own discretion, organize potential penetration testing to audit the system. FalconDive will in that case provide relevant resources to support such tests. The Client should give 14 days' notice before such a test takes place in order for FalconDive to ensure that it has sufficient resources available.</li>
                  <li>FalconDive shall address any critical issues that might arise out of such a test.</li>
                </ul>

                <h4 className="font-display text-base font-bold text-white mb-2">Access to Environments</h4>
                <ul className="space-y-2 text-gray-400 list-disc list-inside mb-4">
                  <li>FalconDive should have total control and relevant access rights to the environment to keep FalconDive platform operational at all times. With that said, both Parties should regularly review and ensure that minimal required access is provided.</li>
                </ul>

                <h4 className="font-display text-base font-bold text-white mb-2">Environments</h4>
                <ul className="space-y-2 text-gray-400 list-disc list-inside">
                  <li>AWS Environment may be provided by the Client and administered by FalconDive.</li>
                </ul>
              </div>

              {/* Contact */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-[#00f0ff] mb-4">Contact Us</h2>
                <p className="text-gray-400 mb-4">For questions regarding this Data Processing Agreement, contact us at:</p>
                <div className="bg-[#1a1a24] border border-gray-800 p-6 rounded-xl">
                  <p className="text-gray-400"><span className="text-gray-500">Email:</span> <a href="mailto:info@falcondive.io" className="text-[#00f0ff] hover:underline">info@falcondive.io</a></p>
                  <p className="text-gray-400"><span className="text-gray-500">Phone:</span> (+91) 4048960174</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DataProcessingAgreement;
