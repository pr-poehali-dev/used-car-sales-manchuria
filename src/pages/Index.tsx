import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import CarCatalog from '@/components/sections/CarCatalog';
import AboutAndTestimonials from '@/components/sections/AboutAndTestimonials';

const Index = () => {
  const [activeSection, setActiveSection] = useState('catalog');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setIsFormOpen(false);
    setFormData({ name: '', phone: '', message: '' });
  };

  const cars = [
    {
      id: 1,
      brand: 'Toyota Camry',
      year: 2021,
      mileage: '45 000 км',
      images: [
        'https://cdn.poehali.dev/projects/deafa282-ebc6-456a-9f07-ca01ef777b28/files/334b0cd8-748d-4681-9320-9df55590890e.jpg',
      ],
      features: ['Автомат', 'Полный привод', 'Кожаный салон'],
    },
    {
      id: 2,
      brand: 'Honda CR-V',
      year: 2022,
      mileage: '28 000 км',
      images: [
        'https://cdn.poehali.dev/projects/deafa282-ebc6-456a-9f07-ca01ef777b28/files/e8d209d0-56ca-4280-a2aa-a44dade0ab84.jpg',
      ],
      features: ['Гибрид', 'Панорама', 'Камера 360°'],
    },
    {
      id: 3,
      brand: 'BMW X5',
      year: 2023,
      mileage: '15 000 км',
      images: [
        'https://cdn.poehali.dev/projects/deafa282-ebc6-456a-9f07-ca01ef777b28/files/659c467d-1fb3-4073-a738-7e1e026c46cf.jpg',
      ],
      features: ['Премиум', 'Полный привод', 'Адаптивный круиз'],
    },
    {
      id: 4,
      brand: 'Mercedes-Benz E-Class',
      year: 2022,
      mileage: '22 000 км',
      images: [
        'https://cdn.poehali.dev/projects/deafa282-ebc6-456a-9f07-ca01ef777b28/files/bcfb7756-a8b9-4b22-9b78-8492aacce68f.jpg',
      ],
      features: ['Бизнес-класс', 'Автопилот', 'Массаж сидений'],
    },
    {
      id: 5,
      brand: 'Hyundai Tucson',
      year: 2023,
      mileage: '8 000 км',
      images: [
        'https://cdn.poehali.dev/projects/deafa282-ebc6-456a-9f07-ca01ef777b28/files/1548b581-aeed-457b-b7a0-94aff32abb54.jpg',
      ],
      features: ['Новинка', 'Экономичный', 'Подогрев руля'],
    },
    {
      id: 6,
      brand: 'Volkswagen Tiguan',
      year: 2021,
      mileage: '38 000 км',
      images: [
        'https://cdn.poehali.dev/projects/deafa282-ebc6-456a-9f07-ca01ef777b28/files/c0b67090-d12a-44c0-b23b-954d87b0eb76.jpg',
      ],
      features: ['Турбо', 'AWD', 'Панорамная крыша'],
    },
    {
      id: 7,
      brand: 'Chery Tiggo 8 Pro',
      year: 2023,
      mileage: '12 000 км',
      images: [
        'https://cdn.poehali.dev/projects/deafa282-ebc6-456a-9f07-ca01ef777b28/files/c7c320c7-612d-465b-9c7d-2d9bc3c6e423.jpg',
      ],
      features: ['7 мест', 'Турбо', 'Мультимедиа'],
    },
    {
      id: 8,
      brand: 'Geely Coolray',
      year: 2023,
      mileage: '8 000 км',
      images: [
        'https://cdn.poehali.dev/projects/deafa282-ebc6-456a-9f07-ca01ef777b28/files/22b854d8-7ef1-4402-b6e8-bdac60f5419a.jpg',
      ],
      features: ['Спорт', 'Экономичный', 'Умный салон'],
    },
    {
      id: 9,
      brand: 'Haval Jolion',
      year: 2023,
      mileage: '5 000 км',
      images: [
        'https://cdn.poehali.dev/projects/deafa282-ebc6-456a-9f07-ca01ef777b28/files/9a159f1f-5b1e-440d-86c9-f040b25efc51.jpg',
      ],
      features: ['Гибрид', 'Компактный', 'Круиз-контроль'],
    },
    {
      id: 10,
      brand: 'BYD Song Plus',
      year: 2023,
      mileage: '3 000 км',
      images: [
        'https://cdn.poehali.dev/projects/deafa282-ebc6-456a-9f07-ca01ef777b28/files/f1284abb-6feb-47dc-be56-cb5cfabac8f9.jpg',
      ],
      features: ['Электро', 'Батарея 500 км', 'Премиум'],
    },
    {
      id: 11,
      brand: 'Changan CS75 Plus',
      year: 2023,
      mileage: '10 000 км',
      images: [
        'https://cdn.poehali.dev/projects/deafa282-ebc6-456a-9f07-ca01ef777b28/files/5f86c9e4-969c-41f1-83a6-ff377a02a21d.jpg',
      ],
      features: ['AWD', 'Турбо 2.0', 'Кожа+Алькантара'],
    },
    {
      id: 12,
      brand: 'Li Auto L9',
      year: 2023,
      mileage: '6 000 км',
      images: [
        'https://cdn.poehali.dev/projects/deafa282-ebc6-456a-9f07-ca01ef777b28/files/269ca5f9-4c3b-4348-a4b6-14ef5eeaca12.jpg',
      ],
      features: ['Гибрид', '6 мест', 'Умный дом на колёсах'],
    },
    {
      id: 13,
      brand: 'Xiaomi SU7',
      year: 2024,
      mileage: '2 000 км',
      images: [
        'https://cdn.poehali.dev/projects/deafa282-ebc6-456a-9f07-ca01ef777b28/files/4a769df3-c7cc-45cf-926b-011a3bc6085f.jpg',
      ],
      features: ['Электро', 'Спортседан', 'Автопилот'],
    },
    {
      id: 14,
      brand: 'Zeekr 001',
      year: 2023,
      mileage: '4 000 км',
      images: [
        'https://cdn.poehali.dev/projects/deafa282-ebc6-456a-9f07-ca01ef777b28/files/a75f7f09-05f4-47a9-b3da-c01ff6e9d8d5.jpg',
      ],
      features: ['Электро', 'Премиум', 'Быстрая зарядка'],
    },
    {
      id: 15,
      brand: 'Tank 300',
      year: 2023,
      mileage: '9 000 км',
      images: [
        'https://cdn.poehali.dev/projects/deafa282-ebc6-456a-9f07-ca01ef777b28/files/b338a7a7-c678-4750-a8c2-c217aeda2c25.jpg',
      ],
      features: ['Внедорожник', 'Рамный', 'Блокировки'],
    },
    {
      id: 16,
      brand: 'Tank 500',
      year: 2023,
      mileage: '7 000 км',
      images: [
        'https://cdn.poehali.dev/projects/deafa282-ebc6-456a-9f07-ca01ef777b28/files/65a6bbdd-c293-4bab-9d56-49f6808014ef.jpg',
      ],
      features: ['Люкс', 'Пневмоподвеска', 'V6 3.0T'],
    },
  ];

  const testimonials = [
    {
      name: 'Алексей М.',
      text: 'Купил Toyota Camry - всё прошло отлично! Доставка точно в срок, автомобиль в идеальном состоянии.',
      rating: 5,
    },
    {
      name: 'Мария К.',
      text: 'Профессиональный подход, честные цены. Рекомендую всем, кто хочет качественный автомобиль из Китая!',
      rating: 5,
    },
    {
      name: 'Дмитрий В.',
      text: 'Виртуальный осмотр помог выбрать идеальный вариант. Спасибо команде за поддержку на всех этапах!',
      rating: 5,
    },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header activeSection={activeSection} onSectionChange={scrollToSection} />
      
      <HeroSection
        onConsultationOpen={() => setIsFormOpen(true)}
        onScrollToCatalog={() => scrollToSection('catalog')}
      />

      <CarCatalog
        cars={cars}
        selectedBrand={selectedBrand}
        priceRange={priceRange}
        onBrandChange={setSelectedBrand}
        onPriceRangeChange={setPriceRange}
        onConsultationOpen={() => setIsFormOpen(true)}
      />

      <AboutAndTestimonials
        testimonials={testimonials}
        onConsultationOpen={() => setIsFormOpen(true)}
      />

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogTrigger asChild>
          <button className="hidden">Open</button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl">Получить консультацию</DialogTitle>
            <DialogDescription>
              Оставьте свои контакты, и мы свяжемся с вами в ближайшее время
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="name">Ваше имя</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Иван Иванов"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Телефон</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder="+7 (999) 123-45-67"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Сообщение (необязательно)</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Интересует Toyota Camry..."
                rows={4}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
            >
              Отправить заявку
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
