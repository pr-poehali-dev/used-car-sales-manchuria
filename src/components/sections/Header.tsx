import { Button } from '@/components/ui/button';

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Header = ({ activeSection, onSectionChange }: HeaderProps) => {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            AC
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            АВТО-КИТАЙ.РУ
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-1">
          {[
            { id: 'hero', label: 'Главная' },
            { id: 'catalog', label: 'Каталог' },
            { id: 'about', label: 'О нас' },
            { id: 'testimonials', label: 'Отзывы' },
            { id: 'contact', label: 'Контакты' },
          ].map((item) => (
            <Button
              key={item.id}
              variant={activeSection === item.id ? 'default' : 'ghost'}
              onClick={() => onSectionChange(item.id)}
              className="transition-all"
            >
              {item.label}
            </Button>
          ))}
          <a
            href="tel:+79144348577"
            className="ml-4 text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1"
          >
            📞 +7 (914) 434-85-77
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;