import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  onConsultationOpen: () => void;
  onScrollToCatalog: () => void;
}

const HeroSection = ({ onConsultationOpen, onScrollToCatalog }: HeroSectionProps) => {
  return (
    <section
      id="hero"
      className="pt-24 pb-16 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-50"
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium text-sm mb-4">
            🚗 Эксклюзивные автомобили из Китая
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent leading-tight">
            Премиальные автомобили из Китая с доставкой под ключ
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Помогаем выбрать и доставить автомобиль вашей мечты. Виртуальный
            осмотр, полное сопровождение сделки и гарантия качества.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={onConsultationOpen}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Получить консультацию
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={onScrollToCatalog}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg"
            >
              <Icon name="Car" className="mr-2" size={20} />
              Смотреть каталог
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
