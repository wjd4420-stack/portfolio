/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Mail, 
  Music, 
  Mic2, 
  Film, 
  Theater, 
  Cpu, 
  ChevronRight,
  Instagram,
  ArrowUpRight,
  X
} from "lucide-react";

const SECTION_ANIMATION = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function App() {
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);

  return (
    <div className="min-h-screen selection:bg-black selection:text-white">
      <AnimatePresence>
        {isQRModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsQRModalOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white p-8 rounded-[3rem] max-w-sm w-full relative card-shadow"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsQRModalOpen(false)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all"
              >
                <X size={20} />
              </button>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-6">Instagram QR</h3>
                <div className="aspect-square bg-white rounded-3xl overflow-hidden mb-6 relative flex items-center justify-center border border-black/5">
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://www.instagram.com/lo.jaysh_mallow.ver" 
                    alt="Instagram QR Code" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-black/5">
                    <Instagram size={24} className="text-black" />
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-2xl font-bold tracking-tight text-black/80">LO.JAYSH_MALLOW.VER</p>
                  <p className="text-black/30 text-xs font-medium uppercase tracking-[0.2em] mt-2">@lo.jaysh_mallow.ver</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5F5F0]/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tighter">jaysh_mallow</div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="hover:opacity-60 transition-opacity">About</a>
            <a href="#film" className="hover:opacity-60 transition-opacity">Film</a>
            <a href="#theatre" className="hover:opacity-60 transition-opacity">Theatre</a>
            <a href="#skills" className="hover:opacity-60 transition-opacity">Skills</a>
            <a href="#contact" className="bg-black text-white px-5 py-2.5 rounded-full hover:bg-black/80 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="px-6 py-24 md:py-40 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-3 py-1 bg-black/5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
                Portfolio 2026
              </div>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
                정연성 <br />
                <span className="italic font-light text-black/40">jaysh_mallow</span>
              </h1>
              <p className="text-xl md:text-2xl text-black/60 max-w-md leading-relaxed mb-10">
                Film Music Composer & <br />
                Sound Director
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#film" className="bg-black text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:scale-105 transition-transform">
                  View Projects <ChevronRight size={18} />
                </a>
                <a href="#contact" className="border border-black/10 px-8 py-4 rounded-full font-medium hover:bg-black/5 transition-colors">
                  Get in touch
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-[4/5] bg-zinc-200 rounded-[3rem] overflow-hidden group"
            >
              <img 
                src="https://picsum.photos/seed/composer/800/1000" 
                alt="Jung Yeon-seong" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-12">
                <p className="text-white text-lg font-medium italic">
                  "무대의 공기를 채우는 소리, 영상의 서사를 완성하는 선율"
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Quote Section */}
        <section id="about" className="bg-white py-32">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div {...SECTION_ANIMATION}>
              <div className="flex justify-center mb-12">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white">
                  <Mic2 size={32} />
                </div>
              </div>
              <h2 className="text-3xl md:text-5xl font-medium leading-tight mb-12">
                음향감독으로서 현장의 감동을 전달하고, <br />
                작곡가 <span className="italic">jaysh_mallow</span>로서 작품의 색깔을 정의합니다.
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="p-8 bg-[#F5F5F0] rounded-3xl">
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-4 opacity-40">Contact & Info</h3>
                  <ul className="space-y-3 text-lg">
                    <li><span className="font-semibold">Name:</span> 정연성 (Jung Yeon-seong)</li>
                    <li><span className="font-semibold">Activity Name:</span> jaysh_mallow</li>
                    <li><span className="font-semibold">Email:</span> <a href="mailto:dustjddl123@naver.com" className="hover:underline">dustjddl123@naver.com</a></li>
                  </ul>
                </div>
                <div className="p-8 bg-[#F5F5F0] rounded-3xl">
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-4 opacity-40">Expertise</h3>
                  <p className="text-lg leading-relaxed">
                    미디어 음악(영화, 드라마, BGM),게임음악,대중음악(Hip Hop,R&B,K-POP) 등 작곡, 연극 음악감독, 음향감독 및 오퍼레이팅
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Film & Media Music */}
        <section id="film" className="py-32 px-6 max-w-7xl mx-auto">
          <motion.div {...SECTION_ANIMATION} className="mb-20">
            <div className="flex items-center gap-4 mb-4">
              <Film className="opacity-40" />
              <span className="text-sm font-bold uppercase tracking-widest opacity-40">Film & Media Music</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
              Scoring the <span className="italic font-light">Narrative</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <ProjectCard 
              title="방울토마토 재배키트"
              category="Film"
              role="트랙 1~8번, 10번 작곡 참여"
              link="https://youtu.be/BCX89-fb2_0?si=uaMf5hHD5C3tY29R"
              image="https://raw.githubusercontent.com/wjd4420-stack/portfolio/304d7ef138eec0764a4b33d535299e178a4dc8dd/Still%202026-03-06%20230934_1.1.1.jpg"
            />
            <ProjectCard 
              title="2024 대진대학교 제23회 DCP 졸업영화제 : 비상"
              category="Trailer (N°23 Santa)"
              role="전곡 작곡 참여"
              link="https://youtu.be/CHcoRhZcWoc?si=Vk7z0S7KygMuCoxG"
              image="https://raw.githubusercontent.com/wjd4420-stack/portfolio/304d7ef138eec0764a4b33d535299e178a4dc8dd/%E1%84%89%E1%85%A1%E1%86%AB%E1%84%90%E1%85%A1_%E1%84%8F%E1%85%B3%E1%84%85%E1%85%A6%E1%84%83%E1%85%B5%E1%86%BA.png"
            />
          </div>
        </section>

        {/* Theatre & Musical */}
        <section id="theatre" className="bg-black text-white py-32">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...SECTION_ANIMATION} className="mb-20">
              <div className="flex items-center gap-4 mb-4">
                <Theater className="opacity-40" />
                <span className="text-sm font-bold uppercase tracking-widest opacity-40">Theatre & Musical</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
                Sound <span className="italic font-light">Architecture</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-2xl font-bold mb-8 border-b border-white/10 pb-4">Sound Director</h3>
                <ul className="space-y-6">
                  <ExperienceItem title="연극 [안티고네]" subtitle="옥천연극제 초청작" />
                  <ExperienceItem title="낭독극 [우리시대의 고도]" subtitle="" />
                  <ExperienceItem title="제 35회 대한민국 신춘문예 페스티벌" subtitle="sound assistant director" />
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-8 border-b border-white/10 pb-4">Sound Operating</h3>
                <ul className="space-y-6">
                  <ExperienceItem title="뮤지컬 [여보세요?]" subtitle="" />
                  <ExperienceItem title="연극 [스쁘라브카 - 열람]" subtitle="" />
                  <ExperienceItem title="연극 [안티고네]" subtitle="대한민국 서울 연극제 도봉지부" />
                  <ExperienceItem title="연극 [인형의 가]" subtitle="" />
                  <ExperienceItem title="연극 [달 우물이 있는 마을 월정리]" subtitle="" />
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section id="skills" className="py-32 px-6 max-w-7xl mx-auto">
          <motion.div {...SECTION_ANIMATION} className="mb-20">
            <div className="flex items-center gap-4 mb-4">
              <Cpu className="opacity-40" />
              <span className="text-sm font-bold uppercase tracking-widest opacity-40">Technical Skills</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
              Crafting the <span className="italic font-light">Sound</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <SkillCard 
              icon={<Music />}
              title="DAW"
              description="Cubase (Main)"
            />
            <SkillCard 
              icon={<Mic2 />}
              title="Hardware"
              description="RME Fireface UFX 2 기반 고음질 레코딩 및 믹싱"
            />
            <SkillCard 
              icon={<Music />}
              title="Instruments"
              description="건반, 신시사이저 및 가상악기를 활용한 오케스트레이션/케이팝, 힙합, 필름, 미디어 뮤직 사운드 메이킹"
            />
          </div>
        </section>

        {/* About Me Detailed */}
        <section id="contact" className="bg-white py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div {...SECTION_ANIMATION}>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 italic">About Me</h2>
                <div className="space-y-8 text-xl text-black/70 leading-relaxed">
                  <p>
                    <span className="text-black font-bold">현장 중심의 감각:</span> 다양한 연극 오퍼레이팅과 음향감독 경험을 통해 관객에게 소리가 전달되는 메커니즘을 정확히 이해하고 있습니다.
                  </p>
                  <p>
                    <span className="text-black font-bold">하이브리드 아티스트:</span> 기술적인 음향(Sound)과 예술적인 작곡(Music)의 경계를 자유롭게 넘나들며 프로젝트에 최적화된 결과물을 만들어냅니다.
                  </p>
                </div>
              </motion.div>
              <motion.div 
                {...SECTION_ANIMATION}
                className="bg-[#F5F5F0] p-12 rounded-[3rem]"
              >
                <p className="text-4xl md:text-5xl font-medium leading-tight mb-8 font-pen">
                  "음악은 우주에 영혼을 주고, 마음에 날개를 달아주며, <br />
                  상상력에 비상을 선물하고, 모든것에 생명을 불어넣습니다."
                </p>
                <div className="flex gap-4">
                  <button 
                    onClick={() => setIsQRModalOpen(true)}
                    className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer"
                  >
                    <Instagram size={20} />
                  </button>
                  <a href="mailto:dustjddl123@naver.com" className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                    <Mail size={20} />
                  </a>
                  <a href="https://soundcloud.com/fr8i1onrhbis?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                    <CDIcon size={24} />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-20 border-t border-black/5">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-2xl font-bold tracking-tighter">jaysh_mallow</div>
            <div className="text-sm text-black/40">
              Copyright © 2026 Jung Yeon-seong. All rights reserved.
            </div>
            <div className="flex gap-8 text-sm font-medium">
              <a href="mailto:dustjddl123@naver.com" className="hover:opacity-60 transition-opacity">Email</a>
              <button 
                onClick={() => setIsQRModalOpen(true)}
                className="hover:opacity-60 transition-opacity cursor-pointer"
              >
                Instagram
              </button>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

