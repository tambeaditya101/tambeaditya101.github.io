import { useEffect, useState } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { FaCodeBranch, FaEye, FaGithub } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const Github = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { isDarkMode, colors } = useTheme();
  const currentColors = isDarkMode ? colors.dark : colors.light;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('github');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id='github'
      className={`py-20 px-4 bg-gradient-to-br ${currentColors.primary} relative overflow-hidden transition-all duration-500`}
    >
      {/* Animated background elements */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-20 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-500 rounded-full blur-3xl animate-pulse delay-500'></div>
      </div>

      <div className='max-w-7xl mx-auto relative z-10'>
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className='flex items-center justify-center mb-4'>
            <FaGithub className='text-5xl text-purple-400 mr-4 animate-bounce' />
            <h2 className='text-4xl md:text-5xl font-bold text-white'>
              GitHub{' '}
              <span className='text-purple-400 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
                Statistics
              </span>
            </h2>
          </div>
          <p className='text-gray-300 text-lg max-w-2xl mx-auto'>
            My coding journey visualized through contributions and activity
          </p>
        </div>

        {/* GitHub Stats Cards */}
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-12'>
          <div
            className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 transition-all duration-1000 delay-200 hover:bg-white/10 hover:border-purple-400/30 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:scale-105 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className='text-xl font-semibold text-white mb-4 text-center'>
              GitHub Stats
            </h3>
            <img
              className='w-full h-auto rounded-lg'
              id='github-stats-card'
              src='https://github-readme-stats.vercel.app/api?username=tambeaditya101&count_private=true&theme=radical&hide_border=true&bg_color=0D1117'
              alt='GitHub Stats'
            />
          </div>

          <div
            className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 transition-all duration-1000 delay-400 hover:bg-white/10 hover:border-purple-400/30 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:scale-105 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className='text-xl font-semibold text-white mb-4 text-center'>
              Top Languages
            </h3>
            <img
              className='w-full h-auto rounded-lg'
              id='github-top-langs'
              src='https://github-readme-stats.vercel.app/api/top-langs/?username=tambeaditya101&theme=radical&hide_border=true&bg_color=0D1117&layout=compact'
              alt='Top Languages'
            />
          </div>

          <div
            className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 transition-all duration-1000 delay-600 hover:bg-white/10 hover:border-purple-400/30 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:scale-105 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            } lg:col-span-1 md:col-span-2 lg:col-span-1`}
          >
            <h3 className='text-xl font-semibold text-white mb-4 text-center'>
              Streak Stats
            </h3>
            <img
              className='w-full h-auto rounded-lg'
              id='github-streak-stats'
              src='https://github-readme-streak-stats.herokuapp.com?user=tambeaditya101&theme=radical&hide_border=true&background=0D1117'
              alt='GitHub Streak'
            />
          </div>
        </div>

        {/* Profile Views Counter */}
        <div
          className={`text-center mb-12 transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className='inline-flex items-center bg-white/5 backdrop-blur-lg rounded-full px-6 py-3 border border-white/10 hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300'>
            <FaEye className='text-purple-400 mr-2' />
            <img
              src='https://komarev.com/ghpvc/?username=tambeaditya101&color=blueviolet&style=flat-square'
              alt='Profile Views'
              className='h-5'
            />
          </div>
        </div>

        {/* GitHub Calendar */}
        <div
          className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-12 transition-all duration-1000 delay-1000 hover:bg-white/10 hover:border-purple-400/30 hover:shadow-2xl hover:shadow-purple-500/20 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className='text-center mb-6'>
            <h3 className='text-2xl font-semibold text-white mb-2'>
              Contribution Graph
            </h3>
            <p className='text-gray-400'>
              My daily coding activity over the past year
            </p>
          </div>
          <div className='overflow-x-auto flex justify-center'>
            <GitHubCalendar
              username='tambeaditya101'
              colorScheme='dark'
              fontSize={14}
              blockSize={12}
              blockMargin={4}
              theme={{
                dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
              }}
            />
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`text-center transition-all duration-1000 delay-1200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a
            href='https://github.com/tambeaditya101'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 group'
          >
            <FaGithub className='mr-3 text-xl group-hover:rotate-12 transition-transform duration-300' />
            View My GitHub Profile
            <FaCodeBranch className='ml-3 text-lg group-hover:translate-x-1 transition-transform duration-300' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Github;
