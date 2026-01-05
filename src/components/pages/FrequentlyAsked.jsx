import React, { useState } from 'react';

const faqData = {
  generalTechnical: {
    title: "General & Technical", questions: [ { question: "What do I need for online therapy?", answer: "You need a reliable internet connection, a webcam-enabled computer or tablet, and a quiet, distraction-free space for sessions." }, { question: "How long is a typical session?", answer: "Standard sessions usually range from 30 to 60 minutes, depending on the client's age, specific needs, and individualized therapy plan." }, { question: "How can I get the most benefit?", answer: "Actively participate, listen carefully to the therapist's advice, and follow through with recommended home activities/strategies between sessions." }, { question: "What if technical issues arise?", answer: "Standard sessions usually range from 30 to 60 minutes, depending on the client's age, specific needs, and individualized therapy plan." }, { question: "How long is a typical session?", answer: "We have protocols to ensure uninterrupted care, such as rescheduling the session or switching to alternative means of communication if ongoing issues occur." }, { question: "How is online therapy different from face-to-face?", answer: "Online therapy is generally more convenient and accessible, allowing you to be treated from home. While some hands-on physical interactions may be limited, effectiveness is high and depends on consistent participation and the nature of the intervention." }, { question: "How are therapy goals set?", answer: "Goals are established based on an initial evaluation and are adjusted through ongoing progress check-ups to ensure they meet the individual's evolving needs." } ] }, occupationalTherapy: { title: "Occupational Therapy (OT)", questions: [ { question: "What is online occupational therapy (OT)?", answer: "Online OT is a therapeutic intervention delivered digitally, allowing clients to access services from home to enhance their capability to carry out daily activities." }, { question: "Who is eligible for online OT?", answer: "Individuals of any age with physical, sensory, or cognitive impairment can benefit to improve daily function, fine motor, and sensory processing skills." }, { question: "Can online OT assist with sensory integration?", answer: "Our online OT therapists are licensed health professionals who have completed the same education and licensing as in-person practitioners." }, { question: "What are the credentials of online OT therapists?", answer: "Standard sessions usually range from 30 to 60 minutes, depending on the client's age, specific needs and individualized therapy plan." } ] }, behaviouralTherapy: { title: "Behavioural Therapy", questions: [ { question: "What is online behavioural therapy?", answer: "It is a structured, evidence-based approach delivered via digital platforms to help individuals manage behaviors, emotions, and everyday challenges." }, { question: "Who can benefit?", answer: "Children, teenagers, and adults facing issues like stress, anxiety, attention difficulties like ADHD, emotional regulation challenges or specific behavioral concerns." }, { question: "Can online behavioural therapy help with anger or social skills?", answer: "Yes, our therapists provide structured guidance, coping techniques, and activities to manage emotions, control anger, and build healthy social skills." } ] }, speechCommunication: { title: "Speech & Communication Therapies", questions: [ { question: "What is online speech therapy?", answer: "Professional speech and language intervention delivered through secure video sessions to help individuals improve their communication skills from home." }, { question: "Who can benefit from online speech therapy?", answer: "Individuals with speech delays, adults with stuttering or stammering, those recovering from stroke, or anyone facing communication/articulation difficulties." }, { question: "Can online speech therapy help with stuttering and pronunciation?", answer: "Yes, therapists provide targeted exercises and strategies to improve fluency, articulation, and communication confidence." }, { question: "Can parents support speech therapy at home?", answer: "Absolutely. Therapists share activities and strategies for parents to practice with children outside of sessions to reinforce progress." } ] }, specialEducation: { title: "Special & Developmental Education", questions: [ { question: "What is online special education?", answer: "A structured learning program delivered digitally, designed to support children with learning disabilities (e.g., dyslexia, dyscalculia) or developmental challenges." }, { question: "How is online special education different from traditional schooling?", answer: "It offers one-on-one attention, customized learning plans, and a flexible pace tailored specifically to the child's unique needs unlike regular classrooms." }, { question: "What is developmental therapy?", answer: "Therapy that uses a holistic, play-based approach to support physical, social, emotional, and cognitive growth in children during the critical years of birth to 5." }, { question: "Why is early intervention important?", answer: "The first five years are critical for brain development. Early support helps children build strong foundations for lifelong learning and social success." }, { question: "How do I know if my child needs developmental therapy?", answer: "If your child shows delays in speech, motor skills, learning, or social interaction compared to peers, an assessment can help identify specific needs." }
    ]
  }
};

const FAQPreview = () => {
  const [showFullFAQ, setShowFullFAQ] = useState(false);

  if (showFullFAQ) {
    return <FullFAQPage onBack={() => setShowFullFAQ(false)} />;
  }

  const questions = faqData.generalTechnical.questions;

  return (
    <div className="min-h-screen bg-background">
      <div className="container-custom py-12">
        <div className="text-center mb-12 mt-16">
          <h1 className="font-autumn text-4xl md:text-5xl lg:text-6xl mb-4">
            <span className="text-primary-color">Frequently </span>
            <span className="text-secondary-color italic">Asked</span>
            <span className="text-primary-color"> Questions</span>
          </h1>
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="font-urbanist text-secondary-color text-center text-base font-medium mb-8">
            General & Technical
          </h2>

          <div className="space-y-6">
            {questions.slice(0, 3).map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-urbanist text-primary-color font-bold text-base mb-2">
                  {faq.question}
                </h3>
                <p className="font-urbanist text-primary-color/80 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="relative mt-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm max-h-[120px] overflow-hidden">
              <h3 className="font-urbanist text-primary-color font-bold text-base mb-2">
                {questions[3].question}
              </h3>
              <p className="font-urbanist text-primary-color/80 text-sm leading-relaxed">
                {questions[3].answer}
              </p>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background via-background/80 to-transparent rounded-b-2xl" />

            <div className="absolute inset-0 flex items-end justify-center pb-6">
              <button
                onClick={() => setShowFullFAQ(true)}
                className="bg-button-main text-primary-color font-urbanist font-bold px-6 py-2.5 rounded-full shadow-lg hover:opacity-90 transition"
              >
                View Full FAQ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FullFAQPage = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container-custom py-12">
        <div className="text-center mb-12 mt-16">
          <h1 className="font-autumn text-4xl md:text-5xl lg:text-6xl mb-4">
            <span className="text-primary-color">Frequently </span>
            <span className="text-secondary-color italic">Asked</span>
            <span className="text-primary-color"> Questions</span>
          </h1>
        </div>

        <div className="max-w-3xl mx-auto space-y-12">
          {Object.values(faqData).map((category, index) => (
            <div key={index}>
              <h2 className="font-urbanist text-secondary-color text-center text-base font-medium mb-8">
                {category.title}
              </h2>

              <div className="space-y-6">
                {category.questions.map((faq, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                    <h3 className="font-urbanist text-primary-color font-bold text-base mb-2">
                      {faq.question}
                    </h3>
                    <p className="font-urbanist text-primary-color/80 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={onBack}
            className="bg-secondary-color text-white font-urbanist font-semibold px-8 py-3 rounded-full hover:opacity-90 transition"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

const FrequentlyAsked = () => <FAQPreview />;

export default FrequentlyAsked;