function ProjectCard({ title, category, role, link, image }: { title: string, category: string, role: string, link: string, image: string }) {
  return (
    <motion.a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -10 }}
      className="group cursor-pointer block"
    >
      <div className="aspect-video bg-zinc-200 rounded-3xl overflow-hidden mb-6 relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-6 right-6">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight size={20} />
          </div>
        </div>
      </div>
      <div className="px-2">
        <div className="text-xs font-bold uppercase tracking-widest opacity-40 mb-2">{category}</div>
        <h3 className="text-2xl font-bold mb-2 group-hover:underline underline-offset-4">{title}</h3>
        <p className="text-black/60">{role}</p>
      </div>
    </motion.a>
  );
}

function ExperienceItem({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <li className="group">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="text-xl font-medium group-hover:text-white/60 transition-colors">{title}</h4>
          {subtitle && <p className="text-sm text-white/40 mt-1">{subtitle}</p>}
        </div>
      </div>
    </li>
  );
}

function SkillCard({ icon, title, description }: { icon: ReactNode, title: string, description: string }) {
  return (
    <div className="p-10 bg-white rounded-[2.5rem] card-shadow hover:scale-[1.02] transition-transform">
      <div className="w-12 h-12 bg-[#F5F5F0] rounded-2xl flex items-center justify-center mb-8">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-black/60 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function CDIcon({ size = 24 }: { size?: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 512 512" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 472c-119.1 0-216-96.9-216-216S136.9 40 256 40s216 96.9 216 216-96.9 216-216 216z"/>
      <path d="M256 160c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 160c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z"/>
      <path d="M256 224c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"/>
      <path d="M352 112c30.5 30.5 48 71.5 48 112 0 11-9 20-20 20s-20-9-20-20c0-30.1-12.9-59.9-36.4-83.4-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.4-.3z"/>
      <path d="M160 400c-30.5-30.5-48-71.5-48-112 0-11 9-20 20-20s20 9 20 20c0 30.1 12.9 59.9 36.4 83.4 7.8 7.8 7.8 20.5 0 28.3s-20.5 7.8-28.4.3z"/>
    </svg>
  );
}
