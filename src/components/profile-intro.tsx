import React from 'react'

const ProfileIntro = () => (
  <div className="flex flex-col items-center">
    <h2 className="text-3xl font-bold text-center">
      Crafting Next.Js Apps that empowers teams and boosts productivity.
    </h2>
    <p className="mt-4 text-center">
      Joseph Ngigi, a passionate front-end developer, specializes in building
      intuitive Web-Applications. I love seeing how the right software can streamline workflows and make
      businesses thrive. From secure authentication systems to data visualizations,
      I'm excited to tackle any SaaS challenge.
    </p>
    <a
      href="https://yourportfolio.com"
      className="mt-4 inline-block px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
    >
      Let's build something amazing together!
    </a>
  </div>
)

export default ProfileIntro
