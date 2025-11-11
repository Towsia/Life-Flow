import React from 'react';
import campaign from "../assets/campaign.jpg";


const Campaign = () => {
  return (
    <div>
  <section className="bg-[#ECFDF5] py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-center mb-12">
        About the Campaign🩸
      </h2>

      {/* Flex Container for Image + Text */}
      <div className="flex container mx-auto gap-8 justify-between items-center ">
        {/* Image Section */}
        
        <img
          src={campaign}
          alt="About the Campaign"
          className="rounded-2xl w-full max-w-md shadow-soft h-90 "
        />
        
        {/* Text Section */}
        <div className="text-slate-600">
          <p className="mb-4">
            Our Blood Donation Campaign is a community-driven initiative aimed at saving lives through the simple yet powerful act of donating blood. Every drop counts — and your contribution can make the difference between life and death for patients in urgent need. We organize regular donation drives, awareness programs, and collaborations with hospitals to ensure a safe and steady blood supply. Through this campaign, we seek to inspire compassion, promote voluntary blood donation, and create a culture of care where everyone plays a role in giving others a second chance at life.
          </p>

          <ul className="list-none list-inside space-y-2">
            <li>🤝 Community Involvement: Encourage volunteers, students, and organizations to take part.</li>
            <li>❤️ Raise Awareness: Educate communities about the importance of regular blood donation.</li>
            <li>🏥 Safe & Secure Process: All donations are collected following strict medical safety standards.</li>
            <li>🌍 Promote Humanity: Spreading kindness, compassion, and unity through giving.</li>
            <li>📣 Join the Movement: Become a donor, volunteer, or ambassador for the cause.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</div>

  );
};

export default Campaign;