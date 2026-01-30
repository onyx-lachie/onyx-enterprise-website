export default function SocialProofTicker() {
  const testimonials = [
    "🎯 Trevor F. went from \"I don't believe in CRMs\" to consistent $80k months",
    "📅 Damon R. booked 30+ appointments in his first month",
    "💰 Mike T. recovered $18k from leads he thought were dead",
    "⚡ Sarah K. was booking AI appointments within 48 hours",
    "📈 James W. doubled his contact rate in the first week",
    "🔥 Lisa M. finally got her book of business organized",
    "💬 David R. cut his follow-up time from 3 hours to 20 minutes",
    "🏆 Chris P. closed $45k in his second month using Onyx",
    "📊 Amanda H. went from 5 to 18 appointments per week",
    "✅ Robert N. said \"I actually enjoy prospecting now\"",
    "🚀 Maria S. scaled to 3 agents using Onyx workflows",
    "💵 Kevin B. added $12k/month from database reactivation alone",
    "📱 Jennifer L. books appointments even while on vacation",
    "🎉 Marcus D. hit his first $100k month with Onyx",
    "⭐ Patricia W. gave up spreadsheets forever after day one"
  ];

  return (
    <div className="w-full bg-[#F0FDF9] border-t border-b border-[#E6FFF8] py-4 overflow-hidden">
      <div className="ticker-wrapper">
        <div className="ticker-content">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <span key={index} className="ticker-item text-[15px] font-medium text-[#4A5568] whitespace-nowrap">
              {testimonial}
              <span className="mx-4 text-[#9CA3AF]">•</span>
            </span>
          ))}
        </div>
      </div>
      <style>{`
        .ticker-wrapper {
          width: 100%;
          overflow: hidden;
        }

        .ticker-content {
          display: flex;
          animation: scroll 40s linear infinite;
          will-change: transform;
        }

        .ticker-content:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .ticker-item {
          display: inline-flex;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
